import { useState, useRef, useEffect } from "react";
import ActionButtons from "./ActionButtons";
import { Article } from "src/types";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";

export default function ArticleForm({
  articleData,
  isLoading,
}: {
  articleData?: Article;
  isLoading: boolean;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const editorRef = useRef<EditorJS | undefined>(undefined);

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
    async function handleAsyncInit() {
      if (isLoading) return;

      editorRef.current = new EditorJS({
        inlineToolbar: true,
        holder: "editor",
        placeholder: "Write an awesome article!",
        tools: {
          header: Header,
        },
      });

      await editorRef.current.isReady;

      if (!articleData) return;
      setTitle(articleData.title);
      setDescription(articleData.description);

      const editorJsData = JSON.parse(articleData.body) as OutputData;
      editorJsData.blocks.forEach((block) => {
        editorRef.current?.blocks.insert(block.type, block.data);
      });
    }
    handleAsyncInit();
  }, [articleData, isLoading]);

  return (
    <form className={isLoading ? "pointer-events-none" : ""}>
      <div className="mb-6">
        <label htmlFor="title-input" className="text-md mb-2 block font-medium">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title-input"
          placeholder="Write a Title here..."
          className="block w-full rounded-lg border border-gray-300 p-4 px-10 text-lg focus:border-blue-500 focus:ring-blue-500 "
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description-input"
          className="text-md mb-2 block font-medium "
        >
          Description
        </label>
        <textarea
          id="description-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="text-md block w-full rounded-lg border border-gray-300 px-10 py-4 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Write a description here..."
        ></textarea>
      </div>
      <div className="mb-6">
        <div id="editorLabel" className="text-md mb-2 block font-medium ">
          Body
        </div>
        <div
          id="editor"
          aria-labelledby="editorLabel"
          className="pointer-events-auto block h-96 w-full overflow-y-auto rounded-lg border py-4"
        />
      </div>

      <ActionButtons buildPayload={buildPayload} />
    </form>
  );
}
