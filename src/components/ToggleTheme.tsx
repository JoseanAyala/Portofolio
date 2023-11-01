import { useState, useEffect } from "react";
import { EDITOR_THEME } from "src/constants";

export default function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  const handleClick = () => {
    setIsDarkMode((prev: any) => {
      const newMode = !prev;
      localStorage.setItem("color-theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");

      Object.entries(EDITOR_THEME.DARK).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    } else {
      document.documentElement.classList.remove("dark");

      Object.entries(EDITOR_THEME.LIGHT).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  }, [isDarkMode]);

  return (
    <button
      type="button"
      className="rounded-lg p-2.5 text-sm text-black hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      aria-label="Toggle Mode"
      onClick={handleClick}
    >
      {isDarkMode ? (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      ) : (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
}
