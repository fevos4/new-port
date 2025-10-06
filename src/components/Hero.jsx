import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  // Desktop letters positioning
  const desktopLetters = [
    { char: "P", left: "270px", top: "60px", rotate: "-12deg", size: "240px" },
    { char: "O", left: "400px", top: "170px", rotate: "-6deg", size: "180px" },
    { char: "R", left: "475px", top: "40px", rotate: "20deg", size: "180px" },
    { char: "t", left: "585px", top: "-65px", rotate: "0deg", size: "280px" },
    { char: "f", left: "700px", top: "28px", rotate: "25deg", size: "180px" },
    { char: "O", left: "730px", top: "120px", rotate: "-8deg", size: "180px" },
    { char: "L", left: "870px", top: "120px", rotate: "-8deg", size: "190px" },
    { char: "i", left: "950px", top: "84px", rotate: "4deg", size: "180px" },
    { char: "O", left: "1000px", top: "170px", rotate: "6deg", size: "160px" },
  ];

  // Mobile letters positioning (more compact for mobile screens)
  const mobileLetters = [
    { char: "P", left: "-10px", top: "130px", rotate: "-12deg", size: "90px" },
    { char: "O", left: "30px", top: "170px", rotate: "-6deg", size: "80px" },
    { char: "R", left: "65px", top: "110px", rotate: "20deg", size: "80px" },
    { char: "t", left: "120px", top: "60px", rotate: "0deg", size: "110px" },
    { char: "f", left: "170px", top: "80px", rotate: "25deg", size: "80px" },
    { char: "O", left: "180px", top: "120px", rotate: "-8deg", size: "80px" },
    { char: "L", left: "240px", top: "120px", rotate: "-8deg", size: "85px" },
    { char: "i", left: "270px", top: "105px", rotate: "4deg", size: "80px" },
    { char: "O", left: "300px", top: "160px", rotate: "6deg", size: "50px" },
  ];

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <section
      id="hero"
      className="relative flex justify-center items-start h-screen bg-[#141414] overflow-hidden"
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-10"
        options={{
          background: { color: "#141414" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Desktop Letters */}
      <div className="absolute inset-0 z-20 pointer-events-none w-full overflow-hidden hidden md:block">
        <div className="transform scale-100 origin-top-left relative">
          {desktopLetters.map((letter, idx) => (
            <motion.h1
              key={idx}
              className="absolute font-black text-white drop-shadow-lg"
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px rgba(255,255,255,0.8)",
              }}
              style={{
                left: letter.left,
                top: letter.top,
                fontSize: letter.size,
                rotate: letter.rotate,
              }}
            >
              {letter.char}
            </motion.h1>
          ))}
        </div>
      </div>

      {/* Mobile Letters */}
      <div className="absolute inset-0 z-20 pointer-events-none w-full overflow-hidden block md:hidden">
        <div className="relative w-[320px] h-[100px] mx-auto mt-12 px-4">
          {mobileLetters.map((letter, idx) => (
            <motion.h1
              key={idx}
              className="absolute font-black text-white drop-shadow-lg"
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px rgba(255,255,255,0.8)",
              }}
              style={{
                left: letter.left,
                top: letter.top,
                fontSize: letter.size,
                rotate: letter.rotate,
              }}
            >
              {letter.char}
            </motion.h1>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <img
        src={hero}
        alt="Hero"
        className="relative z-20 w-[300px] mt-[190px] md:w-[300px] md:mt-[190px] sm:w-[180px] sm:mt-[140px] select-none"
      />

      {/* Name */}
      <motion.h2
        className="absolute z-30 left-[220px] top-[420px] md:left-[220px] md:top-[420px] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[340px] text-[28px] md:text-[28px] sm:text-[18px] font-extrabold tracking-wider text-[#d4a76b]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        FEVEN TESFAYE
      </motion.h2>
    </section>
  );
};

export default Hero;
