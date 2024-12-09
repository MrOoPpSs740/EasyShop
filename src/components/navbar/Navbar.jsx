import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolling
          ? "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 shadow-lg"
          : "bg-gradient-to-r from-white via-gray-100 to-gray-200"
      }`}
    >
      <div className="container px-6 mx-auto sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-3xl font-extrabold tracking-wider text-gray-800 transition-colors duration-300 hover:text-yellow-500"
            >
              ShopEasy
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link to="/" className="text-gray-800 transition hover:text-yellow-500">
              Home
            </Link>
            <Link to="/product" className="text-gray-800 transition hover:text-yellow-500">
              Products
            </Link>
            <Link to="/about" className="text-gray-800 transition hover:text-yellow-500">
              About
            </Link>
            <Link to="/contact" className="text-gray-800 transition hover:text-yellow-500">
              Contact
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCartIcon className="w-6 h-6 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth Links */}
            <Link
              to="/login"
              className="px-6 py-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-900"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="p-6 space-y-4 shadow-lg md:hidden bg-gradient-to-r from-white via-gray-100 to-gray-200">
            <Link to="/" className="block hover:text-yellow-500">
              Home
            </Link>
            <Link to="/product" className="block hover:text-yellow-500">
              Products
            </Link>
            <Link to="/about" className="block hover:text-yellow-500">
              About
            </Link>
            <Link to="/contact" className="block hover:text-yellow-500">
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-6 py-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-6 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-900"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
