import { Article } from "src/types";
import useClient from "src/utils/useClient";
import { useQuery } from "react-query";
import ArticleInfiniteScroll from "./ArticleInfiniteScroll";
import CardSkeleton from "src/components/CardSkeleton";

export default function ArticleSection() {
  const { get, baseUrl } = useClient();
  const getArticles = async () => {
    return get(`${baseUrl}/articles`);
  };

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Article[], Error>("getArticles", getArticles);

  if (isLoading)
    return Array(4)
      .fill(0)
      .map((_, i) => <CardSkeleton key={i} delay={`delay-${i * 100}`} />);

  if (error) return <div>There was an error: {error.message}</div>;

  return <ArticleInfiniteScroll articleList={posts} />;
}
