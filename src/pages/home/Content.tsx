import Experiences from "./sections/Experiences";
import AboutMe from "./sections/AboutMe";

export default function Content() {
  return (
    <main className="animate-fadeUp pt-12 lg:w-full lg:pb-16 lg:pt-24">
      <AboutMe />
      <Experiences />
    </main>
  );
}
