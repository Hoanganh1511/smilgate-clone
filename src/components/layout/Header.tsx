"use client";
import useFonts from "@/hooks/useFonts";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const Header = () => {
  const { circular } = useFonts();
  const [currentHeaderVariant, setCurrentHeaderVariant] = useState("default");
  const [currentNavVariant, setCurrentNavVariant] = useState("default");
  const [currentDropdownVariant, setCurrentDropdownVariant] =
    useState("default");
  const timerRef = useRef<any>(null);
  const handleNavMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCurrentNavVariant("hover");
    setCurrentHeaderVariant("enter");
    setCurrentDropdownVariant("expanded");
  };
  const handleHeaderMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setCurrentHeaderVariant("default");
      setCurrentNavVariant("default");
    }, 1000);
  };
  const handleDropdownMouseLeave = () => {
    setCurrentDropdownVariant("default");
  };
  const headerVariant: Variants = {
    default: {
      backgroundColor: "transparent",
    },
    enter: {
      backgroundColor: "white",
    },
  };
  const navVariants: Variants = {
    default: {
      color: "white",
      width: "140px",
    },
    hover: {
      color: "black",
      width: "164px",
    },
  };
  const etcVariants: Variants = {
    default: {
      color: "white",
    },
    enter: {
      color: "black",
    },
  };
  //   1s cubic-bezier(0.86, 0, 0.07, 1)
  const dropdownVariants: Variants = {
    default: {
      height: 0,
      transition: {
        duration: 1,
        ease: [0.86, 0, 0.07, 1],
      },
    },
    expanded: {
      height: 500,
      transition: {
        duration: 1,
        ease: [0.86, 0, 0.07, 1],
      },
    },
  };
  return (
    <motion.div
      variants={headerVariant}
      animate={currentHeaderVariant}
      onMouseLeave={handleHeaderMouseLeave}
      className="fixed z-[99] top-0 left-0 min-w-xl mx-auto  w-full h-[84px] px-[60px]  flex items-center justify-between transition-[transform,background] duration-[0.45s]"
    >
      <h1>
        <Link href="/">
          {currentHeaderVariant === "enter" ? (
            <Image
              width={121}
              height={24}
              alt="logo"
              src="/assets/images/logo_black.svg"
            />
          ) : (
            <Image
              width={121}
              height={24}
              alt="logo"
              src="/assets/images/logo_white.svg"
            />
          )}
        </Link>
      </h1>
      <nav className="">
        <ul className="nav-list flex items-center justify-between">
          <motion.li
            variants={navVariants}
            onMouseEnter={handleNavMouseEnter}
            animate={currentNavVariant}
            className="nav-list__item relative h-full transition-width duration-50 text-center overflow-hidden uppercase"
          >
            <Link
              href="/company"
              className={`nav-link relative h-full inline-block font-regular tracking-normal leading-[85px] ${circular.className}`}
            >
              company
            </Link>
          </motion.li>
          <motion.li
            variants={navVariants}
            onMouseEnter={handleNavMouseEnter}
            animate={currentNavVariant}
            className="nav-list__item  relative h-full transition-width duration-50 text-center overflow-hidden uppercase"
          >
            <Link
              href="/company"
              className={`nav-link relative h-full inline-block font-regular tracking-normal leading-[85px] ${circular.className}`}
            >
              business
            </Link>
          </motion.li>
          <motion.li
            variants={navVariants}
            onMouseEnter={handleNavMouseEnter}
            animate={currentNavVariant}
            className="nav-list__item  relative h-full transition-width duration-50 text-center overflow-hidden uppercase"
          >
            <Link
              href="/company"
              className={`nav-link relative h-full inline-block font-regular tracking-normal leading-[85px] ${circular.className}`}
            >
              game
            </Link>
          </motion.li>
          <motion.li
            variants={navVariants}
            onMouseEnter={handleNavMouseEnter}
            animate={currentNavVariant}
            className="nav-list__item relative h-full transition-width duration-50 text-center overflow-hidden uppercase"
          >
            <Link
              href="/company"
              className={`nav-link relative h-full inline-block font-regular tracking-normal leading-[85px] ${circular.className}`}
            >
              media
            </Link>
          </motion.li>
          <motion.li
            variants={navVariants}
            onMouseEnter={handleNavMouseEnter}
            animate={currentNavVariant}
            className="nav-list__item relative h-full transition-width duration-50 text-center overflow-hidden uppercase"
          >
            <Link
              href="/company"
              className={`nav-link relative h-full inline-block font-regular tracking-normal leading-[85px] ${circular.className}`}
            >
              career
            </Link>
          </motion.li>
          <motion.li
            variants={navVariants}
            onMouseEnter={handleNavMouseEnter}
            animate={currentNavVariant}
            className="nav-list__item relative h-full transition-width duration-50 text-center overflow-hidden uppercase"
          >
            <Link
              href="/company"
              className={`nav-link relative h-full inline-block font-regular tracking-normal leading-[85px] ${circular.className}`}
            >
              csr/csv
            </Link>
          </motion.li>
        </ul>
        <motion.div
          variants={dropdownVariants}
          animate={currentDropdownVariant}
          onMouseLeave={handleDropdownMouseLeave}
          className="absolute top-full left-0 w-full bg-white overflow-hidden"
        >
          <div className="w-fit mx-auto flex pt-[28px]">
            <ul className="w-[164px] pl-[48px] flex flex-col space-y-5">
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  <span>ABOUT SMILEGATE</span>
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  About the Group
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  HISTORY{" "}
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  ICONIC 20{" "}
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-wrap ${circular.className}`}
                >
                  DIVERSITY AND INCLUSION
                </Link>
              </li>
            </ul>
            <ul className="w-[164px] pl-[54px] flex flex-col space-y-5">
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`relative  text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap  ${circular.className} `}
                >
                  <span className="">
                    {" "}
                    GAME DEVELOPMENT
                    <br />
                    /SERVICES
                  </span>
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  IP BUSINESS & TECH
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  INVESTMENT
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  PLATFORM
                </Link>
              </li>
            </ul>
            <ul className="w-[164px] pl-[66px] flex flex-col space-y-5">
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  CROSSFIRE
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  LOST ARK
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  EPIC SEVEN
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  LORDNINE
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  OUTERPLANE
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  SIERRA SQUADS
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  target="_blank"
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  STOVE STORE
                </Link>
              </li>
            </ul>
            <ul className="w-[164px] pl-[64px] flex flex-col space-y-5">
              <li className="leading-[1]">
                <Link
                  target="_blank"
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  NEWSROOM
                </Link>
              </li>
            </ul>
            <ul className="w-[164px] pl-[60px] flex flex-col space-y-5">
              <li className="leading-[1]">
                <Link
                  target="_blank"
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  KOREA
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  target="_blank"
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  WEST
                </Link>
              </li>
            </ul>
            <ul className="w-[164px] pl-[54px] flex flex-col space-y-5">
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  FOR ENTREPRENEURSHIP
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  FOR FUTURE GENERATION
                </Link>
              </li>
              <li className="leading-[1]">
                <Link
                  href="/"
                  className={`text-[14px] font-medium uppercase w-auto inline-block  tracking-[-0.21px] whitespace-nowrap ${circular.className}`}
                >
                  FOR CREATIVE & CREATION
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </nav>
      {/* etc */}
      <div className="flex">
        <motion.div
          variants={etcVariants}
          animate={currentHeaderVariant}
          className="hover:underline"
        >
          EN
        </motion.div>
        <motion.div
          variants={etcVariants}
          animate={currentHeaderVariant}
          className="ml-3 hover:underline"
        >
          Our group
        </motion.div>
      </div>

      {/* Dropdown */}
    </motion.div>
  );
};

export default Header;
