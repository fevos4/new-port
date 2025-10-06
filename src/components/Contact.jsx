import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "fevatesfish@gmail.com",
      href: "mailto:fevatesfish@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "(+251) 92-002-2650",
      href: "tel:+251920022650",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/feven-tesfaye-jalle",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "GitHub",
      href: "https://github.com/fevos4",
    },
    {
      icon: <FaTelegram />,
      label: "Telegram",
      value: "Telegram",
      href: "https://t.me/fevos4",
    },
  ];

  return (
    <section
      id="contact"
      className="relative z-40 min-h-screen overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
        {/* Animated Heading */}
        <motion.h1
          className="text-[4rem] md:text-[6rem] font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#d4a76b] via-[#34d1eb] to-[#ec48a0] drop-shadow-2xl"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Reach Me
        </motion.h1>

        {/* Subheading with neon glow */}
        <motion.p
          className="text-center text-gray-300 max-w-3xl mb-12 text-lg md:text-xl tracking-wide drop-shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I’m always open for creative collaborations or new opportunities.
          Connect with me using any of the methods below — let’s make something
          amazing!
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {contactInfo.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 rounded-3xl backdrop-blur-lg border border-[#d4a76b]/40 flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 group hover:scale-105 hover:shadow-[0_0_40px_rgba(212,167,107,0.6)]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Floating Neon Icon */}
              <motion.div
                className="text-5xl md:text-6xl mb-4 text-[#d4a76b] group-hover:text-white"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
              >
                {item.icon}
              </motion.div>

              {/* Label */}
              <span className="text-lg md:text-xl font-semibold text-center text-[#f0f0f0]/90 group-hover:text-white transition-colors duration-300">
                {item.value}
              </span>

              {/* Animated Border Glow */}
              <motion.span
                className="absolute inset-0 rounded-3xl border border-[#d4a76b]/20 pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 20px #d4a76b",
                    "0 0 40px #34d1eb",
                    "0 0 20px #ec48a0",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: idx * 0.3,
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          className="mt-16 text-gray-500 text-center text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          © 2025 Feven Tesfaye. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
