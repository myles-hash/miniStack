import {Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App(){
  return (
    <div>
      <h1>ReactRouter</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer>This is the footer</footer>
    </div>
  );
}
