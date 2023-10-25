import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserContext } from "src/utils/userContext";

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
    return <button onClick={() => loginWithRedirect()}>Sign In</button>;

  return (
    <div className="group sticky inline-block">
      <button
        type="button"
        aria-label="Logout"
        onClick={() => {
          logout();
        }}
        className="whitespace-no-wrap rounded-lg p-2 hover:cursor-pointer hover:bg-white hover:bg-opacity-10 "
      >
        Sign out
      </button>
    </div>
  );
};

export default AuthActions;
