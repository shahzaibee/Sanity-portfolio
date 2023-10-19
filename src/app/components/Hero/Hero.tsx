"use client";
import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Hero1 from "@/app/assets/Hero.avif";
import BackgroundCirlcles from "./BackgroundCirlcles";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Shahzaib",
      "Guys-who-loves-coffe.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <motion.div
      className="flex flex-col lg:space-y-8 space-y-3 items-center justify-center text-white mt-20 h-screen"
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
      }}
    >
      <BackgroundCirlcles />
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 3.5,
        }}
      >
        <Image
          src={Hero1}
          alt=""
          className="rounded-full lg:rounded-full object-cover h-[130px] w-[130px] lg:w-44 lg:h-40"
        />
        <span className="text-xs pl-4 lg:text-xl text-orange-600 font-bold">
          WEB DEVELOPER
        </span>
      </motion.div>
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 3.5,
        }}
      >
        <h1>
          <span className="lg:text-4xl text-2xl text-rose-500">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </motion.div>
      <motion.div
        className="flex gap-2 lg:gap-2 text-sm lg:text-lg lg:pr-5 p-1 m-2"
        initial={{
          y: 300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 3.5,
        }}
      >
        <button className="rounded-md lg:uppercase bg-red-600 text-xs px-1 py-2 lg:px-3 lg:py-3 lg:text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black">
          About
        </button>
        <button className="rounded-md lg:uppercase bg-red-600 text-xs px-1 py-2  lg:px-3 lg:py-3 lg:text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Experience
        </button>
        <button className="rounded-md lg:uppercase px-3 bg-red-600 text-xs  py-2  lg:px-3 lg:py-3  lg:text-sm  font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Skills
        </button>
        <button className="rounded-md lg:uppercase bg-red-600  text-xs px-1 py-2 lg:px-3 lg:py-3 lg:text-sm  font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Projects
        </button>
      </motion.div>
    </motion.div>
  );
};
export default Hero;
