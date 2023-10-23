import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Article as TArticle } from "src/types";
import useClient from "src/services/client";

const Article = () => {
  const { get, baseUrl } = useClient();
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<TArticle | undefined>();
  console.log(article);

  useEffect(() => {
    const fetchArticle = async () => {
      const [res, err] = await get(`${baseUrl}/articles/${id}`);
      if (err || !res || res.length === 0) return;

      setArticle(res[0] as TArticle);
    };

    fetchArticle();
  }, []);

  return (
    <div className="container mx-auto">
      {article ? (
        <div className="py-8">
          <h1 className="mb-4 text-3xl font-bold text-white">
            {article.title}
          </h1>
          <p className="mb-2 text-gray-500">{article.dateCreated}</p>
          <p className="mb-4 text-gray-500">{article.description}</p>
          <div>{article.body}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Article;
