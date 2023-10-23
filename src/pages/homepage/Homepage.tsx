import Hero from "./components/Hero";
import Content from "./components/Content";

export default function Homepage() {
  return (
    <div className="pointer-events-none max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="z-10 lg:flex lg:justify-between lg:gap-4">
        <Hero />
        <Content />
      </div>
    </div>
  );
}
