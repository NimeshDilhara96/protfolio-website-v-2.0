import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-[#11181C] via-[#11181C] to-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#11181C] via-black to-[#11181C] opacity-80"></div>
        <div className="hidden lg:block absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#34B27B]/10 to-transparent blur-[100px]"></div>
        <div className="hidden lg:block absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#34B27B]/10 to-transparent blur-[120px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#11181C]/40 to-[#11181C] z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8F9FA] mb-6 tracking-tight">
            About Me
          </h2>
          
          <p className="text-lg text-[#F8F9FA]/80 mb-8 leading-relaxed">
            Hi! I'm <span className="text-[#34B27B] font-semibold">Nimesh Dilhara Kulasooriya</span>, a software engineering undergraduate passionate about full-stack development, artificial intelligence, and creating innovative digital solutions.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#34B27B] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#34B27B]/50 transition-all duration-300 hover:scale-105 group"
          >
            <span>Read My Full Story</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
