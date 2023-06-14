import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div className="relative flex text-black flex-col pt-56 bg-cover items-center">
      <motion.h1
        className="text-8xl font-bold mb-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Babel
      </motion.h1>
      <motion.p
        className="text-3xl text-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {" "}
        Empowering Global Communication with Real-Time Translation
      </motion.p>
      <div className="flex justify-center items-center gap-4 w-full mx-auto">
        <motion.img
          src={image1}
          className="hidden md:flex w-1/6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 0.5,
            delay: 2,
          }}
        />
        <motion.img
          src={image2}
          alt=""
          className="w-96"
          initial={{ opacity: 0, rotateY: 360 }}
          animate={{
            opacity: 1,
            rotateY: 0,
          }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 1.5,
            delay: 1.5,
          }}
        />
        <motion.img
          src={image3}
          alt=""
          className="hidden md:flex w-1/6 "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 1.5,
            delay: 1,
          }}
        />
      </div>
    </div>
  );
}

export default Intro;
