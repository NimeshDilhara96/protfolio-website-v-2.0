import React from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/about_n.webp";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background border-t border-text-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Photo Card */}
          <div className="w-full md:w-[40%] lg:w-[350px] flex-shrink-0">
            <div className="w-full aspect-[4/5] md:aspect-square bg-[#1B3126] rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
              <img
                src={profilePhoto}
                alt="Nimesh Dilhara"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              {/* Optional glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-[60%] flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">
              Designer and developer in one person.
            </h2>

            <p className="text-[#84a39f] text-base md:text-lg leading-relaxed max-w-xl">
              BIT (Hons) in Software Engineering graduate. I care about secure
              authentication, clean APIs and interfaces that are easy to use.
            </p>

            <div className="w-full max-w-2xl h-[1px] bg-text-primary/10 my-8"></div>

            <div className="flex items-center gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  10+
                </div>
                <div className="text-[#84a39f] text-sm md:text-base">
                  projects
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  2+
                </div>
                <div className="text-[#84a39f] text-sm md:text-base">years</div>
              </div>
            </div>

            <div className="w-full max-w-2xl h-[1px] bg-text-primary/10 my-8"></div>

            <Link
              to="/about"
              className="text-accent font-medium text-base md:text-lg hover:text-emerald-400 transition-colors inline-block"
            >
              Read my story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
