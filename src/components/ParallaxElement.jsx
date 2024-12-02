"use client";

import Image from "next/image";
import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxElement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden ">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/top of image.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      <motion.div
        className="z-10 relative grid place-items-center h-full"
        style={{
          y: textY,
          postion: "absolute",
          top: "-15%",
          left: "-20%",
        }}
      >
        <Image
          src="/Joe Galvin.png"
          alt="Joe Galvin"
          width={350}
          height={350}
          className="rounded-md"
        />
      </motion.div>

      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url('/bottom of image blend.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
