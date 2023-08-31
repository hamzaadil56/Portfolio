import Image from "next/image";
import React from "react";
import { Project } from "./Project";
import Link from "next/link";

const ProjectCard = ({ project }: Project) => {
  return (
    <div className="relative flex flex-col  justify-between max-w-sm rounded bg-slate-800 overflow-hidden shadow-lg">
      <Image
        className="w-full basis-1/2"
        src={project.image}
        width={500}
        height={500}
        alt="project"
      />
      <Link
        target="_blank"
        href={project.websiteURL}
        className="absolute top-0 left-0 w-full h-full"
      ></Link>
      <div className="basis-1/2 justify-between flex flex-col">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-200 mb-2">
            {project.title}
          </div>
          <p className="text-gray-400 text-base">{project.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 mt-auto mb-0 ml-0 mr-0">
          {project.technologies.map((technology, index) => (
            <span
              key={index}
              className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-light text-teal-400 mr-2 mb-2"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
