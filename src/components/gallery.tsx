import { motion } from "motion/react";
import financeImage from "../assets/finance.png";
import taskManagerImage from "../assets/task-manager-preview.png";
import { FiArrowUpRight } from "react-icons/fi";
import photoSnapImage from "../assets/photosnap.png";
import audioPhileImage from "../assets/audiophile.png";
import aboutMeImage from "../assets/portLogo.jpg";
import movieApp from "../assets/web-ent.png";
import iptrackerImage from "../assets/iptrac_proj.png";
import formImage from "../assets/multi-step-form.png";
import calendarImage from "../assets/calendar.png";
import { Link } from "react-scroll";

const Gallery = () => {
  const firstColumn = [
    {
      id: 1,
      preview: financeImage,
      name: "personal finance",
      url: "https://personal-finance-app-orpin.vercel.app/login",
    },
    {
      id: 2,
      preview: taskManagerImage,
      name: "task manager",
      url: "https://task-manager-app-sandy-theta.vercel.app/",
    },
    {
      id: 3,
      preview: calendarImage,
      name: "booking system",
      url: "https://calendar-app-alpha-jade.vercel.app/",
    },
  ];

  const secondColumn = [
    { id: 1, preview: aboutMeImage, name: "blaqout", url: "/" },
    {
      id: 2,
      preview: photoSnapImage,
      name: "photosnap studio",
      url: "https://photosnap-multi-page-website-nu.vercel.app/",
    },
    {
      id: 3,
      preview: audioPhileImage,
      name: "e-commerce app",
      url: "https://audiophile-ecommerce-nu.vercel.app/",
    },
  ];

  const thirdColumn = [
    {
      id: 1,
      preview: formImage,
      name: "multi-step form",
      url: "https://multi-step-form-one-psi.vercel.app/",
    },
    {
      id: 2,
      preview: movieApp,
      name: "movies app",
      url: "https://entertainment-web-app-vert.vercel.app/",
    },
    { id: 3, preview: iptrackerImage, name: "IP tracker" },
  ];
  return (
    <motion.section
      initial={{ y: -900, scale: 1.1, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-4 py-6 border"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-7 gap-3">
        <div className="lg:col-span-2 grid grid-rows-[repeat(3,20rem)] gap-3 lg:py-16">
          {firstColumn.map((column) => (
            <div key={column.id} className="relative h-full overflow-hidden">
              <img
                src={column.preview}
                alt={column.name}
                className="h-full object-cover w-full rounded-md grayscale hover:grayscale-0 transition duration-500"
              />
              <div className="absolute bottom-4 w-full px-6">
                <a
                  href={column.url}
                  className="w-full border border-white/30 rounded-2xl py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span className="text-black/20 capitalize">
                    view casestudy
                  </span>{" "}
                  <FiArrowUpRight className="text-black/20" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden col-span-3 lg:grid grid-rows-[repeat(3,23rem)] gap-3">
          {secondColumn.map((column) =>
            column.name === "blaqout" ? (
              <div
                key={column.id}
                className="relative h-full overflow-hidden grayscale hover:grayscale-0 transition duration-500"
                onMouseEnter={() =>
                  window.dispatchEvent(new Event("showAboutMe"))
                }
                onMouseLeave={() =>
                  window.dispatchEvent(new Event("hideAboutMe"))
                }
              >
                <img
                  src={column.preview}
                  alt={column.name}
                  className="h-full object-cover w-full rounded-md"
                />
                <div className="absolute bottom-4 w-full px-6">
                  <button className="hidden">About Me</button>
                </div>
              </div>
            ) : (
              <div key={column.id} className="relative h-full overflow-hidden">
                <img
                  src={column.preview}
                  alt={column.name}
                  className="h-full object-cover w-full rounded-md grayscale hover:grayscale-0 transition duration-500"
                />
                <div className="absolute bottom-4 w-full px-6">
                  <a
                    href={column.url}
                    target="_blank"
                    className="w-full border border-white/30 rounded-2xl py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span className="text-black/20 capitalize">
                      view casestudy
                    </span>
                    <FiArrowUpRight className="text-black/20" />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
        <div className="lg:col-span-2 grid grid-rows-[repeat(3,20rem)] gap-3 lg:py-16">
          {thirdColumn.map((column) => (
            <div key={column.id} className="relative h-full overflow-hidden">
              <img
                key={column.id}
                src={column.preview}
                alt={column.name}
                className="h-full w-auto rounded-md grayscale hover:grayscale-0 transition duration-500"
              />
              <div className="absolute bottom-4 w-full px-6">
                <a
                  href={column.url}
                  className="w-full border border-white/30 rounded-2xl py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span className="capitalize text-black/20">
                    view casestudy
                  </span>{" "}
                  <FiArrowUpRight className="text-black/20" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-center gap-6">
        <button className="py-3 px-4 rounded-md overflow-hidden cursor-pointer">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={400}
            className="underline text-white capitalize"
          >
            all projects
          </Link>
        </button>

        <a
          href="mailto:victoreleanya89@gmail.com"
          className="text-white border border-white/50 py-3 px-4 rounded-md overflow-hidden cursor-pointer animate-pulse"
        >
          Get in touch
        </a>
      </div>
    </motion.section>
  );
};

export default Gallery;
