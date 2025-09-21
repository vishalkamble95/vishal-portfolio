import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#222831] py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/vishalkamble95"
            target="_blank"
            rel="noreferrer"
            className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vishalkamble95/"
            target="_blank"
            rel="noreferrer"
            className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-[#EEEEEE]/70 text-center text-sm md:text-base">
          © {new Date().getFullYear()} Vishal Kamble. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
