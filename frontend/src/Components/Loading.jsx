import React, { useState, useEffect } from 'react';

const text = 'Nimesh';
const dot = '.';

function Loading() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [showDot, setShowDot] = useState(false);

  useEffect(() => {
    if (activeIdx < text.length - 1) {
      const timer = setTimeout(() => setActiveIdx(activeIdx + 1), 120);
      return () => clearTimeout(timer);
    } else if (!showDot) {
      const timer = setTimeout(() => setShowDot(true), 300);
      return () => clearTimeout(timer);
    }
  }, [activeIdx, showDot]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Animated name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          {[...text].map((char, idx) => (
            <span
              key={idx}
              className={`inline-block transition-all duration-500 ${
                activeIdx >= idx
                  ? 'opacity-100 translate-y-0 text-blue-400 scale-100'
                  : 'opacity-0 translate-y-4 text-gray-500 scale-95'
              }`}
              style={{ 
                transitionDelay: `${idx * 100}ms`,
                textShadow: activeIdx >= idx ? '0 0 20px rgba(96, 165, 250, 0.5)' : 'none'
              }}
            >
              {char}
            </span>
          ))}
          {showDot && (
            <span className="inline-block text-pink-400 animate-pulse ml-1" style={{textShadow: '0 0 20px rgba(244, 114, 182, 0.5)'}}>
              {dot}
            </span>
          )}
        </h1>

        {/* Loading text */}
        <p className="text-lg text-gray-300 font-medium">Loading...</p>

        {/* Simple loading dots */}
        <div className="flex justify-center space-x-1 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Additional glow effect */}
        <div className="mt-8">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;