import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect, useRef } from "react";

export default function ArticleEditor() {
  const editorRef = useRef<EditorJS | undefined>(undefined);

  editorRef.current?.save().then((outputData) => {
    console.log("ArticleEdit outputData", outputData);
  });

  useEffect(() => {
    console.log(editorRef.current?.blocks);
  }, [editorRef.current?.blocks]);

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: "editor",
      autofocus: true,
      tools: {
        header: Header,
      },
    });

    return () => {
      editorRef.current?.destroy();
    };
  }, []);

  return (
    <div
      id="editor"
      className="max-w-screen pointer-events-auto min-h-screen bg-gray-100 text-darkestBlue"
    ></div>
  );
}
