import { Link } from "react-scroll";
import processImage from "../assets/process.jpg";
import { FaCircleDot, FaListCheck } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import Process from "./process-step";

const Processes = () => {
  return (
    <section className="py-24 border-t  border-white/10 rounded-t-[3rem] px-4 md:px-16 lg:px-8">
      <div className="grid grid-cols-1 grid-rows-[20rem_min-max(76rem)] md:grid-rows-[20rem_68rem] lg:grid-rows-none lg:grid-cols-2 max-w-7xl mx-auto gap-8">
        <div className="h-full">
          <img
            src={processImage}
            alt="process image"
            className="grayscale rounded-xl h-full object-cover w-full"
          />
        </div>
        <div className="space-y-6">
          <p className="border-[#1C1C1C] rounded-4xl border-t-2 bg-[#0D0D0D] rounded-t-4xl text-white flex items-center gap-3 w-[11rem] justify-center py-1.5">
            <FaCircleDot /> <span>Design process</span>
          </p>
          <p className="text-white text-7xl capitalize">process</p>
          <p className="text-white/50 text-2xl">
            crafting bold visuals that inspire and elevate brands with thought
            process
          </p>
          <div className="flex gap-4 border-b border-white/10 pb-6">
            <button className="text-white border border-white/50 py-3 px-4 rounded-md overflow-hidden cursor-pointer">
              <Link to="projects" smooth={true} duration={500}>
                Book a Free Call
              </Link>
            </button>
            <button className="text-white border border-white/50 py-3 px-4 rounded-md overflow-hidden cursor-pointer">
              <Link to="projects" smooth={true} duration={500}>
                See projects
              </Link>
            </button>
          </div>
          <Process
            title="define your vision"
            content="find the perfect plan tailored to your needs, offering the right
                balance of features, flexibility, and value to help you achieve
                your goals effortlessly."
            step={1}
          >
            <FaRegLightbulb className="text-white" size={24} />
          </Process>
          <Process
            step={2}
            title="submit your request"
            content="Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity."
          >
            <FaListCheck className="text-white" size={24} />
          </Process>
          <Process
            step={3}
            title="project delivered"
            content="As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life-on time and beyond expectations."
          >
            <FaRocket className="text-white" size={24} />
          </Process>
        </div>
      </div>
    </section>
  );
};

export default Processes;
