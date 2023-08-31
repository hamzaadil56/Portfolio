"use client";

import React from "react";
import Image from "next/image";
// import Hamza from "@/assets/images/Hamza.jpg";
import Hamza from "@/assets/images/Profile-Picture.png";

import styles from "./about.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className=" mx-auto md:px-20 py-20 px-4 text-gray-200 my-10"
    >
      <h1
        className={`${styles.about} text-gray-300  text-3xl  font-extrabold `}
      >
        About Me
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 gap-16 mx-auto items-center grid-cols-1"
      >
        <div className="justify-self-start">
          <p className="text-gray-400 leading-6 py-10">
            Hello! Muhammad Hamza here. While pursuing my bachelor's degree in
            chemical engineering, the COVID-19 pandemic occurred and in that
            period of time, I found my passion in programming. I started with
            Python, built a few programs, and then the curiosity to build
            websites lead to me to become a full-stack web developer. I love to
            build real world applications with modern and edge-cutting web
            technologies. Currently I'm a freelancer and successfully delivered
            several projects with 99.9% client satisfaction.
          </p>
          <p className="text-gray-400  leading-6">
            I like to create web applications using the React.js library and the
            Next.js framework. To design visually appealing websites, I prefer
            to use the Tailwind CSS framework. In addition, I incorporate
            backend development by utilizing Next.js route handlers, Node.js,
            and both relational and NoSQL databases such as MongoDB, Firebase
            Database, and PostgreSQL.
          </p>
        </div>
        <div className="grid relative">
          <Image
            src={Hamza}
            alt="Hamza"
            style={{ objectFit: "contain" }}
            className={`w-full h-full md:hover:translate-x-[20px]   md:hover:translate-y-[20px] hover:translate-x-[8px]   hover:translate-y-[8px] transition-all `}
          />
          <span className="absolute w-full  -z-10 justify-self-end md:top-[20px] h-full md:left-[20px] border-2 border-teal-400 top-[8px] left-[8px]"></span>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
