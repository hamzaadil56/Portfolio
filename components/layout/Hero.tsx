"use client";

import React from "react";
import styles from "./hero.module.css";
import Button from "../shared/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      id="home"
      className="flex   flex-col h-screen gap-4 md:px-20 mx-auto px-4  items-start  justify-center w-full    "
    >
      <h1 className="leading-tight text-sm  text-teal-400 m-0  2xl:text-2xl text-left  ml-[3px]">
        Hi, my name is
      </h1>
      <h1 className="text-gray-300 leading-tight m-0 font-extrabold text-2xl md:text-[3rem] xl:text-[4rem]  text-left  ">
        Muhammad Hamza.
        <br />
        <span
          className={`${styles.text_shadow} text-gray-900  m-0 md:text-[2rem] xl:text-[3rem] text-left tracking-wider   leading-normal`}
        >
          I build interactive and lively websites.
        </span>
      </h1>

      {/* <span
          className={`${styles.text_shadow} text-yellow-500 tracking-wider`}
        >
          Chemical Engineer
        </span>{" "}
        and{" "}
        <span
          className={`${styles.text_shadow} text-yellow-500 tracking-wider`}
        >
          {" "}
          <br />
          React.js Developer
        </span> */}

      <p className="text-gray-400  2xl:w-2/5 md:w-3/5 md:text-base     text-left ">
        I'm a chemical engineer and a web developer, specializing in web 3.0
        development. Currently I'm focused on building full stack websites and
        enrolled in Web 3.0 and Metaverse Developer Specialization offered by{" "}
        <Link className="text-teal-400 italic underline" href={"www.piaic.org"}>
          PIAIC
        </Link>
        .
      </p>
      <div className="md:mt-4">
        <a
          href="/Hamza-Web-Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Button
            text="Resume"
            className="my-2 px-4 md:px-8 py-2 md:py-4 hover:text-gray-900 transition-all hover:bg-teal-400"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;
