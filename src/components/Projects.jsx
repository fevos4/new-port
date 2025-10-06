import React from "react";
import { motion } from "framer-motion";
import finance from "../assets/Finance.png";
import health from "../assets/Healthknock.png";
import gym from "../assets/Alphagym.png";
import { loadSlim } from "tsparticles-slim";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: finance,
      title: "Finance Management",
      link: "https://finance-management-3l2b.vercel.app/",
    },
    {
      id: 2,
      img: health,
      title: "Health Tracker",
      link: "https://www.figma.com/proto/OuJN7CDSN1Y6ZdACL35CmM/HealthKnock?page-id=0%3A1&node-id=115-512&viewport=2%2C98%2C0.15&t=fzIdX8LVBisuxecf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=115%3A1330",
    },
    {
      id: 3,
      img: gym,
      title: "Girls Gym",
      link: "https://alpha-girls-gym-website.vercel.app/",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
    }),
  };

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative z-40 min-h-screen text-white overflow-hidden px-6 md:px-12 flex flex-col items-center justify-center text-center">
      {/* Heading */}
      <motion.h1
        className="relative text-[4rem] md:text-[6rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 drop-shadow-2xl mb-16 z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PROJECTS
      </motion.h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center place-items-center w-full max-w-5xl z-10">
        {projects.map((project, idx) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank" // ✅ Opens in new tab
            rel="noopener noreferrer"
            className="relative rounded-3xl backdrop-blur-lg border border-[#f59e0b]/30 p-6 flex flex-col items-center justify-between cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.6)]"
            custom={idx}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            {/* Floating project image */}
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full max-h-40 object-contain mb-4"
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: idx * 0.3 }}
            />

            {/* Project Title */}
            <motion.span
              className="text-xl md:text-xl font-bold text-[#f59e0b] drop-shadow-lg"
              animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: idx * 0.3 }}
            >
              {project.title}
            </motion.span>

            {/* Neon ID number in background */}
            <motion.span
              className="absolute text-[5rem] md:text-[6rem] font-extrabold text-transparent text-outline opacity-10 -bottom-4"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, delay: idx * 0.5 }}
            >
              {project.id}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
