// components/Main.tsx
'use client';
import React, { useState, useEffect } from 'react';
import LiveReports from './LiveReports';
import WatchVideoButton from './WatchVideoButton';

const words = [
  { text: 'biotech', color: '#a97df5' },
  { text: '3d printing', color: '#FFD17A' },
  { text: 'blockchain', color: '#5ED890' },
  { text: 'creative tools', color: '#FF9066' },
  { text: 'medical', color: '#FFD17A' },
];

export default function Main() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFade(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 700);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToHits = () => {
    document.getElementById('hits-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] overflow-x-hidden px-4 sm:px-0">
      <h1 className="font-inter font-semibold text-center text-black mb-4 text-2xl sm:text-[2.5rem] mt-20 sm:mt-[160px]">
        Investing in early<br />stage ideas building for<br />
        <span className="inline-block">
          <span
            className={`inline-block transition-all duration-300 ${
              fade 
                ? 'opacity-0 [transform:rotateX(60deg)_translateY(40px)]' 
                : 'opacity-100 [transform:rotateX(0)_translateY(0)]'
            }`}
            style={{ color: words[index].color }}
          >
            {words[index].text}
          </span>
          <span className={`inline-block transition-all duration-300 ${fade ? 'opacity-0 [transform:rotateX(60deg)_translateY(40px)]' : 'opacity-100'}`}>
            .
          </span>
        </span>
      </h1>

      <p className="text-center text-[#4d4d4d] text-base sm:text-xl max-w-full sm:max-w-[600px]">
        ADIN backs teams building the future of the internet focusing on Seed Rounds to Series-A.
      </p>

      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 sm:mt-[50px] mb-16 no-underline inline-block"
      >
        <WatchVideoButton />
      </a>

      <LiveReports />

      <button
        onClick={scrollToHits}
        aria-label="Scroll down"
        className="flex justify-center items-center mx-auto mb-6 cursor-pointer transition-transform duration-200"
      >
        <img src="/chevron-down.svg" width={24} height={24} alt="Scroll down" />
      </button>

      <div className="h-[160px]" />
    </main>
  );
}
