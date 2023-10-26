import { useState, useEffect } from "react";
import useClient from "src/utils/useClient";
import { Article } from "src/types";
import ArticleGrid from "./ArticleGrid";
import Socials from "src/components/Socials";
import ProfileCard from "src/components/ProfileCard";

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
    <div className="grid grid-cols-3 gap-6 p-6 md:px-12 md:py-8 lg:px-24">
      <div>
        <ProfileCard></ProfileCard>
      </div>
      <div className="col-span-2">
        {articles && articles.length > 0 && (
          <ArticleGrid articleList={articles} />
        )}
        {/* <div
          className="fixed bottom-0 left-0 right-0 flex items-center justify-around gap-4 bg-neutral-800
        p-4 transition-all ease-in-out md:left-auto md:right-4 md:rounded-t-xl"
        >
          <Socials />
        </div> */}
      </div>
    </div>
  );
}
