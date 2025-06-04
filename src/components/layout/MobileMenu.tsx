import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    }
  }
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden md:hidden"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
      exit="closed"
    >
      <div className="flex-1 overflow-y-auto py-20 px-6">
        <nav className="flex flex-col space-y-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <motion.div key={item.name} variants={linkVariants}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center justify-between text-xl font-heading font-medium 
                  ${isActive ? 'text-primary' : 'text-gray-900'}
                `}
                onClick={onClose}
              >
                <span>{item.name}</span>
                <ArrowRight className="h-5 w-5" />
              </NavLink>
              <div className="h-px bg-gray-200 mt-8" />
            </motion.div>
          ))}
        </nav>
      </div>
      
      <div className="p-6 bg-gray-50">
        <NavLink
          to="/contact"
          className="btn btn-primary w-full text-center"
          onClick={onClose}
        >
          Get Started
        </NavLink>
      </div>
    </motion.div>
  );
};

export default MobileMenu;