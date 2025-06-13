import { Link } from "react-scroll";
import { BsMouse } from "react-icons/bs";
import { motion } from "motion/react";
import { container, item } from "../utils";

const Header = () => {
  return (
    <section className="mx-auto max-w-screen-xl h-dvh">
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="flex flex-col gap-6 items-center justify-center h-full"
      >
        <motion.h1
          variants={item}
          className="text-white text-8xl font-medium text-center banner-header"
        >
          Branding that you need indeed
        </motion.h1>
        <motion.p
          variants={item}
          className="text-white/50 text-center banner-description"
        >
          Elevate your brand with custom identity and package design. Showcase
          your story through bold visuals and strategic design solutions
        </motion.p>
        <motion.div variants={item}>
          <button>get started now</button>
          <button>
            <Link to="projects" smooth={true} duration={500}>
              see projects
            </Link>
          </button>
        </motion.div>
        <motion.div
          variants={item}
          className="mx-auto max-w-2xl w-full flex justify-between"
        >
          <span className="text-white/50">Scroll down</span>{" "}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="h-[0.5px] bg-white/40 flex-1 min-w-[12.125rem]" />
            <BsMouse className="text-white animate-bounce" size={20} />
            <div className="h-[0.5px] bg-white/40 flex-1 min-w-[12.125rem]" />
          </div>{" "}
          <span className="text-white/50">to see projects</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
