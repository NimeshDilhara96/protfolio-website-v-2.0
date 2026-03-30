import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function WhatIOfferPreview() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-[#11181C] via-black to-[#11181C] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-[#34B27B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-[#34B27B]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8F9FA] mb-6 tracking-tight">
            What I Offer
          </h2>
          
          <p className="text-lg text-[#F8F9FA]/80 mb-8 leading-relaxed">
            <span className="text-[#34B27B] font-semibold">Full-stack web development</span>, <span className="text-[#34B27B] font-semibold">UI/UX design</span>, <span className="text-[#34B27B] font-semibold">custom software solutions</span>, and <span className="text-[#34B27B] font-semibold">performance optimization</span>. Let's transform your ideas into powerful digital products.
          </p>

          <Link
            to="/what-i-offer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#34B27B] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#34B27B]/50 transition-all duration-300 hover:scale-105 group"
          >
            <span>Explore All Services</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
