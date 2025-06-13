import { Link } from "react-scroll";
import { motion, AnimatePresence } from "motion/react";
import { containerVariants, itemVariants } from "../utils";

type MobileMenuProps = {
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
};

const MobileMenu = ({ handleMenu, showMenu }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {showMenu ? (
        <motion.section
          initial={{ height: 0 }}
          animate={{ height: "30vh" }}
          exit={{
            height: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="lg:hidden fixed top-20 left-0 w-full  px-4 flex-col"
        >
          <motion.ul
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className=" flex gap-6 py-16 px-4 flex-col"
          >
            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
              onClick={() => handleMenu(!showMenu)}
            >
              <Link to="services" smooth={true} duration={500}>
                services
              </Link>
            </motion.li>
            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
              onClick={() => handleMenu(!showMenu)}
            >
              <Link to="projects" smooth={true} duration={500}>
                projects
              </Link>
            </motion.li>
            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
              onClick={() => handleMenu(!showMenu)}
            >
              <Link to="testimonials" smooth={true} duration={500}>
                testimonials
              </Link>
            </motion.li>
            <motion.li
              className="capitalize text-white cursor-pointer"
              variants={itemVariants}
              onClick={() => handleMenu(!showMenu)}
            >
              <Link to="contact" smooth={true} duration={500}>
                contact
              </Link>
            </motion.li>
          </motion.ul>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileMenu;
