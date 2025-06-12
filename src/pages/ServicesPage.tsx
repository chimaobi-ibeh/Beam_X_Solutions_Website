import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, BarChart, BrainCircuit, Database, Server, Users, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Analytics Audit",
      description: "We assess the health of your data ecosystem from data quality to pipeline integrity to identify gaps, inefficiencies, and hidden opportunities. Get a clear view of what's working and what needs to evolve.",
      features: [
        "Data quality assessment",
        "Pipeline performance review",
        "Identify hidden insight gaps"
      ],
      imageUrl: "/analytics-audit.png"
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Dashboard Development",
      description: "Turn complexity into clarity. We build intuitive, interactive dashboards that surface key insights, empower decision-makers, and keep your metrics moving in the right direction.",
      features: [
        "Custom dashboard creation",
        "Interactive visualizations",
        "Real-time data integration",
        "Performance optimization"
      ],
      imageUrl: "/dashboard-development.png"
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: "Model Development",
      description: "From fine-tuned GPTs to powerful machine learning models, we build solutions that think, predict, and learn, tailored to your business objectives. Let your data do the heavy lifting.",
      features: [
        "Custom ML model development",
        "GPT fine-tuning",
        "Model optimization",
        "Performance monitoring"
      ],
      imageUrl: "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Live Trainings",
      description: "Empower your team with hands-on training in analytics tools, AI systems, and data storytelling. We don't just deliver solutions, we build capability.",
      features: [
        "Hands-on analytics workshops",
        "Practical AI system training",
        "Data storytelling skill sessions"
      ],
      imageUrl: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary z-0" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6">Our Services</h1>
              <p className="text-gray-100 text-lg mb-8">
                Comprehensive data solutions tailored to your business needs, from strategy 
                to implementation and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="What We Offer"
            subtitle="Explore our range of services designed to transform your data into actionable insights."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                imageUrl={service.imageUrl}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Data Strategy?"
        subtitle="Let's discuss how we can help you unlock the full potential of your data."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonHref="/about"
      />
    </>
  );
};

export default ServicesPage;