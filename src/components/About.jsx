import React from "react";
import { motion } from "framer-motion";
import me from "../assets/me.png";
import css from "../assets/css3d.webp";
import figma from "../assets/figma3d.webp";
import html from "../assets/html3d.webp";
import js from "../assets/js3d.webp";
import nodejs from "../assets/node3d.webp";
import react from "../assets/react 3d.webp";
import tailwind from "../assets/tail3d.webp";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-40 min-h-screen text-white grid place-items-center px-6 md:px-12 pt-24 md:pt-32"
    >
      <div className="grid md:grid-cols-3 items-center gap-16 max-w-6xl w-full">
        {/* Image with circular background */}
        <motion.div
          className="relative w-64 h-64 md:w-72 md:h-72 justify-self-center md:justify-self-end col-span-1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Circle Background with Neon Glow */}
          <motion.div
            className="absolute inset-0 w-full h-full rounded-full z-0"
            animate={{
              boxShadow: [
                "0 0 40px 15px rgba(59,130,246,0.6)",
                "0 0 40px 15px rgba(236,72,153,0.6)",
                "0 0 40px 15px rgba(34,211,238,0.6)",
                "0 0 40px 15px rgba(132,204,22,0.6)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          />

          {/* Profile Image floating */}
          <motion.img
            src={me}
            alt="Feven Tesfaye"
            className="relative z-10 w-full -mt-24 rounded-full"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-6 text-center md:text-left justify-self-center md:justify-self-start col-span-2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Hi, Feven Here!
            </h1>
            <h2 className="text-lg md:text-xl text-gray-300">
              Web Designer and Front-end Developer
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-3xl">
            I am a passionate Computer Science and Engineering graduate with
            hands-on experience in web design and development. With a solid
            foundation in{" "}
            <span className="text-orange-400 font-semibold">HTML</span>,{" "}
            <span className="text-blue-400 font-semibold">CSS</span>,{" "}
            <span className="text-yellow-400 font-semibold">JavaScript</span>,{" "}
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>,
            and <span className="text-blue-300 font-semibold">ReactJS</span>, I
            bring both creativity and technical expertise to every project. I
            have a keen eye for detail and thrive in crafting visually
            appealing, responsive, and user-friendly websites. I'm a fast
            learner who is always exploring new technologies and expanding my
            knowledge to stay current and grow as a developer.
          </p>
          <h3 className="font-bold text-2xl">Area of skills</h3>
          {/* Tech Icons with floating + glow + rotate */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-6 w-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {[html, css, js, tailwind, react, nodejs, figma].map((icon, i) => (
              <motion.img
                key={i}
                src={icon}
                alt=""
                className="w-10 h-10 cursor-pointer"
                animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.1,
                }}
                whileHover={{
                  scale: 1.4,
                  rotate: 15,
                  boxShadow: "0 0 15px 5px rgba(59,130,246,0.7)",
                }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
