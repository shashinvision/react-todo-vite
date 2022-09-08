import { Routes, Route } from "react-router-dom";
import Front from "../views/Front";
import { About } from "../views/about";
import EditTask from "../views/EditTask";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Front saludo="" />} />
      <Route path="/about" element={<About />} />
      <Route path="/edit/:id" element={<EditTask />} />
    </Routes>
  );
}
