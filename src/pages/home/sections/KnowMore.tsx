import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

export default function KnowMore() {
  return (
    <section className="mb-12" aria-label="Know more">
      <Link
        to={"/articles"}
        className="group pointer-events-auto flex w-full flex-col items-start justify-center rounded-3xl bg-blue-gray-50 p-6 hover:bg-light-blue-100"
      >
        <div className="item-center flex">
          <Typography color="blue-gray" className="font-normal">
            Check out my articles
          </Typography>
          <svg
            className="ml-2 mt-1 h-4 w-4 text-blue-gray-700"
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
        </div>
        <Typography
          variant="h3"
          color="light-blue"
          className="text-2xl font-bold tracking-tight group-hover:text-light-blue-700"
          textGradient
        >
          Want to know more?
        </Typography>
      </Link>
    </section>
  );
}
