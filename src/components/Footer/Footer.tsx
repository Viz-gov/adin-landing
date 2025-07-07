"use client";
import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footerSection}>
    <div className={styles.footerContentWrap}>
      <div className={styles.footerLinksContainer}>
        {/* Left Columns */}
        <div className={styles.footerLinksColumns}>
          {/* First Column */}
          <div className={styles.footerLinksCol}>
            <img src="/Footer Icon.svg" alt="Footer Icon" className={styles.footerIconMain} />
            <span className={styles.footerColTitleBold}>ADIN for</span>
            <span className={styles.footerColLink}>Investors</span>
            <span className={styles.footerColLink}>Members</span>
            <span className={styles.footerColLink}>Founders</span>
          </div>
          {/* Second Column */}
          <div className={styles.footerLinksCol}>
            <img src="/Footer Icon-2.svg" alt="Footer Icon 2" className={styles.footerIconMain} />
            <span className={styles.footerColTitleBold}>Resources</span>
            <span className={styles.footerColLink}>Terms of Service</span>
            <span className={styles.footerColLink}>Privacy Policy</span>
          </div>
        </div>
        {/* Right Column */}
        <div className={styles.footerRightCol}>
          <img src="/Logo.svg" alt="ADIN Logo" className={styles.footerLogo} />
          <div className={styles.footerLegalText}>
            ADIN was designed and developed<br />by Tribute Labs in Brooklyn, NY.
          </div>
          <div className={styles.footerSocialRow}>
            <img src="/Footer X Icon.svg" alt="X" className={styles.footerSocialIcon} />
            <img src="/Footer Email Icon.svg" alt="Email" className={styles.footerSocialIcon} />
          </div>
          <div className={styles.footerCopyright}>
            © 2025 Tribute Labs, Inc.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 