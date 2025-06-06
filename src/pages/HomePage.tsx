import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BrainCircuit, Database, LineChart, Server, Users } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import LogoScroller from '../components/LogoScroller';


const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary z-0" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20 z-10" />
        
        <div className="container-custom relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white font-bold mb-6">
                Transforming Data Into <span className="text-secondary">Strategic Assets</span>
              </h1>
              <p className="text-gray-100 text-lg mb-8 max-w-lg">
                We help businesses leverage the full potential of their data through expert data strategy, 
                business intelligence, and AI solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="white" icon>
                  Contact Us
                </Button>
                <Button href="/services" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" icon>
                  Our Services
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative bg-white p-6 rounded-xl shadow-xl">
                {/* Header with Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <LineChart className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-900">Data Insights Overview</h3>
                  </div>
                  <span className="text-sm font-medium text-secondary bg-secondary bg-opacity-10 px-3 py-1 rounded-full">
                    +32% Growth
                  </span>
                </div>

                {/* Simple Bar Chart */}
                <div className="mb-6">
                  <div className="flex items-end gap-2 h-32">
                    <div className="flex-1 bg-primary bg-opacity-20 rounded-t-md transition-all duration-300 hover:bg-opacity-30" style={{ height: '60%' }} />
                    <div className="flex-1 bg-secondary bg-opacity-20 rounded-t-md transition-all duration-300 hover:bg-opacity-30" style={{ height: '80%' }} />
                    <div className="flex-1 bg-accent bg-opacity-20 rounded-t-md transition-all duration-300 hover:bg-opacity-30" style={{ height: '40%' }} />
                    <div className="flex-1 bg-primary bg-opacity-20 rounded-t-md transition-all duration-300 hover:bg-opacity-30" style={{ height: '70%' }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>

                {/* Supporting Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <Database className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Data Points</p>
                      <p className="text-xs text-gray-500">1.2M</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <BrainCircuit className="h-6 w-6 text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Accuracy</p>
                      <p className="text-xs text-gray-500">98%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <LogoScroller />
      
      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose BeamX Solutions"
            subtitle="Partner with us to transform your data into actionable insights and drive business growth."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary bg-opacity-10 p-4 rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our team of data scientists, engineers, and analysts brings years of experience across industries to deliver exceptional results.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary bg-opacity-10 p-4 rounded-lg w-fit mb-6">
                <BrainCircuit className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovative Solutions</h3>
              <p className="text-gray-600">
                We leverage cutting-edge technologies and methodologies to develop custom solutions that drive real business value.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary bg-opacity-10 p-4 rounded-lg w-fit mb-6">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Our track record of successful implementations and satisfied clients speaks to our commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with BeamX Solutions."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="BeamX helped us build a data strategy that completely transformed how we make decisions. The insights we've gained have been invaluable to our growth."
              author="Sarah Johnson"
              position="CTO"
              company="TechNova Inc."
              delay={0}
            />
            <TestimonialCard
              quote="The team at BeamX Solutions delivered a BI solution that exceeded our expectations. Their expertise and attention to detail made all the difference."
              author="Michael Chen"
              position="Director of Analytics"
              company="Global Retail Group"
              delay={1}
            />
            <TestimonialCard
              quote="Working with BeamX on our AI initiative has given us a competitive edge in our industry. Their approach is both innovative and practical."
              author="Jennifer Martinez"
              position="VP of Operations"
              company="HealthPlus Systems"
              delay={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Data Strategy?"
        subtitle="Let's discuss how we can help you unlock the full potential of your data."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonHref="/services"
      />
    </>
  );
};

export default HomePage;
