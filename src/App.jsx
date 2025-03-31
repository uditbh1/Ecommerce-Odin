import "./App.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <div className="min-h-screen">
      <div className="relative flex flex-col min-h-screen">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}

export default App;