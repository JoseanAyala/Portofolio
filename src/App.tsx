import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./utils/userContext";
import Homepage from "src/pages/home/Homepage";
import Articles from "./pages/articles/list/Articles";
import ArticleEditor from "./pages/articles/editor/ArticleEditor";
import ArticleView from "./pages/articles/view/ArticleView";
import ScrollToTop from "src/utils/useTopNavigation";
import { ThemeProvider } from "@material-tailwind/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import NotFound from "./pages/notfound/NotFound";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <ThemeProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticleView />} />
                <Route path="/articles/edit/:id" element={<ArticleEditor />} />
                <Route path="/articles/create" element={<ArticleEditor />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </Auth0Provider>
  );
}
