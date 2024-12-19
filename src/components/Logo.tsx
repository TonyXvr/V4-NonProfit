import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative w-12 h-12 cursor-pointer group">
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-[#00ff9d] opacity-20 group-hover:opacity-30 blur-lg rounded-full transition-opacity duration-300"></div>
      
      {/* Crown */}
      <div className="relative w-full h-full">
        {/* Crown Base */}
        <div className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-[#00ff9d] to-[#00ffd5] rounded-md"></div>
        
        {/* Crown Points */}
        <div className="absolute bottom-2 left-0 w-2 h-6 bg-[#00ff9d] rounded-sm"></div>
        <div className="absolute bottom-2 left-[25%] w-2 h-8 bg-[#00ff9d] rounded-sm"></div>
        <div className="absolute bottom-2 left-[50%] w-2 h-10 bg-[#00ff9d] rounded-sm"></div>
        <div className="absolute bottom-2 left-[75%] w-2 h-8 bg-[#00ff9d] rounded-sm"></div>
        <div className="absolute bottom-2 right-0 w-2 h-6 bg-[#00ff9d] rounded-sm"></div>
      </div>
    </div>
  );
};

export default Logo;