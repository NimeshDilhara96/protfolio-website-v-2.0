import React from 'react';
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";

const steps = [
  {
    num: "01",
    title: "Discuss",
    desc: "We agree on goals, timeline, and the exact scope of your project."
  },
  {
    num: "02",
    title: "Design",
    desc: "I create stunning Figma screens for you to review and refine."
  },
  {
    num: "03",
    title: "Build",
    desc: "I build the product with modern code. Weekly demos included."
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deploy to production, hand over the code, and provide support."
  }
];

export default function HowIWork() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
              How I work
            </h2>
            <p className="text-text-primary/70 mt-4 max-w-lg">
              A streamlined, transparent process designed to get your product to market fast with zero headaches.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 lg:gap-4">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col group w-full lg:w-[22%] bg-surface/50 border border-border-subtle p-6 rounded-2xl hover:bg-surface hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 relative overflow-hidden">
                
                {/* Subtle top highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-text-primary font-bold text-xl md:text-2xl">
                    {step.title}
                  </h3>
                  <div className="text-accent/30 font-black text-4xl transition-all duration-300 group-hover:text-accent/80 group-hover:scale-110">
                    {step.num}
                  </div>
                </div>
                
                <p className="text-text-primary/80 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Indicator */}
              {i < steps.length - 1 && (
                <>
                  {/* Desktop Arrow */}
                  <div className="hidden lg:flex items-center justify-center text-accent/20">
                    <FaArrowRight className="w-5 h-5" />
                  </div>
                  {/* Mobile Arrow */}
                  <div className="flex lg:hidden items-center justify-center py-2 text-accent/20">
                    <FaArrowDown className="w-5 h-5" />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
