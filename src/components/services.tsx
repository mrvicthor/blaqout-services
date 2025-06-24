import { FaCircleDot } from "react-icons/fa6";
import { VscSettingsGear } from "react-icons/vsc";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiLegoBold } from "react-icons/pi";
import { GrOptimize } from "react-icons/gr";
import serviceImage from "../assets/service.jpg";
import { services } from "../utils";
import { Link } from "react-scroll";
import Service from "./service";

const Services = () => {
  return (
    <section className="py-24 border-t  border-white/10 rounded-t-[3rem] px-4 md:px-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="border-[#1C1C1C] rounded-4xl border-t-2 bg-[#0D0D0D] rounded-t-4xl text-white flex items-center gap-3 w-[11rem] justify-center py-1.5">
              <FaCircleDot /> <span>Design services</span>
            </p>
            <p className="text-white text-7xl capitalize">services</p>
            <p className="text-white/50 text-2xl">
              Helping businesses standout with brand identity packaging that
              captivates and converts effectively.
            </p>
            <ul className="flex gap-3 lg:gap-2 flex-wrap border-b border-white/10 py-6">
              {services.slice(0, 4).map((service) => (
                <li
                  key={service.id}
                  className="text-white/50 py-2 px-2 bg-[#0D0D0D] w-fit rounded-md"
                >
                  {service.name}
                </li>
              ))}
            </ul>
            <div className="flex gap-8">
              <button className="text-white border border-white/50 py-3 px-4 rounded-md overflow-hidden cursor-pointer animate-pulse">
                Book a free call
              </button>
              <button className="text-white border border-white/50 py-3 px-4 rounded-md overflow-hidden cursor-pointer">
                <Link to="projects" smooth={true} duration={500}>
                  See projects
                </Link>
              </button>
            </div>
          </div>
          <div>
            <img
              src={serviceImage}
              alt="service image"
              className="grayscale rounded-xl h-full object-cover w-full"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mt-8 gap-6">
          <div className="grid gap-6">
            <Service
              title="frontend development"
              description="I build high-performance, accessible, and responsive interfaces
                using modern JavaScript frameworks like React, Next.js, Angular
                and TypeScript. Every component is built with
                precision—mobile-first, pixel-perfect, and optimized for
                performance."
            >
              <VscSettingsGear className="text-white" size={20} />
            </Service>
            <Service
              title="UI Implementation"
              description="You provide the design—I bring it to life. I translate Figma, Adobe XD, or Sketch designs into visually stunning, interactive interfaces. Smooth animations (GSAP, Framer Motion), hover effects, and attention to micro-interactions included."
            >
              <BsPersonWorkspace className="text-white" size={20} />
            </Service>
          </div>

          <div className="grid gap-6">
            <Service
              title="Component Libraries & Design Systems"
              description="I build reusable, scalable component libraries to maintain visual consistency and developer efficiency across your product. Bonus: full documentation using Storybook or custom docs."
            >
              <PiLegoBold className="text-white" size={20} />
            </Service>
            <Service
              title="Performance Optimization"
              description="I help apps load faster and run smoother: Lazy loading, Code splitting, Image and font optimization, Lighthouse audits and fixes."
            >
              <GrOptimize className="text-white" size={20} />
            </Service>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
