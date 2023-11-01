import React, { useEffect } from "react";
import {
  Navbar,
  IconButton,
  Button,
  Collapse,
  Typography,
} from "@material-tailwind/react";
import AuthHandler from "../utils/AuthActions";
import Socials from "./Socials";
import { Link } from "react-router-dom";
import { UserContext } from "src/utils/userContext";

const PreviewToggleButton = () => {
  const userContext = React.useContext(UserContext);
  const handlePreviewToggle = () => {
    userContext?.setIsPreview((prev) => !prev);
  };

  return (
    <Button
      onClick={handlePreviewToggle}
      size="sm"
      variant={userContext?.isPreview ? "gradient" : "outlined"}
      aria-label="Preview as Admin"
      className="h-8 dark:text-white "
    >
      Preview as Admin
    </Button>
  );
};

const ToggleLightDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  const handleClick = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("color-theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      type="button"
      className="rounded-lg p-2.5 text-sm text-black hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
};

export function StickyNavbar({ socialMode = false }) {
  const [openNav, setOpenNav] = React.useState(false);
  const { isAuthenticated, logout } = AuthHandler();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar
      variant="gradient"
      className="dark:bg-cod-gray-950 dark:shadow-cod-gray-900 sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 shadow-sm dark:border-none lg:px-8 lg:py-4 "
    >
      {socialMode ? (
        <div className="mx-auto flex max-w-screen-xl items-center justify-end gap-4 pt-4 ">
          <Socials color="dark:text-white" />
          <hr className="mx-2 h-8 border-r border-black/10 dark:border-white/10" />
          <ToggleLightDarkMode />
        </div>
      ) : (
        <div className="mx-auto flex max-w-screen-xl items-center justify-between text-blue-gray-900 dark:text-white  ">
          <Link className="flex items-center gap-2 text-xl font-medium" to="/">
            <i className="fa fa-home fa-lg" aria-hidden></i>
            <Typography>Home</Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              {isAuthenticated ? (
                <Button
                  onClick={() => logout()}
                  aria-label="Sign out"
                  variant="outlined"
                  size="sm"
                  className="dark:text-white"
                >
                  Sign out
                </Button>
              ) : (
                <PreviewToggleButton />
              )}
            </div>
            <div className="flex items-center gap-x-1">
              <hr className="mx-2 hidden h-8 border-r  border-black/10 dark:border-white/10 lg:block" />
              <ToggleLightDarkMode />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              aria-label="Open Mobile Menu"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      )}
      <Collapse open={openNav}>
        <div className="flex items-center justify-end gap-x-1 p-2">
          <PreviewToggleButton />
        </div>
      </Collapse>
    </Navbar>
  );
}
