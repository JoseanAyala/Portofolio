import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import useClient from "src/utils/useClient";
import { useState } from "react";
import PopupAlert from "src/components/PopupAlert";
import { useMutation } from "react-query";
type Payload =
  | {
      Title: string;
      Description: string;
      Body: string;
    }
  | undefined;

type props = {
  buildPayload: () => Promise<Payload>;
};

type errorProps = {
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function ActionButtons({ buildPayload }: props) {
  const { id } = useParams<{ id: string }>();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <div className="my-2 h-16">
        <PopupAlert
          color="red"
          variant="filled"
          open={showError}
          setOpen={setShowError}
          message={errorMessage}
        />
      </div>
      <div className="flex justify-end gap-2">
        {id ? (
          <>
            <DeleteButton
              setShowError={setShowError}
              setErrorMessage={setErrorMessage}
            />
            <UpdateButton
              buildPayload={buildPayload}
              setShowError={setShowError}
              setErrorMessage={setErrorMessage}
            />
          </>
        ) : (
          <PublishButton
            buildPayload={buildPayload}
            setShowError={setShowError}
            setErrorMessage={setErrorMessage}
          />
        )}
      </div>
    </>
  );
}

const PublishButton = ({
  buildPayload,
  setShowError,
  setErrorMessage,
}: props & errorProps) => {
  const nav = useNavigate();
  const { post, baseUrl } = useClient();

  const mutation = useMutation({
    mutationFn: (payload: Payload) =>
      post(`${baseUrl}/articles/create`, payload),
    onSuccess: (id) => {
      nav(`/articles/${id}`);
    },
    onError: () => {
      setShowError(true);
      setErrorMessage(
        "There was an error publishing your article. Please try again.",
      );
    },
  });

  const handleClick = async () => {
    const payload = await buildPayload();
    if (!payload) return;
    mutation.mutate(payload);
  };

  return (
    <Button onClick={handleClick} type="button">
      Publish
    </Button>
  );
};

const UpdateButton = ({
  buildPayload,
  setShowError,
  setErrorMessage,
}: props & errorProps) => {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const { put, baseUrl } = useClient();

  const mutation = useMutation({
    mutationFn: (payload: Payload) =>
      put(`${baseUrl}/articles/edit/${id}`, payload),
    onSuccess: (id) => {
      nav(`/articles/${id}`);
    },
    onError: () => {
      setShowError(true);
      setErrorMessage(
        "There was an error updating your article. Please try again.",
      );
    },
  });

  const handleClick = async () => {
    const payload = await buildPayload();
    if (!payload) return;
    mutation.mutate(payload);
  };

  return (
    <Button onClick={handleClick} type="button">
      Update
    </Button>
  );
};

const DeleteButton = ({ setShowError, setErrorMessage }: errorProps) => {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const { del, baseUrl } = useClient();

  const mutation = useMutation({
    mutationFn: () => del(`${baseUrl}/articles/delete/${id}`),
    onSuccess: () => {
      nav(`/articles`);
    },
    onError: () => {
      setShowError(true);
      setErrorMessage(
        "There was an error deleting your article. Please try again.",
      );
    },
  });

  const handleClick = async () => {
    mutation.mutate();
  };

  return (
    <Button
      variant="text"
      type="button"
      onClick={handleClick}
      className="text-red-700"
    >
      Delete
    </Button>
  );
};
