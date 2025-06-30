'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Code, GraduationCap, Heart, Lightbulb, Rocket, Users } from 'lucide-react';
import Link from 'next/link';
import ResponsiveNav from '@/components/ui/responsive-nav';

export default function About() {
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

  const values = [
    {
      icon: Code,
      title: "Continuous Learning",
      description: "Always exploring new technologies and pushing the boundaries of what's possible."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believing that the best solutions come from diverse minds working together."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Turning creative ideas into practical solutions that make a real impact."
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Bringing enthusiasm and dedication to every project and challenge."
    }
  ];

  const journey = [
    {
      year: "2019",
      title: "Started Chemical Engineering",
      description: "Began my bachelor's degree at NED University, diving into the world of chemical processes and engineering principles."
    },
    {
      year: "2020",
      title: "COVID & The Programming Discovery",
      description: "When the pandemic hit during my 2nd year, I discovered programming. What started as curiosity quickly became a passion that would change my entire career trajectory."
    },
    {
      year: "2021-2023",
      title: "Dual Journey",
      description: "Balanced my chemical engineering studies while diving deep into programming, learning web development, and building my first projects."
    },
    {
      year: "2023",
      title: "Professional Transition",
      description: "Graduated with my engineering degree and fully transitioned into software development, starting my career at Panacloud."
    },
    {
      year: "2024-Present",
      title: "Full Stack Engineer",
      description: "Now working with cutting-edge technologies, building AI-powered solutions, and contributing to innovative projects at leading companies."
    }
  ];

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
        currentPath="/about"
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
            About
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent gradient-text-fix">
              Muhammad Hamza
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/70 max-w-3xl mx-auto">
            From Chemical Engineering to Full Stack Development - A journey of passion, 
            discovery, and continuous learning.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section 
          className="mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/50 dark:bg-slate-800/20 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <Rocket className="w-6 md:w-8 h-6 md:h-8 text-blue-500 dark:text-blue-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white heading-fix">My Journey</h2>
            </div>
            
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-white/80 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                My story begins in 2019 when I started my bachelor's degree in Chemical Engineering at NED University of Engineering and Technology. Like many engineering students, I was fascinated by the complexity of chemical processes and the science behind industrial systems.
              </p>
              
              <p className="text-slate-700 dark:text-white/80 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                But then came 2020, and with it, the global pandemic that changed everything. During my second year of engineering, as the world went into lockdown and classes moved online, I found myself with unexpected free time and a curious mind. That's when I stumbled upon programming.
              </p>
              
              <p className="text-slate-700 dark:text-white/80 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                What started as a casual exploration quickly became an obsession. I was captivated by the power of code - the ability to create something from nothing, to solve problems with logic and creativity, and to build applications that could impact people's lives. The more I learned, the more I realized that this was my true calling.
              </p>
              
              <p className="text-slate-700 dark:text-white/80 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                The next few years were a balancing act. By day, I was studying chemical engineering - learning about thermodynamics, process control, and reactor design. By night, I was diving deep into JavaScript, React, and web development. I was living in two worlds, but I knew which one felt like home.
              </p>
              
              <p className="text-slate-700 dark:text-white/80 text-base md:text-lg leading-relaxed">
                After graduating with my engineering degree in 2023, I made the leap into software development full-time. Since then, I've been fortunate to work on incredible projects, from AI-powered platforms to large-scale web applications, always pushing myself to learn and grow. Today, I'm a Full Stack Engineer who brings the analytical thinking of an engineer and the creative problem-solving of a developer to every project I touch.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section 
          className="mb-16 md:mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 md:mb-12 flex items-center gap-3 heading-fix"
            variants={fadeInUp}
          >
            <GraduationCap className="w-6 md:w-8 h-6 md:h-8 text-purple-500 dark:text-purple-400" />
            Timeline
          </motion.h2>
          
          <div className="space-y-6 md:space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex gap-4 md:gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  {index < journey.length - 1 && (
                    <div className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-blue-400/50 to-transparent mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-6 md:pb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 mb-2">
                    <span className="text-blue-500 dark:text-blue-400 font-bold text-base md:text-lg">{item.year}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-white heading-fix">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-white/70 text-sm md:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="mb-16 md:mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 md:mb-12 text-center heading-fix"
            variants={fadeInUp}
          >
            What Drives Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white/50 dark:bg-slate-800/20 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-xl p-4 md:p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <value.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-white heading-fix">{value.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-white/70 text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div 
          className="text-center py-12 md:py-16"
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
            Let's Connect and Create Something Amazing
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-slate-600 dark:text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Whether you want to discuss technology, collaborate on a project, or just say hello, 
            I'd love to hear from you.
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
              <Heart className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}