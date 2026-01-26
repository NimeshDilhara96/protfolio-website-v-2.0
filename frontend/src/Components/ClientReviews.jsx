import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ClientReviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState('next');

  const reviews = [
    {
      id: 1,
      name: "Shakila De Silva",
      role: "BSc Information Technology Student",
      rating: 5,
      review: "Nimesh delivered an exceptional web application that exceeded our expectations. His attention to detail and problem-solving skills are outstanding.",
      initials: "SD",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Tharushika Lakshani",
      role: "BSc Business Management Student",
      rating: 5,
      review: "Working with Nimesh was a game-changer for our startup. He transformed our ideas into a beautiful, functional website.",
      initials: "TL",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      rating: 5,
      review: "Nimesh's expertise in both frontend and backend development made our project seamless. The final product was exactly what we envisioned.",
      initials: "ER",
      color: "from-pink-500 to-orange-500"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next');
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setDirection('next');
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection('prev');
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-12 md:py-16 bg-gradient-to-br from-[var(--light)] to-[var(--light-dark)] relative overflow-hidden">
      {/* Modern background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-[var(--primary)]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-[var(--accent-pink)]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Section Title */}
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <span className="text-[var(--primary)] text-xs font-semibold uppercase tracking-wider bg-[var(--primary)]/10 px-3 py-1 rounded-full">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-3 tracking-tight">
            What Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] mx-auto rounded-full"></div>
        </div>

        {/* Compact Review Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div 
              key={currentReview}
              className="bg-dark/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 transform transition-all duration-500 hover:scale-[1.01]"
              style={{
                animation: direction === 'next' ? 'slideInRight 0.5s ease-out' : 'slideInLeft 0.5s ease-out'
              }}
            >
              {/* Top Section with Avatar */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                {/* Smaller Avatar */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reviews[currentReview].color} flex items-center justify-center text-white text-lg font-bold shadow-lg flex-shrink-0 transform hover:rotate-6 transition-transform duration-300`}>
                  {reviews[currentReview].initials}
                </div>
                
                {/* Client Info */}
                <div className="text-center md:text-left flex-1">
                  <h4 className="font-bold text-[var(--dark)] text-lg md:text-xl mb-1">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="text-[var(--gray)] text-xs md:text-sm mb-2">
                    {reviews[currentReview].role}
                  </p>
                  {/* Smaller Stars */}
                  <div className="flex justify-center md:justify-start gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className="text-yellow-400 text-sm animate-pulse" 
                        style={{animationDelay: `${i * 0.1}s`}}
                      />
                    ))}
                  </div>
                </div>

                {/* Smaller Decorative Quote */}
                <div className="hidden md:block">
                  <FaQuoteLeft className="text-[var(--primary)]/20 text-3xl" />
                </div>
              </div>

              {/* Review Text */}
              <div className="relative">
                <p className="text-[var(--gray)] text-sm md:text-base leading-relaxed text-center md:text-left italic">
                  "{reviews[currentReview].review}"
                </p>
                
                {/* Decorative line */}
                <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] to-[var(--accent-pink)] rounded-full hidden md:block"></div>
              </div>
            </div>

            {/* Smaller Navigation Buttons */}
            <button
              onClick={prevReview}
              aria-label="Previous review"
              className="absolute left-0 md:-left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[var(--gray)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-300 group border border-gray-100"
            >
              <FaChevronLeft className="text-sm group-hover:-translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={nextReview}
              aria-label="Next review"
              className="absolute right-0 md:-right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[var(--gray)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-300 group border border-gray-100"
            >
              <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Compact Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentReview ? 'next' : 'prev');
                  setCurrentReview(index);
                }}
                aria-label={`Go to review ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  index === currentReview
                    ? 'w-8 h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)]'
                    : 'w-2 h-2 bg-[var(--gray)]/30 hover:bg-[var(--gray)]/50'
                }`}
              />
            ))}
          </div>

          {/* Compact Review Counter */}
          <div className="text-center mt-4">
            <p className="text-[var(--gray)] text-xs font-medium">
              Review <span className="text-[var(--primary)] font-bold">{currentReview + 1}</span> of <span className="text-[var(--primary)] font-bold">{reviews.length}</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

export default ClientReviews;