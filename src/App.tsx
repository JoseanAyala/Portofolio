import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./store/userContext";
import Homepage from "src/pages/homepage/Homepage";
import ArticleEdit from "./pages/articles/ArticlesEdit";
import AuthActions from "./auth/AuthActions";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <AuthActions />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<ArticleEdit />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
