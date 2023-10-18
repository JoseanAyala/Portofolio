export default function Hero() {
  const contacts = [
    {
      href: "https://www.linkedin.com/in/joseanayala",
      ariaLabel: "LinkedIn Profile",
      icon: "fab fa-linkedin fa-2x",
    },
    {
      href: "mailto:joseanluis2@gmail.com",
      ariaLabel: "Email",
      icon: "fas fa-envelope fa-2x",
    },
    {
      href: "https://github.com/joseanayala",
      ariaLabel: "GitHub Profile",
      icon: "fab fa-github fa-2x",
    },
  ];

  return (
    <header className="animate-fadeUp lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:animate-fadeDown lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col items-start">
        <img
          src="https://avatars.githubusercontent.com/u/36864389?v=4"
          alt="Profile Photo"
          className="mb-4 h-64 w-64 rounded-full border-4 border-solid border-lightBlue"
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-highlight mb-3 text-4xl font-bold text-lightBlue">
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
        {contacts.map((contact, i) => (
          <a
            href={contact.href}
            target="_blank"
            aria-label={contact.ariaLabel}
            className="animate-fadeRight pointer-events-auto"
            key={i}
          >
            <i
              className={`${contact.icon} text-highlight transition-all ease-in-out hover:scale-110 hover:text-white`}
            ></i>
          </a>
        ))}
      </div>
    </header>
  );
}
