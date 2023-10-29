import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";

type props = {
  handlePublish: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
};

export default function ActionButtons({
  handlePublish,
  handleEdit,
  handleDelete,
}: props) {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex justify-end gap-2">
      {id ? (
        <>
          <Button
            variant="text"
            type="button"
            className="text-red-700"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button onClick={handleEdit} type="button">
            Update
          </Button>
        </>
      ) : (
        <Button onClick={handlePublish} type="button">
          Publish
        </Button>
      )}
    </div>
  );
}
