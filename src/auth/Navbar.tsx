import { Link } from "react-router-dom";
import AuthActions from "./AuthActions";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-6 py-8 md:px-12 lg:px-24">
      <div className="flex flex-shrink-0 items-center text-white">
        <Link
          to="/"
          className="font-highlight rounded-xl px-3 py-1 text-3xl font-bold tracking-tight text-lightBlue  hover:cursor-pointer
          hover:bg-white hover:bg-opacity-10"
        >
          Portfolio
        </Link>
      </div>
      <AuthActions />
    </nav>
  );
};

export default Navbar;
