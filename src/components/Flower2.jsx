import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Flower2 = () => {
  // Track scroll position
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate rotation angle based on scroll position
  const rotation = scrollY * 0.67; // Adjust the factor as needed

  return (
    <motion.div
      style={{
        display: "inline-block",
        transform: `rotate(${rotation}deg)`, // Apply rotation
      }}
      className='absolute z-10 cursor-pointer hover:animate-spin'
    >
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> 
  <g clipPath="url(#clip0_116_92)"> 
    <path d="M127.233 110.308C145.856 117.358 170.923 116.073 186.883 107.25L200 100L186.883 92.7498C170.923 83.9274 145.857 82.6428 127.233 89.6916L113.267 94.9781C113.18 94.6967 113.075 94.4251 112.972 94.1516L126.546 88.0321C144.7 79.8479 161.515 61.2149 166.563 43.6907L170.711 29.2888L156.309 33.4367C138.785 38.4842 120.152 55.3 111.967 73.4535L106.057 86.5642C105.784 86.4316 105.511 86.3 105.229 86.1851L110.308 72.7665C117.357 54.1433 116.072 29.0767 107.25 13.1163L100 0L92.7498 13.1167C83.9274 29.0772 82.6428 54.1433 89.6916 72.767L94.7707 86.1856C94.4884 86.3005 94.2154 86.4321 93.9428 86.5646L88.0321 73.4539C79.8479 55.3005 61.2149 38.4846 43.6907 33.4372L29.2888 29.2893L33.4367 43.6912C38.4842 61.2149 55.3 79.8484 73.4535 88.0326L87.0274 94.1521C86.9247 94.4256 86.8191 94.6972 86.733 94.9786L72.7665 89.6921C54.1433 82.6428 29.0767 83.9279 13.1163 92.7502L0 100L13.1167 107.25C29.0772 116.073 54.1433 117.358 72.767 110.308L87.3861 104.775C87.5014 105.027 87.6172 105.28 87.747 105.524L73.454 111.968C55.3005 120.152 38.4847 138.785 33.4372 156.309L29.2893 170.711L43.6912 166.563C61.2149 161.516 79.8484 144.7 88.0326 126.547L94.6656 111.834C94.9107 111.936 95.1651 112.02 95.4172 112.109L89.6921 127.234C82.6428 145.857 83.9279 170.924 92.7502 186.884L100 200.001L107.251 186.884C116.073 170.924 117.358 145.858 110.309 127.234L104.583 112.108C104.835 112.02 105.09 111.936 105.335 111.833L111.968 126.546C120.152 144.7 138.785 161.515 156.309 166.563L170.711 170.711L166.563 156.309C161.516 138.785 144.7 120.152 126.547 111.967L112.253 105.524C112.383 105.28 112.499 105.027 112.614 104.774L127.233 110.308Z" fill="url(#paint0_linear_116_92)"/> 
  </g> 
  <defs> 
    <linearGradient id="paint0_linear_116_92" x1="177" y1="-9.23653e-06" x2="39.4993" y2="152.5" gradientUnits="userSpaceOnUse"> 
      <stop stopColor="#B0B9FF"/> 
      <stop offset="1" stopColor="#E7E9FF"/> 
    </linearGradient> 
    <clipPath id="clip0_116_92"> 
      <rect width="200" height="200" fill="white"/> 
    </clipPath> 
  </defs> 
</svg>  
    </motion.div>
  );
};

export default Flower2;
