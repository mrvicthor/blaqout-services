import { useState } from "react";
import { Link } from "react-scroll";
import { MdMenu, MdOutlineClose } from "react-icons/md";

import MobileMenu from "./mobile-menu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 w-screen z-50 h-20 px-4 lg:px-8 bg-black">
      <nav className="max-w-7xl mx-auto flex justify-between h-full items-center">
        <a className="text-white opacity-50" href="/">
          mrvicthor
        </a>
        {showMenu ? (
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-[#040404]/20"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : null}

        <MobileMenu showMenu={showMenu} handleMenu={setShowMenu} />

        <ul className="lg:flex gap-4 hidden">
          <li className="capitalize text-white opacity-50 hover:opacity-100 cursor-pointer">
            <Link to="services" smooth={true} duration={500}>
              services
            </Link>
          </li>
          <li className="capitalize text-white opacity-50 hover:opacity-100 cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              projects
            </Link>
          </li>
          <li className="capitalize text-white opacity-50 hover:opacity-100 cursor-pointer">
            <Link to="testimonials" smooth={true} duration={500}>
              testimonials
            </Link>
          </li>
          <li className="capitalize text-white opacity-50 hover:opacity-100 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              contact
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden hover:bg-[#040C0C] rounded-md py-1 px-1"
        >
          {showMenu ? (
            <MdOutlineClose
              className="text-white opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out"
              size={24}
            />
          ) : (
            <MdMenu
              className="text-white opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out"
              size={24}
            />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
