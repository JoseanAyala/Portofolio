import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Article as TArticle } from "src/types";
import useClient from "src/utils/useClient";
import { OutputBlockData, OutputData } from "@editorjs/editorjs";

export default function ArticleView() {
  const { get, baseUrl } = useClient();
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<TArticle | undefined>();
  const outputData = JSON.parse(article?.body || "{}") as OutputData;

  const renderBlock = (block: OutputBlockData) => {
    switch (block.type) {
      case "header":
        return (
          <h2 key={block.id} className="mb-2 text-2xl font-bold">
            {block.data.text}
          </h2>
        );
      case "paragraph":
        return (
          <p key={block.id} className="mb-1">
            {block.data.text}
          </p>
        );
      case "list":
        return (
          <ul key={block.id} className="mb-2 list-inside list-disc">
            {block.data.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case "code":
        return (
          <pre
            key={block.id}
            className="mb-4 rounded-md bg-gray-900 p-4 text-white"
          >
            <code>{block.data.code}</code>
          </pre>
        );
      case "quote":
        return (
          <blockquote
            key={block.id}
            className="mb-4 border-l-4 border-gray-500 pl-4"
          >
            {block.data.text}
          </blockquote>
        );
      case "delimiter":
        return <hr key={block.id} className="my-8" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      const [res, err] = await get(`${baseUrl}/articles/${id}`);
      if (err || !res || res.length === 0) return;

      setArticle(res[0] as TArticle);
    };

    fetchArticle();
  }, []);

  return (
    <div className="mx-auto px-6 py-12 md:px-12 lg:px-24">
      {article ? (
        <div className="rounded-lg py-8">
          <h1 className="mb-2 text-3xl font-bold text-white">
            {article.title}
          </h1>
          <p className="mb-4  text-sm text-gray-100">
            Created: {article.dateCreated}
          </p>
          <p className="mb-4 text-gray-100">{article.description}</p>
          {outputData.blocks.map((block) => renderBlock(block))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
