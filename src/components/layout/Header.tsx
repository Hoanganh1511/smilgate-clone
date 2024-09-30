"use client";
import { navData } from "@/data/navs";
import useFonts from "@/hooks/useFonts";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
const Header = () => {
  const { circular } = useFonts();
  const [currentHeaderVariant, setCurrentHeaderVariant] = useState("default");
  const [currentNavVariant, setCurrentNavVariant] = useState("default");
  const [currentDropdownVariant, setCurrentDropdownVariant] =
    useState("default");
  const [
    currentBackgroundDropdownVariant,
    setCurrentBackgroundDropdownVariant,
  ] = useState("default");
  const timerRef = useRef<any>(null);
  const handleNavMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCurrentNavVariant("hover");
    setCurrentHeaderVariant("enter");
    setCurrentDropdownVariant("expanded");
    setCurrentBackgroundDropdownVariant("expanded");
  };
  const handleHeaderMouseLeave = () => {
    setCurrentDropdownVariant("default");
    setCurrentBackgroundDropdownVariant("default");
    timerRef.current = setTimeout(() => {
      setCurrentHeaderVariant("default");
      setCurrentNavVariant("default");
    }, 1000);
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
      overflow: "hidden",
      transition: {
        duration: 1,
        ease: [0.86, 0, 0.07, 1],
      },
    },
    expanded: {
      height: 300,
      overflow: "hidden",
      transition: {
        duration: 1,
        ease: [0.86, 0, 0.07, 1],
      },
    },
  };
  const linkDropdownVariants: Variants = {
    default: {
      color: "transparent",
    },
    expanded: {
      color: "black",
    },
  };
  const backgroundDropdownVariants: Variants = {
    default: {
      height: 0,
      overflow: "hidden",
      transition: {
        delay: 0,
        duration: 1,
        ease: [0.86, 0, 0.07, 1],
      },
    },
    expanded: {
      height: 360,
      backgroundColor: "white",
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
        <ul className="z-[91] relative nav-list flex items-center justify-between">
          {navData.map((nav, idx) => {
            return (
              <motion.li
                key={idx}
                variants={navVariants}
                onMouseEnter={handleNavMouseEnter}
                animate={currentNavVariant}
                className="nav-list__item relative h-full transition-width duration-50 "
              >
                <Link
                  href={nav.mainHref}
                  className={`nav-link relative h-full inline-block text-center  uppercase font-regular tracking-normal leading-[85px] ${circular.className}`}
                >
                  {nav.mainItem}
                </Link>
                <motion.ul
                  variants={dropdownVariants}
                  animate={currentDropdownVariant}
                  className="pt-[28px] absolute top-full left-0 w-full flex flex-col"
                >
                  {nav.children.map((childNav, childIdx) => {
                    return (
                      <motion.li
                        variants={linkDropdownVariants}
                        animate={currentDropdownVariant}
                        key={childIdx}
                        className="relative leading-[1] text-transparent"
                      >
                        <Link
                          href={childNav.href}
                          className={`relative inline-block child-nav-link pt-6 text-[13.5px] font-medium uppercase tracking-[-0.21px] whitespace-wrap ${circular.className}`}
                        >
                          <div
                            className="inline-block"
                            dangerouslySetInnerHTML={{ __html: childNav.title }}
                          ></div>
                          {childNav.isExternal && (
                            <MdArrowOutward className="inline-block ml-[2px] mb-[4px]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.li>
            );
          })}
        </ul>
        <motion.div
          variants={backgroundDropdownVariants}
          animate={currentBackgroundDropdownVariant}
          className="absolute z-[90] top-full left-0 w-full bg-white overflow-hidden"
        ></motion.div>
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
