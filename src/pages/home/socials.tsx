type props = {
  animate?: boolean;
};
export default function Socials({ animate }: props) {
  const animation = `pointer-events-auto ${animate ? "animate-fadeRight" : ""}`;
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
    <div className="flex items-center justify-start gap-4 pt-4">
      {contacts.map((contact, i) => (
        <a
          href={contact.href}
          target="_blank"
          aria-label={contact.ariaLabel}
          className={animation}
          key={i}
        >
          <i
            className={`${contact.icon} text-highlight transition-all ease-in-out hover:scale-110 hover:text-white`}
          ></i>
        </a>
      ))}
    </div>
  );
}
