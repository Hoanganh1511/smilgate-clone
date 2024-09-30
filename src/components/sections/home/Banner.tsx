"use client";
import { useCursorContext } from "@/hooks/useCursorCustom";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Banner = () => {
  const { animateCursor } = useCursorContext();
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const smoothScrollTo = (target: HTMLElement, duration: number): void => {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime: number | null = null;

    const animation = (currentTime: number): void => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const scrollY = start + distance * easeInOutCubic(progress);
      window.scrollTo(0, scrollY);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  console.log(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      const target = document.querySelector<HTMLElement>("#introduce-carousel");
      const yScrolled = window.scrollY;
      if (target && yScrolled < 100 && yScrolled > 30) {
        console.log("y", yScrolled, "scroll naooo");
        smoothScrollTo(target, 1);
      }
    };
    // window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
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
    <motion.div
      ref={ref}
      className="relative h-[100vh]  flex items-center justify-center overflow-hidden"
    >
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
    </motion.div>
  );
};

export default Banner;
