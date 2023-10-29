import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "src/utils/userContext";

export default function useUserState() {
  const { isAuthenticated } = useAuth0();
  const userContext = useContext(UserContext);
  userContext?.isPreview;

  return {
    isPreview: userContext?.isPreview,
    isAuthenticated,
  };
}
