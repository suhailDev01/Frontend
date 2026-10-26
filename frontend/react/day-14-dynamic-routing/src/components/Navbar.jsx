
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          E<span className="text-gray-900">.com</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            About
          </a>

          <a
            href="/product"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Product
          </a>
        </div>

        {/* Sign In Button */}
        <Link
        to="/signin"
         className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Sign In
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;

