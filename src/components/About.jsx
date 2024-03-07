import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue Montreal'] text-black font-normal text-[3.9vw] leading-[4vw] tracking-tighter">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to <span className="underline">raise funds,</span>{" "}
        <span className="underline"> sell prod­ucts</span>,{" "}
        <span className="underline">ex­plain com­plex ideas</span>, and{" "}
        <span className="underline">hire great peo­ple</span>.
      </h1>
      <div className="w-full flex gap-5 pt-10 border-t-[1px] mt-20 border-[#a0b266]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach :</h1>
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="group px-6 py-4 uppercase font-thin bg-zinc-900 rounded-full mt-10 text-white flex gap-7 items-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Read More
            <div className="relative w-3 h-3 bg-zinc-100 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[2.6]">
              <MdArrowOutward className="text-black font-thin text-[9px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
          <div
            className={`h-[70vh] rounded-xl overflow-hidden ${
              hover ? "scale-95" : ""
            } transition-all duration-1000`}
          >
            <img
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              className={`h-full rounded-xl ${
                hover ? "scale-90" : "scale-100"
              }transition-all duration-1000`}
              alt="pic1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
