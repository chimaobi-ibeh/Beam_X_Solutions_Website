import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import CaseStudyCard from '../components/common/CaseStudyCard';
import Button from '../components/common/Button';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Retail Analytics Transformation",
      category: "Business Intelligence",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "How we helped a national retail chain leverage their data to increase sales by 28% and improve inventory management.",
      clientName: "National Retail Group",
      clientIndustry: "Retail",
      challenge: "The client was struggling with fragmented data across multiple systems, making it difficult to gain unified insights into sales patterns, inventory levels, and customer behavior.",
      solution: "We implemented a comprehensive BI solution that integrated data from POS systems, e-commerce platforms, inventory management, and CRM into a unified dashboard.",
      results: [
        "28% increase in sales through data-driven merchandising decisions",
        "35% reduction in stockouts and overstock situations",
        "18% improvement in customer retention through personalized marketing",
        "40% faster reporting and decision-making processes"
      ],
      testimonial: {
        quote: "BeamX Solutions transformed our approach to data. We now have real-time insights that drive our decision-making and have seen tangible improvements across all key metrics.",
        author: "Sarah Johnson",
        position: "VP of Operations"
      }
    },
    {
      id: 2,
      title: "AI-Powered Customer Insights",
      category: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/8353670/pexels-photo-8353670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Developing an AI solution for a financial services firm to predict customer needs and personalize services.",
      clientName: "Global Financial Services",
      clientIndustry: "Financial Services",
      challenge: "The client needed to better understand customer needs and behavior to provide more personalized services and improve customer satisfaction in a highly competitive market.",
      solution: "We developed an AI-powered customer analytics platform that uses machine learning to predict customer needs, identify cross-selling opportunities, and personalize communication.",
      results: [
        "42% increase in successful cross-selling and up-selling",
        "30% improvement in customer satisfaction scores",
        "25% reduction in customer churn",
        "15% increase in lifetime customer value"
      ],
      testimonial: {
        quote: "The AI solution from BeamX has given us insights into our customers that we never had before. We're now able to anticipate needs and provide truly personalized service.",
        author: "Michael Chen",
        position: "Chief Customer Officer"
      }
    },
    {
      id: 3,
      title: "Healthcare Data Integration",
      category: "Data Engineering",
      image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Creating a unified data platform for a healthcare network to improve patient care and operational efficiency.",
      clientName: "Regional Healthcare Network",
      clientIndustry: "Healthcare",
      challenge: "The healthcare network was struggling with siloed data across multiple facilities, making it difficult to coordinate patient care and analyze outcomes effectively.",
      solution: "We designed and implemented a secure, HIPAA-compliant data integration platform that unified patient records, treatment data, billing information, and operational metrics.",
      results: [
        "22% reduction in administrative overhead",
        "15% improvement in patient outcomes through better care coordination",
        "33% faster access to critical patient information",
        "45% more efficient reporting for regulatory compliance"
      ],
      testimonial: {
        quote: "The data integration platform has transformed how we deliver care. Our physicians now have immediate access to complete patient information, allowing for better, more coordinated treatment.",
        author: "Dr. Amanda Rodriguez",
        position: "Chief Medical Officer"
      }
    },
    {
      id: 4,
      title: "Manufacturing Process Optimization",
      category: "Advanced Analytics",
      image: "https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Using advanced analytics to optimize production processes and reduce costs for a manufacturing company.",
      clientName: "Precision Manufacturing Inc.",
      clientIndustry: "Manufacturing",
      challenge: "The client was experiencing inconsistent product quality and high operational costs due to inefficiencies in their manufacturing processes.",
      solution: "We deployed IoT sensors throughout the production line and developed an advanced analytics platform to monitor performance, predict maintenance needs, and optimize process parameters.",
      results: [
        "32% reduction in production defects",
        "25% decrease in energy consumption",
        "40% reduction in unplanned downtime",
        "18% overall increase in operational efficiency"
      ],
      testimonial: {
        quote: "The advanced analytics solution from BeamX has completely transformed our production floor. We've significantly reduced costs while improving quality and throughput.",
        author: "James Wilson",
        position: "Director of Operations"
      }
    },
    {
      id: 5,
      title: "E-commerce Data Strategy",
      category: "Data Strategy",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Developing a comprehensive data strategy for a growing e-commerce platform to drive growth and improve customer experience.",
      clientName: "Urban Market Online",
      clientIndustry: "E-commerce",
      challenge: "The rapidly growing e-commerce company lacked a cohesive approach to collecting, managing, and utilizing their data assets, limiting their ability to scale effectively.",
      solution: "We created a comprehensive data strategy and roadmap, implementing data governance practices, customer analytics capabilities, and an integrated data platform.",
      results: [
        "45% increase in conversion rates through data-driven optimization",
        "30% improvement in customer retention",
        "50% more effective marketing spend allocation",
        "28% increase in average order value"
      ],
      testimonial: {
        quote: "BeamX helped us transform from a data-reactive to a data-driven organization. Their strategic approach has been fundamental to our growth and competitive advantage.",
        author: "Emily Thompson",
        position: "CEO"
      }
    },
    {
      id: 6,
      title: "Supply Chain Visibility",
      category: "Business Intelligence",
      image: "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Creating end-to-end supply chain visibility for a global logistics company to improve efficiency and resilience.",
      clientName: "Global Logistics Solutions",
      clientIndustry: "Logistics",
      challenge: "The client lacked visibility across their complex global supply chain, resulting in inefficiencies, delays, and difficulty responding to disruptions.",
      solution: "We developed a real-time supply chain visibility platform that integrates data from suppliers, warehouses, transportation, and customers into an interactive dashboard.",
      results: [
        "38% reduction in transit times",
        "25% decrease in inventory holding costs",
        "42% improvement in on-time deliveries",
        "30% faster response to supply chain disruptions"
      ],
      testimonial: {
        quote: "The supply chain visibility platform has been transformative. We now have real-time insights into every aspect of our operations, allowing us to make faster, better decisions.",
        author: "Robert Martinez",
        position: "SVP of Supply Chain"
      }
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
              <h1 className="text-white mb-6">Case Studies</h1>
              <p className="text-gray-100 text-lg mb-8">
                Explore how we've helped businesses across industries transform their data into 
                strategic assets and achieve measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Success Stories"
            subtitle="See how we've helped organizations across various industries solve their data challenges and achieve meaningful business outcomes."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.id}
                image={caseStudy.image}
                title={caseStudy.title}
                category={caseStudy.category}
                description={caseStudy.description}
                link={`/case-studies#case-${caseStudy.id}`}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Case Studies */}
      {caseStudies.map((caseStudy) => (
        <section 
          key={caseStudy.id} 
          id={`case-${caseStudy.id}`} 
          className={`section ${caseStudy.id % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: caseStudy.id % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={caseStudy.id % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: caseStudy.id % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={caseStudy.id % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}
              >
                <div className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {caseStudy.category}
                </div>
                <h2 className="text-3xl font-semibold mb-4">{caseStudy.title}</h2>
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                
                <div className="mb-6">
                  <p className="text-gray-900 font-medium">{caseStudy.clientName}</p>
                  <p className="text-gray-600">{caseStudy.clientIndustry}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
                  <p className="text-gray-600">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-600">{caseStudy.solution}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Results</h3>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-success bg-opacity-10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                          <svg className="h-3 w-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 italic mb-4">"{caseStudy.testimonial.quote}"</p>
                  <p className="font-semibold text-gray-900">{caseStudy.testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{caseStudy.testimonial.position}, {caseStudy.clientName}</p>
                </div>
                
                <Button href="/contact" variant="primary" icon>
                  Discuss Your Project
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
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
                title="Ready to Achieve Similar Results?"
                subtitle="Let's discuss how we can help you transform your data into a strategic asset and drive measurable business outcomes."
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
                  Explore Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;