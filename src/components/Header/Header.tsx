"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#about", icon: "/About Icon.svg", label: "About" },
  { href: "#investors", icon: "/Investors Icon.svg", label: "Investors" },
  { href: "#members", icon: "/Members Icon.svg", label: "Members" },
  { href: "#founders", icon: "/Founders Icon.svg", label: "Founders" },
];

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.logoIcon}>
          <img src="/logo-header.svg" alt="Logo" width={120} height={32} />
        </div>
      </div>
      <nav className={styles.navigation}>
        {navLinks.map((link) => (
          <a href={link.href} className={styles.navLink} key={link.label}>
            <span className={styles.icon}><img src={link.icon} alt={link.label} width={20} height={20} /></span>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className={styles.menuButton}
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
        style={{ display: sidebarOpen ? 'none' : undefined }}
      >
        <img src="/reorder-three-outline.svg" alt="Menu" width={32} height={32} />
      </button>
      <div className={styles.authLinksContainer}>
        <a href="#login" className={styles.login}>Log In</a>
        <a href="#signup" className={styles.signup}>Sign Up</a>
      </div>
      {sidebarOpen && (
        <div className={styles.sidebarOverlay} onClick={() => setSidebarOpen(false)}>
          <aside className={styles.sidebar} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSidebarOpen(false)} aria-label="Close menu">&times;</button>
            <nav className={styles.sidebarNav}>
              {navLinks.map((link) => (
                <a href={link.href} className={styles.navLink} key={link.label}>
                  <span className={styles.icon}><img src={link.icon} alt={link.label} width={20} height={20} /></span>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className={styles.sidebarAuthLinks}>
              <a href="#login" className={styles.login}>Log In</a>
              <a href="#signup" className={styles.signup}>Sign Up</a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header; 