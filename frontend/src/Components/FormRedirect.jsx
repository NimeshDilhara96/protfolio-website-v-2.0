import React, { useEffect, useState } from 'react';
import { FaWpforms, FaArrowRight } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const FormRedirect = () => {
  const [countdown, setCountdown] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // Redirect to Google Form
          window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeL3MSA6v1dolbSjegZHlrGyxxW2VTYio8iadjSpawXPB7o1w/viewform';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#11181C] via-[#11181C] to-black relative overflow-hidden flex items-center justify-center pt-20 pb-8 sm:pt-24 sm:pb-0">
        
        {/* Modern CSS Animations */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.5) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.5) rotate(-10deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
          
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(52, 178, 123, 0.3), 0 0 40px rgba(52, 178, 123, 0.1);
            }
            50% {
              box-shadow: 0 0 40px rgba(52, 178, 123, 0.6), 0 0 60px rgba(52, 178, 123, 0.2);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-15px) rotate(5deg);
            }
            66% {
              transform: translateY(-5px) rotate(-5deg);
            }
          }
          
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-10px) scale(1.05);
            }
          }
          
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }
          
          @keyframes countdownPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.9;
            }
          }
          
          @keyframes progressShine {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          .animate-fadeInScale {
            animation: fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          
          .animate-scaleIn {
            animation: scaleIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          
          .animate-pulseGlow {
            animation: pulseGlow 2.5s ease-in-out infinite;
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin 25s linear infinite;
          }
          
          .animate-slideInLeft {
            animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          .animate-slideInRight {
            animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          .animate-bounce-smooth {
            animation: bounce 2s ease-in-out infinite;
          }
          
          .animate-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite;
          }
          
          .animate-countdownPulse {
            animation: countdownPulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .delay-100 {
            animation-delay: 0.1s;
            opacity: 0;
          }
          
          .delay-200 {
            animation-delay: 0.2s;
            opacity: 0;
          }
          
          .delay-300 {
            animation-delay: 0.3s;
            opacity: 0;
          }
          
          .delay-400 {
            animation-delay: 0.4s;
            opacity: 0;
          }
          
          .delay-500 {
            animation-delay: 0.5s;
            opacity: 0;
          }
          
          .delay-600 {
            animation-delay: 0.6s;
            opacity: 0;
          }
          
          /* 3D Transform effects */
          .perspective-card {
            perspective: 1000px;
          }
          
          .transform-3d:hover {
            transform: rotateY(5deg) rotateX(5deg) scale(1.05);
            transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
        `}</style>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#34B27B]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 sm:w-80 sm:h-80 bg-[#34B27B]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#34B27B]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Animated particles - hidden on small mobile */}
          <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#34B27B] rounded-full animate-float" style={{animationDelay: '0s'}}></div>
          <div className="hidden sm:block absolute top-3/4 right-1/4 w-3 h-3 bg-[#34B27B]/60 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#34B27B]/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="hidden sm:block absolute top-1/3 right-1/3 w-2 h-2 bg-[#34B27B]/50 rounded-full animate-bounce-smooth" style={{animationDelay: '0.5s'}}></div>
          <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#34B27B]/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
          
          {/* Rotating rings - multiple layers */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] border border-[#34B27B]/10 rounded-full animate-spin-slow"></div>
          <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#34B27B]/5 rounded-full" style={{animation: 'spin 30s linear infinite reverse'}}></div>
          
          {/* Animated gradient mesh */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-[10%] left-[20%] w-32 h-32 bg-[#34B27B]/20 rounded-full blur-2xl animate-float" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute bottom-[15%] right-[25%] w-40 h-40 bg-[#34B27B]/15 rounded-full blur-2xl animate-float" style={{animationDelay: '1.2s'}}></div>
          </div>
        </div>

        {/* Content */}
        <div className={`relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Icon with modern animation */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full bg-[#34B27B]/20 border-4 border-[#34B27B]/30 backdrop-blur-sm animate-fadeInScale animate-pulseGlow perspective-card">
            <FaWpforms className="text-3xl sm:text-4xl text-[#34B27B] animate-float" />
          </div>

          {/* Heading with staggered animation */}
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#F8F9FA] mb-2 sm:mb-3 tracking-tight animate-slideInLeft delay-100 leading-tight">
            Research Study Survey
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl text-[#F8F9FA]/70 mb-3 sm:mb-4 animate-slideInRight delay-200">
            AI-Based Dietary Recommendation Systems
          </p>

          {/* Study Description */}
          <div className="max-w-xl mx-auto mb-4 sm:mb-6 p-3 sm:p-5 bg-[#11181C]/50 backdrop-blur-sm rounded-xl border border-[#34B27B]/20 animate-fadeInUp delay-300 transform-3d hover:border-[#34B27B]/40 transition-all duration-300">
            <p className="text-xs sm:text-sm md:text-base text-[#F8F9FA]/80 leading-relaxed mb-2 sm:mb-3">
              This study analyzes AI systems for preventing lifestyle diseases (diabetes, obesity, cardiovascular conditions).
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-0">
              <p className="text-xs sm:text-sm text-[#34B27B] font-medium">
                ✓ Voluntary &nbsp; ✓ Anonymous &nbsp; ✓ Academic use
              </p>
            </div>
          </div>

          {/* Redirect message */}
          <p className="text-xs sm:text-sm md:text-base text-[#F8F9FA]/70 mb-3 sm:mb-4 animate-fadeInUp delay-400">
            Redirecting to questionnaire...
          </p>

          {/* Countdown with scale animation */}
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6 animate-fadeInScale delay-500">
            <div className="relative">
              {/* Animated rings around countdown */}
              <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#34B27B]/30 animate-ping"></div>
              <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#34B27B]/20 animate-pulse"></div>
              
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#34B27B]/20 border-2 border-[#34B27B] backdrop-blur-sm animate-pulseGlow">
                <span className="text-2xl sm:text-3xl font-bold text-[#34B27B] animate-countdownPulse">
                  {countdown}
                </span>
              </div>
            </div>
          </div>

          {/* Modern Loading Bar with gradient */}
          <div className="w-full max-w-xs sm:max-w-md mx-auto h-2 sm:h-3 bg-[#11181C] rounded-full overflow-hidden border border-[#F8F9FA]/10 shadow-lg animate-fadeInUp delay-500 relative">
            <div 
              className="h-full bg-gradient-to-r from-[#34B27B] via-[#34B27B]/80 to-[#34B27B] rounded-full transition-all duration-1000 ease-linear relative overflow-hidden"
              style={{ width: `${((3 - countdown) / 3) * 100}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 w-full h-full animate-shimmer"></div>
              <div className="absolute top-0 left-0 h-full w-20 bg-white/30 blur-sm" style={{
                animation: 'progressShine 2s ease-in-out infinite'
              }}></div>
            </div>
          </div>

          {/* Button with hover animation */}
          <div className="mt-6 sm:mt-8 animate-fadeInScale delay-600">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeL3MSA6v1dolbSjegZHlrGyxxW2VTYio8iadjSpawXPB7o1w/viewform"
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3 bg-[#34B27B] text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg shadow-[#34B27B]/20 hover:shadow-2xl hover:shadow-[#34B27B]/40 hover:scale-110 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 group relative overflow-hidden perspective-card"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative z-10">Start Questionnaire</span>
              <FaArrowRight className="relative z-10 text-sm sm:text-base transition-all duration-500 group-hover:translate-x-3 group-hover:scale-125" />
            </a>
          </div>

          {/* Info text */}
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#F8F9FA]/50 animate-fadeInUp delay-600 px-4">
            Thank you for your valuable time and cooperation
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormRedirect;
