import Experiences from "./Experiences";
import { Link } from "react-router-dom";
import { Content as ContentType } from "../../../types";

export default function Content() {
  const experiences: ContentType[] = [
    {
      title: "Software Engineer 3",
      subTitle: "Granicus",
      href: "https://granicus.com/solution/govservice/",
      date: "2020 - Present",
      description: `Developed and maintained a highly available B2B SaaS
    product with a potential to impact millions of users,
    while effectively collaborating with cross-functional
    teams. Provided leadership by steamlining the
    onboarding process of new employees by engaging in
    knowledge transfers, code reviews and personalized
    one-on-ones.`,
      tags: ["React", "JavaScript", "C#", "ArcGIS", "React MUI", "CSS"],
    },
    {
      title: "Software Development Intern",
      subTitle: "Rock Solid Technologies Inc.",
      href: "https://www.rocksolid.com/use-cases/utility-software-erp",
      date: "2019 - 2020",
      description: `Created a robust product tracking solution in
    alignment with the federal regulations of the Drug
    Supply Chain Security Act (DSCSA).`,
      tags: ["C#", "ASP.NET", "MSSQL", "Microsoft Dynamics"],
    },
  ];

  return (
    <main className="animate-fadeUp pt-12 lg:w-1/2 lg:pb-16 lg:pt-24">
      <section className="mb-12" aria-label="About Me">
        <h3 className="font-highlight mb-4 text-4xl font-bold text-lightBlue">
          About Me
        </h3>
        <p className="mb-4">
          In 2013, my passion for coding was ignited thanks to the Hour of Code
          initiative, and I've been on an exciting journey ever since. My
          primary mission is to continuously enhance my skills as a developer
          through coding adventures while creating cool products along the way.
        </p>
        <p className="mb-4">
          Currently I'm a software engineer at{" "}
          <a
            className="pointer-events-auto text-lightBlue underline hover:no-underline"
            href="https://granicus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Granicus
          </a>{" "}
          working on a GovTech software product that impacts millions of lives.
          I'm passionate about full stack development and I'm always looking for
          opportunities to learn and grow as a software engineer.
        </p>
      </section>

      <section aria-label="Experience">
        <h3 className="font-highlight text-4xl font-bold text-lightBlue">
          Experience
        </h3>
        <Experiences experiences={experiences} />
      </section>
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
    </main>
  );
}
