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

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.2 },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-4">
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
              end // Ensure exact matching for all links
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
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        <motion.div
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg md:hidden overflow-hidden z-40"
          initial="hidden"
          animate={isMobileMenuOpen ? 'visible' : 'hidden'}
          variants={menuVariants}
        >
          <nav className="flex flex-col items-center py-4">
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
                className="w-full text-center"
              >
                <NavLink
                  to={item.path}
                  end // Ensure exact matching for all links
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `
                    block text-lg font-medium px-4 py-3 transition-all
                    ${isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-800 hover:text-primary hover:bg-primary/5'}
                  `}
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;