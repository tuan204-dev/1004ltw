import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import BlogList from "./page/BlogList";
import BlogDetail from "./page/BlogDetail";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
