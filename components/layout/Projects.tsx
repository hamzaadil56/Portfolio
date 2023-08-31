import React from "react";
import styles from "./about.module.css";
import Project from "../shared/Project";
import { projects } from "@/data";
import Button from "../shared/Button";
import Link from "next/link";

const Projects = () => {
  const featuredProjects = projects.slice(0, 4);
  return (
    <div id="projects" className="md:px-20 py-20 px-4 my-4">
      <h1
        className={`${styles.about} text-gray-300  text-3xl     font-extrabold `}
      >
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-1  md:grid-cols-2 gap-4">
        {featuredProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className="mx-auto my-4 flex justify-center items-center">
        <Link href={"/projects"}>
          <Button text="View All" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
