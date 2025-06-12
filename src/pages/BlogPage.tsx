import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

const BlogPage: React.FC = () => {
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Is Your Data Working for You? How to Spot the Hidden Gaps in Your Analytics Ecosystem",
      excerpt: "In the age of digital acceleration, data is currency. But too often, businesses are sitting on mountains of data that offer little insight.",
      image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "BeamX Solutions",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Analytics Strategy",
      fullContent: (
        <>
          <p className="mb-4">
            In the age of digital acceleration, data is currency. But too often, businesses are sitting on mountains of data that offer very little insight. Why? Because their analytics ecosystem is fragmented, inconsistent, or just plain broken.
          </p>
          <h3 className="text-lg font-semibold mb-2">What Does a Broken Analytics Ecosystem Look Like?</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Metrics mean different things in different departments.</li>
            <li>Reports take days to produce and still raise more questions than answers.</li>
            <li>Data pipelines fail silently or deliver outdated information.</li>
            <li>Dashboards are cluttered, underused, or simply wrong.</li>
          </ul>
          <p className="mb-4">
            These are symptoms of a deeper problem: lack of data trust. When people don't trust the numbers, they don't act on them. And when that happens, the entire analytics operation loses credibility.
          </p>
          <h3 className="text-lg font-semibold mb-2">The Cost of Not Knowing</h3>
          <p className="mb-4">
            When data doesn't flow correctly, decisions suffer. Teams waste time reconciling reports. Opportunities get missed. And leadership can't move with clarity. According to Gartner, poor data quality costs organizations an average of $12.9 million per year.
          </p>
          <p className="mb-4">
            Analytics teams are often stuck firefighting, patching pipelines, fixing reports, justifying numbers, instead of delivering insights. This leads to fatigue, inefficiency, and strategic misalignment.
          </p>
          <h3 className="text-lg font-semibold mb-2">What an Analytics Audit Uncovers</h3>
          <p className="mb-4">
            A structured audit evaluates your entire data workflow. It identifies:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Inconsistent definitions and ties across teams</li>
            <li>Pipeline bottlenecks and system inefficiencies</li>
            <li>Underutilized tools or siloed platforms</li>
            <li>Skill gaps and ownership ambiguities</li>
          </ul>
          <p className="mb-4">
            You may discover that your metrics don't align with business goals, or that your "real-time" dashboard is operating on a 24-hour delay. An audit makes the invisible visible.
          </p>
          <h3 className="text-lg font-semibold mb-2">A Quick Self-Assessment Checklist</h3>
          <p className="mb-4">
            Ask yourself and your team:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Do we trust the reports we use?</li>
            <li>Are metrics consistent across departments?</li>
            <li>Is our data timely and relevant?</li>
            <li>Can our decision-makers access data independently?</li>
          </ul>
          <p className="mb-4">
            If you answered "no" to any of the above, your analytics ecosystem needs a tune-up.
          </p>
          <h3 className="text-lg font-semibold mb-2">Let's Fix the Foundation</h3>
          <p className="mb-4">
            Your analytics strategy is only as strong as the foundation it's built on. An analytics audit is the fastest way to see what's working, what's broken, and what needs to evolve. It's not about blame, it's about progress.
          </p>
          <p className="mb-4">
            With a clear roadmap, your team can refocus on what really matters: driving business outcomes through smart, data-driven decisions.
          </p>
        </>
      ),
      authorDetails: {
        name: "BeamX Solutions",
        website: "https://beamxsolutions.com",
        description: "We are a strategic analytics partner supporting business growth through data-backed insights.",
      },
    },
    // Add more posts here in the future
  ];

  const togglePost = (id: number) => {
    setExpandedPostId(prev => (prev === id ? null : id));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-36 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary bg-opacity-75 z-0" />
        <div className="container custom mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6">Our Blog</h1>
              <p className="text-gray-100 text-lg mb-8">
                Insights, trends, and expert perspectives on data analytics, strategy, and AI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-white">
        <div className="container custom mx-auto">
          <SectionHeader
            title="Latest Insights"
            subtitle="Stay up to date with the latest trends and insights in data analytics, AI, and digital transformation."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-4">
                  <h2
                    className="text-lg font-semibold mb-2 hover:text-primary transition-colors cursor-pointer line-clamp-2"
                    onClick={() => togglePost(post.id)}
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500 space-x-3 mb-3">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <button
                    onClick={() => togglePost(post.id)}
                    className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                  >
                    {expandedPostId === post.id ? 'Read Less' : 'Read More'}
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: expandedPostId === post.id ? 'auto' : 0, opacity: expandedPostId === post.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 prose prose-sm max-w-prose mx-auto px-4">
                      {post.fullContent}
                      <hr className="my-4" />
                      <h3 className="text-lg font-semibold mb-2">About the Author</h3>
                      <p className="mb-1">
                        <strong>{post.authorDetails.name}</strong>
                      </p>
                      <p className="mb-1">
                        <a
                          href={post.authorDetails.website}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.authorDetails.website}
                        </a>
                      </p>
                      <p className="mb-4">{post.authorDetails.description}</p>
                      <hr className="my-4" />
                      <h3 className="text-lg font-semibold mb-2">Leave a Comment</h3>
                      <div className="max-w-lg mx-auto">
                        <form className="space-y-3">
                          <div>
                            <label htmlFor={`comment-${post.id}`} className="block text-xs font-medium text-gray-700">
                              Comment *
                            </label>
                            <textarea
                              id={`comment-${post.id}`}
                              name="comment"
                              rows={3}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm"
                              required
                            ></textarea>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label htmlFor={`name-${post.id}`} className="block text-xs font-medium text-gray-700">
                                Name *
                              </label>
                              <input
                                type="text"
                                id={`name-${post.id}`}
                                name="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor={`email-${post.id}`} className="block text-xs font-medium text-gray-700">
                                Email *
                              </label>
                              <input
                                type="email"
                                id={`email-${post.id}`}
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor={`website-${post.id}`} className="block text-xs font-medium text-gray-700">
                              Website
                            </label>
                            <input
                              type="url"
                              id={`website-${post.id}`}
                              name="website"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm"
                            />
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id={`save-${post.id}`}
                              name="checkbox"
                              className="h-3 w-3 text-primary focus:ring-primary border-gray-300 rounded"
                            />
                            <label htmlFor={`save-${post.id}`} className="ml-2 block text-xs text-gray-700">
                              Save my name, email, and website in this browser for the next time I comment.
                            </label>
                          </div>
                          <Button type="submit" variant="primary" className="text-sm">
                            Submit
                          </Button>
                        </form>
                      </div>
                      <hr className="my-4" />
                      <p className="text-xs text-gray-500 text-center">
                        BeamX Solutions (2025) All rights reserved
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-gray-50">
        <div className="container custom mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader
              title="Subscribe to Our Newsletter"
              subtitle="Get our latest insights and updates delivered straight to your inbox."
              center
            />
            <form className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
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