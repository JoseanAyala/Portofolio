import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useClient from "src/utils/useClient";

type props = {
  buildPayload: () => Promise<any | undefined>;
};

export default function ActionButtons({ buildPayload }: props) {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const { post, put, del, baseUrl } = useClient();

  const handleDelete = async () => {
    const [_, err] = await del(`${baseUrl}/articles/delete/${id}`);
    if (err) return;

    // TODO: Success banner.
    nav(`/articles`);
  };

  const handlePublish = async () => {
    const payload = await buildPayload();
    if (!payload) return;

    const [res, err] = await post(`${baseUrl}/articles/create`, payload);
    if (err) return;

    nav(`/articles/${res.id}`);
  };
  const handleEdit = async () => {
    const payload = await buildPayload();
    if (!payload) return;

    const [_, err] = await put(`${baseUrl}/articles/edit/${id}`, payload);
    if (err) return;

    // TODO: Success banner.
  };

  return (
    <div className="flex justify-end">
      {id ? (
        <>
          <button
            onClick={handleDelete}
            type="button"
            className="hover: mr-2 inline-flex items-center rounded-lg bg-black px-3 py-2 text-center
     text-sm font-medium text-red-500  transition-all ease-in-out hover:bg-red-700
     hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            Delete
          </button>
          <button
            onClick={handleEdit}
            type="button"
            className="inline-flex items-center rounded-lg bg-grey  px-3 py-2 text-center text-sm font-medium
     text-white transition-all ease-in-out  hover:bg-white hover:text-black focus:outline-none focus:ring-2
     focus:ring-white"
          >
            Edit
          </button>
        </>
      ) : (
        <button
          onClick={handlePublish}
          type="button"
          className="inline-flex items-center rounded-lg bg-highlight px-3 py-2 text-center text-sm font-medium
     text-white transition-all ease-in-out  hover:bg-white hover:text-black focus:outline-none focus:ring-2
     focus:ring-white"
        >
          Publish
        </button>
      )}
    </div>
  );
}
