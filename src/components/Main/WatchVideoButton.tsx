import React from "react";
import styles from "./WatchVideoButton.module.css";

export default function WatchVideoButton() {
  return (
    <div className={styles.button}>
      <div className={styles.iconSection}>
        <div className={styles.smileyWrapper}>
          <img src="/Smiley - Icon.svg" alt="Smiley face" className={styles.smileyImg} />
          <div className={styles.playIconWrapper}>
            <svg className={styles.playIcon} viewBox="0 0 15 18" fill="none">
              <path d="M1.73 17.25C1.44 17.25 1.16 17.17 0.91 17.03C0.35 16.71 0 16.09 0 15.42V1.83C0 1.15 0.35 0.54 0.91 0.22C1.17 0.07 1.46 -0.00 1.75 0.00C2.05 0.00 2.34 0.09 2.59 0.24L14.21 7.19C14.45 7.35 14.65 7.56 14.79 7.81C14.93 8.06 15.00 8.34 15.00 8.62C15.00 8.91 14.93 9.19 14.79 9.44C14.65 9.69 14.45 9.90 14.21 10.05L2.59 17.01C2.33 17.17 2.03 17.25 1.73 17.25Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.textSection}>
        Watch the Video
      </div>
    </div>
  );
} 