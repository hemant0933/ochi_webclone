import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Cards = () => {
  const controls = useAnimation();
  const top = useAnimation();
  const right = useAnimation();
  const { ref, inView } = useInView(); // initialize the intersection

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, easings: [0.85, 0, 0.15, 1], duration: 1 },
      });
      top.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, easings: [0.85, 0, 0.15, 1], duration: 1 },
      });
      right.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, easings: [0.85, 0, 0.15, 1], duration: 1 },
      });
    }
  }, [controls, top, right, inView]);

  return (
    <div
      className="w-full h-[100vh] bg-zinc-900 flex items-center justify-center px-32 gap-5"
    >
      <div
        className="cardContainer h-[50vh] w-1/2"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          className="card relative w-full h-full flex items-center justify-center rounded-lg bg-[#004d43]"
        >
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute text-[0.8vw] px-5 py-1 tracking-tight rounded-full border-[1px] left-10 bottom-10">
            &copy;2019-2020
          </button>
        </motion.div>
      </div>
      <div
        className="cardContainer flex gap-5 w-1/2 h-[50vh]"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={top}
          className="card relative w-1/2 h-full flex items-center justify-center rounded-lg bg-[#192826]"
        >
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute text-[0.8vw] px-4 py-1 tracking-tight rounded-full border-[1px] left-10 bottom-10">
            RATING 5.0 ON CLUTCH
          </button>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={right}
          className="card relative w-1/2 h-full flex items-center justify-center rounded-lg bg-[#192826]"
        >
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute text-[0.8vw] px-4 py-1 tracking-tight rounded-full border-[1px] left-10 bottom-10">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
