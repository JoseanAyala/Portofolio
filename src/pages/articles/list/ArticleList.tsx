import { Article } from "src/types";
import useClient from "src/utils/useClient";
import { useQuery } from "react-query";
import ArticleInfiniteScroll from "./ArticleInfiniteScroll";
import CardSkeleton from "src/components/CardSkeleton";
import { useEffect, useState } from "react";
import PopupAlert from "src/components/PopupAlert";
export default function ArticleSection() {
  const { get, baseUrl } = useClient();
  const [showLoadingMessage, setShowLoadingMessage] = useState(true);
  const getArticles = async () => {
    return get(`${baseUrl}/articles`);
  };

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Article[], Error>("getArticles", getArticles);

  useEffect(() => {
    if (!isLoading) setShowLoadingMessage(false);

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
            autoClose={false}
            color="gray"
            message="Apologies for the delay. Response time may be slower due to free-tier server, hang tight. 🤭"
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
