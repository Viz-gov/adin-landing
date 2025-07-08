// components/Footer.tsx
'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-white border-t border-gray-100 overflow-visible z-10 px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-center items-end w-full py-4 sm:pt-[22px] sm:pb-[22px]">
        <div className="w-full max-w-[1794px] flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-0 px-0 sm:px-8 lg:px-20">
          {/* Left columns */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 w-full sm:w-auto items-center sm:items-start text-center sm:text-left">
            {/* First column */}
            <div className="flex flex-col gap-4 min-w-[160px] items-center sm:items-start">
              <img
                src="/Footer Icon.svg"
                alt="Footer Icon"
                className="w-6 h-6 mx-auto sm:mx-0"
              />
              <span className="font-inter text-sm font-bold text-black">
                ADIN for
              </span>
              <span className="font-inter text-sm font-normal text-gray-500">
                Investors
              </span>
              <span className="font-inter text-sm font-normal text-gray-500">
                Members
              </span>
              <span className="font-inter text-sm font-normal text-gray-500">
                Founders
              </span>
            </div>
            {/* Second column */}
            <div className="flex flex-col gap-4 min-w-[160px] items-center sm:items-start">
              <img
                src="/Footer Icon-2.svg"
                alt="Footer Icon 2"
                className="w-6 h-6 mx-auto sm:mx-0"
              />
              <span className="font-inter text-sm font-bold text-black">
                Resources
              </span>
              <span className="font-inter text-sm font-normal text-gray-500">
                Terms of Service
              </span>
              <span className="font-inter text-sm font-normal text-gray-500">
                Privacy Policy
              </span>
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right gap-3 w-full sm:min-w-[320px] mt-8 sm:mt-0">
            <img src="/Logo.svg" alt="ADIN Logo" className="w-10 h-10 mx-auto sm:mx-0" />
            <div className="font-inter text-xs font-normal text-black leading-4">
              ADIN was designed and developed<br />
              by Tribute Labs in Brooklyn, NY.
            </div>
            <div className="flex gap-6 justify-center sm:justify-end w-full">
              <img
                src="/Footer X Icon.svg"
                alt="X"
                className="w-8 h-8"
              />
              <img
                src="/Footer Email Icon.svg"
                alt="Email"
                className="w-8 h-8"
              />
            </div>
            <div className="font-inter text-xs font-normal text-gray-400 leading-4">
              © 2025 Tribute Labs, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
