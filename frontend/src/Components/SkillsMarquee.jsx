import React from "react";
import { FaReact, FaNodeJs, FaFigma, FaPython, FaGithub } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: null }, // Will use the default green dot
  { name: "Next.js", icon: null },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Python", icon: <FaPython /> },
  { name: "TypeScript", icon: null },
  { name: "Tailwind CSS", icon: null },
  { name: "Vue.js", icon: null },
  { name: "Express.js", icon: null },
  { name: "Git", icon: <FaGithub /> },
];

export default function SkillsMarquee() {
  return (
    <section
      id="technologies"
      className="relative flex items-center bg-background border-t border-b border-text-primary/5 overflow-hidden h-14 md:h-16"
    >
      {/* Scrolling Marquee Container */}
      <div
        className="flex absolute left-0 items-center"
        style={{ animation: "marquee-left 35s linear infinite" }}
      >
        {/* We repeat the array multiple times to ensure smooth infinite scrolling */}
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center gap-2.5 mx-6 md:mx-8 shrink-0">
            {skill.icon ? (
              <span className="text-accent text-lg">{skill.icon}</span>
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            )}
            <span className="text-[#84a39f] text-sm md:text-sm font-medium tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Left static text with gradient fade to cover scrolling items */}
      <div className="absolute left-0 inset-y-0 flex items-center pl-4 md:pl-8 pr-16 bg-gradient-to-r from-background from-75% to-transparent z-10 pointer-events-none">
        <div className="text-accent text-[9px] md:text-[11px] font-bold tracking-widest uppercase leading-[1.3]">
          Stack I Design
          <br />&amp; Build Daily
        </div>
      </div>

      {/* Right edge fade for smooth entry */}
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* -25% because we repeated the array 4 times */
        }
      `}</style>
    </section>
  );
}
