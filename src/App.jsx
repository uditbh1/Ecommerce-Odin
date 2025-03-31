import "./App.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

function App() {
  

  return (
    <CartProvider>
      <div className="min-h-screen">
        <div className="relative flex flex-col min-h-screen">
          <Nav />
          <Outlet />
        </div>
      </div>

    </CartProvider>
  );
}

export default App;