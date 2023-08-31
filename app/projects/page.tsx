import React from "react";
import styles from "../../components/layout/about.module.css";
import { projects } from "@/data";
import ProjectCard from "@/components/shared/ProjectCard";

const Projects = () => {
  return (
    <div className="p-20">
      <h1
        className={`${styles.about} text-gray-300  text-3xl     font-extrabold `}
      >
        Projects
      </h1>
      <div className="grid grid-cols-3 py-10 gap-8 justify-items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
