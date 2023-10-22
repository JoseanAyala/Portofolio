import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserContext } from "src/store/userContext";

const AuthActions = () => {
  const userContext = useContext(UserContext);

  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) return;

    getAccessTokenSilently().then((token) => {
      userContext?.setUser({
        name: user!.name || "",
        img: user!.picture || "",
        email: user!.email || "",
        token,
      });
    });
  }, [isAuthenticated]);

  if (isLoading) return null;

  if (!isAuthenticated)
    return <button onClick={() => loginWithRedirect()}>Log In</button>;

  return (
    <div className="group sticky inline-block">
      <div className="select-none">{user!.email}</div>
      <ul className="absolute right-0 hidden pt-1 group-hover:block">
        <li>
          <button
            type="button"
            aria-label="Logout"
            onClick={() => {
              logout();
            }}
            className="whitespace-no-wrap w-full rounded-xl bg-white bg-opacity-10 p-2 hover:cursor-pointer hover:shadow-neon"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AuthActions;
