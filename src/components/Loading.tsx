import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogo = () => (
  <img
    src="/beam-x-logo3.jpg"
    alt="Beam X Logo"
    className="w-20 h-20 object-contain"
  />
);

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Pulsing background circle */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary bg-opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Logo */}
        <CompanyLogo />
      </motion.div>
    </div>
  );
};

export default Loading;