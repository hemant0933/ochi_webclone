import { motion } from "framer-motion";
import React, { useState } from "react";

const Features = () => {
  const [rightHover, setRighthovering] = useState(false);
  const [bottomrightHover, setBottomRighthovering] = useState(false);
  const [leftHover, setLefthovering] = useState(false);
  const [bottomleftHover, setBottomLefthovering] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      className="w-full bg-zinc-500 relative py-20"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-100 pb-12">
        <h1 className="text-7xl font-['Neue Montreal'] font-light tracking-normal">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards relative w-full flex flex-wrap gap-10 justify-center items-center mt-10">
          <div
            onMouseEnter={() => setRighthovering(true)}
            onMouseLeave={() => setRighthovering(false)}
            className="cardContainer relative w-[45%] h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[100] text-8xl leading-none tracking-tighter font-['Founders Grotesk']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  className="inline-block text-[8vw] font-bold translate-y-full"
                  initial={{ y: "100%" }}
                  animate={rightHover ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  whileHover={{}}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="bg-green-100 card w-full h-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setLefthovering(true)}
            onMouseLeave={() => setLefthovering(false)}
            className="cardContainer relative w-[45%] h-[70vh]"
          >
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[100] text-8xl leading-none tracking-tighter font-['Founders Grotesk']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  className="inline-block text-[8vw] font-bold translate-y-full"
                  initial={{ y: "100%" }}
                  animate={leftHover ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  whileHover={{}}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="bg-green-100 card w-full h-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setBottomLefthovering(true)}
            onMouseLeave={() => setBottomLefthovering(false)}
            className="cardContainer relative w-[45%] h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[100] text-8xl leading-none tracking-tighter font-['Founders Grotesk']">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  className="inline-block text-[8vw] font-bold translate-y-full"
                  initial={{ y: "100%" }}
                  animate={bottomleftHover ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  whileHover={{}}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="bg-green-100 card w-full h-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setBottomRighthovering(true)}
            onMouseLeave={() => setBottomRighthovering(false)}
            className="cardContainer relative w-[45%] h-[70vh]"
          >
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[100] text-8xl leading-none tracking-tighter font-['Founders Grotesk']">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  className="inline-block text-[8vw] font-bold translate-y-full"
                  initial={{ y: "100%" }}
                  animate={bottomrightHover ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  whileHover={{}}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="bg-green-100 card w-full h-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
