import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-surface to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-primary/80 text-lg mt-6 max-w-2xl mx-auto">
            My academic journey and qualifications that shaped my technical
            expertise
          </p>
        </div>

        {/* Education List - Timeline Style */}
        <div className="max-w-3xl mx-auto pl-4 md:pl-0 mt-8">
          <div className="relative border-l-2 border-border-subtle space-y-14 md:space-y-16">
            
            {/* ESOFT Metro Campus */}
            <div className="relative pl-8 md:pl-12 group">
              {/* Timeline Node - Filled */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-accent rounded-full ring-8 ring-surface transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(52,178,123,0.5)]"></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <time className="block text-accent font-semibold text-sm md:text-base mb-2">
                    Oct 2022 – Sep 2026
                  </time>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 tracking-tight">
                    Esoft Uni Colombo
                  </h3>
                  <p className="text-text-primary/70 text-lg">
                    Bachelor of Information Technology (Hons.) in Software Engineering
                  </p>
                  <div className="mt-5">
                    <span className="inline-block px-4 py-1.5 border border-accent text-accent text-sm font-medium rounded-full bg-accent/5">
                      Graduated
                    </span>
                  </div>
                </div>

                {/* Logo */}
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-surface/90 rounded-xl p-2 border border-border-subtle shadow-lg group-hover:border-accent/50 transition-all duration-300 mt-2 sm:mt-0">
                  <img
                    src="https://esu.lk/images/logo/esu-header.png"
                    alt="ESOFT Metro Campus Logo"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* K/Galigamuwa Central College */}
            <div className="relative pl-8 md:pl-12 group">
              {/* Timeline Node - Outlined */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 border-[3px] border-border-subtle bg-surface rounded-full ring-8 ring-surface transition-all duration-300 group-hover:border-accent group-hover:scale-110"></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <time className="block text-accent font-semibold text-sm md:text-base mb-2">
                    Advanced Level
                  </time>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 tracking-tight">
                    K/Galigamuwa Central College
                  </h3>
                  <p className="text-text-primary/70 text-lg">
                    Technology stream
                  </p>
                  <div className="mt-5">
                    <span className="inline-block px-4 py-1.5 border border-border-subtle text-text-primary/70 text-sm font-medium rounded-full bg-white/5 transition-colors group-hover:border-accent/50 group-hover:text-accent">
                      Completed
                    </span>
                  </div>
                </div>

                {/* Logo */}
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-surface/90 rounded-xl p-2 border border-border-subtle shadow-lg group-hover:border-accent/50 transition-all duration-300 mt-2 sm:mt-0">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXXEvlKCNAX5FjO2CprQhrgJqldsZBHUv-Q&s"
                    alt="K/Galigamuwa Central College Logo"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Additional decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-accent/70 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-accent/50 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
