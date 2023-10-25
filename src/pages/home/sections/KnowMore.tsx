import { Link } from "react-router-dom";

export default function KnowMore() {
  return (
    <section className="mb-12" aria-label="Know more">
      <h3 className="font-highlight mb-4 text-4xl font-bold text-lightBlue">
        Want to know more?
      </h3>
      <Link
        to={"/articles"}
        className="pointer-events-auto flex w-full items-center rounded-full font-bold text-lightBlue underline hover:no-underline"
      >
        <span>Check out my articles</span>
        <svg
          className="ml-2 h-4 w-4"
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
    </section>
  );
}
