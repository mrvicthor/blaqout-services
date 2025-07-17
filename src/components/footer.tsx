import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { PopupButton } from "react-calendly";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { Element } from "react-scroll";
const Footer = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const footerY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <Element name="contact">
      <footer
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.8) 60%, #000 100%)",
        }}
        ref={containerRef}
        className="py-24 relative min-h-[130vh] bg"
      >
        <section className="sticky bottom-0 h-screen flex items-end justify-center">
          <motion.div
            style={{ y: footerY, opacity: footerOpacity }}
            className="max-w-7xl py-32 flex flex-col items-center justify-center gap-8 px-4 md:px-16 lg:px-8"
          >
            <div className="flex items-center gap-3 py-2 px-2 border-l-2 border-white rounded-full">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />{" "}
              <p className="capitalize text-white">available for work</p>
            </div>
            <p className="text-lg md:text-2xl lg:text-4xl text-white w-[30ch] sm:[width:40ch] text-center">
              Curious about what we can create together? Let's bring something
              extraordinary to life!
            </p>
            <PopupButton
              url="https://calendly.com/victoreleanya89/30min"
              rootElement={document.body}
              text="Book a Free call"
              className="text-white border border-white/50 py-3 px-4 rounded-md overflow-hidden cursor-pointer animate-pulse"
            />
            <div className="flex divide-x-2 divide-white/50 gap-4">
              <a
                className="px-8 cursor-pointer"
                href="https://github.com/mrvicthor"
                target="_blank"
              >
                <FaGithub className="text-white" size={24} />
              </a>
              <a
                className="px-4 pr-8 cursor-pointer"
                href="https://www.frontendmentor.io/profile/mrvicthor"
                target="_blank"
              >
                <SiFrontendmentor className="text-white" size={24} />
              </a>
              <a
                className="px-4 cursor-pointer"
                href="https://www.linkedin.com/in/victor-eleanya-87a06543/"
                target="_blank"
              >
                <FaLinkedin className="text-white" size={24} />
              </a>
            </div>
          </motion.div>
        </section>
        <div className="absolute w-full bottom-4 flex items-center justify-center">
          <small className="text-white/60">
            Copyright © 2025 Blaqout Tech. All Rights Reserved.
          </small>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
