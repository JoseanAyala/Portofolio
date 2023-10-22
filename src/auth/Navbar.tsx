import { Link } from "react-router-dom";
import AuthActions from "./AuthActions";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav
      className="mx-auto flex
    max-w-screen-xl flex-wrap items-end justify-between px-6 pb-2 pt-4 md:px-12 lg:px-24"
    >
      <div className="flex flex-shrink-0 items-center text-white">
        <Link to="/" className="hover:cursor-pointer">
          <img
            src="/assets/logo.jpeg"
            alt="website logo"
            className="h-12 w-12 rounded-full"
          />
        </Link>
      </div>
      <AuthActions />
    </nav>
  );
};

export default Navbar;
