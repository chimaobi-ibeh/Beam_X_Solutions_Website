import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, BarChart, BrainCircuit, Database, Server, Users, ArrowRight, LineChart, Shield, Zap, GitBranch, FileText } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  cta: string;
  index: number;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  benefits, 
  cta,
  index
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="py-16 border-b border-gray-200 last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex justify-center items-center h-40">
              {icon}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Key Features</h4>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3">Benefits</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-secondary bg-opacity-10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg className="h-3 w-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button href="/contact" variant="primary" icon>
            {cta}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb className="h-16 w-16 text-primary" />,
      title: "Data Strategy",
      description: "We help organizations develop comprehensive data strategies that align with their business goals and create a roadmap for data-driven transformation.",
      features: [
        "Data maturity assessment",
        "Strategic roadmap development",
        "Data architecture planning",
        "Technology stack evaluation",
        "Implementation guidance"
      ],
      benefits: [
        "Align data initiatives with business objectives",
        "Maximize ROI on data investments",
        "Create a clear path for data transformation",
        "Identify and prioritize high-impact opportunities"
      ],
      cta: "Develop Your Data Strategy"
    },
    {
      icon: <BarChart className="h-16 w-16 text-primary" />,
      title: "Business Intelligence",
      description: "Transform your raw data into actionable insights with our custom BI solutions, dashboards, and reporting tools tailored to your specific business needs.",
      features: [
        "Custom dashboard development",
        "Self-service analytics platforms",
        "Automated reporting solutions",
        "Data visualization design",
        "KPI development and tracking"
      ],
      benefits: [
        "Gain actionable insights from your data",
        "Make faster, more informed decisions",
        "Identify trends and opportunities",
        "Democratize data access across your organization"
      ],
      cta: "Explore BI Solutions"
    },
    {
      icon: <BrainCircuit className="h-16 w-16 text-primary" />,
      title: "Artificial Intelligence",
      description: "Harness the power of AI and machine learning to automate processes, predict outcomes, and gain a competitive edge in your industry.",
      features: [
        "Predictive analytics models",
        "Machine learning solutions",
        "Natural language processing",
        "Computer vision applications",
        "AI strategy and implementation"
      ],
      benefits: [
        "Automate routine tasks and processes",
        "Predict customer behavior and trends",
        "Enhance decision-making capabilities",
        "Create personalized customer experiences"
      ],
      cta: "Leverage AI for Your Business"
    },
    {
      icon: <Database className="h-16 w-16 text-primary" />,
      title: "Data Engineering",
      description: "Build robust data infrastructure and pipelines to collect, store, process, and analyze your data efficiently and securely.",
      features: [
        "Data pipeline development",
        "ETL/ELT process design",
        "Data warehouse implementation",
        "Database optimization",
        "Real-time data processing"
      ],
      benefits: [
        "Create a solid foundation for analytics",
        "Ensure data reliability and accessibility",
        "Scale your data infrastructure as you grow",
        "Reduce data processing time and costs"
      ],
      cta: "Build Your Data Infrastructure"
    },
    {
      icon: <Server className="h-16 w-16 text-primary" />,
      title: "Cloud Solutions",
      description: "Migrate your data and analytics to the cloud for greater scalability, flexibility, and cost-effectiveness.",
      features: [
        "Cloud migration strategy",
        "Multi-cloud architecture",
        "Cloud data warehouse setup",
        "Serverless analytics solutions",
        "Cost optimization"
      ],
      benefits: [
        "Increase scalability and flexibility",
        "Reduce infrastructure costs",
        "Improve accessibility and collaboration",
        "Enhance security and disaster recovery"
      ],
      cta: "Move to the Cloud"
    },
    {
      icon: <Shield className="h-16 w-16 text-primary" />,
      title: "Data Governance",
      description: "Implement frameworks and processes to ensure data quality, security, privacy, and regulatory compliance across your organization.",
      features: [
        "Data governance frameworks",
        "Data quality management",
        "Security and access controls",
        "Compliance solutions (GDPR, CCPA, etc.)",
        "Data lineage and metadata management"
      ],
      benefits: [
        "Ensure regulatory compliance",
        "Improve data quality and reliability",
        "Enhance data security and privacy",
        "Build trust with customers and stakeholders"
      ],
      cta: "Strengthen Your Data Governance"
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
      
      {/* Services Overview */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="How We Can Help You"
            subtitle="At BeamX Solutions, we offer a comprehensive suite of data services to help you unlock the full potential of your data assets."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Lightbulb, title: "Data Strategy" },
              { icon: BarChart, title: "Business Intelligence" },
              { icon: BrainCircuit, title: "Artificial Intelligence" },
              { icon: Database, title: "Data Engineering" },
              { icon: Server, title: "Cloud Solutions" },
              { icon: Shield, title: "Data Governance" },
              { icon: Zap, title: "Process Automation" },
              { icon: LineChart, title: "Advanced Analytics" },
              { icon: Users, title: "Data Culture" },
              { icon: GitBranch, title: "Data Integration" },
              { icon: FileText, title: "Reporting Solutions" },
              { icon: Users, title: "Training & Support" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="bg-primary bg-opacity-10 p-4 rounded-full mx-auto w-fit mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      <section className="bg-white">
        <div className="container-custom">
          {services.map((service, index) => (
            <ServiceDetail
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              benefits={service.benefits}
              cta={service.cta}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Approach"
            subtitle="We follow a proven methodology to deliver results that drive real business value."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                number: "01",
                title: "Discover",
                description: "We start by understanding your business goals, challenges, and current data landscape."
              },
              {
                number: "02",
                title: "Strategize",
                description: "We develop a tailored strategy and roadmap aligned with your specific business objectives."
              },
              {
                number: "03",
                title: "Implement",
                description: "Our team of experts brings the strategy to life with technical excellence and attention to detail."
              },
              {
                number: "04",
                title: "Optimize",
                description: "We continuously refine and improve solutions based on results and changing business needs."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -top-5 -left-5 bg-primary text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
                title="Ready to Get Started?"
                subtitle="Contact us today to discuss how we can help you unlock the full potential of your data."
                center
                light
              />
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="white" icon>
                  Contact Us
                </Button>
                <Button 
                  href="/case-studies" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-primary"
                  icon
                >
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;