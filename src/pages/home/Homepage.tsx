import Hero from "./Hero";
import Content from "./Content";
import { StickyNavbar } from "src/components/StickyNavbar";
export default function Homepage() {
  return (
    <>
      <StickyNavbar />
      <div className="pointer-events-none px-6 py-12 lg:container md:px-12 md:py-20 lg:mx-auto lg:py-0">
        <div className="z-10 lg:flex lg:justify-between lg:gap-10">
          <Hero />
          <Content />
        </div>
      </div>
    </>
  );
}
