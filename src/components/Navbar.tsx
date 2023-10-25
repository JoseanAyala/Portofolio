import { Link } from "react-router-dom";
import AuthActions from "./AuthActions";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="mx-auto grid max-w-screen-xl grid-cols-3 px-6 pb-2 pt-4 md:px-12 lg:px-24">
      <div className="flex items-end justify-start">
        <Link to="/" className="hover:cursor-pointer">
          <i className="fas fa-home fa-lg p-4 pl-0"></i>
        </Link>
      </div>
      <div className="flex items-end justify-center text-white">
        <Link to="/" className="hover:cursor-pointer">
          <img
            src="/assets/logo.jpeg"
            alt="website logo"
            className="h-12 w-12 rounded-full"
          />
        </Link>
      </div>
      <div className="flex items-end justify-end ">
        <AuthActions />
      </div>
    </nav>
  );
};

export default Navbar;
