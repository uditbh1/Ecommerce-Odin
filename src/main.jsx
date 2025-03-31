// Main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from './components/Shop.jsx';
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Uses App as the layout
    children: [
      {
        index: true, // This means it's the default route for "/"
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path:"cart",
        element:<Cart />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)