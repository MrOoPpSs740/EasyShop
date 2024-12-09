import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 py-12 text-white bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and Company Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-wider text-white">E-Shop</h2>
          <p className="mt-4 text-lg">Your one-stop shop for all things tech.</p>
          <p className="mt-2 text-sm">© 2024 E-Shop. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6 md:justify-start">
          <div>
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-lg">
              <li><a href="/" className="transition duration-300 hover:text-yellow-400">Home</a></li>
              <li><a href="/about" className="transition duration-300 hover:text-yellow-400">About</a></li>
              <li><a href="/contact" className="transition duration-300 hover:text-yellow-400">Contact</a></li>
              <li><a href="/product" className="transition duration-300 hover:text-yellow-400">Products</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition duration-300 hover:text-yellow-400">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition duration-300 hover:text-yellow-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition duration-300 hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl transition duration-300 hover:text-yellow-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
