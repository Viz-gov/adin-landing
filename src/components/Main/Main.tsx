"use client";
import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import WatchVideoButton from "./WatchVideoButton";
import LiveReports from "./LiveReports";

const words = [
  { text: "biotech", color: "#a97df5" },
  { text: "3d printing", color: "#FFD17A" },
  { text: "blockchain", color: "#5ED890" },
  { text: "creative tools", color: "#FF9066" },
  { text: "medical", color: "#FFD17A" },
];

const GradientBackground = () => (
  <div style={{
    position: 'relative',
    width: '100%',
    height: '190px',
    marginTop: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 1,
    filter: 'blur(68.5941px)',
    transform: 'scaleX(-1)',          // ← flip horizontally
    transformOrigin: 'center center'  // ← ensure it flips around the center

  }}>
    <div style={{
      position: 'absolute',
      left: '50%',
      top: 0,
      width: '1794px',
      height: '189.953px',
      background: '#a97df5',
      borderRadius: '42.2118px',
      transform: 'translateX(-50%)',
    }} />
    <div style={{
      position: 'absolute',
      top: 0,
      left: 'calc(50% + 220.952px)',
      width: '1352.1px',
      height: '189.953px',
      background: '#49c17a',
      borderRadius: '42.2118px',
      transform: 'translateX(-50%)',
    }} />
    <div style={{
      position: 'absolute',
      top: 0,
      left: 'calc(50% + 83.1044px)',
      width: '1076.4px',
      height: '189.953px',
      background: '#ffbf66',
      borderRadius: '42.2118px',
      transform: 'translateX(-50%)',
    }} />
    <div style={{
      position: 'absolute',
      top: 0,
      left: 'calc(50% - 100.253px)',
      width: '709.685px',
      height: '189.953px',
      background: '#f3655b',
      borderRadius: '42.2118px',
      transform: 'translateX(-50%)',
    }} />
  </div>
);

const ChevronDown = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    style={{ display:'flex',justifyContent:'center',alignItems:'center',background:'none',border:'none',margin:'0 auto 24px',cursor:'pointer',zIndex:2,transition:'transform .2s' }}
    aria-label="Scroll down"
  >
    <img src="/chevron-down.svg" width={24} height={24} alt="" />
  </button>
);


const Main: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length); // Change word after fade out
        setFade(false); // Fade in new word
      }, 300); // Match this to fadeOut duration
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChevronClick = () => {
    const el = document.getElementById('hits-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heroTitle}>
          Investing in early<br />stage ideas building for<br />
          <span style={{ display: 'inline-block' }}>
            <span
              className={`${styles.highlight} ${fade ? styles.fadeOut : styles.fadeIn}`}
              style={{ color: words[index].color, display: 'inline-block' }}
            >
              {words[index].text}
            </span>
            <span
              className={fade ? styles.fadeOut : styles.fadeIn}
              style={{ display: 'inline-block' }}
            >
              .
            </span>
          </span>
        </h1>
        <p className={styles.heroSubtext}>
          ADIN backs teams building the future of the internet focusing on Seed Rounds to Series-A.
        </p>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.watchVideoButtonSpacing}
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          <WatchVideoButton />
        </a>
        <LiveReports />
        <br></br>
        <br></br>
        <br></br>
        <ChevronDown onClick={handleChevronClick} />
        <GradientBackground />
      </main>
    </>
  );
};

export default Main; 