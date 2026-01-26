import React from 'react';

function Technologies() {
  const techCategories = [
    {
      title: "Frontend Magic ✨",
      badges: [
        { src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white", alt: "HTML5" },
        { src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white", alt: "CSS3" },
        { src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", alt: "JavaScript" },
        { src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", alt: "React" },
        { src: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D", alt: "Vue.js" },
        { src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white", alt: "Bootstrap" }
      ]
    },
    {
      title: "Backend & Mobile 🔧",
      badges: [
        { src: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white", alt: "Node.js" },
        { src: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white", alt: "Express.js" },
        { src: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", alt: "React Native" },
        { src: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white", alt: "Flutter" },
        { src: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white", alt: "Android" }
      ]
    },
    {
      title: "Languages & Databases 💾",
      badges: [
        { src: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white", alt: "Java" },
        { src: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white", alt: "C" },
        { src: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white", alt: "C#" },
        { src: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white", alt: "PHP" },
        { src: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white", alt: "Python" },
        { src: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white", alt: "MongoDB" },
        { src: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white", alt: "MySQL" }
      ]
    },
    {
      title: "Cloud & Tools ☁️",
      badges: [
        { src: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white", alt: "Google Cloud" },
        { src: "https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white", alt: "Firebase" },
        { src: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white", alt: "Figma" },
        { src: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white", alt: "Flask" }
      ]
    },
    {
      title: "AI & Data Science 🤖",
      badges: [
        { src: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white", alt: "TensorFlow" },
        { src: "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white", alt: "scikit-learn" },
        { src: "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white", alt: "Pandas" }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-16 bg-gradient-to-br from-[var(--light-dark)] to-[var(--light)] relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[var(--primary)] rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-[var(--accent)] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-[var(--accent-pink)] rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-3 tracking-tight">
            🛠️ Tech Arsenal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--accent-pink)] mx-auto rounded-full"></div>
        </div>

        {/* Compact Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="group relative bg-blue/60 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-105 overflow-hidden"
              style={{
                animation: `slideUp 0.5s ease-out ${categoryIndex * 0.1}s both`
              }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl border-2 border-[var(--primary)] animate-spin-slow"></div>
              </div>
              
              {/* Category Title */}
              <h3 className="text-lg font-bold text-[var(--dark)] mb-4 flex items-center justify-between group-hover:text-[var(--primary)] transition-colors duration-300">
                <span>{category.title}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-semibold">{category.badges.length}</span>
              </h3>
              
              {/* Tech Badges - Compact */}
              <div className="flex flex-wrap gap-2">
                {category.badges.map((badge, badgeIndex) => (
                  <div
                    key={badgeIndex}
                    className="relative group/badge transform transition-all duration-300 hover:scale-110 hover:z-10"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded opacity-0 group-hover/badge:opacity-60 blur transition-opacity duration-300"></div>
                    
                    {/* Badge */}
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      className="relative h-6 rounded shadow-sm group-hover/badge:shadow-lg transition-shadow duration-300"
                      loading="lazy"
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[var(--dark)] text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                      {badge.alt}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes slideUp {
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

export default Technologies;