import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function WhatIOfferPreview() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-surface via-background to-surface relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            What I Offer
          </h2>
          
          <p className="text-lg text-text-primary/80 mb-8 leading-relaxed">
            <span className="text-accent font-semibold">Full-stack web development</span>, <span className="text-accent font-semibold">UI/UX design</span>, <span className="text-accent font-semibold">custom software solutions</span>, and <span className="text-accent font-semibold">performance optimization</span>. Let's transform your ideas into powerful digital products.
          </p>

          <Link
            to="/what-i-offer"
            className="inline-flex items-center gap-3 px-8 py-4 btn-primary border-transparent font-semibold rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
          >
            <span>Explore All Services</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
