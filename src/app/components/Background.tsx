// components/Background.tsx
import React from 'react';

export default function Background() {
  return (
    <div className="bg-white absolute inset-0 z-0">
      {/* Gradient overlays go here */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[200px] pointer-events-none">
        {/* Add your gradient divs or SVGs here */}
      </div>
    </div>
  );
}
