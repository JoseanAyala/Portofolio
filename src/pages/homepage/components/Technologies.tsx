export default function Technologies() {
  return (
    <ul id="technologies" className="flex items-center justify-around">
      <li className="flex flex-col items-center justify-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React Logo"
          className="h-16 w-16 object-contain"
        />
        <p className="pt-2 text-lg font-medium text-white">React</p>
      </li>
      <li className="flex flex-col items-center justify-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript Logo"
          className="h-16 w-16 object-contain"
        />
        <p className="pt-2 text-lg font-medium text-white">TypeScript</p>
      </li>
      <li className="flex flex-col items-center justify-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          alt="Tailwind Logo"
          className="h-16 w-16 object-contain"
        />
        <p className="pt-2 text-lg font-medium text-white">Tailwind CSS</p>
      </li>
      <li className="flex flex-col items-center justify-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
          alt=".NET Logo"
          className="h-16 w-16 object-contain"
        />
        <p className="pt-2 text-lg font-medium text-white">.NET</p>
      </li>
    </ul>
  );
}
