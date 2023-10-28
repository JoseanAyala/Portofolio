import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { Article } from "src/types";

interface Props {
  articleList: Article[];
}

function CreateButton() {
  return (
    <Link
      to={"/articles/create"}
      className="group pointer-events-auto mb-4 flex w-full flex-col items-start justify-center rounded-full bg-blue-gray-50 from-light-blue-50 to-blue-100 p-6 transition-all ease-in-out hover:bg-gradient-to-r"
    >
      <div className="flex items-center justify-center">
        <i className="fas fa-edit fa-lg mr-4"></i>

        <Typography variant="lead" className="font-normal">
          Create a new article
        </Typography>
      </div>
    </Link>
  );
}

export default function ArticleGrid({ articleList }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentArticles, setCurrentArticles] = useState<Article[]>([]);
  const pageSize = 6;

  useEffect(() => {
    setCurrentArticles(articleList.slice(0, pageSize));
  }, [articleList]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newArticles = articleList.slice(startIndex, endIndex);
    setCurrentArticles((prevArticles) => [...prevArticles, ...newArticles]);
  }, [currentPage, articleList]);

  return (
    <div>
      <CreateButton />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-1">
        {currentArticles.map((article) => (
          <li key={article.id}>
            <div className="bg-neutral-900 max-w-full rounded-lg p-4 shadow">
              <div className="p-5">
                <div className="flex items-center justify-start">
                  <Link to={`/articles/${article.id}`}>
                    <h2 className="mb-2 inline-block text-2xl font-bold tracking-tight">
                      {article.title}
                    </h2>
                  </Link>

                  <Link to={`/articles/edit/${article.id}`}>
                    <i className="fas fa-pencil-alt -translate-y-1 px-2 hover:scale-110"></i>
                  </Link>
                </div>
                <p className="mb-3 font-normal  text-opacity-70">
                  {article.description}
                </p>
                <Link to={`/articles/${article.id}`}>
                  <Button
                    variant="gradient"
                    className="flex items-center gap-2 bg-gradient-to-r from-light-blue-400 to-blue-500"
                  >
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
