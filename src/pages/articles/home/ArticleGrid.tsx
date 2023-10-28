import { Link } from "react-router-dom";
import { Article } from "src/types";
import Pagination from "src/components/Pagination";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

type props = {
  articleList: Article[];
};

export default function AllArticles({ articleList }: props) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageSize = 6;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = articleList.slice(startIndex, endIndex);

  return (
    <div>
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
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={articleList.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
