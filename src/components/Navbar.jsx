import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-[#393E46]/40 bg-[#222831]/95 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo/vk_logo.jpg"
            alt="Vishal Kamble"
            className="h-10 w-10 mr-2"
          />
          <span className="hidden sm:block font-extrabold text-2xl tracking-wide text-[#EEEEEE]">
            <span className="text-[#00ADB5]">Vishal</span> Kamble
          </span>
        </div>

        {/* Desktop buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="mailto:vishalkamble0088@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-[#393E46] text-[#EEEEEE] font-semibold rounded-lg shadow-md hover:bg-[#00ADB5] hover:text-[#222831] transition"
          >
            <FaEnvelope /> Email
          </a>

          <a
            href="tel:9922835984"
            className="flex items-center gap-2 px-4 py-2 bg-[#393E46] text-[#EEEEEE] font-semibold rounded-lg shadow-md hover:bg-[#00ADB5] hover:text-[#222831] transition"
          >
            <FaPhone /> Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-[#EEEEEE] text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-[#222831]/95 border-t border-[#393E46]/40 shadow-md">
          <a
            href="mailto:vishalkamble0088@gmail.com"
            className="block px-6 py-3 text-[#EEEEEE] font-semibold hover:bg-[#00ADB5] hover:text-[#222831] transition"
          >
            <FaEnvelope className="inline mr-2" /> Email
          </a>
          <a
            href="tel:9922835984"
            className="block px-6 py-3 text-[#EEEEEE] font-semibold hover:bg-[#00ADB5] hover:text-[#222831] transition"
          >
            <FaPhone className="inline mr-2" /> Call
          </a>
        </div>
      )}
    </header>
  );
}
