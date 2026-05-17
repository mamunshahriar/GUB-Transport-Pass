import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const s = {
  page: { background: "#f0faf5", minHeight: "100vh", display: "flex", flexDirection: "column" },
  main: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "64px 24px" },
  card: {
    background: "#fff",
    borderRadius: "20px",
    padding: "48px 40px",
    maxWidth: "520px",
    width: "100%",
    boxShadow: "0 4px 32px rgba(0,106,78,0.12)",
    textAlign: "center",
  },
  title: { fontSize: "22px", fontWeight: 800, color: "#006A4E", marginBottom: "28px", fontFamily: "'Syne', sans-serif" },
  row: { display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid #f0f0f0", textAlign: "left" },
  label: { fontWeight: 700, color: "#444", fontSize: "15px" },
  value: { color: "#333", fontSize: "15px" },
  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "#e8f5e9",
    color: "#006A4E",
    borderRadius: "20px",
    padding: "4px 16px",
    fontWeight: 700,
    fontSize: "15px",
  },
  btn: {
    marginTop: "28px",
    width: "100%",
    padding: "16px",
    background: "#006A4E",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.2s",
  },
};

export default function StatusPage({ navigate }) {
  return (
    <div style={s.page}>
      <Navbar navigate={navigate} activePage="status" />
      <div style={s.main}>
        <div style={s.card}>
          <div style={s.title}>Your Application Status</div>
          <div style={s.row}>
            <span style={s.label}>Student ID:</span>
            <span style={s.value}>232002008</span>
          </div>
          <div style={s.row}>
            <span style={s.label}>Status:</span>
            <span style={s.statusBadge}>✅ Approved</span>
          </div>
          <div style={s.row}>
            <span style={s.label}>Pickup Point:</span>
            <span style={s.value}>Sign Board (Route_7)</span>
          </div>
          <div style={s.row}>
            <span style={s.label}>Valid From:</span>
            <span style={s.value}>1 January 2026</span>
          </div>
          <div style={{ ...s.row, borderBottom: "none" }}>
            <span style={s.label}>Valid To:</span>
            <span style={s.value}>31 May 2026</span>
          </div>
          <button style={s.btn} onClick={() => navigate("dashboard")}>View Pass Card</button>
          <button style={{ ...s.btn, background: "transparent", color: "#006A4E", border: "2px solid #006A4E", marginTop: "12px" }} onClick={() => navigate("auth")}>Apply for New Pass</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
