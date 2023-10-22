import { useState, useEffect } from "react";
import useClient from "src/services/client";
import { Articles as ArticlesType } from "src/types";

const AllArticles = () => {
  const [articles, setArticles] = useState<ArticlesType[] | undefined>(
    undefined,
  );
  const { get, baseUrl } = useClient();

  useEffect(() => {
    const getArticles = async () => {
      const [res, err] = await get(`${baseUrl}/articles`);
      if (err) return;
      setArticles(res as ArticlesType[]);
    };

    getArticles();
  }, []);

  if (!articles) return <div>Empty</div>;

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <h2>{article.title}</h2>
        </li>
      ))}
    </ul>
  );
};

const Articles = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <h1 className="">All Articles</h1>
      <AllArticles />
    </div>
  );
};

export default Articles;
