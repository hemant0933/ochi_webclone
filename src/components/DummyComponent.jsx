import React from "react";
import Flower from "./Flower";
import Flower2 from "./Flower2";

const DummyComponent = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-wrap justify-evenly items-center">
      <div className="relative flex flex-col justify-center items-center gap-4 flex-wrap">
            <Flower2 />
            <div className="cylinder"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center gap-4 flex-wrap">
            <Flower />
            <div className="cylinder"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center gap-4 flex-wrap">
            <Flower2 />
            <div className="cylinder"></div>
        </div>
      </div>
    </div>
  );
};

export default DummyComponent;
