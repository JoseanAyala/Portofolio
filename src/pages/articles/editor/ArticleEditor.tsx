import { useParams } from "react-router-dom";
import useClient from "src/utils/useClient";
import { StickyNavbar } from "src/components/StickyNavbar";
import { useQuery } from "react-query";
import ArticleForm from "./ArticleForm";
import { useLocation } from "react-router-dom";
import { Article } from "src/types";
import { Typography } from "@material-tailwind/react";

export default function ArticleEditor() {
  const { get, baseUrl } = useClient();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const { data: posts, isLoading } = useQuery<Article[], Error>(
    location.pathname,
    () => get(`${baseUrl}/articles/${id}`),
  );

  return (
    <>
      <StickyNavbar />
      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-24">
        <Typography variant="h1" className="mb-4">
          {id ? "Edit Article" : "Create an Article"}
        </Typography>

        <ArticleForm articleData={posts?.[0]} isLoading={isLoading} />
      </div>
    </>
  );
}
