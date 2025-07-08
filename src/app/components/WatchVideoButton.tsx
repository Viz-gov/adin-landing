// components/WatchVideoButton.tsx
import React from 'react';

export default function WatchVideoButton() {
  return (
    <div
      className="flex flex-row items-center gap-4 bg-[#fcf0d1] rounded-[12px] pl-1 pr-4 py-1 overflow-hidden w-fit transition-transform duration-150 hover:scale-[1.07]"
    >
      <div className="bg-[#ffd800] rounded-[8px] w-16 h-10 flex items-center justify-center relative border border-[#e0e0e0]">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <img
            src="/Smiley - Icon.svg"
            alt="Smiley face"
            className="absolute w-8 h-8 left-0 top-0"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 15 18" fill="none" className="w-6 h-6">
              <path
                d="M1.73 17.25C1.44 17.25 1.16 17.17 0.91 17.03C0.35 16.71 0 16.09 0 15.42V1.83C0 1.15 0.35 0.54 0.91 0.22C1.17 0.07 1.46 -0.00 1.75 0.00C2.05 0.00 2.34 0.09 2.59 0.24L14.21 7.19C14.45 7.35 14.65 7.56 14.79 7.81C14.93 8.06 15.00 8.34 15.00 8.62C15.00 8.91 14.93 9.19 14.79 9.44C14.65 9.69 14.45 9.90 14.21 10.05L2.59 17.01C2.33 17.17 2.03 17.25 1.73 17.25Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="font-inter font-medium text-[16px] leading-5 bg-gradient-to-r from-[#EEE] via-black to-[#EEE] bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradient-flow_2s_linear_infinite]"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundImage:
            'linear-gradient(270deg, #EEE, #000, #EEE, #000, #EEE)',
          backgroundSize: '200% 200%',
          animation: 'gradient-flow 2s linear infinite',
        }}
      >
        Watch the Video
      </div>
      <style jsx>{`
        @keyframes gradient-flow {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
