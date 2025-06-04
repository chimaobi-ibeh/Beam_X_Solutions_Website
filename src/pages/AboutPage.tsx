import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Clock, Target, Shield, PieChart, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
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
              <h1 className="text-white mb-6">About BeamX Solutions</h1>
              <p className="text-gray-100 text-lg mb-8">
                We're passionate about helping businesses leverage data to drive growth, 
                innovation, and competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="BeamX team collaboration"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                title="Our Story"
                subtitle="From our humble beginnings to becoming a trusted data partner for businesses across industries."
              />
              
              <p className="text-gray-600 mb-6">
                Founded in 2015, BeamX Solutions began with a simple mission: to help businesses unlock 
                the full potential of their data. Our founders recognized that while many organizations 
                were collecting vast amounts of data, few were effectively using it to drive strategic 
                decision-making and create competitive advantage.
              </p>
              
              <p className="text-gray-600 mb-6">
                Over the years, we've grown from a small team of data enthusiasts into a comprehensive 
                data solutions provider with expertise spanning data strategy, business intelligence, 
                artificial intelligence, and more. Throughout our journey, we've remained committed to 
                our core values of excellence, innovation, and client success.
              </p>
              
              <p className="text-gray-600 mb-8">
                Today, we're proud to serve clients across various industries, helping them navigate 
                the complexities of the data landscape and transform their data into valuable business assets.
              </p>
              
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="CEO"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Alex Reynolds</p>
                  <p className="text-primary">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Mission & Values"
            subtitle="Guided by a clear mission and strong core values, we're committed to delivering excellence in everything we do."
            center
          />
          
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower organizations to make data-driven decisions by providing expert guidance, 
                innovative solutions, and exceptional service that transform data into strategic business assets.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our work, from technical implementation to client communication."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of collaboration, working closely with our clients and within our team."
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We continuously explore new technologies and methodologies to deliver innovative solutions."
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We operate with unwavering integrity, maintaining the highest ethical standards in all our interactions."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
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
      
      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Meet Our Team"
            subtitle="Our diverse team of experts brings together years of experience in data science, engineering, analytics, and business strategy."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Reynolds",
                role: "Founder & CEO",
                image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "With over 15 years in data analytics and business intelligence, Alex founded BeamX to help businesses harness the power of their data."
              },
              {
                name: "Sophia Chen",
                role: "Chief Data Scientist",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Sophia leads our data science team, bringing expertise in machine learning, AI, and predictive analytics to solve complex business problems."
              },
              {
                name: "Marcus Johnson",
                role: "Head of Data Engineering",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Marcus specializes in building robust data infrastructure and pipelines that form the foundation of effective data strategies."
              },
              {
                name: "Olivia Rodriguez",
                role: "Director of BI Solutions",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Olivia excels at translating complex data into actionable business insights through powerful visualization and reporting solutions."
              },
              {
                name: "James Wilson",
                role: "Cloud Solutions Architect",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "James designs and implements scalable cloud-based data solutions that drive efficiency and performance for our clients."
              },
              {
                name: "Emma Davis",
                role: "Data Governance Specialist",
                image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Emma ensures data quality, security, and compliance, helping clients establish robust governance frameworks."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Briefcase,
                number: "100+",
                label: "Clients Served"
              },
              {
                icon: PieChart,
                number: "250+",
                label: "Projects Completed"
              },
              {
                icon: Users,
                number: "25+",
                label: "Data Experts"
              },
              {
                icon: Clock,
                number: "8+",
                label: "Years of Experience"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary bg-opacity-10 p-4 rounded-full mx-auto w-fit mb-6">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
                title="Ready to Work With Us?"
                subtitle="Let's discuss how BeamX Solutions can help you transform your data into a strategic asset."
                center
                light
              />
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="white" icon>
                  Get in Touch
                </Button>
                <Button 
                  href="/services" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-primary"
                  icon
                >
                  Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;