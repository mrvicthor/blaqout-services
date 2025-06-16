import { motion } from "motion/react";
import financeImage from "../assets/finance.png";
import { FiArrowUpRight } from "react-icons/fi";
import photoSnapImage from "../assets/photosnap.png";
import audioPhileImage from "../assets/audiophile.png";
import formImage from "../assets/multi-step-form.png";
import { aboutContainer, item } from "../utils";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      preview: financeImage,
      name: "finance app",
      url: "https://personal-finance-app-orpin.vercel.app/login",
    },
    {
      id: 2,
      preview: formImage,
      name: "multi-step form",
      url: "https://multi-step-form-one-psi.vercel.app/",
    },
    {
      id: 3,
      preview: audioPhileImage,
      name: "e-commerce app",
      url: "https://audiophile-ecommerce-nu.vercel.app/",
    },
    {
      id: 4,
      preview: photoSnapImage,
      name: "photosnap studio",
      url: "https://photosnap-multi-page-website-nu.vercel.app/",
    },
  ];
  return (
    <motion.section
      variants={aboutContainer}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grid-rows-[repeat(3,20rem)] md:grid-rows-[repeat(2,20rem)] lg:grid-rows-[20rem]  border-t border-white/10 mt-8 py-12"
    >
      {projectList.map((column) => (
        <motion.div
          variants={item}
          key={column.id}
          className="relative h-full overflow-hidden"
        >
          <img
            src={column.preview}
            alt={column.name}
            loading="lazy"
            className="h-full object-cover w-full rounded-md grayscale hover:grayscale-0 transition duration-500"
          />
          <div className="absolute bottom-4 w-full px-6">
            <a
              href={`${column.url}`}
              target="_blank"
              className="w-full border border-white/30 rounded-2xl py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span className="text-black/20 capitalize">view casestudy</span>{" "}
              <FiArrowUpRight className="text-black/20" />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects;
