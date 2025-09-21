import React from "react";

const certificates = [
  {
    title: "Namaste React",
    period: "Dec 2024 – Feb 2025",
    link: "https://namastedev.com/vishalkamble0088/certificates/namaste-react",
    note: "Gained in-depth knowledge of React fundamentals, component lifecycle, state management, performance optimization, and advanced React patterns.",
  },
];

export default function Certificates() {
  return (
    <section className="py-24 px-6 bg-[#222831]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#EEEEEE] tracking-wide">
          Certificates
        </h2>
        <p className="text-[#EEEEEE]/70 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Professional certificates I have earned to enhance my frontend expertise.
        </p>

        {/* Centered card container */}
        <div className="mt-16 flex justify-center">
          {certificates.map((c, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#393E46]/70 backdrop-blur-md border border-[#00ADB5]/30 
                shadow-[0_8px_30px_rgba(0,173,181,0.2)] hover:shadow-[0_12px_40px_rgba(0,173,181,0.5)]
                transition-all duration-500 transform hover:-translate-y-3 hover:scale-105
                flex flex-col items-center text-center max-w-lg w-full"
            >
              <h3 className="text-2xl font-bold text-[#00ADB5] tracking-wide">
                {c.title}
              </h3>
              <p className="text-sm text-[#EEEEEE]/70 mt-1">{c.period}</p>
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-[#EEEEEE]/80 hover:text-[#00ADB5] underline font-medium transition-colors duration-300"
              >
                View Certificate ↗
              </a>
              <p className="text-sm text-[#EEEEEE]/70 mt-4">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
