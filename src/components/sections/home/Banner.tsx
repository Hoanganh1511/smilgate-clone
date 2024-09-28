"use client";
import { useCursorContext } from "@/hooks/useCursorCustom";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Banner = () => {
  const { animateCursor } = useCursorContext();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  const mouseEnterHandler = () => {
    animateCursor("titleBanner");
  };
  const mouseLeaveHandler = () => {
    animateCursor("default");
  };
  return (
    <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay={true}
        controls={false}
        preload="true"
        loop
        muted
        className="z-[1] absolute top-1/2 left-0 -translate-y-1/2 w-full h-auto  opacity-[0.95]"
      >
        <source
          src="https://www.smilegate.com/cmsdata/main/visual/20240913/fe6f8c46-e2fb-4b19-a161-ee2dae3230da.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <motion.a
        href="#"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="relative z-[2] block h-[80px] w-full"
      ></motion.a>
      {/* <motion.h1
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-white font-bold text-[82px]"
        >
          CROSSFIRE
        </motion.h1> */}
    </div>
  );
};

export default Banner;
