// components/LiveReports.tsx
import React, { useEffect, useState } from 'react';

interface LiveReportsProps {
  minimal?: boolean;
}

const reports = [
  {
    logo: '/new range.svg',
    name: 'New Range',
    subtitle: 'Automated Compliance',
    link: 'https://example.com/new-range',
  },
  {
    logo: '/cactos.svg',
    name: 'Cactos',
    subtitle: 'Energy Systems',
    link: 'https://example.com/cactos',
  },
  {
    logo: '/openai.svg',
    name: 'OpenAI',
    subtitle: 'Machine Intelligence',
    link: 'https://example.com/openai',
  },
];

export default function LiveReports({ minimal = false }: LiveReportsProps) {
  const [visible, setVisible] = useState(false);
  const [onlyShowLink, setOnlyShowLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setOnlyShowLink(window.innerWidth < 1000);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showFull = !minimal && !onlyShowLink;

  return (
    <div
      className={`
        absolute bottom-[40px] right-[40px] w-[320px] rounded-[24px] flex flex-col gap-4 z-10
        transition-opacity duration-600 ease-in-out
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        bg-transparent shadow-none p-[24px] pt-[24px] pb-[20px] px-[20px]
        ${minimal ? 'mx-auto' : ''}
      `}
      style={{ boxShadow: 'none', background: 'none' }}
    >
      {showFull && (
        <>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full" style={{ background: '#49C17A', display: 'inline-block' }} />
            <span className="font-inter" style={{ fontSize: 14, fontWeight: 400, color: '#000' }}>
              Live Reports
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            {reports.map((report) => (
              <a
                key={report.name}
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center border rounded-[16px] p-[12px] pr-[16px] gap-[12px] bg-white
                  relative cursor-pointer transition-all duration-200
                  shadow-[0_4px_16px_rgba(169,125,245,0.10)]
                  hover:shadow-[0_8px_24px_rgba(169,125,245,0.18)]
                  hover:scale-[1.07]
                "
                style={{
                  border: '1px solid #f3eafd',
                }}
                onMouseEnter={e => {
                  (e.currentTarget.querySelector('.fold') as HTMLElement).style.opacity = '1';
                  (e.currentTarget.querySelector('.fold') as HTMLElement).style.transform = 'scaleX(1)';
                  e.currentTarget.style.border = '1.5px solid #a97df5';
                }}
                onMouseLeave={e => {
                  (e.currentTarget.querySelector('.fold') as HTMLElement).style.opacity = '0';
                  (e.currentTarget.querySelector('.fold') as HTMLElement).style.transform = 'scaleX(0.7)';
                  e.currentTarget.style.border = '1px solid #f3eafd';
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white">
                  <img
                    src={report.logo}
                    alt={`${report.name} logo`}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="font-inter font-bold" style={{ fontSize: 13, color: '#111', marginBottom: 2 }}>
                    {report.name}
                  </div>
                  <div className="font-inter" style={{ fontSize: 11, color: '#4d4d4d' }}>
                    {report.subtitle}
                  </div>
                </div>
                <div
                  className="fold absolute right-0 top-0 h-full w-9 bg-[#a97df5] rounded-tr-[16px] rounded-br-[16px] flex items-center justify-center opacity-0"
                  style={{
                    transition: 'opacity 0.2s, transform 0.2s',
                    zIndex: 2,
                    transform: 'scaleX(0.7)',
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
      <a
        href="#"
        className="font-inter self-end text-[12px] font-medium text-center w-full md:w-auto"
        style={{
          marginTop: 8,
          background: 'linear-gradient(270deg, #EEE, #000, #EEE, #000, #EEE)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradient-flow 2s linear infinite',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        View All Recent Reports &rarr;
      </a>
      <style>{`
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
