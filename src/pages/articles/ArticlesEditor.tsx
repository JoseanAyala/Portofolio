import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect, useRef } from "react";

export default function ArticleEditor() {
  const editorRef = useRef<EditorJS | undefined>(undefined);

  useEffect(() => {
    console.log(editorRef.current?.blocks);
  }, [editorRef.current?.blocks]);

  useEffect(() => {
    editorRef.current = new EditorJS({
      // data

      inlineToolbar: true,
      holder: "editor",
      placeholder: "Write an awesome article!",
      tools: {
        header: Header,
      },
    });

    return () => {
      editorRef.current?.destroy();
    };
  }, []);

  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="large-input"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="large-input"
          className="sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          rows={4}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Write a description here..."
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          htmlFor="editor"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Body
        </label>
        <div
          id="editor"
          className=" pointer-events-auto block h-96 w-full overflow-y-auto rounded-lg bg-gray-100 py-4 text-darkestBlue ring-1 ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
      <div
        className="flex justify-end"
        onClick={() => {
          editorRef.current?.save().then((outputData) => {
            console.log("ArticleEdit outputData", outputData);
          });
        }}
      >
        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-highlight px-3 py-2 text-center text-sm font-medium text-white transition-all ease-in-out  hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
