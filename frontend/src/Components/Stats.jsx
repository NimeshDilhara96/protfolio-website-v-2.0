import React from 'react';
import { FaBriefcase, FaUserTie, FaUsers, FaCode, FaCoffee, FaHeart } from 'react-icons/fa';

function Stats() {
  const stats = [
    {
      icon: FaBriefcase,
      value: "10+",
      label: "Projects Completed",
      color: "from-[var(--primary)] to-[var(--primary-dark)]",
      delay: "0s"
    },
    {
      icon: FaUserTie,
      value: "2+",
      label: "Years Experience",
      color: "from-[var(--accent)] to-[var(--accent-green)]",
      delay: "0.2s"
    },
    {
      icon: FaUsers,
      value: "5+",
      label: "Happy Clients",
      color: "from-[var(--accent-pink)] to-[var(--accent-purple)]",
      delay: "0.4s"
    }
  ];

  return (
    <section id="stats" className="py-12 md:py-16 bg-gradient-to-r from-[var(--light)] to-[var(--light-dark)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-10 w-16 h-16 md:w-32 md:h-32 bg-[var(--primary)]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 md:w-24 md:h-24 bg-[var(--accent-pink)]/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group bg-[var(--white)]/70 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-[var(--primary)]/10 p-6 md:p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/15 hover:scale-105 hover:-translate-y-2 border border-white/20"
                style={{
                  animationDelay: stat.delay
                }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg shadow-[var(--primary)]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <IconComponent className="text-white text-xl md:text-2xl" />
                </div>

                {/* Stat Value */}
                <div className="mb-2 md:mb-3">
                  <span className={`text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:animate-pulse transition-all duration-300`}>
                    {stat.value}
                  </span>
                </div>

                {/* Stat Label */}
                <div className="text-[var(--gray)] text-base md:text-lg font-medium group-hover:text-[var(--dark)] transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Decorative line */}
                <div className={`w-10 md:w-12 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-3 md:mt-4 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-14 md:group-hover:w-16 transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional decorative stats */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-12 md:mt-16 px-4">
          <div className="flex items-center gap-1.5 md:gap-2 text-[var(--gray)] group hover:text-[var(--primary)] transition-colors duration-300">
            <FaCode className="text-sm md:text-lg group-hover:animate-bounce" />
            <span className="font-medium text-sm md:text-base">Clean Code</span>
          </div>
          <div className="w-0.5 md:w-1 h-4 md:h-6 bg-[var(--gray)]/30 rounded-full"></div>
          <div className="flex items-center gap-1.5 md:gap-2 text-[var(--gray)] group hover:text-[var(--accent-pink)] transition-colors duration-300">
            <FaCoffee className="text-sm md:text-lg group-hover:animate-bounce" />
            <span className="font-medium text-sm md:text-base">Caffeine Powered</span>
          </div>
          <div className="w-0.5 md:w-1 h-4 md:h-6 bg-[var(--gray)]/30 rounded-full"></div>
          <div className="flex items-center gap-1.5 md:gap-2 text-[var(--gray)] group hover:text-[var(--accent)] transition-colors duration-300">
            <FaHeart className="text-sm md:text-lg group-hover:animate-bounce" />
            <span className="font-medium text-sm md:text-base">Made with Love</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;