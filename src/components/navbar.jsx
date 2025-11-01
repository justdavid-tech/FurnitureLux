import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Check if current path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo - Now using Link */}
        <Link to="/" className="text-2xl font-bold text-brand tracking-wide">
          LuxFurnish<span className="text-brand">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <Link 
              to="/" 
              className={`hover:text-gray-400 transition ${
                isActive('/') ? 'text-brand font-semibold' : ''
              }`}
            >
              Home
            </Link>
          </li>

          {/* Dropdown for Categories */}
          <li className="relative">
            <button
              className={`flex items-center hover:text-gray-400 transition ${
                isActive('/categories') ? 'text-brand font-semibold' : ''
              }`}
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Categories <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {isDropdownOpen && (
              <ul
                className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-44 text-sm border border-gray-200"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <li>
                  <Link 
                    to="/categories/dining" 
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Dining Set
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/bedroom" 
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Bedroom Set
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/sofa" 
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Sofa Set
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link 
              to="/about" 
              className={`hover:text-gray-400 transition ${
                isActive('/about') ? 'text-brand font-semibold' : ''
              }`}
            >
              About
            </Link>
          </li>

          <li>
            <Link 
              to="/blog" 
              className={`hover:text-gray-400 transition ${
                isActive('/blog') ? 'text-brand font-semibold' : ''
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`hover:text-gray-400 transition ${
                isActive('/contact') ? 'text-brand font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <Link 
            to="/get-started" 
            className="bg-brand text-sm px-4 py-2 rounded-2xl text-white border-0 hover:bg-brand-hover transition duration-300 cursor-pointer"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-inner transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
          <li>
            <Link 
              to="/" 
              className={`block ${isActive('/') ? 'text-brand font-semibold' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          
          {/* Dropdown inside mobile */}
          <li>
            <details>
              <summary className="cursor-pointer">Categories</summary>
              <ul className="pl-4 mt-2 space-y-2 text-sm">
                <li>
                  <Link 
                    to="/categories/dining" 
                    className="block"
                    onClick={closeMobileMenu}
                  >
                    Dining Set
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/bedroom" 
                    className="block"
                    onClick={closeMobileMenu}
                  >
                    Bedroom Set
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/sofa" 
                    className="block"
                    onClick={closeMobileMenu}
                  >
                    Sofa Set
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link 
              to="/about" 
              className={`block ${isActive('/about') ? 'text-brand font-semibold' : ''}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={`block ${isActive('/blog') ? 'text-brand font-semibold' : ''}`}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`block ${isActive('/contact') ? 'text-blue-600 font-semibold' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>

          {/* Get Started for Mobile */}
          <li>
            <Link 
              to="/get-started" 
              className="block w-full bg-brand text-white px-4 py-2 rounded-2xl hover:bg-brand-hover transition text-center"
              onClick={closeMobileMenu}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;