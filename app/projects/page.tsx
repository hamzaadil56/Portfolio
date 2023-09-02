import React from "react";
import styles from "../../components/layout/about.module.css";
import { projects } from "@/data";
import ProjectCard from "@/components/shared/ProjectCard";

const Projects = () => {
  return (
    <div className="md:p-20 py-20 px-4">
      <h1
        className={`${styles.about} text-gray-300  text-3xl     font-extrabold `}
      >
        Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10 md:gap-8 sm:grid-cols-2 sm:gap-4 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
