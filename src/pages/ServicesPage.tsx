import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, BarChart, BrainCircuit, Database, Server, Users, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb className="h-16 w-16 text-primary" />,
      title: "Analytics Audit",
      description: "We assess the health of your data ecosystem from data quality to pipeline integrity to identify gaps, inefficiencies, and hidden opportunities. Get a clear view of what's working and what needs to evolve.",
      features: [
        "Data quality assessment",
        "Pipeline performance review",
        "Identify hidden insight gaps"
      ]
    },
    {
      icon: <BarChart className="h-16 w-16 text-primary" />,
      title: "Dashboard Development",
      description: "Turn complexity into clarity. We build intuitive, interactive dashboards that surface key insights, empower decision-makers, and keep your metrics moving in the right direction.",
      features: [
        "Custom dashboard creation",
        "Interactive visualizations",
        "Real-time data integration",
        "Performance optimization"
      ]
    },
    {
      icon: <BrainCircuit className="h-16 w-16 text-primary" />,
      title: "Model Development",
      description: "From fine-tuned GPTs to powerful machine learning models, we build solutions that think, predict, and learn, tailored to your business objectives. Let your data do the heavy lifting.",
      features: [
        "Custom ML model development",
        "GPT fine-tuning",
        "Model optimization",
        "Performance monitoring"
      ]
    },
    {
      icon: <Users className="h-16 w-16 text-primary" />,
      title: "Live Trainings",
      description: "Empower your team with hands-on training in analytics tools, AI systems, and data storytelling. We don't just deliver solutions, we build capability.",
      features: [
        "Hands-on analytics workshops",
        "Practical AI system training",
        "Data storytelling skill sessions"
      ]
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
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary bg-opacity-10 p-4 rounded-lg w-fit mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
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