import { useAuth0 } from "@auth0/auth0-react";
import { useLayoutEffect } from "react";
export default function Login() {
  const { loginWithRedirect } = useAuth0();

  useLayoutEffect(() => {
    loginWithRedirect();
  }, []);

  return <></>;
}
