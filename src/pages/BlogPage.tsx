import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import CTASection from '../components/CTASection';


const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Data Analytics: Trends to Watch in 2025",
      excerpt: "Explore the emerging trends in data analytics that are shaping the future of business intelligence and decision-making.",
      image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Alex Reynolds",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Data Analytics"
    },
    {
      id: 2,
      title: "Building a Data-Driven Culture: A Comprehensive Guide",
      excerpt: "Learn how to foster a data-driven culture in your organization and empower teams to make better decisions.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Sophia Chen",
      date: "March 10, 2025",
      readTime: "10 min read",
      category: "Data Strategy"
    },
    {
      id: 3,
      title: "AI Implementation: From Theory to Practice",
      excerpt: "A practical guide to implementing AI solutions in your business, including best practices and common pitfalls to avoid.",
      image: "https://images.pexels.com/photos/8353670/pexels-photo-8353670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Marcus Johnson",
      date: "March 5, 2025",
      readTime: "12 min read",
      category: "Artificial Intelligence"
    },
    {
      id: 4,
      title: "Data Security Best Practices for Modern Businesses",
      excerpt: "Essential security measures and protocols to protect your organization's valuable data assets.",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Emma Davis",
      date: "March 1, 2025",
      readTime: "9 min read",
      category: "Data Security"
    },
    {
      id: 5,
      title: "Maximizing ROI with Business Intelligence Tools",
      excerpt: "How to select and implement the right BI tools to drive measurable business value and maximize return on investment.",
      image: "https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "James Wilson",
      date: "February 25, 2025",
      readTime: "7 min read",
      category: "Business Intelligence"
    },
    {
      id: 6,
      title: "The Role of Data Governance in Digital Transformation",
      excerpt: "Understanding the critical role of data governance in successful digital transformation initiatives.",
      image: "https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Olivia Rodriguez",
      date: "February 20, 2025",
      readTime: "11 min read",
      category: "Data Governance"
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
              <h1 className="text-white mb-6">Our Blog</h1>
              <p className="text-gray-100 text-lg mb-8">
                Insights, trends, and expert perspectives on data strategy, analytics, and AI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Latest Articles"
            subtitle="Stay up to date with the latest trends and insights in data analytics, AI, and digital transformation."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h2>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader
              title="Subscribe to Our Newsletter"
              subtitle="Get the latest insights and updates delivered straight to your inbox."
              center
            />
            
            <form className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <Button type="submit" variant="primary">
                  Subscribe
                </Button>
              </div>
            </form>
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

export default BlogPage;