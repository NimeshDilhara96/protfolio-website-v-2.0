import React from "react";
import { FaPlay, FaArrowRight, FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import profilePhoto from "../assets/nimesh_dilhara_Kulasooriya_profe.jpeg";
import Button from "./common/Button";

const SocialLink = ({ href, icon, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="w-10 h-10 flex items-center justify-center rounded-full border border-border-subtle text-text-primary/60 hover:text-accent hover:border-accent transition-colors text-sm font-semibold tracking-wider"
  >
    {icon}
  </a>
);

const FloatingPill = ({ label, className }) => (
  <div className={`absolute px-5 py-2 bg-surface border border-border-subtle rounded-full text-xs font-semibold text-text-primary/80 shadow-2xl ${className}`}>
    {label}
  </div>
);

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen bg-background overflow-hidden pt-28 pb-8 flex flex-col justify-between">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--theme-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--theme-grid) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--theme-glow)] rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 z-10 flex-grow flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left pt-6 lg:pt-10">
            {/* Top Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-accent/30 bg-surface/80 text-text-primary/70 text-sm mb-8 shadow-lg backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-accent mr-3 animate-pulse shadow-[0_0_8px_var(--theme-a)]"></span>
              Available for freelance worldwide
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.05] tracking-tight mb-8">
              I build web apps<br />
              <span className="text-highlight">that scale with</span><br />
              your business.
            </h1>

            <p className="text-text-primary/90 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              <span className="font-bold text-text-primary">Nimesh Dilhara Kulasooriya</span>, freelance full-stack developer. I help startups and international clients ship fast, modern products with React, Node.js and AI features.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<FaArrowRight className="-rotate-45" />}
              >
                Start a project
              </Button>
              <Button
                href="#projects-bento"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto group"
                icon={
                  <div className="w-7 h-7 rounded-full border border-current flex items-center justify-center group-hover:border-accent transition-colors">
                    <FaPlay className="text-[10px] ml-0.5" />
                  </div>
                }
              >
                View my work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://drive.google.com/file/d/1GYmuy_2CMK9ZsAU3Dpf1A65O9hweZ_m-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Nimesh Dilhara Kulasooriya's CV"
                className="text-sm font-medium text-text-primary/90 hover:text-accent underline underline-offset-4 mr-4 transition-colors"
              >
                Download CV
              </a>
              <SocialLink href="https://github.com/nimeshdilhara96" icon={<FaGithub />} ariaLabel="Nimesh Dilhara GitHub Profile" />
              <SocialLink href="https://linkedin.com/in/nimeshdilhara" icon={<FaLinkedinIn />} ariaLabel="Nimesh Dilhara LinkedIn Profile" />
              <SocialLink href="https://instagram.com/nimeshdilhara_" icon={<FaInstagram />} ariaLabel="Nimesh Dilhara Instagram Profile" />
              <SocialLink href="https://twitter.com/nimeshdilhara8" icon={<FaXTwitter />} ariaLabel="Nimesh Dilhara Twitter Profile" />
              <SocialLink href="https://facebook.com/nimesh.dilhara.96" icon={<FaFacebookF />} ariaLabel="Nimesh Dilhara Facebook Profile" />
            </div>
          </div>

          {/* Right Content - Visual Graphic */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative h-[450px] md:h-[600px] items-center mt-12 lg:mt-0">
            {/* Orbit Circle */}
            <div className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-dashed border-accent/60 flex items-center justify-center animate-[spin_60s_linear_infinite]">
              {/* Counter-spin inner items so they stay upright */}
              
              {/* Floating Pills */}
              <div className="absolute top-0 right-[15%] -translate-y-1/2 animate-[spin_60s_linear_infinite_reverse]">
                <FloatingPill label="Figma" />
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite_reverse]">
                <FloatingPill label="React" />
              </div>
              <div className="absolute bottom-0 right-[15%] translate-y-1/2 animate-[spin_60s_linear_infinite_reverse]">
                <FloatingPill label="Node.js" />
              </div>

              <div className="absolute top-[10%] right-[60%] -translate-x-1/2 animate-[spin_60s_linear_infinite_reverse]">
                <div className="flex items-center gap-3 bg-surface border border-border-subtle rounded-full py-2 px-3 shadow-2xl">
                  <div className="bg-[#14a800] text-text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">Upwork</div>
                  <span className="text-xs text-text-primary/80 pr-2 whitespace-nowrap">Hire me there too</span>
                </div>
              </div>
            </div>

            {/* Static Inner Elements (Not Spinning) */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Card */}
              <div className="w-[260px] h-[300px] md:w-[320px] md:h-[380px] bg-surface rounded-[2.5rem] shadow-2xl relative flex flex-col items-center justify-center border border-accent/20 overflow-hidden group">
                <img
                  src={profilePhoto}
                  alt="Nimesh Dilhara - Software Engineer and Full Stack Developer"
                  loading="eager"
                  fetchPriority="high"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-8 left-0 right-0 text-center px-4 z-10">
                  <p className="font-bold text-text-primary leading-tight md:text-lg">Nimesh Dilhara<br/><span className="text-text-primary/90 text-sm font-medium">Full-Stack Developer</span></p>
                </div>
              </div>

              {/* Smaller Featured Card Overlapping */}
              <div className="absolute left-[5%] md:-left-8 bottom-[10%] md:bottom-24 w-48 md:w-56 bg-surface border border-border-subtle rounded-2xl p-4 shadow-2xl z-20 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--theme-a)]" />
                  <span className="text-[10px] md:text-xs text-text-primary/60 font-medium">Featured project</span>
                </div>
                <div className="w-full h-14 md:h-16 bg-card-placeholder rounded-lg mb-3" />
                <h4 className="text-text-primary font-bold text-sm md:text-base mb-1">OrderFlow ERP</h4>
                <a href="#projects" className="text-accent text-[10px] md:text-xs font-bold flex items-center gap-1 hover:underline">
                  View case <FaArrowRight className="-rotate-45" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Stats Bar at Bottom */}
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-20 mt-16 pb-4">
        <div className="bg-surface/90 backdrop-blur-xl border border-border-subtle rounded-3xl w-full p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-x-0 lg:divide-x divide-text-primary/10 shadow-2xl">
          
          <div className="flex flex-col justify-center px-4 md:px-8 items-start">
            <div className="text-4xl md:text-5xl font-bold text-highlight mb-2 tracking-tight">10+</div>
            <div className="text-text-primary/80 text-sm font-medium">Projects shipped</div>
          </div>
          
          <div className="flex flex-col justify-center px-4 md:px-8 items-start">
            <div className="text-4xl md:text-5xl font-bold text-highlight mb-2 tracking-tight">2+</div>
            <div className="text-text-primary/80 text-sm font-medium">Years building</div>
          </div>
          
          <div className="flex flex-col justify-center px-4 md:px-8 items-start">
            <div className="text-4xl md:text-5xl font-bold text-highlight mb-2 tracking-tight">5</div>
            <div className="text-text-primary/80 text-sm font-medium">Core technologies</div>
          </div>
          
          <div className="flex flex-col justify-center px-4 md:px-8 items-start">
            <div className="text-3xl md:text-4xl font-bold text-highlight mb-2 tracking-tight">Sri Lanka</div>
            <div className="text-text-primary/80 text-sm font-medium">Working worldwide</div>
          </div>

        </div>
      </div>
    </div>
  );
}
