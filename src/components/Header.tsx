import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#0c1319] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="font-bold text-2xl text-[#3498db]">
            <Link to="/" className="hover:text-[#2980b9] transition-colors">
              suriyawansha.me
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`transition-colors duration-300 font-medium ${
                    isActive('/') ? 'text-[#3498db]' : 'text-gray-300 hover:text-[#3498db]'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`transition-colors duration-300 font-medium ${
                    isActive('/about') ? 'text-[#3498db]' : 'text-gray-300 hover:text-[#3498db]'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`transition-colors duration-300 font-medium ${
                    isActive('/services') ? 'text-[#3498db]' : 'text-gray-300 hover:text-[#3498db]'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className={`transition-colors duration-300 font-medium ${
                    isActive('/portfolio') ? 'text-[#3498db]' : 'text-gray-300 hover:text-[#3498db]'
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`transition-colors duration-300 font-medium ${
                    isActive('/contact') ? 'text-[#3498db]' : 'text-gray-300 hover:text-[#3498db]'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-[#3498db] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className={`block transition-colors duration-300 font-medium ${
                      isActive('/') ? 'text-[#3498db]' : 'text-white hover:text-[#3498db]'
                    }`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className={`block transition-colors duration-300 font-medium ${
                      isActive('/about') ? 'text-[#3498db]' : 'text-gray-300 hover:text-[#3498db]'
                    }`}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className={`block transition-colors duration-300 font-medium ${
                      isActive('/services') ? 'text-[#3498db]' : 'text-gray-300 hover:text-[#3498db]'
                    }`}
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio" 
                    className={`block transition-colors duration-300 font-medium ${
                      isActive('/portfolio') ? 'text-[#3498db]' : 'text-gray-300 hover:text-[#3498db]'
                    }`}
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`block transition-colors duration-300 font-medium ${
                      isActive('/contact') ? 'text-[#3498db]' : 'text-gray-300 hover:text-[#3498db]'
                    }`}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}