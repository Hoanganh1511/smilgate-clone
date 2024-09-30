"use client";
import useFonts from "@/hooks/useFonts";

import {
  motion,
  useTransform,
  useScroll,
  useInView,
  Variants,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
const Introduce = () => {
  return (
    <div className="bg-white">
      <HorizontalScrollCarousel />
    </div>
  );
};

export default Introduce;

const HorizontalScrollCarousel = () => {
  const { circular } = useFonts();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const smoothScrollTo = (target, duration) => {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime = null;

    const animation = (currentTime) => {
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

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (targetRef.current && isInView) {
        smoothScrollTo(targetRef.current, 2000); // Duration in milliseconds
      }
    }, 1000); // Initial delay to ensure rendering

    return () => clearTimeout(timeoutId);
  }, [isInView]);
  const titleVariant: Variants = {
    default: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.86, 0, 0.07, 1],
      },
    },
    active: {
      minHeight: 300,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 3,
        ease: [0.86, 0, 0.07, 1],
      },
    },
  };
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <motion.div
        ref={titleRef}
        variants={titleVariant}
        animate={isInView ? "active" : "default"}
        className="pt-[180px] pb-[50px] w-fit mx-auto"
      >
        <h3
          className={`mb-[32px] text-[64px] text-black text-center font-bold ${circular.className}`}
        >
          SMILEGATE NOW
        </h3>
        <p className="text-center text-black text-[18px] font-medium">
          Discovering talent. Driving innovation. <br />
          We are building the future of global entertainment.
        </p>
      </motion.div>
      <div
        id="introduce-section"
        className="sticky top-0 flex  items-center overflow-hidden"
      >
        <motion.div ref={ref} style={{ x }} className="flex gap-4">
          <div
            style={{
              transform: isInView
                ? "none"
                : "translateX(800px) translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "0.2s",
            }}
            className="w-[700px] h-[200px] bg-purple-600"
          ></div>
          <div
            style={{
              transform: isInView
                ? "none"
                : "translateX(800px) translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "0.4s",
            }}
            className="w-[700px] h-[200px] bg-purple-600"
          ></div>
          <div
            style={{
              transform: isInView
                ? "none"
                : "translateX(800px) translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "0.6s",
            }}
            className="w-[700px] h-[200px] bg-purple-600"
          ></div>
          <div
            style={{
              transform: isInView
                ? "none"
                : "translateX(800px) translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "0.8s",
            }}
            className="w-[700px] h-[200px] bg-purple-600"
          ></div>
          <div
            style={{
              transform: isInView
                ? "none"
                : "translateX(800px) translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="w-[700px] h-[200px] bg-purple-600"
          ></div>
        </motion.div>
      </div>
    </section>
  );
};
