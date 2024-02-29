import React from "react";
import { useParallax } from "react-scroll-parallax";

const CircularComponent = () => {
    const parallax = useParallax<HTMLDivElement>({
        rotate: [0, 360],
      });
      return (
        <div ref={parallax.ref} className="spinner">
          😵‍💫
          <div className="diamond">💎</div>
          <div className="clown">🤡</div>
          <div className="money">💰</div>
          <div className="hand">👌🏻</div>
        </div>
      );
};

export default CircularComponent;
