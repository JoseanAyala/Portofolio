import Socials from "../../components/Socials";

export default function Hero() {
  return (
    <header className="animate-fadeUp lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:animate-fadeDown lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col items-start">
        <img
          src="/assets/profile.png"
          alt="Profile Photo"
          className="border-secondary-100 mb-4 h-64 w-64 rounded-full border-4 object-cover"
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-secondary-100 mb-3 text-4xl font-bold tracking-tight">
            I'm Josean Ayala,
          </h1>
          <h2 className="text-md max-w-96">
            an experienced software engineer passionate about full stack
            development who thrives in collaborative environments and creates
            seamless solutions.
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-start gap-4 pt-4">
        <Socials animate />
      </div>
    </header>
  );
}
