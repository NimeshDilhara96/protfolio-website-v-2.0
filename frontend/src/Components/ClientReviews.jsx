import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ClientReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Shakila De Silva",
      role: "bsc information technology student",
      rating: 5,
      review: "Nimesh delivered an exceptional web application that exceeded our expectations. His attention to detail and problem-solving skills are outstanding.",
    },
    {
      id: 2,
      name: "Tharushika Lakshani",
      role: "bsc business management student",
      rating: 5,
      review: "Working with Nimesh was a game-changer for our startup. He transformed our ideas into a beautiful, functional website.",
    },
    {
      id: 3,
      name: "Emily",
      role: "Marketing Director",
      rating: 5,
      review: "Nimesh's expertise in both frontend and backend development made our project seamless. The final product was exactly what we envisioned.",
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-16 md:py-20 bg-gradient-to-br from-[var(--light)] to-[var(--light-dark)] relative overflow-hidden">
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[var(--accent-pink)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-4">
            Client Reviews
          </h2>
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
        </div>

        {/* Simple Review Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-dark/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/20">
            
            {/* Quote Icon */}
            <div className="text-center mb-6">
              <FaQuoteLeft className="text-[var(--primary)] text-3xl mx-auto opacity-50" />
            </div>

            {/* Review Text */}
            <p className="text-[var(--gray)] text-lg md:text-xl text-center leading-relaxed mb-8 italic">
              "{reviews[currentReview].review}"
            </p>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg mx-1" />
              ))}
            </div>

            {/* Client Info */}
            <div className="text-center">
              <h4 className="font-semibold text-[var(--dark)] text-lg mb-1">
                {reviews[currentReview].name}
              </h4>
              <p className="text-[var(--gray)] text-sm">
                {reviews[currentReview].role}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-dark/80 rounded-full shadow-md flex items-center justify-center text-[var(--gray)] hover:text-[var(--primary)] transition-colors duration-300"
            >
              <FaChevronLeft />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-dark/80 rounded-full shadow-md flex items-center justify-center text-[var(--gray)] hover:text-[var(--primary)] transition-colors duration-300"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Simple Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-[var(--primary)] w-6'
                    : 'bg-[var(--gray)]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;