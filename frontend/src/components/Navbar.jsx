import { useState } from "react";

const styles = {
  marquee: {
    background: "#fff8e7",
    borderBottom: "2px solid #FF9F1C",
    padding: "8px 0",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  marqueeInner: {
    display: "inline-block",
    animation: "marquee 22s linear infinite",
    fontSize: "13px",
    color: "#333",
  },
  header: {
    background: "#fff",
    borderBottom: "1px solid #e8f5e9",
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 12px rgba(0,106,78,0.07)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },
  logoIcon: {
    width: 40,
    height: 40,
    background: "#006A4E",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "20px",
    fontWeight: 900,
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.2,
  },
  logoTitle: {
    fontSize: "13px",
    fontWeight: 700,
    color: "#006A4E",
    letterSpacing: "0.5px",
  },
  logoSub: {
    fontSize: "10px",
    color: "#888",
    fontWeight: 500,
  },
  nav: {
    display: "flex",
    gap: "4px",
    alignItems: "center",
  },
  navLink: {
    padding: "6px 14px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#444",
    cursor: "pointer",
    border: "none",
    background: "transparent",
    transition: "all 0.2s",
  },
};

export default function Navbar({ navigate, activePage }) {
  const links = [
    { label: "Dashboard", page: "dashboard" },
    { label: "Apply", page: "auth" },
    { label: "Status", page: "status" },
    { label: "Admin", page: "admin" },
    { label: "Contact", page: "landing" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Syne:wght@700;800&display=swap');
        @keyframes marquee { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
        .nav-link:hover { background: #e8f5e9 !important; color: #006A4E !important; }
        .nav-active { background: #e8f5e9 !important; color: #006A4E !important; font-weight: 700 !important; }
      `}</style>
      <div style={styles.marquee}>
        <span style={styles.marqueeInner}>
          🚌 &nbsp;&nbsp; <strong style={{ color: "#d32f2f" }}>Notice:</strong> &nbsp; Apply for your transport pass. Without a pass, you will not be allowed to use GUB transportation. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
      <header style={styles.header}>
        <div style={styles.logo} onClick={() => navigate("landing")}>
          <div style={styles.logoIcon}>🚌</div>
          <div style={styles.logoText}>
            <span style={styles.logoTitle}>GUB Transport Pass</span>
            <span style={styles.logoSub}>Green University of Bangladesh</span>
          </div>
        </div>
        <nav style={styles.nav}>
          {links.map((l) => (
            <button
              key={l.page}
              className={`nav-link ${activePage === l.page ? "nav-active" : ""}`}
              style={styles.navLink}
              onClick={() => navigate(l.page)}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </header>
    </>
  );
}
