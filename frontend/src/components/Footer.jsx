const styles = {
  footer: {
    background: "#006A4E",
    color: "#fff",
    marginTop: "auto",
  },
  graphics: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "32px",
    padding: "28px 40px 0",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    flexWrap: "wrap",
  },
  graphic: {
    opacity: 0.85,
    fontSize: "48px",
    lineHeight: 1,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    padding: "28px 64px",
    gap: "40px",
    flexWrap: "wrap",
  },
  section: {
    flex: 1,
    minWidth: "200px",
  },
  heading: {
    fontSize: "15px",
    fontWeight: 700,
    marginBottom: "12px",
    color: "#a5d6a7",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  text: {
    fontSize: "13px",
    lineHeight: 1.8,
    opacity: 0.85,
  },
  quickLink: {
    display: "block",
    fontSize: "13px",
    color: "rgba(255,255,255,0.8)",
    marginBottom: "6px",
    cursor: "pointer",
    textDecoration: "none",
  },
  copyright: {
    textAlign: "center",
    padding: "16px",
    fontSize: "12px",
    opacity: 0.7,
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.graphics}>
        <span style={styles.graphic} title="Books">📚</span>
        <span style={{ ...styles.graphic, fontSize: "52px" }} title="Students">🎓</span>
        <span style={{ ...styles.graphic, fontSize: "64px" }} title="Campus">🏛️</span>
        <span style={{ ...styles.graphic, fontSize: "52px" }} title="Bus">🚌</span>
        <span style={{ ...styles.graphic, fontSize: "48px" }} title="Celebration">🎉</span>
      </div>
      <div style={styles.content}>
        <div style={styles.section}>
          <div style={styles.heading}>Find Us</div>
          <p style={styles.text}>
            Purbachal American City, Kanchan, Rupganj,<br />
            Narayanganj-1461, Dhaka, Bangladesh<br /><br />
            📞 +880-2-XXXXXXX<br />
            ✉️ transport@green.edu.bd
          </p>
        </div>
        <div style={styles.section}>
          <div style={styles.heading}>Quick Links</div>
          {["Apply for Pass", "Check Status", "Bus Schedule", "Route Map", "Contact Admin", "FAQ"].map(l => (
            <a key={l} style={styles.quickLink}>→ {l}</a>
          ))}
        </div>
        <div style={styles.section}>
          <div style={styles.heading}>About System</div>
          <p style={styles.text}>
            The GUB Transport Pass System is a digital platform for managing student transport passes at Green University of Bangladesh. Apply, track, and manage your bus pass entirely online.
          </p>
        </div>
      </div>
      <div style={styles.copyright}>
        Green University of Bangladesh • Transport Management System © 2025
      </div>
    </footer>
  );
}
