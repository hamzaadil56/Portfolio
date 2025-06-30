'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, ExternalLink, Building } from 'lucide-react';
import Link from 'next/link';
import ResponsiveNav from '@/components/ui/responsive-nav';

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Mahaana",
      period: "Jan 2025 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading frontend development and system optimization for Pakistan's first digital Asset Management Company.",
      achievements: [
        "Led frontend development of a customer portal based on React.js with a focus on performance and scalability",
        "Resolved critical issues in a Blazor Server-based corporate portal to improve stability",
        "Refactored .NET Core microservice APIs to fix bugs and enhance maintainability"
      ],
      technologies: ["React.js", "Blazor", ".NET Core", "Microservices", "Azure"],
      companyInfo: "YC W22 - Pakistan's first digital Asset Management Company"
    },
    {
      title: "Full Stack Engineer",
      company: "mParsec",
      period: "Sept 2023 - Jan 2025",
      location: "Remote",
      type: "Full-time",
      description: "Developed full-stack applications and AI-powered solutions for multiple clients.",
      achievements: [
        "Built frontend web applications using React.js with modern UI/UX practices",
        "Developed cloud-native solutions with AWS Amplify and .NET Core Lambda functions",
        "Collaborated with designers and stakeholders to deliver robust, user-friendly features",
        "Initiated and constructed Automily, a platform leveraging OpenAI LLMs and FastAPI to automate software quality assurance workflows using Generative AI"
      ],
      technologies: ["React.js", "AWS Amplify", ".NET Core", "Lambda", "OpenAI", "FastAPI", "Python"],
      companyInfo: "Technology consulting company specializing in cloud solutions"
    },
    {
      title: "Full Stack Developer Intern",
      company: "Panacloud Pvt. Ltd.",
      period: "Apr 2023 - June 2023",
      location: "Karachi, Pakistan",
      type: "Internship",
      description: "Contributed to high-impact government projects and gained hands-on experience in full-stack development.",
      achievements: [
        "Assisted in backend development and database management for the Governor Sindh Initiative project",
        "Contributed to a platform that successfully registered 500,000+ students",
        "Worked with Next.js 13 framework and PostgreSQL database",
        "Gained experience in agile development methodologies and team collaboration"
      ],
      technologies: ["Next.js", "PostgreSQL", "Node.js", "React.js"],
      companyInfo: "Leading software development company in Pakistan"
    }
  ];

  const education = {
    degree: "Bachelor of Engineering in Chemical Engineering",
    university: "NED University of Engineering and Technology",
    period: "Sep 2019 - Aug 2023",
    gpa: "3.20 CGPA",
    location: "Karachi, Pakistan",
    coursework: [
      "Computer Programming & Drafting (CPD)",
      "Calculus",
      "Advanced Calculus & Linear Algebra",
      "Process Control & Instrumentation",
      "Data Structures and Algorithms"
    ]
  };

  const achievements = [
    {
      title: "Top 10 at BWAI Hackathon",
      organization: "GDGKolachi",
      description: "Pitched 'EQ Mentor', a Generative AI-powered personalized mentor, securing a top 10 spot and earning the Mentor title.",
      year: "2024"
    },
    {
      title: "International Recognition",
      organization: "lablab.ai",
      description: "Received international appreciation from lablab.ai Grants Manager and Technical Mentor for ResearchMind: AI-Powered Project Mentor for Research Mastery.",
      year: "2024"
    },
    {
      title: "Freelance Success",
      organization: "Independent",
      description: "Successfully delivered freelance projects with 99.9% client satisfaction across multiple domains.",
      year: "2023-2024"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
        currentPath="/experience"
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
            Professional
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent gradient-text-fix">
              Experience
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/70 max-w-3xl mx-auto">
            A journey through my professional growth in software engineering, from internships to leading 
            full-stack development at innovative companies.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.section 
          className="mb-16 md:mb-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 md:mb-12 flex items-center gap-3 heading-fix"
            variants={fadeInUp}
          >
            <Building className="w-6 md:w-8 h-6 md:h-8 text-blue-500 dark:text-blue-400" />
            Work Experience
          </motion.h2>
          
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2 heading-fix">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                      <span className="text-blue-500 dark:text-blue-400 text-base md:text-lg font-medium">{exp.company}</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-white/70 mb-4 text-sm md:text-base">{exp.companyInfo}</p>
                  </div>
                  <div className="lg:text-right">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-white/60 mb-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-white/60 text-sm">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-700 dark:text-white/80 mb-6 text-sm md:text-base">{exp.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-slate-800 dark:text-white font-semibold mb-3 text-sm md:text-base heading-fix">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-slate-600 dark:text-white/70 text-sm">
                        <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-slate-800 dark:text-white font-semibold mb-3 text-sm md:text-base heading-fix">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 md:px-3 py-1 bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-white/80 rounded-lg text-xs md:text-sm border border-slate-300 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section 
          className="mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 md:mb-12 flex items-center gap-3 heading-fix"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm md:text-base">
              📚
            </div>
            Education
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-purple-400/30 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2 heading-fix">{education.degree}</h3>
                <div className="text-purple-500 dark:text-purple-400 text-base md:text-lg font-medium mb-4">{education.university}</div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-white/60 mb-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  {education.location}
                </div>
              </div>
              <div className="lg:text-right">
                <div className="flex items-center gap-2 text-slate-500 dark:text-white/60 mb-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </div>
                <div className="text-slate-800 dark:text-white font-semibold">{education.gpa}</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-slate-800 dark:text-white font-semibold mb-3 text-sm md:text-base heading-fix">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <span
                    key={index}
                    className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-300 rounded-lg text-xs md:text-sm border border-purple-400/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 md:mb-12 flex items-center gap-3 heading-fix"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🏆 Achievements & Recognition
          </motion.h2>
          
          <div className="grid gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-xl p-4 md:p-6 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white heading-fix">{achievement.title}</h3>
                  <span className="text-yellow-500 dark:text-yellow-400 font-medium text-sm">{achievement.year}</span>
                </div>
                <div className="text-yellow-500 dark:text-yellow-400 font-medium mb-2 text-sm md:text-base">{achievement.organization}</div>
                <p className="text-slate-600 dark:text-white/70 text-sm md:text-base">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}