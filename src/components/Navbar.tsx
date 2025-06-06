import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-4">
          <img
            src="/beam-x-logo3.jpg"
            alt="BeamX Solutions Logo"
            className="h-12 w-auto max-w-[200px] transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact Us', path: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `
                relative font-medium transition-all duration-300 hover:scale-105
                ${isScrolled
                  ? isActive
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                  : isActive
                    ? 'text-white'
                    : 'text-gray-100 hover:text-white'}
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
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg rounded-l-2xl transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <img
                src="/beam-x-logo3.jpg"
                alt="BeamX Solutions Logo"
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  initial="hidden"
                  animate={isMobileMenuOpen ? 'visible' : 'hidden'}
                  variants={menuItemVariants}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => `
                      block text-lg font-medium px-3 py-2 rounded-md transition-all
                      ${isActive
                        ? 'text-primary bg-primary bg-opacity-10'
                        : 'text-gray-800 hover:text-primary hover:bg-primary/10'}
                    `}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
