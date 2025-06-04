import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isScrolled, 
  isMobileMenuOpen, 
  toggleMobileMenu 
}) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <Layers 
            className={`h-8 w-8 ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'}`} 
          />
          <span 
            className={`font-heading font-bold text-xl ${
              isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
            }`}
          >
            BeamX Solutions
          </span>
        </NavLink>
        
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                relative font-medium transition-all duration-300 hover:scale-105
                ${isScrolled 
                  ? (isActive ? 'text-primary' : 'text-gray-700 hover:text-primary') 
                  : (isActive ? 'text-white' : 'text-gray-100 hover:text-white')}
              `}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-current"
                      layoutId="navbar-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          
          <NavLink 
            to="/contact" 
            className={`btn ${
              isScrolled 
                ? 'btn-primary hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary' 
                : 'text-white border-2 border-white hover:bg-white hover:text-primary'
            } transition-all duration-300 transform hover:scale-105`}
          >
            Contact Us
          </NavLink>
        </nav>
        
        <button
          onClick={toggleMobileMenu}
          className="ml-4 md:hidden focus:outline-none"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className={`w-6 h-px mb-1.5 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-px mb-1.5 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-px transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;