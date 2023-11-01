import { useNavigate, useParams } from "react-router-dom";
import { Article } from "src/types";
import { OutputBlockData, OutputData } from "@editorjs/editorjs";
import { StickyNavbar } from "src/components/StickyNavbar";
import { AvatarCard } from "src/components/ProfileCard";
import { Button, Typography } from "@material-tailwind/react";
import useClient from "src/utils/useClient";
import { useQuery } from "react-query";
import Socials from "src/components/Socials";
import CardSkeleton from "src/components/CardSkeleton";
import useUserState from "src/utils/useUserState";
export default function ArticleView() {
  return (
    <>
      <StickyNavbar />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:px-12 lg:px-24 ">
        <ArticleContent />
      </div>
    </>
  );
}
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
        <Typography
          key={block.id}
          className="mb-1"
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        >
          {null}
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

function ArticleContent() {
  const { id } = useParams<{ id: string }>();
  const { get, baseUrl } = useClient();
  const userContext = useUserState();
  const nav = useNavigate();
  const getArticle = async () => {
    return get(`${baseUrl}/articles/${id}`);
  };

  const {
    data: article,
    error,
    isLoading,
  } = useQuery<Article[], Error>("getArticle/" + id, getArticle);

  if (isLoading)
    return (
      <div>
        <CardSkeleton removeBorder />
        <hr className="dark:border-cod-gray-900 my-8" />
        <CardSkeleton removeBorder />
        <CardSkeleton removeBorder />
      </div>
    );

  if (error || !article) return <div>There was an error: {error?.message}</div>;

  const outputData = JSON.parse(article[0].body || "{}") as OutputData;
  const articleDate = new Date(article[0].dateCreated || "");
  return (
    <div>
      <div className="pt-4">
        <Typography variant="h1" className="text-7xl">
          {article[0].title}
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

              <Typography variant="small" className="dark:text-white">
                {articleDate.toLocaleString("default", {
                  month: "long",
                })}{" "}
                {articleDate.getDate()} {articleDate.getFullYear()}
              </Typography>
              <div className="flex justify-start gap-4 p-0.5">
                <Socials color="text-light-blue-500" size="fa-lg" />
              </div>
            </div>
          </div>
        </AvatarCard>

        {(userContext?.isPreview || userContext?.isAuthenticated) && (
          <Button
            variant="text"
            size="sm"
            onClick={() => nav(`/articles/edit/${id}`)}
            className="-mb-4 mt-4 underline dark:text-white"
          >
            Edit Post
          </Button>
        )}
        <hr className="dark:border-cod-gray-900 my-8" />

        {outputData.blocks.map((block) => renderBlock(block))}
      </div>
    </div>
  );
}
