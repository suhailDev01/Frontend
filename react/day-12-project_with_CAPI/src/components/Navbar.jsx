
import React, { createContext, useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
    let {setIsCartOpen} = useContext(MyStore)

  return (
    <nav className="w-full bg-white shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          E<span className="text-gray-800">.com</span>
        </h1>

        {/* Center: Home and Cart */}
        <div className="flex items-center gap-10">
          <a
           onClick={()=> setIsCartOpen(false)}
            href="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Home
          </a>

          <button 
          onClick={()=>setIsCartOpen(true)}
          className="text-gray-700 font-medium hover:text-blue-600 transition">
             Cart
          </button>
        </div>

        {/* Right: Sign In */}
        <button
         className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Sign In
        </button>

      </div>
    </nav>
  );
};

export default Navbar;

