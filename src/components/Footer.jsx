import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="w-full relative h-[100vh] flex gap-4 bg-zinc-900 pt-20 px-20">
      <div className="w-1/2 font-['Founders Grotesk']">
        <h1 className="text-[5.5vw] uppercase font-bold leading-none tracking-tighter -mb-3">
          eye-
        </h1>
        <h1 className="text-[5.5vw] uppercase font-bold leading-none tracking-tighter">
          opening
        </h1>
      </div>
      <div className="w-1/2 flex flex-col justify-items-start">
        <motion.h1
          className="text-[5.5vw] uppercase font-bold leading-none tracking-tighter"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "100%" },
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        >
          Presentations
        </motion.h1>

        <div className="dets flex flex-col items-start font-['Neue Montreal'] pl-1 mt-10">
          <a className="block text-xl font-light hvr-underline" href="#">
            Instagram
          </a>
          <a className="block text-xl font-light hvr-underline" href="#">
            Behance
          </a>
          <a className="block text-xl font-light hvr-underline" href="#">
            Facebook
          </a>
          <a className="block text-xl font-light hvr-underline" href="#">
            Linkedin
          </a>
        </div>
        <div className="w-full flex justify-between flex-row-reverse flex-nowrap ">
          <div className="dets font-['Neue Montreal'] flex flex-col gap-1 pl-1 mt-10">
            <a className="block text-xl font-light hvr-underline" href="#">
              Home
            </a>
            <a className="block text-xl font-light hvr-underline" href="#">
              Services
            </a>
            <a className="block text-xl font-light hvr-underline" href="#">
              Our work
            </a>
            <a className="block text-xl font-light hvr-underline" href="#">
              About Us
            </a>
            <a className="block text-xl font-light hvr-underline" href="#">
              Insights
            </a>
            <a className="block text-xl font-light hvr-underline" href="#">
              Contact Us
            </a>
          </div>
          <div className="dets font-['Neue Montreal'] flex flex-col gap-6 pl-1 mt-10">
            <a className="block text-xl font-light hvr-underline" href="#">
              202-1965 W 4th Ave <br />
              Vancouver, Canada
            </a>
            <a className="block text-xl font-light hvr-underline" href="#">
              30 Chukarina St
              <br />
              Lviv, Ukraine
            </a>
            <a className="block text-xl font-light hvr-underline" href="#">
              hello@ochi.design
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
