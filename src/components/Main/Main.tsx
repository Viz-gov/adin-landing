"use client";
import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import WatchVideoButton from "./WatchVideoButton";

const words = [
  { text: "biotech", color: "#a97df5" },
  { text: "3d printing", color: "#FFD17A" },
  { text: "blockchain", color: "#5ED890" },
  { text: "creative tools", color: "#FF9066" },
  { text: "medical", color: "#FFD17A" },
];

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

  return (
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
    </main>
  );
};

export default Main; 