import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-wueyht1jxzew7vwn.us.auth0.com"
    clientId="73gcOJnfLGhsKq3XHNNCcjBft9h0kgsr"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://gojayala.onrender.com/",
    }}
  >
    <App />
  </Auth0Provider>,
);
