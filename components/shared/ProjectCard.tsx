import Image from "next/image";
import React from "react";
import { Project } from "./Project";
import Link from "next/link";

const ProjectCard = ({ project }: Project) => {
  return (
    <div className="relative flex flex-col  justify-between  rounded bg-slate-800 overflow-hidden shadow-lg">
      <Link target="_blank" href={project.websiteURL} className="shrink-0">
        <Image
          className="w-full shrink-0"
          src={project.image}
          width={500}
          height={500}
          alt="project"
        />
      </Link>
      <div className="flex-grow justify-between flex flex-col">
        <div className="md:px-6 py-4 px-2">
          <h1 className=" text-base font-bold  md:text-xl text-gray-200 mb-2">
            {project.title}
          </h1>
          <p className="text-gray-400 md:text-base text-sm">
            {project.description}
          </p>
        </div>
        <div className="md:px-6 py-4 px-2 mt-auto mb-0 ml-0 mr-0">
          {project.technologies.map((technology, index) => (
            <span
              key={index}
              className="inline-block bg-gray-900 rounded-full px-3 py-1 text-xs md:text-sm font-light text-teal-400 mr-2 mb-2"
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
