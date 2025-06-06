import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Clock, Target, Shield, PieChart, ArrowUpRight } from 'lucide-react';
import CountUp from 'react-countup';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  // State for toggling between Mission and Vision
  const [activeTab, setActiveTab] = React.useState<'mission' | 'vision'>('mission');

  // Stats data with percentage for circular progress
  const stats = [
    { icon: Briefcase, number: 100, label: "Clients Served", percentage: 80 },
    { icon: PieChart, number: 250, label: "Projects Completed", percentage: 90 },
    { icon: Users, number: 25, label: "Data Experts", percentage: 70 },
    { icon: Clock, number: 8, label: "Years of Experience", percentage: 85 },
  ];

  return (
    <>
      {/* Hero Section (Reverted to Original) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary z-0" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6">About BeamX Solutions</h1>
              <p className="text-gray-100 text-lg mb-8">
                We're passionate about helping businesses leverage data to drive growth, 
                innovation, and competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section Removed */}
      
      {/* Mission & Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Mission & Values"
            subtitle="Guided by a clear mission and strong core values, we're committed to delivering excellence in everything we do."
            center
          />
          {/* Mission/Vision Toggle */}
          <div className="mb-16 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-2 rounded-l-lg font-medium transition-colors duration-300 ${
                  activeTab === 'mission'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-2 rounded-r-lg font-medium transition-colors duration-300 ${
                  activeTab === 'vision'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Our Vision
              </button>
            </div>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-xl shadow-lg"
            >
              {activeTab === 'mission' ? (
                <p className="text-lg">
                  To empower organizations to make data-driven decisions by providing expert guidance, 
                  innovative solutions, and exceptional service that transform data into strategic business assets.
                </p>
              ) : (
                <p className="text-lg">
                  To be the global leader in data solutions, driving innovation and empowering businesses 
                  to achieve unparalleled success through the power of data.
                </p>
              )}
            </motion.div>
          </div>
          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our work, from technical implementation to client communication.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of collaboration, working closely with our clients and within our team.",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We continuously explore new technologies and methodologies to deliver innovative solutions.",
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We operate with unwavering integrity, maintaining the highest ethical standards in all our interactions.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg w-fit mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (Updated to Match Assumed Image Style with Animations) */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-24 h-24 mx-auto mb-4">
                  <CircularProgressbar
                    value={stat.percentage}
                    text={`${stat.percentage}%`}
                    styles={buildStyles({
                      textColor: "#111827",
                      pathColor: "#3B82F6",
                      trailColor: "#E5E7EB",
                      textSize: "20px",
                      pathTransitionDuration: 2,
                    })}
                  />
                </div>
                <h3 className="text-base font-medium text-gray-900">{stat.label}</h3>
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
        secondaryButtonText="Explore Services"
        secondaryButtonHref="/services"
      />
    </>
  );
};

export default AboutPage;