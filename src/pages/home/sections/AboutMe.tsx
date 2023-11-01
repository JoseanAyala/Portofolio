import { Typography } from "@material-tailwind/react";
export default function AboutMe() {
  return (
    <section className="mb-12" aria-label="About Me">
      <Typography
        textGradient
        variant="h3"
        color="light-blue"
        className="mb-4 text-4xl font-bold tracking-tight dark:text-light-blue-300"
      >
        About Me
      </Typography>
      <Typography
        variant="lead"
        color="blue-gray"
        className="mb-4 font-normal dark:text-white"
      >
        In 2013, my passion for coding was ignited thanks to the Hour of Code
        initiative, and I've been on an exciting journey ever since. My primary
        mission is to continuously enhance my skills as a developer through
        coding adventures while creating cool products along the way.
      </Typography>
      <Typography
        variant="lead"
        color="blue-gray"
        className="font-normal dark:text-white"
      >
        Currently I'm a software engineer at{" "}
        <a
          className="pointer-events-auto underline hover:no-underline"
          href="https://granicus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Granicus
        </a>{" "}
        working on a GovTech software product that impacts millions of lives.
        I'm passionate about full stack development and I'm always looking for
        opportunities to learn and grow as a software engineer.
      </Typography>
    </section>
  );
}
