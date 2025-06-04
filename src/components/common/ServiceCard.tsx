import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DivideIcon as LucideIcon, ChevronDown } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  features,
  delay = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="card p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="bg-primary bg-opacity-10 p-4 rounded-lg w-fit mb-6 transition-transform duration-300 hover:scale-110">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
        {title}
        <ChevronDown 
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`} 
        />
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 mt-4 border-t pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3" />
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