import React from 'react';

function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-[var(--light)] to-[var(--light-dark)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--accent-pink)]/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4 tracking-tight">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full"></div>
          <p className="text-[var(--gray)] text-lg mt-6 max-w-2xl mx-auto">
            My academic journey and qualifications that shaped my technical expertise
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* ESOFT Metro Campus */}
          <div className="group bg-zinc-700/90backdrop-blur-sm rounded-2xl shadow-lg shadow-[var(--primary)]/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:scale-[1.02] border border-gray-100/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg bg-dark/50 backdrop-blur-sm flex items-center justify-center p-2">
                  <img
                    src="https://esu.lk/images/logo/esu-header.png"
                    alt="ESOFT Metro Campus Logo"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Education Details */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[var(--dark)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                  ESU Colombo
                </h3>
                <div className="text-lg font-semibold text-[var(--gray)] mb-3">
                 Bachelor of Information Technology (Hons.) in Software Engineering
                </div>
                <div className="flex items-center gap-2 text-[var(--primary)] font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Oct 2022 - Dec 2026</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex-shrink-0">
                <span className="px-4 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white text-sm font-medium rounded-full">
                  Current
                </span>
              </div>
            </div>
          </div>

          {/* K/Galigamuwa Central College */}
          <div className="group bg-zinc-700/90backdrop-blur-sm rounded-2xl shadow-lg shadow-[var(--primary)]/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:scale-[1.02] border border-gray-100/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg bg-dark/50 backdrop-blur-sm flex items-center justify-center p-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXXEvlKCNAX5FjO2CprQhrgJqldsZBHUv-Q&s"
                    alt="K/galigamuwa Central College Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Education Details */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[var(--dark)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                  K/Galigamuwa Central College
                </h3>
                <div className="text-lg font-semibold text-[var(--gray)] mb-3">
                  Advanced Level, Technology
                </div>
                <div className="flex items-center gap-2 text-[var(--primary)] font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>2018 - 2020</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex-shrink-0">
                <span className="px-4 py-2 bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent)] text-white text-sm font-medium rounded-full">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-[var(--accent-pink)] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;