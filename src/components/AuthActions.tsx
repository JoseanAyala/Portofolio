import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import { UserContext } from "src/utils/userContext";

type AuthActionsProps = {
  fullWidth?: boolean;
  isMobile?: boolean;
};
const AuthActions = ({ fullWidth, isMobile }: AuthActionsProps) => {
  const userContext = useContext(UserContext);
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  const buttonClasses = isMobile ? "block" : "hidden lg:inline-block";

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
    return (
      <Button
        fullWidth={fullWidth}
        onClick={() => loginWithRedirect()}
        aria-label="Sign In"
        variant="text"
        size="sm"
        className={buttonClasses}
      >
        Sign In
      </Button>
    );

  return (
    <Button
      fullWidth={fullWidth}
      onClick={() => logout()}
      aria-label="Sign out"
      variant="text"
      size="sm"
      className={buttonClasses}
    >
      Sign out
    </Button>
  );
};

export default AuthActions;
