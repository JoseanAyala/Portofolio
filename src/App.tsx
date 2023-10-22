import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./store/userContext";
import Homepage from "src/pages/homepage/Homepage";
import Articles from "./pages/articles/Articles";
import Navbar from "./auth/Navbar";
import ArticleEditor from "./pages/articles/ArticlesEditor";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articleEdit" element={<ArticleEditor />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
