"use client";

import React from "react";
import Image from "next/image";
import Hamza from "@/assets/images/Hamza.jpg";
import styles from "./about.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className=" mx-auto md:px-20 px-4 text-gray-200 my-10">
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
            Hello! Muhammad Hamza here. I'm a chemical engineer and a web
            developer. I&apos;sm passionate about programming and love to build
            websites with attractive user interface and interactive animations.
            Currently I&apos;m completing my Bachelor&apos;s Degree in Chemical
            Engineering from NED University of Engineering and Technology.{" "}
          </p>
          <p className="text-gray-400 my-2 leading-6">
            I enjoy building web appliations using React.js library with Next.js
            framework. For styling and designing beautiful websites Tailwind CSS
            is my favourite framework.
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
