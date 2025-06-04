import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BrainCircuit, Database, LineChart, Server, Lightbulb, BarChart, Users } from 'lucide-react';
import Button from '../components/common/Button';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/common/ServiceCard';
import TestimonialCard from '../components/common/TestimonialCard';

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
                  Get Started
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
              <div className="relative">
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <div className="mb-6">
                    <div className="h-2 w-24 bg-primary rounded-full mb-3" />
                    <div className="h-2 w-16 bg-secondary rounded-full" />
                  </div>
                  <div className="space-y-6">
                    <div className="h-10 bg-gray-100 rounded-md w-3/4" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-primary bg-opacity-10 rounded-md flex items-center justify-center">
                        <BarChart3 className="h-10 w-10 text-primary" />
                      </div>
                      <div className="h-24 bg-secondary bg-opacity-10 rounded-md flex items-center justify-center">
                        <BrainCircuit className="h-10 w-10 text-secondary" />
                      </div>
                      <div className="h-24 bg-accent bg-opacity-10 rounded-md flex items-center justify-center">
                        <Database className="h-10 w-10 text-accent" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-gray-100 rounded-full" />
                      <div className="h-2 bg-gray-100 rounded-full w-5/6" />
                      <div className="h-2 bg-gray-100 rounded-full w-4/6" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-8 bg-secondary text-white p-5 rounded-lg shadow-lg">
                  <LineChart className="h-8 w-8" />
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-primary text-white p-5 rounded-lg shadow-lg">
                  <Server className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Trusted by innovative companies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-12 w-full flex items-center justify-center">
                <div className="h-5 bg-gray-300 rounded-md w-3/4 opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Services"
            subtitle="We provide comprehensive data solutions tailored to your business needs."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Lightbulb}
              title="Data Strategy"
              description="We help you develop a comprehensive data strategy aligned with your business goals to maximize the value of your data assets."
              features={[
                "Data maturity assessment",
                "Roadmap development",
                "Stakeholder alignment"
              ]}
              delay={0}
            />
            <ServiceCard
              icon={BarChart}
              title="Business Intelligence"
              description="Transform your raw data into actionable insights with our custom BI solutions, dashboards, and reporting tools."
              features={[
                "Custom dashboards",
                "Automated reporting",
                "KPI tracking"
              ]}
              delay={1}
            />
            <ServiceCard
              icon={BrainCircuit}
              title="Artificial Intelligence"
              description="Leverage the power of AI and machine learning to automate processes, predict outcomes, and gain competitive advantage."
              features={[
                "Predictive analytics",
                "Machine learning models",
                "Process automation"
              ]}
              delay={2}
            />
            <ServiceCard
              icon={Database}
              title="Data Engineering"
              description="Build robust data pipelines and infrastructure to collect, store, and process your data efficiently and securely."
              features={[
                "ETL pipelines",
                "Data warehousing",
                "Data integration"
              ]}
              delay={3}
            />
            <ServiceCard
              icon={Server}
              title="Cloud Solutions"
              description="Migrate your data and analytics to the cloud for scalability, flexibility, and cost-effectiveness."
              features={[
                "Cloud migration",
                "Managed services",
                "Hybrid solutions"
              ]}
              delay={4}
            />
            <ServiceCard
              icon={Users}
              title="Data Governance"
              description="Implement frameworks and processes to ensure data quality, security, privacy, and compliance."
              features={[
                "Data quality management",
                "Compliance frameworks",
                "Access controls"
              ]}
              delay={5}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/services" variant="primary" icon>
              View All Services
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <SectionHeader
                title="Unlock Your Data's Full Potential"
                subtitle="At BeamX Solutions, we're passionate about helping businesses transform their data into strategic assets that drive growth and innovation."
              />
              
              <p className="text-gray-600 mb-6">
                Our team of experts combines deep technical knowledge with business acumen to deliver 
                solutions that not only solve your immediate data challenges but also position you for 
                long-term success in today's data-driven world.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Experienced Team</h4>
                    <p className="text-gray-600 text-sm">
                      Industry experts with proven track record
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Tailored Solutions</h4>
                    <p className="text-gray-600 text-sm">
                      Custom strategies for your specific needs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Advanced Technology</h4>
                    <p className="text-gray-600 text-sm">
                      Cutting-edge tools and methodologies
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Ongoing Support</h4>
                    <p className="text-gray-600 text-sm">
                      Continuous guidance and maintenance
                    </p>
                  </div>
                </div>
              </div>
              
              <Button href="/about" variant="primary" icon>
                Learn More About Us
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-2.5 w-16 bg-primary rounded-full" />
                    <div className="h-6 w-6 rounded-full bg-success flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full w-full" />
                    <div className="h-2 bg-gray-200 rounded-full w-5/6" />
                    <div className="h-2 bg-gray-200 rounded-full w-4/6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-white">
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary z-0" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              title="Ready to Transform Your Data Strategy?"
              subtitle="Get in touch with our team to discuss how we can help you unlock the full potential of your data."
              center
              light
            />
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="white" icon>
                Contact Us
              </Button>
              <Button 
                href="/services" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary"
                icon
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;