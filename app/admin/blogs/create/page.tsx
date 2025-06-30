'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Plus, X, Shield, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { isAdminAuthenticated, clearAdminSession } from '@/lib/auth';

export default function AdminCreateBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    platform: '',
    date: new Date().getFullYear().toString(),
    readTime: '',
    description: '',
    tags: [] as string[],
    gradient: 'from-blue-600 to-purple-600',
    platformColor: 'text-blue-400'
  });
  const [newTag, setNewTag] = useState('');

  const gradientOptions = [
    { value: 'from-blue-600 to-purple-600', label: 'Blue to Purple' },
    { value: 'from-green-600 to-blue-600', label: 'Green to Blue' },
    { value: 'from-purple-600 to-pink-600', label: 'Purple to Pink' },
    { value: 'from-orange-600 to-red-600', label: 'Orange to Red' },
    { value: 'from-cyan-600 to-blue-600', label: 'Cyan to Blue' },
    { value: 'from-yellow-600 to-orange-600', label: 'Yellow to Orange' }
  ];

  const platformColorOptions = [
    { value: 'text-blue-400', label: 'Blue' },
    { value: 'text-green-400', label: 'Green' },
    { value: 'text-purple-400', label: 'Purple' },
    { value: 'text-orange-400', label: 'Orange' },
    { value: 'text-cyan-400', label: 'Cyan' },
    { value: 'text-yellow-400', label: 'Yellow' }
  ];

  useEffect(() => {
    // Check authentication on component mount
    const checkAuth = () => {
      if (!isAdminAuthenticated()) {
        router.push('/admin/login');
      } else {
        setAuthLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    clearAdminSession();
    router.push('/admin/login');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        router.push('/blogs');
      } else {
        alert(result.error || 'Failed to create blog');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center transition-colors duration-500">
        <div className="flex items-center gap-3 text-slate-800 dark:text-white">
          <div className="w-8 h-8 border-2 border-slate-400 dark:border-white/30 border-t-slate-800 dark:border-t-white rounded-full animate-spin" />
          <span className="text-xl">Verifying authentication...</span>
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
      </div>

      {/* Navigation */}
      <motion.nav 
        className="relative z-50 p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/blogs" className="flex items-center gap-2 text-slate-600 dark:text-white/80 hover:text-slate-800 dark:hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-300 rounded-full text-sm border border-green-400/30">
              <Shield className="w-4 h-4" />
              Admin Mode
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-600 dark:text-red-300 hover:text-red-700 dark:hover:text-red-200 rounded-lg transition-colors border border-red-400/30"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-green-500 dark:text-green-400" />
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white">
              Admin Panel
            </h1>
          </div>
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Create New Blog Post
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/70">
            Add a new blog post to your collection
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-white/50 dark:bg-slate-800/20 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-slate-800 dark:text-white font-medium mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="Enter blog title"
              />
            </div>

            {/* URL */}
            <div>
              <label htmlFor="url" className="block text-slate-800 dark:text-white font-medium mb-2">
                URL *
              </label>
              <input
                type="url"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="https://example.com/your-blog-post"
              />
            </div>

            {/* Platform and Date */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="platform" className="block text-slate-800 dark:text-white font-medium mb-2">
                  Platform *
                </label>
                <input
                  type="text"
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="e.g., Medium, Dev.to"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-slate-800 dark:text-white font-medium mb-2">
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="2024"
                />
              </div>
            </div>

            {/* Read Time */}
            <div>
              <label htmlFor="readTime" className="block text-slate-800 dark:text-white font-medium mb-2">
                Read Time
              </label>
              <input
                type="text"
                id="readTime"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="5 min read"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-slate-800 dark:text-white font-medium mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-vertical"
                placeholder="Brief description of your blog post"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-slate-800 dark:text-white font-medium mb-2">
                Tags
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1 px-4 py-2 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Add a tag"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-white rounded-lg text-sm border border-slate-300 dark:border-white/10"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-slate-500 dark:text-white/60 hover:text-slate-700 dark:hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Styling Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gradient" className="block text-slate-800 dark:text-white font-medium mb-2">
                  Gradient
                </label>
                <select
                  id="gradient"
                  name="gradient"
                  value={formData.gradient}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:border-blue-400 transition-colors"
                >
                  {gradientOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="platformColor" className="block text-slate-800 dark:text-white font-medium mb-2">
                  Platform Color
                </label>
                <select
                  id="platformColor"
                  name="platformColor"
                  value={formData.platformColor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:border-blue-400 transition-colors"
                >
                  {platformColorOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Create Blog Post
                  </>
                )}
              </button>
              
              <Link
                href="/blogs"
                className="px-6 py-3 bg-slate-200 dark:bg-slate-700/50 hover:bg-slate-300 dark:hover:bg-slate-600/50 text-slate-700 dark:text-white rounded-lg font-medium transition-colors border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20"
              >
                Cancel
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}