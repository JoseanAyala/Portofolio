import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserContext } from "src/utils/userContext";

export default function AuthHandler() {
  const userContext = useContext(UserContext);
  const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();

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
  return { isAuthenticated, user, logout };
}
