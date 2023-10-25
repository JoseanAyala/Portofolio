import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./utils/userContext";
import Homepage from "src/pages/home/Homepage";
import Articles from "./pages/articles/home/Articles";
import Navbar from "./components/Navbar";
import ArticleEditor from "./pages/articles/editor/ArticleEditor";
import ArticleView from "./pages/articles/view/ArticleView";
import ScrollToTop from "src/utils/scrollToTop";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
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
  );
}
