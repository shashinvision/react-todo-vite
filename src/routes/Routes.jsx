import { Routes, Route } from "react-router-dom";
import Front from "../views/Front";
import { About } from "../views/about";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Front saludo="" />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
