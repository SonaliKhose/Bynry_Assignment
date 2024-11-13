

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">
            Profile
          </Link>
          <span className="text-white text-3xl font-bold">Explorer</span>
        </div>

        {/* Navbar */}
        <nav className="space-x-6 text-white font-semibold">
          <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-gray-200 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-gray-200 transition duration-300">Contact</Link>
        </nav>

        {/* Hamburger Menu for mobile devices */}
        <div className="lg:hidden flex items-center">
          <button className="text-white">
            <i className="fas fa-bars"></i> 
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
