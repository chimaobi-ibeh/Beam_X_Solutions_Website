import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import Button from './Button';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText = 'Explore More',
  secondaryButtonHref = '/services',
}) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary z-0" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              title={title}
              subtitle={subtitle}
              center
              light
            />
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={primaryButtonHref} variant="white" icon>
                {primaryButtonText}
              </Button>
              {secondaryButtonText && (
                <Button
                  href={secondaryButtonHref}
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-primary"
                  icon
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;