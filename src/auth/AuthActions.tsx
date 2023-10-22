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

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated)
    return <button onClick={() => loginWithRedirect()}>Log In</button>;

  return (
    <div className="group relative inline-block">
      <button>
        <img
          src={user!.picture}
          alt={user!.name}
          className="h-12 w-12 rounded-full border-2 border-solid border-lightBlue object-cover"
        />
      </button>
      <ul className="absolute right-0 hidden pt-1 group-hover:block">
        <li>
          <button
            type="button"
            aria-label="Logout"
            onClick={() => {
              logout();
            }}
            className="whitespace-no-wrap block rounded-xl bg-white bg-opacity-10 p-2 hover:cursor-pointer hover:shadow-neon"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AuthActions;
