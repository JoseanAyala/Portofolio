import { Content } from "src/types";

export default function Experiences() {
  const experiences: Content[] = [
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

  const renderExperiences = () => {
    return experiences.map((exp: Content, expI) => (
      <li className="flex items-center justify-center py-4" key={expI}>
        <a
          href={exp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto "
        >
          <div
            className="grid grid-cols-4 rounded-xl p-4 transition-all ease-in-out hover:cursor-pointer
        hover:bg-white hover:bg-opacity-10 hover:shadow-neon"
          >
            <div className="text-md italic text-lightBlue">{exp.date}</div>
            <div className="col-span-3 flex flex-col items-start justify-start px-4">
              <div>
                <div className="text-xl font-bold text-lightBlue">
                  {exp.title}
                </div>
                <div className="mb-1 font-semibold text-lightBlue">
                  {exp.subTitle}
                </div>
              </div>
              <div>
                <span className="italic">{exp.description} </span>
                <div className="pt-2">
                  {exp.tags.map((tag, tagI) => (
                    <div
                      className="mb-2 mr-1 inline-block rounded-full border-2 border-solid border-highlight px-3 py-2"
                      key={tagI}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    ));
  };

  return (
    <section aria-label="Experience">
      <h3 className="font-highlight text-4xl font-bold text-lightBlue">
        Experience
      </h3>
      <ul>{renderExperiences()}</ul>
    </section>
  );
}
