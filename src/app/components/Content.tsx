// components/Content.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';

const agents = [
  { icon: '/agent1 icon.svg', name: 'The Network Hunter', desc: 'Find the crowd, fuel the movement.' },
  { icon: '/agent2 icon.svg', name: 'The Tech Oracle', desc: "Spotting tomorrow's breakthroughs, today." },
  { icon: '/agent3 icon.svg', name: 'The Monopoly Maker', desc: 'Backing the next market dominator.' },
  { icon: '/agent4 icon.svg', name: 'The Unit Master', desc: 'Numbers first, profits always.' },
  { icon: '/agent5 icon.svg', name: 'The Value Guy', desc: 'Seeking hidden gems for lasting growth.' },
];

const profileVariants = [
  { bg: '#FCF0D1', name: 'Ryan Hoover', subtitle: 'Founder, Product Hunt', img: '/Profile Card Image.svg', badge: '#FFD800' },
  { bg: '#F3EAFD', name: 'Ryan Hoover', subtitle: 'Founder, Product Hunt', img: '/Profile Card Image.svg', badge: '#A97DF5' },
  { bg: '#AEFFCF', name: 'Ryan Hoover', subtitle: 'Founder, Product Hunt', img: '/Profile Card Image.svg', badge: '#49C17A' },
];

function ProfileCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % profileVariants.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full max-w-[420px] h-[320px] sm:h-[422px] mx-auto overflow-hidden flex items-center justify-center">
      {profileVariants.map((variant, i) => (
        <div
          key={i}
          className="absolute top-0 left-0 w-full max-w-[420px] h-[320px] sm:h-[422px] flex items-end justify-center transition-all duration-700"
          style={{
            opacity: i === index ? 1 : 0,
            zIndex: i === index ? 2 : 1,
            transform: i === index
              ? 'translateX(0)'
              : i < index
                ? 'translateX(-100%)'
                : 'translateX(100%)',
            pointerEvents: i === index ? 'auto' : 'none',
          }}
        >
          <div
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[420px] h-[320px] sm:h-[422px] rounded-[24px] sm:rounded-[32px] z-3 shadow-[0_4px_32px_0_rgba(0,0,0,0.06)]"
            style={{
              background: `${variant.bg} url('${variant.img}') center/cover no-repeat`,
            }}
          ></div>
          <div
            className="absolute left-1/2 bottom-4 sm:bottom-6 -translate-x-1/2 w-[90%] sm:w-[452px] bg-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 flex flex-col items-center backdrop-blur-[6px] z-4"
            style={{ background: 'rgba(255,255,255,0.16)' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-xl font-semibold text-white">{variant.name}</span>
              <span className="flex items-center ml-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill={variant.badge} />
                <path d="M11 5.5L7.25 10L5 7.75" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </span>
            </div>
            <span className="text-xs sm:text-sm text-white mt-1">{variant.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const faqQuestions = [
  "What is AdIn?",
  "How is ADIN structured?",
  "What industries does ADIN focus on?",
  "Will tokenization fit into ADIN's model?",
  "How can I get join the network?",
  "Who made ADIN?"
];
const faqAnswer = `ADIN is an AI-first, community-powered venture DAO that combines a network of AI-agents with human insight to identify and fund the best early-stage startups. Its engine ingests a company's deck or website and, in minutes, produces a comprehensive report covering team background, market landscape, competitive positioning, and evaluations from a five-agent AI "venture board." Investors review these data-rich findings and vote. By marrying AI's analytical speed with the collective wisdom of a diverse investor community, ADIN enables faster, more transparent capital deployment and broader access to high-potential deals.`;

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'General' | 'Pricing'>('General');
  return (
    <section className="mt-[160px] flex justify-start items-start w-full">
      <div className="flex flex-col w-full items-start" style={{ gap: 64 }}>
        <div className="flex flex-col items-start w-full" style={{ gap: 24 }}>
          <div className="font-inter font-semibold text-[56px] leading-[64px] text-black text-left w-full">Frequently<br />asked questions.</div>
          <div className="font-inter text-[22px] font-normal leading-[32px] text-black text-left w-full">Here is a collection of what is asked most about ADIN.</div>
          <div className="flex flex-row gap-4 items-center justify-start">
            <button
              className={`px-4 py-2 rounded-full font-inter text-[16px] font-medium leading-5 min-w-[80px] transition-all duration-200 border outline-none ${activeTab === 'General' ? 'bg-[#A97DF5] text-white border-none' : 'bg-white text-[#A97DF5] border border-[#E1D1FA] hover:bg-[#F3EAFD]'}`}
              onClick={() => setActiveTab('General')}
              type="button"
            >
              General
            </button>
            <button
              className={`px-4 py-2 rounded-full font-inter text-[16px] font-medium leading-5 min-w-[80px] transition-all duration-200 border outline-none ${activeTab === 'Pricing' ? 'bg-[#A97DF5] text-white border-none' : 'bg-white text-[#A97DF5] border border-[#E1D1FA] hover:bg-[#F3EAFD]'}`}
              onClick={() => setActiveTab('Pricing')}
              type="button"
            >
              Pricing
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[48px] w-full">
          {faqQuestions.map((q, i) => (
            <div key={i} className="flex flex-col gap-0 w-full relative">
              <button
                className="w-full flex flex-row items-center bg-none border-none p-0 m-0 cursor-pointer outline-none transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{ background: 'none' }}
              >
                <span className="font-inter font-semibold text-[22px] text-black leading-[28px] text-left flex-1 min-w-0" style={{ fontFeatureSettings: "'ss03' 1" }}>{q}</span>
                <span className="flex items-center justify-center flex-shrink-0 ml-4 sm:ml-6">
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s cubic-bezier(.77,0,.18,1)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="4" fill="#FAFAFA" stroke={open === i ? "#A97DF5" : "#E1D1FA"} />
                      {open === i ? (
                        <path d="M4 10L8 6L12 10" stroke="#A97DF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <path d="M4 6L8 10L12 6" stroke="#A97DF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                  </span>
                </span>
              </button>
              <div
                className="w-full overflow-hidden transition-all"
                style={{
                  maxHeight: open === i ? 400 : 0,
                  opacity: open === i ? 1 : 0,
                  transition: 'max-height 0.5s cubic-bezier(.77,0,.18,1), opacity 0.5s',
                }}
              >
                <div className="font-inter text-[17px] font-normal text-black leading-[24px] mt-4 mb-2 w-full" style={{ fontFeatureSettings: "'ss03' 1" }}>
                  {faqAnswer}
                </div>
              </div>
              {i < faqQuestions.length - 1 && (
                <div className="w-full h-px bg-[#F3EAFD] mt-8" />
              )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

function InvestSection() {
  return (
    <div className="mt-40 mb-64 flex flex-col items-center space-y-10">
      <h2 className="text-4xl font-bold">Invest with ADIN.</h2>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative bg-white rounded-2xl p-6 inline-flex items-center space-x-6 shadow-md">
          <span className="text-base font-medium text-gray-400">Early access for Tribute Labs Members</span>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow">
            Get Started →
          </button>
          <div className="absolute inset-1 border border-gray-200 rounded-2xl pointer-events-none"></div>
        </div>
        <p>
          <span className="text-gray-400">Not a Tribute Labs Member?</span>
          <a href="#" className="text-purple-500 font-medium ml-2">Join the Waitlist →</a>
        </p>
      </div>
    </div>
  );
}

const hits = [
  {
    text: (
      <>
        <span style={{ color: '#86868b' }}>ADIN</span>
        <span style={{ color: '#86868b' }}>{' is '}</span>
        <span style={{ color: '#86868b' }}>{'a global network of '}</span>
        <span style={{ color: '#000', fontWeight: 600 }}>12,302 humans</span>
        <span style={{ color: '#86868b' }}>{' sharing insights and knowledge as Investors, Members, & Founders.'}</span>
      </>
    ),
  },
  {
    text: (
      <>
        <span style={{ color: '#86868b' }}>{'Our team writes checks from '}</span>
        <span style={{ color: '#000' }}>$500k to $2 million</span>
        <span style={{ color: '#86868b' }}>{', partnering with visionary builders in connectivity, compute, crypto, and creative economies.'}</span>
      </>
    ),
  },
  {
    text: (
      <>
        <span style={{ color: '#000' }}>Investors (Human LPs)</span>
        <span style={{ color: '#86868b' }}>{' vote on proposed deals, guiding decision-making through collective insights, and over time enabling the fine tuning of models.'}</span>
      </>
    ),
  },
];

function RotatingHeader() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const duration = 3500;
  const interval = 20;

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + interval >= duration) {
          setIndex((i) => (i + 1) % hits.length);
          return 0;
        }
        return prev + interval;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [playing, index]);

  useEffect(() => {
    if (!playing) return;
    setProgress(0);
  }, [index, playing]);

  const getProgressBar = () => {
    // Match the original: bar/dot/dot, dot/dot/bar, dot/bar/dot
    if (index === 0) {
      return (
        <>
          <div style={{ position: 'relative', width: 56, height: 8, background: '#e1d1fa', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, height: 8, width: `${(progress / duration) * 56}px`, background: '#a97df5', borderRadius: 20, transition: 'width 0.1s' }} />
          </div>
          <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
          <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
        </>
      );
    } else if (index === 1) {
      return (
        <>
          <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
          <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
          <div style={{ position: 'relative', width: 56, height: 8, background: '#e1d1fa', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, height: 8, width: `${(progress / duration) * 56}px`, background: '#a97df5', borderRadius: 20, transition: 'width 0.1s' }} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
          <div style={{ position: 'relative', width: 56, height: 8, background: '#e1d1fa', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, height: 8, width: `${(progress / duration) * 56}px`, background: '#a97df5', borderRadius: 20, transition: 'width 0.1s' }} />
          </div>
          <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
        </>
      );
    }
  };

  return (
    <div id="hits-section" className="mx-auto max-w-[836px] text-center font-inter font-semibold text-2xl leading-[40px] relative flex flex-col items-center overflow-visible">
      <p className="font-inter font-semibold text-2xl leading-[40px]" style={{ color: '#86868b' }}>
        {hits[index].text}
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f3eafd] hover:bg-[#e1d1fa] shadow-sm transition-all duration-150 focus:outline-none"
          aria-label={playing ? 'Pause' : 'Play'}
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.06)' }}
        >
          {playing ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="3" width="4" height="14" rx="2" fill="#A97DF5" />
              <rect x="13" y="3" width="4" height="14" rx="2" fill="#A97DF5" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <polygon points="5,3 17,10 5,17" fill="#A97DF5" />
            </svg>
          )}
        </button>
        <div className="flex items-center gap-3">
          {/* Progress Bar with moving dots */}
          {index === 0 && (
            <>
              <div className="flex items-center gap-3 bg-[#f3eafd] rounded-full px-2 py-1">
                <div className="relative w-14 h-2 bg-[#e1d1fa] rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-2 bg-[#a97df5] rounded-full transition-all" style={{ width: `${(progress / duration) * 56}px` }} />
                </div>
                <div className="w-2 h-2 bg-[#e1d1fa] rounded-full" />
                <div className="w-2 h-2 bg-[#e1d1fa] rounded-full" />
              </div>
            </>
          )}
          {index === 1 && (
            <>
              <div className="flex items-center gap-3 bg-[#f3eafd] rounded-full px-2 py-1">
                <div className="w-2 h-2 bg-[#e1d1fa] rounded-full" />
                <div className="w-2 h-2 bg-[#e1d1fa] rounded-full" />
                <div className="relative w-14 h-2 bg-[#e1d1fa] rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-2 bg-[#a97df5] rounded-full transition-all" style={{ width: `${(progress / duration) * 56}px` }} />
                </div>
              </div>
            </>
          )}
          {index === 2 && (
            <>
              <div className="flex items-center gap-3 bg-[#f3eafd] rounded-full px-2 py-1">
                <div className="w-2 h-2 bg-[#e1d1fa] rounded-full" />
                <div className="relative w-14 h-2 bg-[#e1d1fa] rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-2 bg-[#a97df5] rounded-full transition-all" style={{ width: `${(progress / duration) * 56}px` }} />
                </div>
                <div className="w-2 h-2 bg-[#e1d1fa] rounded-full" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Content() {
  // Add a state to track if the screen is small
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showEarlyAccess, setShowEarlyAccess] = useState(true);
  const earlyAccessRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    function checkTextFits() {
      const el = earlyAccessRef.current;
      if (!el) return;
      // If scrollWidth > clientWidth, it is wrapping
      setShowEarlyAccess(el.scrollWidth <= el.clientWidth);
    }
    checkTextFits();
    window.addEventListener('resize', checkTextFits);
    return () => window.removeEventListener('resize', checkTextFits);
  }, []);

  return (
    <section className="relative z-10 w-full bg-white flex flex-col items-stretch px-4 sm:px-40 overflow-x-hidden overflow-hidden">
      <div className="h-16" />
      <RotatingHeader />
      <div className="h-40" />

      {/* AI Speed headline and subtext */}
      <div className="max-w-[1440px] w-full flex flex-col items-start gap-2 sm:gap-4 mb-4 sm:mb-8">
        <div className="font-inter font-semibold text-3xl sm:text-[56px] leading-9 sm:leading-[64px] text-black w-full text-left">AI speed.<br />Human judgment.</div>
        <div className="font-inter text-base sm:text-[22px] font-normal leading-6 sm:leading-[32px] text-black w-full text-left">ADIN pairs expert operators with intelligent agents to handle the heavy lifting of venture workflows. Faster analysis, tighter feedback loops, and more space for high-conviction bets.</div>
      </div>
      <div className="max-w-[1440px] flex flex-col sm:flex-row gap-6 sm:gap-[48px] mt-8 sm:mt-[64px] items-stretch justify-start w-full">
        {/* Left Card */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_4px_32px_0_rgba(0,0,0,0.06)] flex flex-col items-start justify-start w-full sm:w-[548px] min-h-[400px] sm:min-h-[648px] p-6 sm:p-[48px_40px] gap-4">
          <div className="flex flex-col items-start mb-4">
            <span className="font-inter font-semibold text-[22px] leading-[28px] text-black mb-0">Powered by</span>
            <span className="font-inter font-semibold text-[32px] leading-[40px] text-black mt-0">AI Agents</span>
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            {agents.map((a, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-row items-start gap-[14px] w-full">
                  <img src={a.icon} alt={a.name} className="w-12 h-12 flex-shrink-0" />
                  <div className="flex flex-col gap-[2px]">
                    <div className="font-inter font-semibold text-[20px] text-black">{a.name}</div>
                    <div className="font-inter text-[16px] text-[#4d4d4d]">{a.desc}</div>
                  </div>
                </div>
                {i < agents.length - 1 && (
                  <div className="w-full h-px bg-[#F3EAFD] my-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Right Card: Supported by Humans */}
        <div className="bg-white/80 rounded-[32px] sm:rounded-[40px] shadow-[0_4px_32px_0_rgba(0,0,0,0.06)] flex items-center justify-center w-full sm:w-[548px] min-h-[320px] sm:min-h-[648px] p-0 relative overflow-visible backdrop-blur-[4px] mt-6 sm:mt-0">
          <div className="flex flex-col items-start w-full h-full relative">
            <div className="flex flex-col items-start ml-4 sm:ml-[40px] mt-4 sm:mt-[40px] mb-2 z-10">
              <span className="font-inter font-semibold text-[18px] sm:text-[22px] leading-[24px] sm:leading-[28px] text-black mb-0">Supported by</span>
              <span className="font-inter font-semibold text-[24px] sm:text-[32px] leading-[32px] sm:leading-[40px] text-black mt-0">Humans</span>
          </div>
            <div className="flex items-center justify-center w-full max-w-[420px] h-[320px] sm:w-[468px] sm:h-[460px] mx-auto relative">
            <ProfileCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* Tribute Labs Section - 24px spacing above */}
      <div className="mt-6 w-full flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start w-full justify-start">
          <div className="relative bg-white rounded-[16px] p-4 flex items-center min-w-[180px] sm:min-w-[252px] shadow-[0_2px_8px_0_rgba(0,0,0,0.03)] mx-auto sm:mx-0">
            <div className="absolute inset-0 border border-[#e0e0e0] rounded-[16px] pointer-events-none" />
            <div className="flex flex-row items-center relative z-10">
              <div className="bg-[#ff0080] rounded-[10px] w-10 h-10 flex items-center justify-center mr-2">
                <div className="w-[21px] h-6 flex items-center justify-center">
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M0 18L10.5 12V0L0 6V18Z" fill="#fff"/>
                      <path d="M10.5 12L0 6L10.5 0L21 6L10.5 12Z" fill="#fff"/>
                    </g>
            </svg>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[2px]">
                <div className="font-inter text-[14px] sm:text-[16px] font-medium text-black leading-5">A Tribute Labs Project</div>
                <div className="font-inter text-[11px] sm:text-[12px] font-normal text-[#4d4d4d] leading-4">NYC / LDN / CHI</div>
              </div>
            </div>
          </div>
          <div className="font-inter text-[15px] sm:text-[17px] font-normal text-[#4d4d4d] leading-6 flex items-center text-center sm:text-left ml-0 max-w-full sm:max-w-none">
            Tribute Labs has supported over 30 communities, empowering more than 300 projects through technical guidance, infrastructure, and long-term partnership. Our mission is to help communities thrive by providing the tools and support they need to scale with confidence.
          </div>
        </div>
      </div>

      {/* Early Section, FAQ & Invest */}
      <div className="mt-16 sm:mt-40 w-full flex flex-col justify-start items-start">
        <div className="flex flex-col gap-8 sm:gap-[64px] max-w-[1440px] w-full items-start">
          {/* Headline Row */}
          <div className="w-full flex flex-col sm:flex-row justify-start">
            <div className="flex flex-col items-start gap-2 sm:gap-6 w-full">
              <div className="font-inter font-semibold text-2xl sm:text-[56px] leading-8 sm:leading-[64px] text-black w-full">Only Early.<br />Always Human.</div>
              <div className="font-inter text-base sm:text-[22px] font-normal leading-6 sm:leading-[32px] text-black w-full">ADIN backs bold ideas at the beginning, where conviction matters most. We invest exclusively at the earliest stages, combining operator insight and intelligent systems to move faster, with greater focus.</div>
            </div>
          </div>
          {/* Steps Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-x-8 sm:gap-x-20 gap-y-6 sm:gap-y-12 justify-center items-start mt-0">
            {/* Pre-Seed */}
            <div className="relative flex flex-row items-start gap-8 min-w-[320px] max-w-[520px]">
              {/* Lines */}
              <span className="absolute left-0 top-0 bottom-0 w-2.5 flex flex-col items-center justify-center z-10">
                <span className="block w-0.5 h-full bg-black rounded-sm absolute left-1 top-0" />
                <span className="block w-0.5 h-[28px] bg-[#A97DF5] rounded-sm absolute left-1 top-[calc(50%-14px)] z-10" />
              </span>
              <div className="flex flex-col gap-3 items-start w-full pl-6">
                <div className="font-inter text-[12px] font-medium text-black leading-4">Pre-Seed</div>
                <div className="font-inter text-[22px] font-semibold text-black leading-[28px]">Backed by Belief</div>
                <div className="font-inter text-[17px] font-normal text-black leading-6 max-w-[360px]">At pre-seed, conviction outweighs traction. ADIN provides governance capital and strategic support to founders with deep alignment and long-term thinking.</div>
              </div>
            </div>
            {/* Seed */}
            <div className="relative flex flex-row items-start gap-8 min-w-[320px] max-w-[520px]">
              {/* Lines */}
              <span className="absolute left-0 top-0 bottom-0 w-2.5 flex flex-col items-center justify-center z-10">
                <span className="block w-0.5 h-full bg-black rounded-sm absolute left-1 top-0" />
                <span className="block w-0.5 h-[28px] bg-[#49C17A] rounded-sm absolute left-1 top-[calc(50%-14px)] z-10" />
              </span>
              <div className="flex flex-col gap-3 items-start w-full pl-6">
                <div className="font-inter text-[12px] font-medium text-black leading-4">Seed</div>
                <div className="font-inter text-[22px] font-semibold text-black leading-[28px]">Culture-First Capital</div>
                <div className="font-inter text-[17px] font-normal text-black leading-6 max-w-[360px]">Seed-stage founders shape ADIN's future. Our community brings cultural context and dealflow, helping us invest in projects that align with our collective values.</div>
              </div>
            </div>
            {/* A Round */}
            <div className="relative flex flex-row items-start gap-8 min-w-[320px] max-w-[520px]">
              {/* Lines */}
              <span className="absolute left-0 top-0 bottom-0 w-2.5 flex flex-col items-center justify-center z-10">
                <span className="block w-0.5 h-full bg-black rounded-sm absolute left-1 top-0" />
                <span className="block w-0.5 h-[28px] bg-[#A97DF5] rounded-sm absolute left-1 top-[calc(50%-14px)] z-10" />
              </span>
              <div className="flex flex-col gap-3 items-start w-full pl-6">
                <div className="font-inter text-[12px] font-medium text-black leading-4">A Round</div>
                <div className="font-inter text-[22px] font-semibold text-black leading-[28px]">Early, Not Late</div>
                <div className="font-inter text-[17px] font-normal text-black leading-6 max-w-[360px]">We don't chase momentum— we help create it. ADIN's A-round capital supports early traction and sharp execution, before the noise of growth-stage hype.</div>
              </div>
            </div>
            {/* Empty cell */}
            <div></div>
          </div>
        </div>
      </div>

      <FaqSection />
      {/* Invest with ADIN */}
      <div className="mt-[80px] sm:mt-[160px] mb-[120px] sm:mb-[254px] w-full flex flex-col items-center justify-start gap-6 sm:gap-10">
        <div className="font-inter font-semibold text-3xl sm:text-[56px] leading-9 sm:leading-[64px] text-black text-center w-full max-w-[1120px]">Invest with ADIN.</div>
        <div className="flex flex-col items-center gap-4 sm:gap-8 w-full">
          {isSmallScreen ? (
            <div className="flex justify-center w-full">
              <button className="bg-[#a97df5] border-none rounded-[80px] px-6 py-[14px] flex items-center justify-center cursor-pointer transition-shadow duration-200 shadow-[0_2px_8px_0_rgba(169,125,245,0.10)] hover:shadow-[0_4px_24px_0_rgba(169,125,245,0.18)] font-inter font-medium text-[16px] text-white leading-5 whitespace-pre z-10 relative mx-auto">
                Get Started &rarr;
              </button>
            </div>
          ) : (
            <div className="relative inline-block mx-auto w-full max-w-[520px]">
              <div className={`flex flex-row items-center gap-4 pl-6 pr-1 py-1 bg-white z-10 relative border border-[#f3eafd] rounded-[32px] transition-all duration-200`}>
                {showEarlyAccess && (
                  <span
                    ref={earlyAccessRef}
                    className="font-inter font-medium text-[16px] leading-5 bg-clip-text text-transparent text-left whitespace-nowrap overflow-hidden"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #b3b3b3 0%, #a97df5 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      maxWidth: '100%'
                    }}
                  >
                    Early access for Tribute Labs Members
                  </span>
                )}
                <button className="bg-[#a97df5] border-none rounded-[80px] px-6 py-[14px] flex items-center justify-center cursor-pointer transition-shadow duration-200 shadow-[0_2px_8px_0_rgba(169,125,245,0.10)] hover:shadow-[0_4px_24px_0_rgba(169,125,245,0.18)] font-inter font-medium text-[16px] text-white leading-5 whitespace-pre z-10 relative">
                  Get Started &rarr;
                </button>
              </div>
              <div className="pointer-events-none absolute inset-0 border border-[#f3eafd] border-solid rounded-[32px]" />
            </div>
          )}
          <div className="font-inter text-[15px] sm:text-[17px] font-normal leading-6 text-[#a97df5] flex items-center justify-center gap-1 w-full mt-2">
            <span className="text-[#b3b3b3]">Not a Tribute Labs Member?</span>
            <a href="#" className="text-[#a97df5] font-medium ml-2 no-underline cursor-pointer">Join the Waitlist &rarr;</a>
          </div>
        </div>
      </div>
      {/* Gradient peek behind footer */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-20 w-[1794px] h-[190px] filter blur-[68.6px] -scale-x-100 -scale-y-100 z-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle at 30% 70%, #f3655b 30%, transparent 70%),
            radial-gradient(circle at 50% 50%, #ffbf66 30%, transparent 70%),
            radial-gradient(circle at 70% 30%, #49c17a 30%, transparent 70%),
            radial-gradient(circle at 50% 70%, #a97df5 30%, transparent 70%)
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '710px 190px, 1076px 190px, 1352px 190px, 1794px 190px',
          backgroundPosition:
            'calc(50% - 100px) top, calc(50% + 83px) top, calc(50% + 221px) top, calc(50% - 300px) top',
        }}
      />
    </section>
  );
}
