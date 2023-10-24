import { Link } from "react-router-dom";
import { Article } from "src/types";
import Pagination from "./Pagination";
import { useState } from "react";

type AllArticlesProps = {
  articleList: Article[];
};

const AllArticles = ({ articleList }: AllArticlesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageSize = 6;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = articleList.slice(startIndex, endIndex);

  // TODO: ADD EDIT BUTTON NEXT TO TITLE
  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {currentArticles.map((article) => (
          <li key={article.id}>
            <div className="max-w-full rounded-lg border border-gray-700">
              <div className="p-5">
                <Link to={`/articles/${article.id}`}>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {article.title}
                  </h2>
                </Link>
                <p className="mb-3 font-normal text-white">
                  {article.description}
                </p>
                <Link
                  to={`/articles/${article.id}`}
                  className="inline-flex items-center rounded-lg bg-highlight px-3 py-2 text-center text-sm font-medium
                   text-white transition-all ease-in-out  hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Read more
                  <svg
                    className="ml-2 h-3.5 w-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
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
};

export default AllArticles;
