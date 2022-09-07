import Routes from "./routes/Routes.jsx";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Todo List: Vite + React + Context + Provide</h1>
      <nav>
        <Link style={{ color: "yellow", fontWeight: "bold" }} to="/">
          Home
        </Link>
        <br />
        <Link style={{ color: "yellow", fontWeight: "bold" }} to="/about">
          About
        </Link>
      </nav>
      <Routes />
    </div>
  );
}

export default App;
