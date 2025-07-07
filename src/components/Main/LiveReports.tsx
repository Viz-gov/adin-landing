import React, { useEffect, useState } from "react";
import styles from "./LiveReports.module.css";

const reports = [
  {
    logo: "/new range.svg",
    name: "New Range",
    subtitle: "Automated Compliance",
    link: "https://example.com/new-range"
  },
  {
    logo: "/cactos.svg",
    name: "Cactos",
    subtitle: "Energy Systems",
    link: "https://example.com/cactos"
  },
  {
    logo: "/openai.svg",
    name: "OpenAI",
    subtitle: "Machine Intelligence",
    link: "https://example.com/openai"
  }
];

export default function LiveReports() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ""}`}>
      <div className={styles.header}>
        <span className={styles.greenDot}></span>
        <span className={styles.headerText}>Live Reports</span>
      </div>
      <div className={styles.reportList}>
        {reports.map((report, i) => (
          <a
            href={report.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reportCard}
            key={report.name}
          >
            <div className={styles.logoBox}>
              <img src={report.logo} alt={report.name + " logo"} className={styles.logoImg} />
            </div>
            <div className={styles.reportInfo}>
              <div className={styles.reportName}>{report.name}</div>
              <div className={styles.reportSubtitle}>{report.subtitle}</div>
            </div>
            <div className={styles.fold}>
              <svg className={styles.arrow} viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        ))}
      </div>
      <a href="#" className={styles.viewAll}>View All Recent Reports →</a>
    </div>
  );
} 