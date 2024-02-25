import React from "react";

const About = () => {
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
          <button className="px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white flex gap-10 items-center">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b2da22]"></div>
      </div>
    </div>
  );
};

export default About;
