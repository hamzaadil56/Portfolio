import React from "react";
import styles from "./about.module.css";
import Project from "../shared/Project";
import { projects } from "@/data";

const Projects = () => {
  return (
    <div id="projects" className="md:px-20 px-4">
      <h1
        className={`${styles.about} text-gray-300  text-3xl     font-extrabold `}
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-1  md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
