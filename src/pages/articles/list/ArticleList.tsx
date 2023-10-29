import { Article } from "src/types";
import useClient from "src/utils/useClient";
import { useQuery } from "react-query";
import ArticleInfiniteScroll from "./ArticleInfiniteScroll";
import CardSkeleton from "src/components/CardSkeleton";
import { useEffect, useState } from "react";
import PopupAlert from "src/components/PopupAlert";
export default function ArticleSection() {
  const { get, baseUrl } = useClient();
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const getArticles = async () => {
    return get(`${baseUrl}/articles`);
  };

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Article[], Error>("getArticles", getArticles);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setShowLoadingMessage(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading)
    return (
      <>
        {showLoadingMessage && (
          <PopupAlert
            open={showLoadingMessage}
            setOpen={setShowLoadingMessage}
            color="gray"
            message="Delayed Response Due to Server Sleep Mode (Free Tier) 🤭"
            animate={{
              mount: { y: 0 },
              unmount: { y: -100 },
            }}
          />
        )}

        {Array(4)
          .fill(0)
          .map((_, i) => (
            <CardSkeleton key={i} delay={`delay-${i * 100}`} />
          ))}
      </>
    );

  if (error) return <div>There was an error: {error.message}</div>;

  return <ArticleInfiniteScroll articleList={posts} />;
}
