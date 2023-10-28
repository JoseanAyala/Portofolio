import { useState, useEffect } from "react";
import useClient from "src/utils/useClient";
import { Article } from "src/types";
import ArticleGrid from "./ArticleList";
import ProfileCard from "src/components/ProfileCard";
import { StickyNavbar } from "src/components/StickyNavbar";

export default function Articles() {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);
  const { get, baseUrl } = useClient();

  useEffect(() => {
    const getArticles = async () => {
      const [res, err] = await get(`${baseUrl}/articles`);
      if (err) return;
      setArticles(res as Article[]);
    };

    getArticles();
  }, []);

  return (
    <>
      <StickyNavbar />
      <div className="container mx-auto p-4 md:px-12 md:py-8 lg:flex lg:gap-8 lg:p-8 lg:px-24">
        <div className="mx-auto flex w-full justify-center lg:sticky lg:top-0 lg:w-1/3 lg:flex-col lg:justify-between">
          <ProfileCard />
        </div>
        <div className="w-full">
          {articles && articles.length > 0 && (
            <ArticleGrid articleList={articles} />
          )}
        </div>
      </div>
    </>
  );
}
