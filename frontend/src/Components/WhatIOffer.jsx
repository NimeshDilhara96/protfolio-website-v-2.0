import React from 'react';

const WhatIOffer = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Building responsive, scalable, and high-performance web applications with modern frameworks and best practices.',
      icon: '💻',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript']
    },
    {
      id: 2,
      title: 'UI/UX Design (Figma)',
      description: 'Crafting beautiful and intuitive user interfaces with a focus on user experience and modern design principles.',
      icon: '🎨',
      skills: ['Figma', 'Prototyping', 'Wireframing', 'Design Systems', 'User Research']
    },
    {
      id: 3,
      title: 'Custom Software Solutions',
      description: 'Developing tailored software solutions to meet your unique business needs with cutting-edge technologies.',
      icon: '⚙️',
      skills: ['Full Stack', 'API Integration', 'Database Design', 'Cloud Services', 'DevOps']
    }
  ];

  return (
    <section id="what-i-offer" className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] py-20 px-5 md:py-28">
      {/* Animated background gradient */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(138,43,226,0.1)_0%,_transparent_70%)] animate-spin-slow pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            What I Offer
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Transforming ideas into reality with expertise and innovation
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl p-8 md:p-10 border border-purple-400/20 cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(138,43,226,0.4),0_0_40px_rgba(167,139,250,0.3)] hover:border-purple-400/60 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-700/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl md:text-7xl mb-5 inline-block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_20px_rgba(167,139,250,0.5)]">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-purple-400/15 text-purple-400 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30 transition-all duration-300 group-hover:bg-purple-400/25 group-hover:border-purple-400/50 group-hover:-translate-y-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-20 p-10 md:p-12 bg-gradient-to-br from-purple-700/10 to-purple-400/10 rounded-3xl border border-purple-400/20">
          <p className="text-white text-2xl md:text-3xl font-medium mb-8">
            Ready to bring your project to life?
          </p>
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-700 to-purple-400 text-white text-lg font-semibold rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(138,43,226,0.5)] relative overflow-hidden"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            
            <span className="relative">Get In Touch</span>
            <span className="relative text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIOffer;
