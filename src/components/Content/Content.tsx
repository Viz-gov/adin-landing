"use client";
import React, { useState, useEffect } from "react";
import styles from "./Content.module.css";

const agents = [
  {
    icon: "/agent3 icon.svg",
    name: "The Network Hunter",
    desc: "Find the crowd, fuel the movement."
  },
  {
    icon: "/agent4 icon.svg",
    name: "The Tech Oracle",
    desc: "Spotting tomorrow's breakthroughs, today."
  },
  {
    icon: "/agent5 icon.svg",
    name: "The Monopoly Maker",
    desc: "Backing the next market dominator."
  },
  {
    icon: "/agent1 icon.svg",
    name: "The Unit Master",
    desc: "Numbers first, profits always."
  },
  {
    icon: "/agent2 icon.svg",
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

const Content: React.FC = () => (
  <section className={styles.contentSection}>
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
    <div className={styles.cardsRow}>
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
  </section>
);

export default Content; 