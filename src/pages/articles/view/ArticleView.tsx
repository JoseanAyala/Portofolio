import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Article as TArticle } from "src/types";
import useClient from "src/utils/useClient";
import { OutputBlockData, OutputData } from "@editorjs/editorjs";
import { StickyNavbar } from "src/components/StickyNavbar";
import { AvatarCard } from "src/components/ProfileCard";
import { Typography } from "@material-tailwind/react";
import Socials from "src/components/Socials";

export default function ArticleView() {
  const { get, baseUrl } = useClient();
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<TArticle | undefined>();
  const outputData = JSON.parse(article?.body || "{}") as OutputData;

  const renderBlock = (block: OutputBlockData) => {
    switch (block.type) {
      case "header":
        return (
          <Typography
            variant="h2"
            as={"h2"}
            key={block.id}
            className="mb-2 text-2xl font-bold"
          >
            {block.data.text}
          </Typography>
        );
      case "paragraph":
        return (
          <Typography key={block.id} className="mb-1">
            {block.data.text}
          </Typography>
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

  const articleDate = new Date(article?.dateCreated || "");

  return (
    <>
      <StickyNavbar />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:px-12 lg:px-24 ">
        {article ? (
          <div className="rounded-lg pt-4">
            <Typography variant="h1" className="text-7xl">
              {article.title}
            </Typography>

            <AvatarCard size="xl" padding="p-0">
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex flex-col items-start">
                  <Typography
                    variant="h5"
                    as="div"
                    className="text-blue-gray-900 dark:text-white"
                  >
                    Josean Ayala
                  </Typography>

                  <Typography variant="small">
                    {articleDate.toLocaleString("default", {
                      month: "long",
                    })}{" "}
                    {articleDate.getDate()} {articleDate.getFullYear()}
                  </Typography>
                  <div className="flex justify-start gap-4 p-0.5">
                    <Socials size="fa-lg" />
                  </div>
                </div>
              </div>
            </AvatarCard>

            <hr className="my-8" />

            {outputData.blocks.map((block) => renderBlock(block))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
