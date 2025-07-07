import React from "react";
import styles from "./Content.module.css";

const agents = [
  {
    icon: "/agent1 icon.svg",
    name: "AI Agents",
    desc: "Automate research, diligence, and reporting."
  },
  {
    icon: "/agent2 icon.svg",
    name: "Human Operators",
    desc: "Expert oversight and judgment."
  },
  {
    icon: "/agent3 icon.svg",
    name: "Network Hunter",
    desc: "Find the crowd, fuel the movement."
  },
  {
    icon: "/agent4 icon.svg",
    name: "Tech Oracle",
    desc: "Spotting tomorrow's breakthroughs, today."
  },
  {
    icon: "/agent5 icon.svg",
    name: "Monopoly Maker",
    desc: "Backing the next market dominator."
  }
];

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
        <div className={styles.leftCardTitle}>Powered by AI agents</div>
        <div className={styles.leftCardAgents}>
          {agents.map((agent, i) => (
            <div className={styles.agentRow} key={i}>
              <img src={agent.icon} alt={agent.name} className={styles.agentIcon} />
              <div className={styles.agentTextBlock}>
                <div className={styles.agentName}>{agent.name}</div>
                <div className={styles.agentDesc}>{agent.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Card: Profile Card Image */}
      <div className={styles.rightCard}>
        <img src="/Profile Card Image.svg" alt="Profile Card" className={styles.profileCardImage} />
      </div>
    </div>
  </section>
);

export default Content; 