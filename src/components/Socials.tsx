type props = {
  animate?: boolean;
  size?: string;
};
export default function Socials({ animate, size = "fa-2x" }: props) {
  const animation = `pointer-events-auto ${animate ? "animate-fadeRight" : ""}`;
  const contacts = [
    {
      href: "https://www.linkedin.com/in/joseanayala",
      ariaLabel: "LinkedIn Profile",
      icon: `fab fa-linkedin  ${size}`,
    },
    {
      href: "mailto:joseanluis2@gmail.com",
      ariaLabel: "Email",
      icon: `fas fa-envelope ${size}`,
    },
    {
      href: "https://github.com/joseanayala",
      ariaLabel: "GitHub Profile",
      icon: `fab fa-github ${size}`,
    },
  ];
  return (
    <>
      {contacts.map((contact, i) => (
        <a
          href={contact.href}
          target="_blank"
          aria-label={contact.ariaLabel}
          className={animation}
          key={i}
        >
          <i
            className={`${contact.icon} text-primary-500 transition-all ease-in-out hover:scale-110`}
          ></i>
        </a>
      ))}
    </>
  );
}
