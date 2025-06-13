import { Link } from "react-scroll";
import { BsMouse } from "react-icons/bs";
import { motion } from "motion/react";
import { container, item } from "../utils";

const Banner = () => {
  return (
    <section className="mx-auto max-w-screen-xl h-dvh px-4">
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="flex flex-col gap-6 items-center justify-center h-full overflow-hidden"
      >
        <motion.h1
          variants={item}
          className="text-white text-4xl md:text-6xl lg:text-8xl font-medium text-center banner-header"
        >
          Branding that you need indeed
        </motion.h1>
        <motion.p
          variants={item}
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
      </motion.div>
    </section>
  );
};

export default Banner;
