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
    <div className="w-full h-screen flex gap-4 bg-zinc-900 p-20">
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
        <div className="dets font-['Neue Montreal'] pl-1 mt-10">
          <a className="block text-xl font-light" href="#">
            Instagram
          </a>
          <a className="block text-xl font-light" href="#">
            Behance
          </a>
          <a className="block text-xl font-light" href="#">
            Facebook
          </a>
          <a className="block text-xl font-light" href="#">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
