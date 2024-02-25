import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full flex items-center justify-center rounded-lg bg-[#004d43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute text-[0.8vw] px-5 py-1 tracking-tight rounded-full border-[1px] left-10 bottom-10">
            &copy;2019-2020
          </button>
        </div>
      </div>
      <div className="cardContainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative w-1/2 h-full flex items-center justify-center rounded-lg bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute text-[0.8vw] px-4 py-1 tracking-tight rounded-full border-[1px] left-10 bottom-10">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative w-1/2 h-full flex items-center justify-center rounded-lg bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute text-[0.8vw] px-4 py-1 tracking-tight rounded-full border-[1px] left-10 bottom-10">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
