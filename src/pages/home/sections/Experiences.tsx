import { Content } from "src/types";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function SimpleCard({ experience }: { experience: Content }) {
  return (
    <Card
      shadow
      className="w-full bg-blue-gray-50 transition-all hover:bg-light-blue-100"
    >
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-1">
          {experience.title}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {experience.subTitle}
        </Typography>
        <Typography color="blue-gray">{experience.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {experience.tags.map((tag, tagI) => (
          <Typography
            color="blue-gray"
            className="mb-2 mr-1 inline-block rounded-full border-2 border-solid border-light-blue-700 px-3 py-2 text-sm"
            key={tagI}
          >
            {tag}
          </Typography>
        ))}
      </CardFooter>
    </Card>
  );
}

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
          <SimpleCard experience={exp}></SimpleCard>
        </a>
      </li>
    ));
  };

  return (
    <section aria-label="Experience" className="mb-6">
      <Typography
        textGradient
        variant="h3"
        color="light-blue"
        className="text-4xl font-bold tracking-tight"
      >
        Experience
      </Typography>
      <ul>{renderExperiences()}</ul>
    </section>
  );
}
