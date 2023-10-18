import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect, useRef } from "react";

export default function ArticleEdit() {
  const editorRef = useRef<EditorJS | null>(null);

  editorRef.current?.save().then((outputData) => {
    console.log("ArticleEdit outputData", outputData);
  });

  console.log("editorRef", editorRef.current);
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
  });
  return (
    <div
      id="editor"
      className="max-w-screen bg-gray-100 pointer-events-auto min-h-screen text-darkestBlue"
    ></div>
  );
}
