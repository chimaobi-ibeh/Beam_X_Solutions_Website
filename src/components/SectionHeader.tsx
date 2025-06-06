import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <div className="inline-block">
            <div className={`h-1.5 w-10 ${light ? 'bg-white' : 'bg-primary'} rounded mb-2`}></div>
            <div className={`h-1.5 w-20 ${light ? 'bg-white' : 'bg-primary'} rounded`}></div>
          </div>
        </div>
        <h2 className={`mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
        {subtitle && (
          <p className={`text-lg ${light ? 'text-gray-200' : 'text-gray-600'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;