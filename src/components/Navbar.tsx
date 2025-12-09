import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="cursor-pointer">
            <span className={`text-2xl tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="font-light">IMAGINE</span>
              <span className="font-bold ml-1">ENTERTAINMENT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <Link
              to="/about"
              className={`text-sm uppercase tracking-wider transition-colors ${
                isActive('/about')
                  ? isScrolled ? 'text-gray-900' : 'text-white'
                  : isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-sm uppercase tracking-wider transition-colors ${
                isActive('/services')
                  ? isScrolled ? 'text-gray-900' : 'text-white'
                  : isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm uppercase tracking-wider transition-colors ${
                isActive('/portfolio')
                  ? isScrolled ? 'text-gray-900' : 'text-white'
                  : isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 space-y-4">
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-wider ${
                isActive('/about') ? 'text-gray-900' : 'text-gray-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-wider ${
                isActive('/services') ? 'text-gray-900' : 'text-gray-600'
              }`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-wider ${
                isActive('/portfolio') ? 'text-gray-900' : 'text-gray-600'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-black text-white px-6 py-3 text-sm uppercase tracking-wider text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
