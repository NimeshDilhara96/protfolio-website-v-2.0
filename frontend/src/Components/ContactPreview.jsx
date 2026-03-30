import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function ContactPreview() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-[#11181C] to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#34B27B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#34B27B]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#34B27B]/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8F9FA] mb-4 tracking-tight">
            📬 Let's Connect
          </h2>
          
          <p className="text-lg text-[#F8F9FA]/80 mb-8 leading-relaxed">
            Interested in collaborating or have a project in mind? I'd love to hear from you! <span className="text-[#34B27B] font-semibold">Get in touch</span> and let's create something amazing together.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#34B27B] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#34B27B]/50 transition-all duration-300 hover:scale-105 group"
          >
            <span>Send Me a Message</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
