import "./App.css";
import logo from "./assets/logo.png";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    "Home",
    "Shop",
    "About",
  ];

  return (
    <div className="min-h-screen">
      <div className="relative flex flex-col min-h-screen">
        {/* Shipping Banner */}
        <div className="z-10 text-white bg-primary text-center font-semibold py-2 text-sm sm:text-base">
          Free shipping in North America
        </div>

        {/* Navigation Bar */}
        <div className="z-10 bg-white flex justify-between items-center p-2 sm:p-3 px-4 sm:px-6">
          {/* Logo */}
          <img
            className="aspect-auto w-32 h-auto p-1 sm:w-48 sm:p-3 md:w-56 md:p-4"
            src={logo}
            alt="Logo"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex text-primary gap-4 lg:gap-8 xl:gap-10 items-center text-sm lg:text-base">
            {navItems.map((item, index) => (
              <div key={index} className="hover:text-gray-600 cursor-pointer whitespace-nowrap">
                {item}
              </div>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex text-primary gap-3 sm:gap-4 md:gap-6 items-center text-sm">
            <div className="hidden sm:block whitespace-nowrap text-xs sm:text-sm">
              GBP £ | United Kingdom ^
            </div>

            {/* Icons */}
            <div className="flex gap-3 sm:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-primary hover:text-primary-dark transition-colors cursor-pointer"
              >
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-primary hover:text-primary-dark transition-colors cursor-pointer"
              >
                <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-primary hover:text-primary-dark transition-colors cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path d="M6.665 9.068l-3.665-1.66v14l3.665 2.592 14.335-2.155v-14.845l-14.335 2.068zm-1.665 1.441l1 .453v10.118l-1-.707v-9.864zm14 9.615l-11 1.653v-10.881l11-1.587v10.815zm-2-15.833l-.001 1.749c0 .246-.18.455-.423.492-.303.045-.576-.19-.576-.495v-1.746c.001-.691-.231-1.304-.653-1.726-.368-.37-.847-.565-1.384-.565-1.547 0-2.96 1.558-2.963 3.268v1.681c0 .247-.181.457-.425.494-.302.046-.575-.189-.575-.494l.001-1.683c.004-2.261 1.866-4.266 3.962-4.266 1.717 0 3.039 1.387 3.037 3.291zm-9.999 2.209v-2.235c.004-2.26 1.866-4.265 3.962-4.265.492 0 .944.125 1.35.332-.423.17-.822.4-1.188.683l-.162-.015c-1.547 0-2.961 1.558-2.963 3.268v2.232c0 .248-.182.458-.427.494-.3.045-.572-.187-.572-.494z" />
              </svg>
            </div>

            {/* Hamburger Menu Button (mobile only) */}
            <button
              className="md:hidden focus:outline-none ml-1"
              onClick={toggleMenu}
            >
              <svg
                className="w-5 h-5 fill-current text-primary"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden z-20 bg-white shadow-lg">
            <div className="flex flex-col px-4 py-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="py-3 px-2 text-primary border-b border-gray-100 hover:text-primary-dark hover:bg-gray-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
        <Home />
        

      </div>
    </div>
  );
}

export default App;