import React from "react";

const projects = [
  {
    name: "Gera Winds of Joy (Hinjewadi)",
    url: "https://gerawindsofjoyhinjewadi.com/",
    desc: "Landing website for a real-estate project.",
  },
  {
    name: "Global Group (Hinjewadi)",
    url: "https://globalgroup-hinjewadi.com/",
    desc: "Corporate website built for a property group.",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#222831] via-[#393E46] to-[#222831]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#EEEEEE] tracking-wide">
          Freelance Projects
        </h2>
        <p className="text-[#EEEEEE]/70 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Selected real-world projects completed as a freelancer.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="block p-8 rounded-3xl bg-[#393E46]/70 backdrop-blur-lg border border-[#00ADB5]/30
                shadow-[0_8px_30px_rgba(0,173,181,0.2)] hover:shadow-[0_12px_40px_rgba(0,173,181,0.5)]
                transform hover:-translate-y-3 hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-[#00ADB5] tracking-wide">
                {p.name}
              </h3>
              <p className="mt-3 text-[#EEEEEE]/90 text-base md:text-lg leading-relaxed">
                {p.desc}
              </p>
              <span className="mt-4 block text-sm text-[#EEEEEE]/60 font-medium">
                Visit ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
