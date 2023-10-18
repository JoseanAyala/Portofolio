import { createReactEditorJS } from "react-editor-js";

export default function ArticleEdit() {
  const ReactEditorJS = createReactEditorJS();

  return (
    <ReactEditorJS
      defaultValue={{
        time: 1635603431943,
        blocks: [
          {
            id: "sheNwCUP5A",
            type: "header",
            data: {
              text: "Editor.js",
              level: 2,
            },
          },
        ],
      }}
      holder="custom"
    >
      <div
        id="custom"
        className="pointer-events-auto min-h-screen max-w-screen-xl bg-white text-black"
      />
    </ReactEditorJS>
  );
}
