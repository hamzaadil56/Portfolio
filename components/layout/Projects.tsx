"use client";

import React, { useRef, useEffect } from "react";
import styles from "./about.module.css";
import Project from "../shared/Project";
import { projects } from "@/data";
import Button from "../shared/Button";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const scrollProgress = -containerTop / containerHeight;
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const newX = scrollProgress * (projects.length - 1) * -100;
        x.set(newX);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [x]);

  return (
    <div 
      ref={containerRef}
      id="projects" 
      className="h-screen w-full overflow-hidden relative"
    >
      {/* Project Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {projects.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-500"
            animate={{
              scale: Math.abs(x.get() / 100) >= index ? 1.5 : 1,
              backgroundColor: Math.abs(x.get() / 100) >= index ? "#fff" : "#666"
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ x }}
        className="absolute top-0 left-0 h-full flex"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="h-screen w-screen flex-shrink-0 flex items-center justify-center px-4 md:px-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-7xl">
              <h1 className={`${styles.about} text-gray-300 text-3xl font-extrabold mb-8`}>
                {index === 0 ? "Featured Projects" : ""}
              </h1>
              <div className="h-[calc(100vh-200px)]">
                <Project project={project} />
              </div>
              {index === projects.length - 1 && (
                <div className="flex justify-center items-center mt-8">
                  <Link href={"/projects"}>
                    <Button text="View All" />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Scroll to navigate projects
      </motion.div>
    </div>
  );
};

export default Projects;
