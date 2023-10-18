import { Content } from "src/types";

type props = {
  experiences: Content[];
};

export default function Experiences({ experiences }: props) {
  return (
    <ul>
      {experiences.map((exp: Content, expI) => (
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
      ))}
    </ul>
  );
}
