"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/logos/Hamza-logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linksRef = useRef<HTMLUListElement>(null);
  const linksRefContainer = useRef<HTMLDivElement>(null);

  const currentPathname = usePathname();

  useEffect(() => {
    const linksHeight = linksRef.current?.getBoundingClientRect().height;
    if (isOpen) {
      linksRefContainer.current!.style.height = `${linksHeight}px`;
    } else {
      linksRefContainer.current!.style.height = `0px`;
    }
  }, [isOpen]);

  return (
    <nav className="z-10   mx-auto  fixed top-0 w-full bg-gray-900 z-20 md:container-xl md:flex items-center justify-between md:px-20 text-gray-200  px-4    ">
      <div className="flex  justify-between items-center md:w-1/5 ">
        <div className="logo ">
          <a href={"/"}>
            <Image
              src={Logo}
              width={75}
              height={35}
              style={{ objectFit: "cover" }}
              alt="logo"
            />
          </a>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`${styles.menu_btn} md:hidden`}
        >
          <div
            className={`${styles.menu_btn__burger} ${
              isOpen ? styles.open : ""
            } md:hidden`}
          ></div>
        </div>
      </div>
      <div
        ref={linksRefContainer}
        className={`${styles.link_items} ${
          isOpen ? styles.link_items_show : ""
        }  transition-all md:flex  md:justify-end md:w-4/5`}
      >
        <ul
          ref={linksRef}
          className="md:flex  divide-y-[1px] divide-gray-600 divide-solid md:divide-none items-center"
        >
          {currentPathname === "/projects" ? (
            <>
              <Link href="#">
                <li
                  className={` py-3 cursor-pointer 
           text-gray-400  transition all  md:ml-5 text-center  `}
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  className={`  py-3 cursor-pointer
            text-gray-400  text-center  md:ml-5 decoration-none`}
                >
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  className={` py-3 cursor-pointer
            text-gray-400  text-center  md:ml-5 decoration-none`}
                >
                  Projects
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  className={`  py-3 cursor-pointer
            text-gray-400  text-center  md:ml-5 decoration-none`}
                >
                  Skills
                </li>
              </Link>
              <Link href="#contact">
                <li
                  className={`  py-3 cursor-pointer
            text-gray-400  text-center  md:ml-5 decoration-none`}
                >
                  Contact
                </li>
              </Link>
            </>
          ) : (
            <>
              <a href="#">
                <li
                  className={` ${
                    currentPathname === "/#"
                      ? `${styles.active}`
                      : `${styles.hover_underline_animation}`
                  } py-3 cursor-pointer 
           text-gray-400  transition all  md:ml-5 text-center  `}
                >
                  Home
                </li>
              </a>
              <a href="/#about">
                <li
                  className={` ${
                    currentPathname === "/#about"
                      ? `${styles.active}`
                      : `${styles.hover_underline_animation}`
                  } py-3 cursor-pointer
            text-gray-400  text-center  md:ml-5 decoration-none`}
                >
                  About
                </li>
              </a>
              <a href="/#projects">
                <li
                  className={` ${
                    currentPathname === "/#projects"
                      ? `${styles.active}`
                      : `${styles.hover_underline_animation}`
                  } py-3 cursor-pointer
            text-gray-400  text-center  md:ml-5 decoration-none`}
                >
                  Projects
                </li>
              </a>
              <a href="/#skills">
                <li
                  className={` ${
                    currentPathname === "/#skills"
                      ? `${styles.active}`
                      : `${styles.hover_underline_animation}`
                  } py-3 cursor-pointer
            text-gray-400  text-center  md:ml-5 decoration-none`}
                >
                  Skills
                </li>
              </a>
              <a href="#contact">
                <li
                  className={` ${
                    currentPathname === "/#contact"
                      ? `${styles.active}`
                      : `${styles.hover_underline_animation}`
                  } py-3 cursor-pointer
            text-gray-400  text-center  md:ml-5 decoration-none`}
                >
                  Contact
                </li>
              </a>
            </>
          )}
        </ul>
        {/* <div className="apply-now-btn justify-center flex items-center">
          <Link href={"https://www.piaic.org/"}>
            <Button text="Hire Me" />
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
