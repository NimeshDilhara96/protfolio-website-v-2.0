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
    <section id="technologies" className="py-20 bg-gradient-to-br from-[var(--light-dark)] to-[var(--light)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[var(--primary)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[var(--accent-pink)]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[var(--accent)]/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4 tracking-tight">
            🛠️ Tech Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--accent-pink)] mx-auto rounded-full"></div>
          <p className="text-[var(--gray)] text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive collection of technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="group bg-transparent backdrop-blur-sm rounded-2xl shadow-lg shadow-[var(--primary)]/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:scale-[1.02] border border-gray-100/20"
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark)] mb-8 text-center group-hover:text-[var(--primary)] transition-colors duration-300">
                {category.title}
              </h3>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {category.badges.map((badge, badgeIndex) => (
                  <div
                    key={badgeIndex}
                    className="group/badge transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                    style={{
                      animationDelay: `${badgeIndex * 100}ms`
                    }}
                  >
                    <div className="relative">
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg blur opacity-0 group-hover/badge:opacity-75 transition-opacity duration-300"></div>
                      
                      {/* Badge Image */}
                      <img
                        src={badge.src}
                        alt={badge.alt}
                        className="relative rounded-lg shadow-md transition-all duration-300 group-hover/badge:shadow-xl"
                        loading="lazy"
                      />
                      
                      {/* Hover tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[var(--dark)] text-[var(--light)] px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover/badge:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        {badge.alt}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-pink)] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-purple)] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;