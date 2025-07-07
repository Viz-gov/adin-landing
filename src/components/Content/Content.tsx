"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Content.module.css";

const agents = [
  {
    icon: "/agent1 icon.svg",
    name: "The Network Hunter",
    desc: "Find the crowd, fuel the movement."
  },
  {
    icon: "/agent2 icon.svg",
    name: "The Tech Oracle",
    desc: "Spotting tomorrow's breakthroughs, today."
  },
  {
    icon: "/agent3 icon.svg",
    name: "The Monopoly Maker",
    desc: "Backing the next market dominator."
  },
  {
    icon: "/agent4 icon.svg",
    name: "The Unit Master",
    desc: "Numbers first, profits always."
  },
  {
    icon: "/agent5 icon.svg",
    name: "The Value Guy",
    desc: "Seeking hidden gems for lasting growth."
  }
];

const profileVariants = [
  {
    bg: "#FCF0D1",
    name: "Ryan Hoover",
    subtitle: "Founder, Product Hunt",
    img: "/Profile Card Image.svg",
    badge: "#FFD800"
  },
  {
    bg: "#F3EAFD",
    name: "Ryan Hoover",
    subtitle: "Founder, Product Hunt",
    img: "/Profile Card Image.svg",
    badge: "#A97DF5"
  },
  {
    bg: "#AEFFCF",
    name: "Ryan Hoover",
    subtitle: "Founder, Product Hunt",
    img: "/Profile Card Image.svg",
    badge: "#49C17A"
  }
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
    <div className={styles.carouselContainer}>
      {profileVariants.map((variant, i) => (
        <div
          key={i}
          className={styles.carouselSlide}
          style={{
            zIndex: i === index ? 2 : 1,
            opacity: i === index ? 1 : 0,
            transform: `translateX(${(i - index) * 100}%)`,
            transition: 'opacity 0.7s, transform 0.7s',
            position: i === index ? 'relative' : 'absolute',
          }}
        >
          <div className={styles.rightCardProfileImage} style={{ background: `${variant.bg} url('${variant.img}') center/cover no-repeat` }}></div>
          <div className={styles.rightCardProfileInfoGlass}>
            <div className={styles.rightCardProfileInfo}>
              <div className={styles.rightCardProfileNameRow}>
                <span className={styles.rightCardProfileName}>{variant.name}</span>
                <span className={styles.rightCardProfileBadge}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill={variant.badge}/>
                    <path d="M11 5.5L7.25 10L5 7.75" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <span className={styles.rightCardProfileSubtitle}>{variant.subtitle}</span>
            </div>
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
  "Wil tokenization fit into ADIN's model?",
  "How can I get join the network?",
  "Who made ADIN?"
];
const faqAnswer = `ADIN is an AI-first, community-powered venture DAO that combines a network of AI-agents with human insight to identify and fund the best early-stage startups. Its engine ingests a company's deck or website and, in minutes, produces a comprehensive report covering team background, market landscape, competitive positioning, and evaluations from a five-agent AI "venture board." Investors review these data-rich findings and vote. By marrying AI's analytical speed with the collective wisdom of a diverse investor community, ADIN enables faster, more transparent capital deployment and broader access to high-potential deals.`;

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={styles.faqSection}>
      <div className={styles.faqInnerCol}>
        <div className={styles.faqHeadlineBlock}>
          <div className={styles.faqHeadline}>Frequently<br />asked questions.</div>
          <div className={styles.faqSubtext}>Here is a collection of what is asked most about ADIN.</div>
        </div>
        <div className={styles.faqList}>
          {faqQuestions.map((q, i) => (
            <div key={i} className={styles.faqItem}>
              <button className={styles.faqQuestionRow} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span className={styles.faqQuestion}>{q}</span>
                <span className={styles.faqArrowWrap} aria-hidden>
                  <span className={open === i ? styles.faqArrowOpen : styles.faqArrowClosed}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className={styles.faqAnswerWrap} style={{ maxHeight: open === i ? 400 : 0, opacity: open === i ? 1 : 0, transition: 'max-height 0.5s cubic-bezier(.77,0,.18,1), opacity 0.5s' }}>
                <div className={styles.faqAnswer}>{faqAnswer}</div>
              </div>
              {i < faqQuestions.length - 1 && (
                <div className={styles.faqDivider} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InvestSection() {
  return (
    <div className={styles.investSection}>
      <div className={styles.investHeadline}>Invest with ADIN.</div>
      <div className={styles.investContentCol}>
        <div className={styles.investCard}>
          <div className={styles.investCardInner}>
            <span className={styles.investEarlyAccess}>Early access for Tribute Labs Members</span>
            <span className={styles.investButtonWrap}>
              <button className={styles.investButton}>
                <span className={styles.investButtonText}>Get Started &rarr;</span>
              </button>
            </span>
          </div>
          <div className={styles.investCardBorder} />
        </div>
        <div className={styles.investWaitlistText}>
          <span className={styles.investWaitlistGray}>Not a Tribute Labs Member?</span>
          <span className={styles.investWaitlistLink}> Join the Waitlist &rarr;</span>
        </div>
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
        <span style={{ color: '#000' }}>1,2302 humans</span>
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 3500; // ms
  const progressInterval = 20; // ms

  useEffect(() => {
    if (!playing) return;
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev + progressInterval >= duration) {
          setIndex((i) => (i + 1) % hits.length);
          return 0;
        }
        return prev + progressInterval;
      });
    }, progressInterval);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [playing, index]);

  useEffect(() => {
    if (!playing) return;
    setProgress(0);
  }, [index, playing]);

  const handlePlayPause = () => setPlaying((p) => !p);

  return (
    <div style={{
      width: 836,
      maxWidth: '90vw',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: 32,
      lineHeight: '40px',
      color: '#86868b',
      textAlign: 'center',
      letterSpacing: 0,
      transition: 'opacity 0.5s',
      minHeight: 80,
    }}>
      <p
        key={index}                         /* force remount on index change */
        className={styles.fadeInLeft}       /* new CSS animation */
        style={{ margin: 0, padding: 0, lineHeight: '40px' }}
      >
        {hits[index].text}
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', marginTop: 24 }}>
        {/* Play Button */}
        <button
          onClick={handlePlayPause}
          aria-label={playing ? 'Pause' : 'Play'}
          style={{
            background: '#f3eafd',
            border: 'none',
            borderRadius: 40,
            padding: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            width: 40,
            height: 40,
            marginRight: 8,
          }}
        >
          {playing ? (
            // Pause icon
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="3" width="4" height="12" rx="2" fill="#A97DF5"/><rect x="11" y="3" width="4" height="12" rx="2" fill="#A97DF5"/></svg>
          ) : (
            // Play icon
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 2L16 9L2 16V2Z" fill="#A97DF5"/></svg>
          )}
        </button>
        {/* Progress Bar with moving dots */}
        <div style={{
          background: '#f3eafd',
          borderRadius: 40,
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          minWidth: 120,
          minHeight: 20,
        }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            {/* ADIN: index 0: [progress bar, dot, dot] */}
            {index === 0 && (
              <>
                <div style={{ position: 'relative', width: 56, height: 8, background: '#e1d1fa', borderRadius: 20, overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: 8, width: `${(progress / duration) * 56}px`, background: '#a97df5', borderRadius: 20, transition: 'width 0.1s' }} />
                </div>
                <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
                <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
              </>
            )}
            {/* Our Team: index 1: [dot, dot, progress bar] */}
            {index === 1 && (
              <>
                <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
                <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
                <div style={{ position: 'relative', width: 56, height: 8, background: '#e1d1fa', borderRadius: 20, overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: 8, width: `${(progress / duration) * 56}px`, background: '#a97df5', borderRadius: 20, transition: 'width 0.1s' }} />
                </div>
              </>
            )}
            {/* Investors: index 2: [dot, progress bar, dot] */}
            {index === 2 && (
              <>
                <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
                <div style={{ position: 'relative', width: 56, height: 8, background: '#e1d1fa', borderRadius: 20, overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: 8, width: `${(progress / duration) * 56}px`, background: '#a97df5', borderRadius: 20, transition: 'width 0.1s' }} />
                </div>
                <div style={{ width: 8, height: 8, background: '#e1d1fa', borderRadius: 20 }} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Content: React.FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  return (
  <section className={styles.contentSection}>
    <div id="hits-section" />
    <div style={{ height: 60 }} />
    <RotatingHeader />
    <div style={{ height: 160 }} />
    <div className={styles.dealMakerContainer}>
      <div className={styles.dealMakerTextContainer}>
        <div className={styles.dealMakerHeadline}>
          <p>AI speed.<br />Human judgment.</p>
        </div>
        <div className={styles.dealMakerSubtext}>
          <p>
            ADIN pairs expert operators with intelligent agents to handle the heavy lifting of venture workflows. Faster analysis, tighter feedback loops, and more space for high-conviction bets.
          </p>
        </div>
      </div>
    </div>
      <div ref={mainContentRef} id="home-content-section" className={styles.cardsRow}>
      {/* Left Card: Powered by AI Agents */}
      <div className={styles.leftCard}>
          <div className={styles.leftCardTitleBlock}>
            <span className={styles.leftCardTitlePowered}>Powered by</span>
            <span className={styles.leftCardTitleAgents}>AI Agents</span>
          </div>
        <div className={styles.leftCardAgents}>
          {agents.map((agent, i) => (
              <React.Fragment key={i}>
                <div className={styles.agentRow}>
              <img src={agent.icon} alt={agent.name} className={styles.agentIcon} />
              <div className={styles.agentTextBlock}>
                <div className={styles.agentName}>{agent.name}</div>
                <div className={styles.agentDesc}>{agent.desc}</div>
              </div>
            </div>
                {i < agents.length - 1 && (
                  <div className={styles.agentDivider} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Right Card: Profile Card Carousel */}
        <div className={styles.rightCard}>
          <div className={styles.rightCardContentWrapper}>
            <div className={styles.rightCardTitleBlock}>
              <span className={styles.rightCardTitleSupported}>Supported by</span>
              <span className={styles.rightCardTitleHumans}>Humans</span>
            </div>
            <div className={styles.rightCardImageArea}>
              <ProfileCarousel />
            </div>
          </div>
        </div>
      </div>
      {/* Tribute Labs Section - 24px spacing above */}
      <div className={styles.tributeSection}>
        <div className={styles.tributeInnerRow}>
          <div className={styles.tributeCard}>
            <div className={styles.tributeCardBorder} />
            <div className={styles.tributeCardContent}>
              <div className={styles.tributeLogoBox}>
                <div className={styles.tributeLogoIcon}>
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M0 18L10.5 12V0L0 6V18Z" fill="#fff"/>
                      <path d="M10.5 12L0 6L10.5 0L21 6L10.5 12Z" fill="#fff"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div className={styles.tributeTextBlock}>
                <div className={styles.tributeTitle}>A Tribute Labs Project</div>
                <div className={styles.tributeLocation}>NYC / LDN / CHI</div>
              </div>
            </div>
          </div>
          <div className={styles.tributeDescription}>
            Tribute Labs has supported over 30 communities, empowering more than 300 projects through technical guidance, infrastructure, and long-term partnership. Our mission is to help communities thrive by providing the tools and support they need to scale with confidence.
          </div>
        </div>
      </div>
      {/* Figma node 1:10750 section - 160px spacing above */}
      <div className={styles.earlySection}>
        <div className={styles.earlyInnerCol}>
          <div className={styles.earlyHeadlineRow}>
            <div className={styles.earlyHeadlineBlock}>
              <div className={styles.earlyHeadline}>
                Only Early.<br />Always Human.
              </div>
              <div className={styles.earlySubtext}>
                ADIN backs bold ideas at the beginning, where conviction matters most. We invest exclusively at the earliest stages, combining operator insight and intelligent systems to move faster, with greater focus.
              </div>
            </div>
          </div>
          <div className={styles.earlyStepsGrid}>
            {/* Row 1: Pre-Seed, Seed */}
            <div className={styles.earlyStepGridItem}>
              <span className={styles.earlyStepCellLineWrap}>
                <span className={styles.earlyStepCellLineBlack}></span>
                <span className={styles.earlyStepCellLinePurple} style={{ top: 'calc(50% - 14px)' }}></span>
              </span>
              <div className={styles.earlyStepContent}>
                <div className={styles.earlyStepLabel}>Pre-Seed</div>
                <div className={styles.earlyStepTitle}>Backed by Belief</div>
                <div className={styles.earlyStepDesc}>At pre-seed, conviction outweighs traction. ADIN provides governance capital and strategic support to founders with deep alignment and long-term thinking.</div>
              </div>
            </div>
            <div className={styles.earlyStepGridItem}>
              <span className={styles.earlyStepCellLineWrap}>
                <span className={styles.earlyStepCellLineBlack}></span>
                <span className={styles.earlyStepCellLineGreen} style={{ top: 'calc(50% - 14px)' }}></span>
              </span>
              <div className={styles.earlyStepContent}>
                <div className={styles.earlyStepLabel}>Seed</div>
                <div className={styles.earlyStepTitle}>Culture-First Capital</div>
                <div className={styles.earlyStepDesc}>Seed-stage founders shape ADIN's future. Our community brings cultural context and dealflow, helping us invest in projects that align with our collective values.</div>
              </div>
            </div>
            {/* Row 2: A Round, empty */}
            <div className={styles.earlyStepGridItem}>
              <span className={styles.earlyStepCellLineWrap}>
                <span className={styles.earlyStepCellLineBlack}></span>
                <span className={styles.earlyStepCellLinePurple} style={{ top: 'calc(50% - 14px)' }}></span>
              </span>
              <div className={styles.earlyStepContent}>
                <div className={styles.earlyStepLabel}>A Round</div>
                <div className={styles.earlyStepTitle}>Early, Not Late</div>
                <div className={styles.earlyStepDesc}>We don't chase momentum—we help create it. ADIN's A-round capital supports early traction and sharp execution, before the noise of growth-stage hype.</div>
              </div>
            </div>
            <div className={styles.earlyStepGridItem}></div>
          </div>
      </div>
    </div>
      {/* FAQ Section - 160px spacing above */}
      <FaqSection />
      {/* Invest Section - 160px spacing above */}
      <InvestSection />
  </section>
);
};

export default Content; 