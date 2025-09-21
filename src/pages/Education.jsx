import React from "react";

const education = [
  {
    degree: "MCA (Master of Computer Application)",
    period: "Aug 2017 – Sep 2020",
    institute: "Pirens Institute of Computer Technology, Loni",
    uni: "Savitribai Phule Pune University",
  },
  {
    degree: "BCA (Bachelor of Computer Application)",
    period: "Jul 2013 – Jun 2016",
    institute: "C. D. Jain College of Commerce, Shrirampur",
    uni: "Savitribai Phule Pune University",
  },
];

export default function Education() {
  return (
    <section className="relative py-24 px-6 bg-[#222831]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-[#EEEEEE] tracking-wide">
          Education
        </h2>
        <p className="text-center text-[#EEEEEE]/70 mt-4 text-lg md:text-xl">
          My academic journey & milestones
        </p>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Vertical glowing line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-[#00ADB5]/30 rounded-full"></div>

          <div className="space-y-20">
            {education.map((ed, i) => (
              <div
                key={i}
                className={`relative md:w-1/2 ${
                  i % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
                }`}
              >
                {/* Timeline Dot */}
                <span className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#00ADB5] border-2 border-[#393E46] shadow-lg"></span>

                {/* Card */}
                <div
                  className="group p-8 rounded-3xl bg-[#393E46]/70 backdrop-blur-md border border-[#00ADB5]/30 shadow-lg 
                  hover:shadow-[#00ADB5]/50 transition-all duration-500 hover:-translate-y-3"
                >
                  <h3 className="text-2xl font-bold text-[#00ADB5] tracking-wide">
                    {ed.degree}
                  </h3>
                  <span className="text-sm text-[#EEEEEE]/70">{ed.period}</span>
                  <p className="mt-3 font-medium text-[#EEEEEE]">
                    {ed.institute}
                  </p>
                  <p className="text-sm text-[#EEEEEE]/60">{ed.uni}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
