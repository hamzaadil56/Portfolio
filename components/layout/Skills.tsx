"use client";

import React from "react";
import { skills } from "@/data";
import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="px-4 md:px-20 py-20 my-10">
      <h1
        className={`${styles.about} text-gray-300  text-3xl      font-extrabold `}
      >
        Skills
      </h1>
      <div className="py-10 grid grid-rows-1 gap-10 md:grid-cols-[repeat(8,auto)] grid-cols-[repeat(4,auto)]">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            key={index}
          >
            {" "}
            <Image src={skill.logo} alt={skill.skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
