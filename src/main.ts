import { Experience } from "./types";

const experience: Experience[] = [
  {
    title: "Software Engineer 3",
    company: "Granicus",
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
    company: "Rock Solid Technologies Inc.",
    href: "https://www.rocksolid.com/use-cases/utility-software-erp",
    date: "2019 - 2020",
    description: `Created a robust product tracking solution in
    alignment with the federal regulations of the Drug
    Supply Chain Security Act (DSCSA).`,
    tags: ["C#", "ASP.NET", "MSSQL", "Microsoft Dynamics"],
  },
];

const experienceTemplate = (exp: Experience) =>
  `<a
    href="${exp.href}"
    target="_blank"
    rel="noopener noreferrer"
    class="pointer-events-auto"
  >
    <div
      class="grid grid-cols-4 rounded-xl p-4 hover:cursor-pointer hover:bg-white hover:bg-opacity-10 hover:shadow-neon"
    >
      <div class="text-md italic text-lightBlue">${exp.date}</div>
      <div class="col-span-3 flex flex-col items-start justify-start px-4">
        <div>
          <div class="text-xl font-bold text-lightBlue">${exp.title}</div>
          <div class="mb-1 font-semibold text-lightBlue">${exp.company}</div>
        </div>
        <div>
          <span class="italic"> ${exp.description} </span>
          <div class="pt-2">
            ${exp.tags
              .map(
                (tag) =>
                  `<div class="mb-2 mr-1 inline-block rounded-full border-2 border-solid border-highlight px-3 py-2">${tag}</div>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </a>`;

function renderExperience(items: Experience[]): void {
  const container = document.getElementById("experiences");
  if (!container) return;

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("flex", "items-center", "justify-center", "py-4");
    listItem.innerHTML = experienceTemplate(item);
    container.appendChild(listItem);
  });
}

window.onload = () => {
  renderExperience(experience);
};
