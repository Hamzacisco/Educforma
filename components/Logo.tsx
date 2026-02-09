
import React from 'react';

const Logo: React.FC<{ className?: string; forceLight?: boolean }> = ({ className = "", forceLight = false }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Modern & Soft Symbol */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Main soft circular shield */}
          <rect x="5" y="5" width="90" height="90" rx="28" fill="url(#grad-soft)" />
          
          {/* Stylized 'E' with soft curves */}
          <path 
            d="M32 32H68V40H40V46H60V54H40V60H68V68H32V32Z" 
            fill="white" 
            className="animate-pulse-slow"
          />
          
          {/* Excellence Dot */}
          <circle cx="75" cy="25" r="8" fill="#fbbf24" stroke="white" strokeWidth="3" />
          
          <defs>
            <linearGradient id="grad-soft" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e3a8a" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline">
          <span className={`text-3xl font-black tracking-tighter uppercase ${forceLight ? 'text-white' : 'text-blue-900'}`}>
            EDUC
          </span>
          <span className={`text-3xl font-light tracking-tight ml-px uppercase ${forceLight ? 'text-blue-400' : 'text-blue-600'}`}>
            FORMA
          </span>
        </div>
        <span className={`text-[10px] font-extrabold uppercase tracking-[0.4em] mt-1 ${forceLight ? 'text-blue-300/80' : 'text-blue-500/60'}`}>
          Académie Internationale
        </span>
      </div>
    </div>
  );
};

export default Logo;
