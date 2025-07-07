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
  </section>
);

export default Content; 