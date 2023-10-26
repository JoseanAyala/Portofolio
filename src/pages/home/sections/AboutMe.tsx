export default function AboutMe() {
  return (
    <section className="mb-12" aria-label="About Me">
      <h3 className="text-secondary-100 mb-4 text-4xl font-bold tracking-tight">
        About Me
      </h3>
      <p className="mb-4">
        In 2013, my passion for coding was ignited thanks to the Hour of Code
        initiative, and I've been on an exciting journey ever since. My primary
        mission is to continuously enhance my skills as a developer through
        coding adventures while creating cool products along the way.
      </p>
      <p className="mb-4">
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
      </p>
    </section>
  );
}
