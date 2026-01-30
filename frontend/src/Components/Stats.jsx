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
    <section id="stats" className="py-8 md:py-12 bg-gradient-to-r from-[var(--light)] to-[var(--light-dark)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-[var(--primary)]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-[var(--accent-pink)]/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group bg-[var(--white)]/70 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg shadow-[var(--primary)]/10 p-4 md:p-6 text-center transition-all duration-500 hover:shadow-xl hover:shadow-[var(--primary)]/15 hover:scale-105 hover:-translate-y-1 border border-white/20"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${stat.delay} both`
                }}
              >
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-lg md:rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg shadow-[var(--primary)]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <IconComponent className="text-white text-lg md:text-xl" />
                </div>

                {/* Stat Value */}
                <div className="mb-1 md:mb-2">
                  <span className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:animate-pulse transition-all duration-300`}>
                    {stat.value}
                  </span>
                </div>

                {/* Stat Label */}
                <div className="text-[var(--gray)] text-sm md:text-base font-medium group-hover:text-[var(--dark)] transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Decorative line */}
                <div className={`w-8 md:w-10 h-0.5 bg-gradient-to-r ${stat.color} mx-auto mt-2 md:mt-3 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-10 md:group-hover:w-12 transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional decorative stats */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mt-8 md:mt-10 px-4">
          <div className="flex items-center gap-1 md:gap-1.5 text-[var(--gray)] group hover:text-[var(--primary)] transition-colors duration-300">
            <FaCode className="text-xs md:text-sm group-hover:animate-bounce" />
            <span className="font-medium text-xs md:text-sm">Clean Code</span>
          </div>
          <div className="w-0.5 h-3 md:h-4 bg-[var(--gray)]/30 rounded-full"></div>
          <div className="flex items-center gap-1 md:gap-1.5 text-[var(--gray)] group hover:text-[var(--accent-pink)] transition-colors duration-300">
            <FaCoffee className="text-xs md:text-sm group-hover:animate-bounce" />
            <span className="font-medium text-xs md:text-sm">Caffeine Powered</span>
          </div>
          <div className="w-0.5 h-3 md:h-4 bg-[var(--gray)]/30 rounded-full"></div>
          <div className="flex items-center gap-1 md:gap-1.5 text-[var(--gray)] group hover:text-[var(--accent)] transition-colors duration-300">
            <FaHeart className="text-xs md:text-sm group-hover:animate-bounce" />
            <span className="font-medium text-xs md:text-sm">Made with Love</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Stats;