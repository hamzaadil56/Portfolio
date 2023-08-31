import React from "react";
import { links } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-teal-400 my-10 ">
      <div className="flex place-content-center my-4">
        {links.map((link, index) => (
          <Link
            target="_blank"
            href={link.url}
            className="mx-4 cursor-pointer"
            key={index}
          >
            <Image width={25} height={25} src={link.icon} alt={link.url} />
          </Link>
        ))}
      </div>
      <h1 className="my-4">Built by Muhammad Hamza</h1>
    </div>
  );
};

export default Footer;
