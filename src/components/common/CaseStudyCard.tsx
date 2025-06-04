import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface CaseStudyCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
  delay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  image, 
  title, 
  category, 
  description, 
  link,
  delay = 0
}) => {
  return (
    <motion.div
      className="card overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Button href={link} variant="outline" icon>
          View Case Study
        </Button>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;