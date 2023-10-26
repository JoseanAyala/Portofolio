import { Link } from "react-router-dom";
import AuthActions from "./AuthActions";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="mx-auto grid max-w-screen-xl grid-cols-2 px-6 pb-2 pt-4 md:px-12 lg:px-24">
      <div className="flex items-end justify-start">
        <Link to="/" className="flex items-center hover:cursor-pointer">
          <i className="fas fa-home fa-lg text-secondary-100 p-4 pl-0"></i>
          <h1 className="font-white upper text-secondary-100 ml-[-10px] text-2xl font-bold tracking-tight">
            Articles
          </h1>
        </Link>
      </div>
      <div className="flex items-end justify-end ">
        <AuthActions />
      </div>
    </nav>
  );
};

export default Navbar;
