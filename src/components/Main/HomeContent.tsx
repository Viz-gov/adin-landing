import React, { useState } from "react";
import styles from "./HomeContent.module.css";

const hits = [
  {
    text: (
      <>
        <span className={styles.adin}>A</span>
        <span className={styles.adin}>D</span>
        <span className={styles.adin}>I</span>
        <span className={styles.adin}>N</span>
        <span>{` is `}</span>
        <span className={styles.gray}>{`a global network of `}</span>
        <span className={styles.black}>1,2302 humans</span>
        <span className={styles.gray}>{` sharing insights and knowledge as Investors, Members, & Founders.`}</span>
      </>
    ),
  },
  {
    text: (
      <>
        <span className={styles.black}>Investors (Human LPs)</span>
        <span>{` vote on proposed deals, guiding decision-making through collective insights, and over time enabling the fine tuning of models.`}</span>
      </>
    ),
  },
  {
    text: (
      <>
        <span>{`Our team writes checks from `}</span>
        <span className={styles.black}>$500k to $2 million</span>
        <span>{`, partnering with visionary builders in connectivity, compute, crypto, and creative economies.`}</span>
      </>
    ),
  },
];

const HeaderContainer: React.FC = () => {
  const [current, setCurrent] = useState(0);
  // Animation logic will be added next step
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerText}>
        <p>{hits[current].text}</p>
      </div>
      <div className={styles.headerButtonRow}>
        <button className={styles.playButton} aria-label="Next hit" onClick={() => setCurrent((c) => (c + 1) % hits.length)}>
          <span className={styles.playIconWrapper}>
            <svg width="24" height="24" viewBox="0 0 15 18" fill="none">
              <path d="M1.7325 17.2501C1.4447 17.2496 1.16199 17.1741 0.912187 17.0312C0.349687 16.7124 0 16.0937 0 15.422V1.82821C0 1.15461 0.349687 0.537739 0.912187 0.218989C1.16794 0.072006 1.45848 -0.00358033 1.75343 0.00013033C2.04839 0.00384099 2.33693 0.0867126 2.58891 0.240083L14.2069 7.19446C14.449 7.34628 14.6486 7.55711 14.787 7.80718C14.9253 8.05725 14.9979 8.33835 14.9979 8.62415C14.9979 8.90994 14.9253 9.19105 14.787 9.44111C14.6486 9.69118 14.449 9.90201 14.2069 10.0538L2.58703 17.0101C2.32917 17.166 2.03382 17.2489 1.7325 17.2501Z" fill="#A97DF5" />
            </svg>
          </span>
        </button>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBarBg} />
          <div className={styles.progressBarFg} style={{ width: `${((current + 1) / hits.length) * 100}%` }} />
          <div className={styles.progressDot} />
          <div className={styles.progressDot} />
        </div>
      </div>
    </div>
  );
};

const GradientBackground: React.FC = () => (
  <div className={styles.gradientBackgroundContainer}>
    <div className={styles.gradientPurple} />
    <div className={styles.gradientGreen} />
    <div className={styles.gradientYellow} />
    <div className={styles.gradientRed} />
  </div>
);

const ChevronDown: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button className={styles.chevronDown} onClick={onClick} aria-label="Scroll down">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="#A97DF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const HomeContentSection: React.FC = () => (
  <section id="home-content-section" className={styles.homeContentSection}>
    {/* Placeholder for new home content section (Figma node 1-10657) */}
    <h2>Home Content Section (empty)</h2>
  </section>
);

const HomeContent: React.FC<{ id?: string }> = ({ id }) => {
  const handleChevronClick = () => {
    const el = document.getElementById("home-content-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={id} className={styles.mainContainer}>
      <HeaderContainer />
      {/* Gradient background at the bottom */}
      <GradientBackground />
      {/* Chevron down button */}
      <ChevronDown onClick={handleChevronClick} />
      {/* New home content section */}
      <HomeContentSection />
    </section>
  );
};

export default HomeContent; 