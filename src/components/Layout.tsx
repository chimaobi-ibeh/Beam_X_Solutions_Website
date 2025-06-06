import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// Update the import path if Navbar is located elsewhere, for example:
import Navbar from './Navbar';
// Or, if Navbar does not exist, create it at src/components/Navbar.tsx
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;