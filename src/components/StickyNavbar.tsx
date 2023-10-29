import React from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
  Button,
} from "@material-tailwind/react";
import AuthHandler from "./AuthActions";
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
      color={userContext?.isPreview ? "light-blue" : undefined}
      variant={userContext?.isPreview ? "gradient" : "outlined"}
      className="h-8"
      fullWidth
    >
      Preview as Admin
    </Button>
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
      className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 dark:bg-black lg:px-8 lg:py-4 "
    >
      {socialMode ? (
        <div className="mx-auto flex max-w-screen-xl items-center justify-end gap-4 pt-4 ">
          <Socials color="" />
        </div>
      ) : (
        <div className="mx-auto flex max-w-screen-xl items-center justify-between text-blue-gray-900 dark:text-blue-gray-100  ">
          <Link className="flex items-center gap-2 text-xl font-medium" to="/">
            <i className="fa fa-home fa-lg"></i>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              {isAuthenticated ? (
                <Button
                  onClick={() => logout()}
                  aria-label="Sign out"
                  variant="outlined"
                  size="sm"
                >
                  Sign out
                </Button>
              ) : (
                <PreviewToggleButton />
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
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
      <MobileNav open={openNav}>
        <div className="flex items-center justify-end gap-x-1 p-2">
          <PreviewToggleButton />
        </div>
      </MobileNav>
    </Navbar>
  );
}
