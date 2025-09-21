import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image for mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{
          backgroundImage: `url('/images/mobile_bg_image.jpg')`,
        }}
      ></div>

      {/* Background image for desktop */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/desktop_bg_image.jpg')`,
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#222831]/90 via-[#393E46]/80 to-[#222831]/95"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-8 md:px-12 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#EEEEEE] tracking-tight drop-shadow-lg leading-snug md:leading-tight">
          Vishal Kamble
          <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 sm:mt-6 font-semibold text-[#00ADB5] tracking-wide">
            Frontend Developer
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-[#EEEEEE]/90 leading-relaxed sm:leading-relaxed font-light max-w-3xl mx-auto">
          I am a self-taught frontend developer with 2 years of professional
          experience and freelance projects. I specialize in React and modern
          web animations, enjoying building creative, responsive, and
          user-friendly interfaces while continuously learning new technologies
          to improve my craft.
        </p>

        <div className="mt-8 sm:mt-12 flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
          <a
            href="https://github.com/vishalkamble95"
            target="_blank"
            rel="noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00ADB5] text-[#222831] rounded-2xl flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-semibold shadow-xl hover:bg-[#EEEEEE] hover:text-[#222831] transform hover:scale-105 transition-all duration-300"
          >
            <FaGithub className="text-lg sm:text-2xl" /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vishalkamble95/"
            target="_blank"
            rel="noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00ADB5] text-[#EEEEEE] rounded-2xl flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-semibold hover:bg-[#00ADB5] hover:text-[#222831] transform hover:scale-105 transition-all duration-300"
          >
            <FaLinkedin className="text-lg sm:text-2xl" /> LinkedIn
          </a>

          <a
            href="/Vishal_Kamble_React_2_YOE.pdf"
            download
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00ADB5] text-[#222831] rounded-2xl flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-semibold shadow-xl hover:bg-[#EEEEEE] hover:text-[#222831] transform hover:scale-105 transition-all duration-300"
          >
            <FaDownload className="text-lg sm:text-2xl" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}
