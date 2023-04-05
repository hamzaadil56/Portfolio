"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import GithubIcon from "@/assets/icons/github.svg";
import LinkIcon from "@/assets/icons/link.svg";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  websiteURL: string;
}

const Project = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="my-10 bg-slate-800  xl:bg-transparent grid md:grid-cols-1 xl:grid-cols-2 xl:gap-6 md:items-end xl:items-stretch rounded-md"
    >
      <div className=" flex relative rounded-md cursor-pointer xl:shadow-md">
        <Image
          src={project.image}
          width={500}
          height={500}
          className="w-full h-full rounded-md"
          alt="project-image"
          style={{ objectFit: "cover" }}
        />
        <Link
          href={project.websiteURL}
          target="_blank"
          className="absolute top-0 rounded-md left-o w-full h-full bg-teal-300/25 hover:opacity-0 transition-all "
        ></Link>
        {/* <div className="absolute top-0 rounded-md left-o w-full h-full bg-teal-300/25 hover:opacity-0 transition-all "></div> */}
      </div>
      <div
        className={` w-full flex justify-center gap-4 xl:gap-10 flex-col xl:items-end p-4 md:p-4 xl:p-0`}
      >
        <div>
          <h1 className="text-teal-400 xl:text-right text-sm xl:mb-4">
            Featured Project
          </h1>
          <h1 className="text-xl xl:text-3xl text-gray-300">{project.title}</h1>
        </div>
        <div className="xl:bg-slate-700 xl:text-right text-sm xl:p-6 xl:rounded-md text-gray-300 xl:shadow-md">
          {" "}
          <p>{project.description}</p>
        </div>
        <div className="">
          <ul className="flex text-gray-400 flex-wrap gap-10 text-sm font-light">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <ul className="flex md:justify-end mt-4 gap-10">
            <Link href={project.githubLink}>
              <Image
                src={GithubIcon}
                className="fill-white"
                width={30}
                height={30}
                alt="github"
              />
            </Link>
            <Link href={project.websiteURL}>
              <Image
                src={LinkIcon}
                className="fill-white"
                width={30}
                height={30}
                alt="website-link"
              />
            </Link>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
