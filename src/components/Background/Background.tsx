import React from "react";
import styles from "./Background.module.css";

const Background: React.FC = () => {
  return (
    <div className={styles.background}>
      {/* Gradient overlays placeholder */}
      <div className={styles.gradientOverlays}></div>
    </div>
  );
};

export default Background; 