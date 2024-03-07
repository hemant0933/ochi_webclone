import React, { useEffect, useState } from "react";
import Eyes from "./Eyes";
import { FaArrowUp } from "react-icons/fa6";

const Ready = () => {
  const [rotate, setRotate] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const [scrollY, setScrollY] = useState(8);
  const translateEyeY = scrollY * 0.1;
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);

      // Calculate the distance from the center
      let distanceX = deltaX / (window.innerWidth / 2);
      let distanceY = deltaY / (window.innerHeight / 2);
      setTranslateX(distanceX * 13);
      setTranslateY(distanceY * 13);
    });
  }, []);

  return (
    <div className="w-full h-[160vh] relative flex flex-col justify-center items-center bg-[#CDEA68]">
      <div className="w-full h-[120vh] relative flex flex-col justify-center items-center bg-[#CDEA68]">
        <div className="absolute z-30 w-full px-20 pt-10">
          <h1 className='text-black text-[12vw] leading-none text-center font-["Neue Montreal"] tracking-tighter font-bold'>
            READY <br />
            TO START <br />
            THE PROJECT ?
          </h1>
        </div>
        <div className="absolute -top-24 flex justify-center items-center w-full z-40">
          <div
            style={{
              transform: `translateY(${translateEyeY}px)`,
            }}
            className="absolute flex items-center justify-center gap-10 w-1/2"
          >
            <div className="w-[11vw] h-[11vw] flex items-center justify-center rounded-full bg-zinc-100">
              <div
                className="relative w-28 h-28 rounded-full bg-zinc-900"
                style={{
                  transform: `translate(${translateX}px, ${translateY}px)`,
                  transition: "transition 0.5s",
                }}
              >
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="w-[11vw] h-[11vw] flex items-center justify-center rounded-full bg-zinc-100">
              <div
                className="relative w-28 h-28 rounded-full bg-zinc-900"
                style={{
                  transform: `translate(${translateX}px, ${translateY}px)`,
                  transition: "transition 0.5s",
                }}
              >
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 pb-20">
        <button
          className="uppercase flex gap-6 tracking-tighter items-center px-8 py-4 
        rounded-full text-sm font-thin text-white bg-black group"
        >
          Start the project
          <div
            className="w-2 h-2 bg-white rounded-full relative flex items-center justify-center
          group-hover:scale-[4] group-hover:transition-all 
          group-hover:ease-in-out group-hover:duration-700 group-hover:bg-white"
          >
            <span className="rotate-45 w-2 h-2 flex items-center justify-center text-black absolute opacity-0 group-hover:opacity-100">
              <FaArrowUp className="text-[4px] font-thin" />
            </span>
          </div>
        </button>
        <h1 className="text-black">OR</h1>
        <button
          className="hvr-sweep-to-top overflow-hidden uppercase px-8 py-4 
        flex tracking-tighter items-center gap-6 rounded-full 
        font-thin  text-sm text-black border-[1px] border-black group"
        >
          hello@ochi.design
          <div
            className="w-2 h-2 bg-black rounded-full  relative flex items-center justify-center
          group-hover:scale-[4] group-hover:transition-all group-hover:ease-in-out 
          group-hover:duration-700 group-hover:bg-white"
          >
            <span className="rotate-45 w-2 h-2 flex items-center justify-center text-black absolute opacity-0 group-hover:opacity-100">
              <FaArrowUp className="text-[4px] font-thin" />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Ready;
