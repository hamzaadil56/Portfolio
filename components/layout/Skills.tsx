import React from "react";
import { skills } from "@/data";
import Image from "next/image";
import styles from "./about.module.css";

const Skills = () => {
  return (
    <div id="skills" className="px-4 md:px-20 my-10">
      <h1
        className={`${styles.about} text-gray-300  text-3xl      font-extrabold `}
      >
        Skills
      </h1>
      <div className="py-10 grid grid-rows-1 gap-10 md:grid-cols-[repeat(8,auto)] grid-cols-[repeat(4,auto)]">
        {skills.map((skill, index) => (
          <div key={index}>
            {" "}
            <Image src={skill.logo} alt={skill.skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
