"use client";
import useFonts from "@/hooks/useFonts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import {
  motion,
  // useTransform,
  // useScroll,
  useInView,
  Variants,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  // });
  // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (targetRef.current && isInView) {
        smoothScrollTo(targetRef.current, 1500); // Duration in milliseconds
      }
    }, 2000); // Initial delay to ensure rendering

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
        delay: 2,
        duration: 3,
        ease: [0.86, 0, 0.07, 1],
      },
    },
  };
  return (
    <section
      id="introduce-section"
      ref={targetRef}
      className="relative  bg-white"
    >
      <motion.div
        ref={titleRef}
        variants={titleVariant}
        animate={isInView ? "active" : "default"}
        className="pt-[170px] pb-[50px] w-fit mx-auto"
      >
        <h3
          className={`mb-[20px] text-[64px] text-black text-center font-bold ${circular.className}`}
        >
          SMILEGATE NOW
        </h3>
        <p className="text-center text-black text-[22px] font-normal">
          Discovering talent. Driving innovation. <br />
          We are building the future of global entertainment.
        </p>
      </motion.div>
      <div
        id="introduce-carousel"
        className="sticky top-0 flex  items-center overflow-hidden"
      >
        {/* ref={ref} */}
        {/* // style={{ x }} */}

        <Swiper
          ref={ref}
          modules={[Autoplay, Pagination, FreeMode]}
          spaceBetween={0}
          speed={15000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          mousewheel={true}
          keyboard={true}
          navigation
          loop={false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="!w-[250px] mx-[24px]">
            <div
              style={{
                transform: isInView
                  ? ""
                  : "translateX(600px) translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: "0.2s",
              }}
              className="w-full h-[574px] flex items-center justify-center "
            >
              <Image
                src="/assets/images/introduce4.png"
                width={250}
                height={350}
                className="aspect-[438/574]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[319px] mx-[24px]">
            <div
              style={{
                transform: isInView
                  ? ""
                  : "translateX(600px) translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: "0.4s",
              }}
              className="w-full h-[574px] flex items-center justify-center "
            >
              <Image
                src="/assets/images/introduce1.png"
                width={319}
                height={447}
                className="aspect-[438/574]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[416px] mx-[24px]">
            <div
              style={{
                transform: isInView
                  ? ""
                  : "translateX(600px) translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: "0.4s",
              }}
              className="w-full h-[574px] flex items-center justify-center "
            >
              <Image
                src="/assets/images/introduce3.jpg"
                width={416}
                height={574}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[319px] mx-[24px]">
            <div
              style={{
                transform: isInView
                  ? ""
                  : "translateX(600px) translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: "0.6s",
              }}
              className="w-full h-[574px] flex items-center justify-center "
            >
              <Image
                src="/assets/images/introduce2.jpg"
                width={319}
                height={447}
                className="aspect-[438/574]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[250px] mx-[24px]">
            <div
              style={{
                transform: isInView
                  ? ""
                  : "translateX(600px) translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: "1s",
              }}
              className="w-full h-[574px] flex items-center justify-center "
            >
              <Image
                src="/assets/images/introduce4.png"
                width={250}
                height={350}
                className="aspect-[438/574]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[319px] mx-[24px]">
            <div
              style={{
                transform: isInView
                  ? ""
                  : "translateX(600px) translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: "0.2s",
              }}
              className="w-full h-[574px] flex items-center justify-center "
            >
              <Image
                src="/assets/images/introduce1.png"
                width={319}
                height={447}
                className="aspect-[438/574]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[416px] mx-[24px]">
            <div
              style={{
                transform: isInView
                  ? ""
                  : "translateX(600px) translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: "0.2s",
              }}
              className="w-full h-[574px] flex items-center justify-center "
            >
              <Image
                src="/assets/images/introduce3.jpg"
                width={416}
                height={574}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[319px] mx-[24px]">
            <div
              style={{
                transform: isInView
                  ? ""
                  : "translateX(600px) translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: "0.2s",
              }}
              className="w-full h-[574px] flex items-center justify-center "
            >
              <Image
                src="/assets/images/introduce2.jpg"
                width={319}
                height={447}
                className="aspect-[438/574]"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
