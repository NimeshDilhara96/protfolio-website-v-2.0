import React from 'react';

function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Minimalist grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Main loader */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Professional spinner */}
        <div className="relative w-16 h-16">
          {/* Outer ring - slow rotation */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          
          {/* Inner ring - fast rotation */}
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-slate-800 rounded-full"
            style={{
              animation: 'spin 1s linear infinite'
            }}
          ></div>
          
          {/* Second accent ring */}
          <div 
            className="absolute inset-2 border-3 border-transparent border-r-slate-600 rounded-full"
            style={{
              animation: 'spin 1.5s linear infinite reverse'
            }}
          ></div>
        </div>

        {/* Windows-style greeting */}
        <div className="text-center space-y-3">
          <div className="space-y-1">
            <p className="text-slate-800 font-light text-5xl tracking-tight">
              Hi
            </p>
            <p className="text-slate-600 font-light text-base tracking-wide">
              Let's explore
            </p>
          </div>
          
          {/* Clean progress indicator */}
          <div className="flex gap-1.5 justify-center mt-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-slate-800 rounded-full"
                style={{
                  animation: `fade 1.4s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fade {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;