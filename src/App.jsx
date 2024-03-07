import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import DummyComponent from "./components/DummyComponent";
import Ready from "./components/Ready";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Ready/>
      <Footer />
      <DummyComponent />
    </div>
  );
};

export default App;
