import { Link } from "react-scroll";
import { BsMouse } from "react-icons/bs";
import { motion } from "motion/react";
import { container, item } from "../utils";
import { gsap } from "gsap";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandJavascript,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandFramerMotion,
} from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Stack from "./stack";

const Banner = () => {
  return (
    <section className="mx-auto max-w-screen-xl h-[calc(100vh-5rem)] px-4">
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="flex flex-col gap-6 items-center justify-center h-full overflow-hidden"
      >
        <motion.h1
          onMouseEnter={() => gsap.to("#cursor", { scale: 8, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          variants={item}
          className="text-white text-4xl md:text-6xl lg:text-8xl font-medium text-center banner-header"
        >
          Branding that you need indeed
        </motion.h1>
        <motion.p
          variants={item}
          onMouseEnter={() => gsap.to("#cursor", { scale: 8, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          className="text-white/50 text-center w-[40ch] md:w-[60ch]"
        >
          Elevate your brand with custom identity and package design. Showcase
          your story through bold visuals and strategic design solutions
        </motion.p>
        <motion.div variants={item} className="flex justify-between gap-8">
          <button className="text-white border border-white/50 py-3 px-4 rounded-md overflow-hidden cursor-pointer animate-pulse">
            Get started now
          </button>
          <button className="text-white border border-white/50 py-3 px-4 rounded-md overflow-hidden cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              See projects
            </Link>
          </button>
        </motion.div>
        <motion.div
          variants={item}
          className="mx-auto max-w-2xl w-full flex flex-col md:flex-row md:items-start items-center justify-between gap-4"
        >
          <span className="text-white/50 sm:w-auto">Scroll down</span>{" "}
          <div className="flex items-center gap-4 flex-wrap flex-1 min-w-full sm:min-w-0">
            <div className="h-[0.5px] bg-white/40 flex-1 min-w-[6.25rem]" />
            <BsMouse className="text-white animate-bounce" size={20} />
            <div className="h-[0.5px] bg-white/40 flex-1 min-w-[6.25rem]" />
          </div>{" "}
          <span className="text-white/50">to see projects</span>
        </motion.div>
        <motion.div
          variants={item}
          className="overflow-hidden whitespace-nowrap relative max-w-4xl mt-8"
        >
          <div className="animate-scroll flex w-max">
            <ul className="flex items-center gap-6 py-4">
              <Stack title="react">
                <FaReact />
              </Stack>
              <Stack title="angular">
                <FaAngular />
              </Stack>
              <Stack title="typeScript">
                <SiTypescript />
              </Stack>
              <Stack title="nextjs">
                <TbBrandNextjs />
              </Stack>
              <Stack title="tailwindCSS">
                <TbBrandTailwind />
              </Stack>
              <Stack title="JavaScript">
                <TbBrandJavascript />
              </Stack>
              <Stack title="nodeJs">
                <FaNodeJs />
              </Stack>
              <Stack title="reactNative">
                <TbBrandReactNative />
              </Stack>
              <Stack title="SQL">
                <AiOutlineConsoleSql />
              </Stack>
              <Stack title="redux">
                <TbBrandRedux />
              </Stack>
              <Stack title="motion">
                <TbBrandFramerMotion />
              </Stack>
            </ul>
            <ul className="flex items-center gap-6 py-4 px-6">
              <Stack title="react">
                <FaReact />
              </Stack>
              <Stack title="angular">
                <FaAngular />
              </Stack>
              <Stack title="typeScript">
                <SiTypescript />
              </Stack>
              <Stack title="nextjs">
                <TbBrandNextjs />
              </Stack>
              <Stack title="tailwindCSS">
                <TbBrandTailwind />
              </Stack>
              <Stack title="JavaScript">
                <TbBrandJavascript />
              </Stack>
              <Stack title="nodeJs">
                <FaNodeJs />
              </Stack>
              <Stack title="reactNative">
                <TbBrandReactNative />
              </Stack>
              <Stack title="SQL">
                <AiOutlineConsoleSql />
              </Stack>
              <Stack title="redux">
                <TbBrandRedux />
              </Stack>
              <Stack title="motion">
                <TbBrandFramerMotion />
              </Stack>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
