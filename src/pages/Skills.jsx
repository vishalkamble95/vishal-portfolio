import React from "react";

const skills = {
  frontend: [
    "ReactJS",
    "JavaScript (ES6+)",
    "Redux-Toolkit",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ],
  tools: [
    "Git",
    "Postman",
    "VS Code",
    "Webpack",
    "Babel",
    "Vite",
    "Parcel",
    "Jest",
  ],
  backend: ["REST APIs", "JSON", "SQL"],
  others: ["C Language", "OOPs Concepts"],
};

function SkillCard({ title, items }) {
  return (
    <div
      className="p-8 rounded-3xl bg-[#393E46]/70 backdrop-blur-lg border border-[#00ADB5]/30
        shadow-[0_8px_30px_rgba(0,173,181,0.2)] hover:shadow-[0_12px_40px_rgba(0,173,181,0.4)]
        transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
    >
      <h4 className="font-bold text-2xl text-[#EEEEEE] tracking-wider border-b border-[#00ADB5]/50 pb-3">
        {title}
      </h4>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {items.map((s, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-[#222831] text-[#EEEEEE] 
              border border-[#00ADB5]/40 hover:bg-[#00ADB5] hover:text-[#222831] 
              transition-all duration-300 cursor-pointer"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#222831] via-[#393E46] to-[#222831]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-[#EEEEEE] tracking-wide">
          Skills
        </h2>
        <p className="text-center text-lg md:text-xl text-[#EEEEEE]/70 mt-4 max-w-2xl mx-auto">
          My technical expertise, categorized for a clear overview. Interactive, modern, and focused on frontend, backend, tools, and more.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <SkillCard title="Frontend" items={skills.frontend} />
          <SkillCard title="Tools & Testing" items={skills.tools} />
          <SkillCard title="Backend & Database" items={skills.backend} />
          <SkillCard title="Others" items={skills.others} />
        </div>
      </div>
    </section>
  );
}
