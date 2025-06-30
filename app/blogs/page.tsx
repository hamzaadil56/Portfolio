'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Clock, Tag, Loader2 } from 'lucide-react';
import Link from 'next/link';
import ResponsiveNav from '@/components/ui/responsive-nav';

interface Blog {
  id: string;
  title: string;
  url: string;
  platform: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  gradient: string;
  platformColor: string;
  createdAt: string;
  updatedAt: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/blogs');
      const result = await response.json();
      
      if (result.success) {
        setBlogs(result.data);
      } else {
        setError(result.error || 'Failed to fetch blogs');
      }
    } catch (err) {
      setError('Failed to fetch blogs');
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center transition-colors duration-500">
        <div className="flex items-center gap-3 text-slate-800 dark:text-white">
          <Loader2 className="w-8 h-8 animate-spin" />
          <span className="text-xl">Loading blogs...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center transition-colors duration-500">
        <div className="text-center">
          <div className="text-red-500 dark:text-red-400 text-xl mb-4">Error: {error}</div>
          <button 
            onClick={fetchBlogs}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Navigation */}
      <ResponsiveNav 
        backLink={{
          href: '/',
          label: 'Back to Home',
          icon: <ArrowLeft className="w-5 h-5" />
        }}
        currentPath="/blogs"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4 md:mb-6 heading-fix">
            My
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent gradient-text-fix">
              Blog Posts
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/70 max-w-3xl mx-auto">
            Sharing insights about programming, AI, and technology through detailed articles 
            and tutorials on various platforms.
          </p>
        </motion.div>

        {/* Blog Posts */}
        {blogs.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-slate-500 dark:text-white/60 text-xl mb-4">No blogs found</div>
            <p className="text-slate-400 dark:text-white/50">Check back soon for new blog posts!</p>
          </motion.div>
        ) : (
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group bg-white/50 dark:bg-slate-800/20 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:border-blue-400/30 transition-all duration-500"
              >
                <div className="p-6 md:p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${blog.gradient} bg-opacity-20 ${blog.platformColor} rounded-full text-sm font-medium`}>
                          {blog.platform}
                        </span>
                        <div className="flex items-center gap-3 md:gap-4 text-slate-500 dark:text-white/60 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {blog.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {blog.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors heading-fix">
                        {blog.title}
                      </h2>
                      
                      <p className="text-slate-600 dark:text-white/70 mb-6 leading-relaxed text-base md:text-lg">
                        {blog.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {blog.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="flex items-center gap-1 px-3 py-1 bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-white/80 rounded-lg text-sm border border-slate-300 dark:border-white/10"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read Article Button */}
                      <div>
                        <a
                          href={blog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 bg-gradient-to-r ${blog.gradient} hover:shadow-lg hover:shadow-blue-500/25 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm md:text-base`}
                        >
                          Read Full Article
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 md:mt-20 py-12 md:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 md:mb-6 heading-fix"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Want to Discuss These Topics?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-slate-600 dark:text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I love discussing technology, AI, and programming. Feel free to reach out if you'd like to chat about any of these topics!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:hamzaadil56@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
            >
              Get In Touch
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}