import React from "react";
import Image from "next/image";
import Hamza from "@/assets/images/Hamza.jpg";
import Hero from "./Hero";

const Background = () => {
  return (
    <div className=" flex content-center bg-gray-900 w-full  ">
      <Hero />
    </div>
  );
};

export default Background;
