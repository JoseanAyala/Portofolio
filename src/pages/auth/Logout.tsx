import { useAuth0 } from "@auth0/auth0-react";
import { useLayoutEffect } from "react";

export default function Logout() {
  const { logout } = useAuth0();

  useLayoutEffect(() => {
    logout();
  }, []);

  return <></>;
}
