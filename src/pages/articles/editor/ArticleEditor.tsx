import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useClient from "src/utils/useClient";
import { useState } from "react";
import ActionButtons from "./ActionButtons";
import { useNavigate } from "react-router-dom";
import { StickyNavbar } from "src/components/StickyNavbar";

export default function ArticleEditor() {
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const editorRef = useRef<EditorJS | undefined>(undefined);

  const { id } = useParams<{ id: string }>();
  const { get, post, put, del, baseUrl } = useClient();

  const handleDelete = async () => {
    const [_, err] = await del(`${baseUrl}/articles/delete/${id}`);
    if (err) return;

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
  };

  const buildPayload = async () => {
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
    <>
      <StickyNavbar />
      <div className="mx-auto px-6 py-12 md:px-12 lg:px-24">
        <h1 className="mb-4 text-3xl font-bold">Create an Article</h1>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="text-md mb-2 block font-medium"
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="large-input"
            className="bg-darkestBlue block w-full rounded-lg border border-gray-300 p-4 px-10 text-lg focus:border-blue-500 focus:ring-blue-500 "
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="text-md mb-2 block font-medium ">
            Description
          </label>
          <textarea
            id="message"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="text-md bg-darkestBlue block w-full rounded-lg border border-gray-300 px-10 py-4 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Write a description here..."
          ></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="editor" className="text-md mb-2 block font-medium ">
            Body
          </label>
          <div
            id="editor"
            className=" bg-darkestBlue pointer-events-auto block h-96 w-full overflow-y-auto rounded-lg border py-4"
          />
        </div>

        <ActionButtons
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handlePublish={handlePublish}
        />
      </div>
    </>
  );
}
