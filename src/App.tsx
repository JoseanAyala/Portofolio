import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./utils/userContext";
import Homepage from "src/pages/home/Homepage";
import Articles from "./pages/articles/home/Articles";
import ArticleEditor from "./pages/articles/editor/ArticleEditor";
import ArticleView from "./pages/articles/view/ArticleView";
import ScrollToTop from "src/utils/scrollToTop";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@material-tailwind/react";

export default function App() {
  return (
    <Auth0Provider
      domain="dev-wueyht1jxzew7vwn.us.auth0.com"
      clientId="73gcOJnfLGhsKq3XHNNCcjBft9h0kgsr"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://gojayala.onrender.com/",
      }}
    >
      <ThemeProvider>
        <UserContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/*" element={<Homepage />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleView />} />
              <Route path="/articles/edit/:id" element={<ArticleEditor />} />
              <Route path="/articles/create" element={<ArticleEditor />} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </ThemeProvider>
    </Auth0Provider>
  );
}
