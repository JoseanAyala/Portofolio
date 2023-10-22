import { useState, useEffect, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!articles) return <div>Empty</div>;

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
      {articles.map((article) => (
        <li key={article.id}>
          <div className="max-w-full rounded-lg border border-gray-700 bg-gray-800 shadow">
            {/* <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a> */}
            <div className="p-5">
              <a href="#">
                <h2 className="tracking-tighttext-white mb-2 text-2xl font-bold">
                  {article.title}
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-highlight px-3 py-2 text-center text-sm font-medium text-white  hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
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
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Articles = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl p-6 md:px-12 md:py-8 lg:px-24 ">
      <h1 className="font-highlight mb-4 text-5xl font-bold text-lightBlue">
        Articles
      </h1>
      <AllArticles />
    </div>
  );
};

export default Articles;
