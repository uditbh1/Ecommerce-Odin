import React from 'react'
import backgroundImg from "../assets/bootsimg.png";

const Home = () => {
  return (
    <>{/* Hero Content */}
    <div className="z-10 flex flex-col items-center justify-center text-center pt-16 sm:pt-24 md:pt-32 lg:pt-48 xl:pt-64 px-4">
      <div className="text-gray-500 text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
        The Weekend Boot
      </div>
      <div className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 md:mb-8 leading-tight">
        Comfy All Day Cosy All Year
      </div>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded shadow-md transition duration-200 transform hover:scale-105">
        Shop Now
      </button>
    </div>

    {/* Background Image */}
    <img
      className="w-full h-full z-0 absolute object-cover"
      src={backgroundImg}
      alt="Boots"
    /></>
  )
}

export default Home