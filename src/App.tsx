import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "src/pages/homepage/Homepage";
import ArticleEdit from "./pages/articles/ArticlesEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ArticleEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
