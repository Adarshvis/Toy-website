import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-lg border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Flex - Logo */}
          <div className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <Link to="/" className="flex items-center">
              <img src="/Logo/logo.png" alt="ToyB Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Middle Flex - Navigation Links */}
          <div className="hidden md:flex space-x-10">
            {['Home', 'About', 'Product', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-red-600 font-medium text-sm uppercase tracking-wider px-3 py-2 rounded-md transition-colors duration-200 hover:bg-blue-50"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Flex - Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-64 px-4 py-2 pr-10 text-sm border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 cursor-pointer hover:text-red-500 transition-colors duration-200" />
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? 
                <X className="w-6 h-6 text-gray-600" /> : 
                <Menu className="w-6 h-6 text-gray-600" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            {['Home', 'About', 'Product', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            <div className="relative mt-4 pb-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full px-4 py-2 pr-10 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;