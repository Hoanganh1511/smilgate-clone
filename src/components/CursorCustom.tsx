"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useCursorContext } from "@/hooks/useCursorCustom";
import { Variants } from "framer-motion";
function CursorCustom() {
  const { initialCursorVariant, animateCursorVariant, animateCursor } =
    useCursorContext();
  const cursorX = useMotionValue(-50);
  const cursorY = useMotionValue(-50);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 15);
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [animateCursor, cursorX, cursorY]);
  const variants: Variants = {
    default: {
      scale: 0.6,
      rotate: 75,
      backgroundColor: "white",
    },
    text: {
      scale: 1,
      backgroundColor: "white",
    },
    titleBanner: {
      scale: 2.8,
      rotate: 285,
      backgroundColor: "white",
      transition: {
        rotate: {
          ease: "linear",
          repeat: Infinity,
          duration: 5,
        },
      },
    },
  };
  return (
    <motion.div
      className="cursor-parent"
      style={{
        left: cursorX,
        top: cursorY,
        mixBlendMode: "difference",
      }}
    >
      <motion.div
        className={`cursor bg-black `}
        variants={variants}
        animate={animateCursorVariant}
        initial={initialCursorVariant}
      ></motion.div>
      {animateCursorVariant === "titleBanner" && (
        <div className=" leading-[12px] text-[12px] font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-0 flex items-center justify-center z-[100] ">
          View
        </div>
      )}
    </motion.div>
  );
}

export default CursorCustom;
