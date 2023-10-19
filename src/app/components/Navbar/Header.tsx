"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start flex-row justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
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
          duration: 0.5,
        }}
      >
        {/* Socialicons */}
        <SocialIcon
          url="https://youtube.com"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://whatsapp.com"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className="flex justify-center items-center cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon network="email" fgColor="white" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-white font-semibold">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
