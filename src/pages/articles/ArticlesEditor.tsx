import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useClient from "src/services/client";
import { useState } from "react";

export default function ArticleEditor() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const editorRef = useRef<EditorJS | undefined>(undefined);
  const nav = useNavigate();

  const { id } = useParams<{ id: string }>();
  const { get, post, put, del, baseUrl } = useClient();

  const gatherPayload = async () => {
    console.log(editorRef.current);
    debugger;
    await editorRef.current?.isReady;
    const outputData = await editorRef.current?.save();
    if (!outputData) return undefined;

    const payload = {
      Title: title,
      Description: description,
      Body: JSON.stringify(outputData),
    };

    return payload;
  };

  const handleEdit = async () => {
    const payload = await gatherPayload();
    if (!payload) return;

    const [_, err] = await put(`${baseUrl}/articles/edit/${id}`, payload);
    if (err) return;

    // TODO: Success banner.
  };
  const handleDelete = async () => {
    const [_, err] = await del(`${baseUrl}/articles/delete/${id}`);
    if (err) return;

    // TODO: Success banner.
    nav(`/articles`);
  };

  const handlePublish = async () => {
    const payload = await gatherPayload();
    if (!payload) return;

    const [res, err] = await post(`${baseUrl}/articles/create`, payload);
    if (err) return;

    nav(`/articles/${res.id}`);
  };

  useEffect(() => {
    const loadInitialData = async () => {
      let initialData: OutputData | undefined = undefined;

      if (id) {
        const [res] = await get(`${baseUrl}/articles/${id}`);
        if (res && res.length > 0) {
          setTitle(res[0].title);
          setDescription(res[0].description);
          const body = JSON.parse(res[0].body) as OutputData;
          initialData = body;
        }
      }

      editorRef.current = new EditorJS({
        inlineToolbar: true,
        holder: "editor",
        placeholder: "Write an awesome article!",
        tools: {
          header: Header,
        },
      });

      await editorRef.current.isReady;

      if (initialData) {
        initialData.blocks.forEach((block) => {
          editorRef.current?.blocks.insert(block.type, block.data);
        });
      }
    };

    loadInitialData();

    return () => {
      editorRef.current?.destroy();
    };
  }, [id]);

  return (
    <div className="mx-auto px-6 py-12 md:px-12 lg:px-24">
      <h1 className="mb-4 text-3xl font-bold text-white">Create an Article</h1>
      <div className="mb-6">
        <label
          htmlFor="large-input"
          className="text-md mb-2 block font-medium text-white"
        >
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="large-input"
          className="block w-full rounded-lg border border-gray-300 bg-white p-4 px-10 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-md mb-2 block font-medium text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="text-md block w-full rounded-lg border border-gray-300 bg-white px-10 py-4  text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Write a description here..."
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          htmlFor="editor"
          className="text-md mb-2 block font-medium text-white"
        >
          Body
        </label>
        <div
          id="editor"
          className=" pointer-events-auto block h-96 w-full overflow-y-auto rounded-lg bg-gray-100 py-4 text-black "
        />
      </div>

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
    </div>
  );
}
