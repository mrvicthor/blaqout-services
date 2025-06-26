import myImage from "../assets/portLogo.jpg";
import { FaArrowDown } from "react-icons/fa6";
import Projects from "./projects";
import { experiences, services } from "../utils";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="projects" className="element">
      <section className="py-16 mt-8 border-t border-white/10 rounded-t-[3rem] px-4 md:px-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6 pt-6">
              <h2 className="text-white text-6xl">Meet Victor</h2>
              <p className="text-white/50">
                I'm Victor, a passionate frontend developer based in United
                Kingdom. I specialize in crafting bold visual identities and
                packaging that captivate and inspire, blending creativity with
                strategy
              </p>
              <ul className="flex gap-3 lg:gap-2 flex-wrap border-t border-b border-white/10 py-6">
                {services.map((service) => (
                  <li
                    key={service.id}
                    className="text-white/50 py-2 px-2 bg-[#0D0D0D] w-fit rounded-md"
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
              <ul className="space-y-8 py-6 px-4">
                {experiences.map((item) => (
                  <li
                    key={item.id}
                    className="text-white/50 flex flex-col gap-3 md:flex-row md:justify-between"
                  >
                    <span className="capitalize">{item.title}</span>
                    <span className="md:mr-auto md:ml-20">{item.company}</span>
                    <span>{item.period}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <img src={myImage} alt="profile photo" className="rounded" />
            </div>
          </section>

          <section className="mt-6">
            <p className="text-white/50 flex gap-4 items-center">
              <span className="capitalize text-2xl">recent works</span>{" "}
              <FaArrowDown className="animate-bounce" />
            </p>
            <Projects />
          </section>
        </div>
      </section>
    </Element>
  );
};

export default About;
