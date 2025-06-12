import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description,
  features,
  imageUrl,
  delay = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image */}
      <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={`${title} illustration`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Icon */}
      <div className="bg-primary bg-opacity-10 p-4 rounded-lg w-fit mb-6">
        {icon}
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 flex items-center justify-between text-gray-900">
        {title}
        <ChevronDown 
          className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`} 
        />
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 mt-4 border-t pt-4 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;