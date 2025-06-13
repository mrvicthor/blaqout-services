import { useEffect } from "react";
import { gsap } from "gsap";
const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX - 20 / 2,
        y: clientY - 20 / 2,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      id="cursor"
      className="hidden md:block fixed top-0 left-0  h-5 w-5 bg-white rounded-full z-5 pointer-events-none mix-blend-difference"
    />
  );
};

export default Cursor;
