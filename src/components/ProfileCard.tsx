import Socials from "src/components/Socials";

export default function ProfileCard() {
  return (
    <div className="overflow-hidden rounded-lg bg-neutral-900 shadow">
      <div className=" bg-secondary-700 h-[112px] w-full"></div>
      <div className="-mt-[88px] flex justify-center pt-2">
        <img
          className="h-44 w-44 rounded-full border-4 border-neutral-900 object-cover"
          src="/assets/profile.png"
          alt="Profile Image"
        />
      </div>
      <div className="px-6 py-4 text-center">
        <h3 className="text-xl font-semibold">Josean Ayala</h3>
        <p className="text-opacity-70">Software Engineer</p>
        <div
          className="flex items-center justify-center gap-4 
        pt-4 transition-all ease-in-out md:left-auto md:right-4 md:rounded-t-xl"
        >
          <Socials size="fa-lg" />
        </div>
      </div>
      <hr className="h-px border-0 bg-neutral-700"></hr>
      <div className="px-6 py-4">
        <span className="inline-block px-2 py-1 text-center font-light text-opacity-70">
          Experienced software engineer passionate about full stack development
          who thrives in collaborative environments and creates seamless
          solutions.
        </span>
      </div>
    </div>
  );
}
