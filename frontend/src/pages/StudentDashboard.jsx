import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const s = {
  page: { background: "#f0faf5", minHeight: "100vh", display: "flex", flexDirection: "column" },
  hero: {
    background: "linear-gradient(120deg, #006A4E 0%, #00897b 100%)",
    padding: "32px 48px",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },
  heroLeft: {},
  heroTitle: { fontSize: "24px", fontWeight: 800, fontFamily: "'Syne', sans-serif", marginBottom: "8px" },
  badge: { display: "inline-flex", alignItems: "center", gap: "6px", background: "#FF9F1C", color: "#fff", borderRadius: "20px", padding: "4px 14px", fontWeight: 700, fontSize: "13px" },
  heroInfo: { fontSize: "14px", opacity: 0.9, marginTop: "8px", lineHeight: 1.8 },
  avatar: { width: "72px", height: "72px", borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", border: "3px solid rgba(255,255,255,0.4)" },
  main: { padding: "32px 48px", flex: 1, display: "flex", gap: "28px", flexWrap: "wrap" },
  left: { flex: 2, minWidth: "300px", display: "flex", flexDirection: "column", gap: "24px" },
  right: { flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "24px" },
  card: { background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 16px rgba(0,106,78,0.08)" },
  cardTitle: { fontSize: "16px", fontWeight: 700, color: "#006A4E", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" },
  actionCard: {
    background: "#f8fffe",
    border: "1.5px solid #c8e6c9",
    borderRadius: "12px",
    padding: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    transition: "all 0.2s",
  },
  actionIcon: { fontSize: "28px" },
  actionLabel: { fontSize: "14px", fontWeight: 600, color: "#333" },
  passCard: {
    background: "linear-gradient(135deg, #006A4E 0%, #00897b 100%)",
    borderRadius: "16px",
    padding: "24px",
    color: "#fff",
    boxShadow: "0 8px 32px rgba(0,106,78,0.25)",
  },
  passBack: {
    background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
    borderRadius: "16px",
    padding: "24px",
    color: "#fff",
    boxShadow: "0 8px 32px rgba(26,35,126,0.2)",
  },
  passRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  passTitle: { fontSize: "20px", fontWeight: 900, fontFamily: "'Syne', sans-serif", letterSpacing: "1px" },
  passRoute: { fontSize: "24px", fontWeight: 900, marginTop: "8px", letterSpacing: "2px" },
  qrBox: { width: "60px", height: "60px", background: "rgba(255,255,255,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", textAlign: "center", padding: "4px" },
  notif: { display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 0", borderBottom: "1px solid #f0f0f0", fontSize: "13px", color: "#444" },
  complaintBtn: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1.5px solid #e0e0e0",
    background: "#fafafa",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 500,
    color: "#444",
    transition: "all 0.2s",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  flip: { display: "flex", gap: "10px", marginTop: "12px" },
  flipBtn: { fontSize: "11px", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.4)", background: "transparent", color: "rgba(255,255,255,0.8)", cursor: "pointer" },
};

const notifications = [
  { icon: "⚠️", text: "Your pass will expire in 5 days." },
  { icon: "🚌", text: "Route 7 schedule change: Departure now 8:00 AM." },
  { icon: "📢", text: "New announcement posted by transport office." },
];

const complaintTypes = [
  { icon: "⏰", label: "Bus Delay" },
  { icon: "👮", label: "Bus Staff Behavior" },
  { icon: "💺", label: "Seat Issues" },
  { icon: "📋", label: "Others Complain" },
];

export default function StudentDashboard({ navigate }) {
  const [passView, setPassView] = useState("front");
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [complaintText, setComplaintText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={s.page}>
      <Navbar navigate={navigate} activePage="dashboard" />
      <style>{`
        .action-card:hover { border-color: #006A4E !important; background: #e8f5e9 !important; transform: translateY(-2px); }
        .complaint-btn:hover { background: #e8f5e9 !important; border-color: #006A4E !important; color: #006A4E !important; }
        .complaint-btn.selected { background: #e8f5e9 !important; border-color: #006A4E !important; color: #006A4E !important; font-weight: 700 !important; }
      `}</style>

      {/* Hero Banner */}
      <div style={s.hero}>
        <div style={s.heroLeft}>
          <div style={s.heroTitle}>GUB Transport Pass</div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={s.badge}>✅ Approved</span>
            <span style={{ fontSize: "13px", opacity: 0.85 }}>Student ID: 232002008</span>
          </div>
          <div style={s.heroInfo}>
            📍 Pickup Point: Sign Board (Route_7) &nbsp;|&nbsp; 📅 Valid: Jan 2026 – May 2026
          </div>
        </div>
        <div style={s.avatar}>👨‍🎓</div>
      </div>

      <div style={s.main}>
        <div style={s.left}>
          {/* Pass Management */}
          <div style={s.card}>
            <div style={s.cardTitle}>🎟️ Pass Management</div>
            <div style={s.grid2}>
              {[
                { icon: "🚌", label: "Apply for New Pass" },
                { icon: "📅", label: "Bus Schedule" },
                { icon: "🔄", label: "Pass Renewal" },
                { icon: "💳", label: "Payment History" },
              ].map(a => (
                <div key={a.label} className="action-card" style={s.actionCard}>
                  <span style={s.actionIcon}>{a.icon}</span>
                  <span style={s.actionLabel}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Pass */}
          <div style={s.card}>
            <div style={s.cardTitle}>🪪 Your Digital Pass</div>
            {passView === "front" ? (
              <div style={s.passCard}>
                <div style={s.passRow}>
                  <div>
                    <div style={{ fontSize: "10px", opacity: 0.7, letterSpacing: "2px", textTransform: "uppercase" }}>Transport Pass</div>
                    <div style={s.passTitle}>TRANSPORT PASS</div>
                    <div style={{ fontSize: "12px", opacity: 0.8, marginTop: "2px" }}>Summer 2025</div>
                  </div>
                  <div style={s.qrBox}>⬛⬜⬛<br />⬜⬛⬜<br />⬛⬜⬛</div>
                </div>
                <div style={s.passRoute}>ROUTE | 07</div>
                <div style={{ fontSize: "14px", marginTop: "4px", opacity: 0.9 }}>Shonir Akhra to GUB</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px", fontSize: "11px", opacity: 0.7 }}>
                  <span>CARD NO: 114</span>
                  <span>232002008</span>
                </div>
                <div style={s.flip}>
                  <button style={s.flipBtn} onClick={() => setPassView("back")}>View Back ↩</button>
                  <button style={{ ...s.flipBtn, background: "rgba(255,159,28,0.3)", borderColor: "#FF9F1C" }}>🖨️ Print Pass</button>
                </div>
              </div>
            ) : (
              <div style={s.passBack}>
                <div style={s.passRow}>
                  <div>
                    <div style={{ fontSize: "10px", opacity: 0.7, letterSpacing: "2px", textTransform: "uppercase" }}>Green University of Bangladesh</div>
                    <div style={{ fontSize: "16px", fontWeight: 700, marginTop: "4px" }}>Transport Pass – Back</div>
                  </div>
                  <div style={{ ...s.qrBox, width: "70px", height: "70px", background: "rgba(255,255,255,0.9)", padding: "6px", borderRadius: "6px" }}>
                    <svg viewBox="0 0 21 21" width="58" height="58" style={{ imageRendering: "pixelated" }}>
                      {/* Simple QR pattern */}
                      {[0,1,2,3,4,5,6].map(r => [0,1,2,3,4,5,6].map(c => {
                        const qr = [[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,0,1,0,1],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]];
                        return qr[r][c] ? <rect key={`${r}${c}`} x={c*3} y={r*3} width="3" height="3" fill="#1a237e" /> : null;
                      }))}
                      {/* Data dots */}
                      {[9,10,11,12].map(r => [9,10,11,12,13,14,15].map(c => Math.random() > 0.5 ? <rect key={`d${r}${c}`} x={c} y={r} width="1.5" height="1.5" fill="#1a237e" /> : null))}
                      {/* Bottom right finder */}
                      {[14,15,16,17,18,19,20].map(r => [14,15,16,17,18,19,20].map(c => {
                        const qr = [[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,0,1,0,1],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]];
                        return qr[r-14][c-14] ? <rect key={`br${r}${c}`} x={c} y={r} width="1" height="1" fill="#1a237e" /> : null;
                      }))}
                    </svg>
                  </div>
                </div>
                <div style={{ marginTop: "16px", fontSize: "12px", opacity: 0.85, lineHeight: 1.8 }}>
                  <div>Authorized Signature: ___________________________</div>
                  <div style={{ marginTop: "8px" }}>Student: Md. Mamun Shahriar &nbsp;|&nbsp; ID: 232002008</div>
                  <div>Dept: CSE &nbsp;|&nbsp; Semester: Summer 2025</div>
                  <div style={{ marginTop: "8px", fontSize: "11px", opacity: 0.7 }}>This pass is non-transferable. Misuse will result in cancellation.</div>
                </div>
                <div style={s.flip}>
                  <button style={s.flipBtn} onClick={() => setPassView("front")}>View Front ↩</button>
                  <button style={{ ...s.flipBtn, background: "rgba(255,255,255,0.15)" }}>🔍 Verify QR</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={s.right}>
          {/* Notifications */}
          <div style={s.card}>
            <div style={s.cardTitle}>🔔 Notifications</div>
            {notifications.map((n, i) => (
              <div key={i} style={s.notif}>
                <span>{n.icon}</span>
                <span>{n.text}</span>
              </div>
            ))}
          </div>

          {/* Complaint */}
          <div style={s.card}>
            <div style={s.cardTitle}>📮 Complain / Feedback</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
              {complaintTypes.map(c => (
                <button key={c.label}
                  className={`complaint-btn ${selectedComplaint === c.label ? "selected" : ""}`}
                  style={s.complaintBtn}
                  onClick={() => setSelectedComplaint(c.label)}>
                  {c.icon} {c.label}
                </button>
              ))}
            </div>
            {selectedComplaint && (
              <>
                <div style={{ fontSize: "13px", color: "#555", marginBottom: "8px" }}>
                  Describe your issue: <strong>{selectedComplaint}</strong>
                </div>
                <textarea
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1.5px solid #e0e0e0", fontSize: "13px", resize: "vertical", minHeight: "80px", boxSizing: "border-box", outline: "none" }}
                  placeholder="Describe the issue..."
                  value={complaintText}
                  onChange={e => setComplaintText(e.target.value)}
                />
                {submitted ? (
                  <div style={{ padding: "10px", background: "#e8f5e9", borderRadius: "8px", color: "#006A4E", fontSize: "13px", marginTop: "8px", fontWeight: 600 }}>✅ Complaint submitted successfully!</div>
                ) : (
                  <button onClick={() => setSubmitted(true)} style={{ marginTop: "10px", width: "100%", padding: "12px", background: "#006A4E", color: "#fff", border: "none", borderRadius: "10px", fontWeight: 700, cursor: "pointer", fontSize: "14px" }}>
                    Submit Complaint
                  </button>
                )}
              </>
            )}
          </div>

          {/* Pass ID card */}
          <div style={{ ...s.card, background: "#006A4E", color: "#fff" }}>
            <div style={{ fontSize: "11px", opacity: 0.7, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Pass Details</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#FF9F1C" }}>PASS ID: 125987812</div>
            <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "6px" }}>Route: 07 (Shonir Akhra)</div>
            <div style={{ fontSize: "12px", opacity: 0.8, marginTop: "4px" }}>Valid from 1 Jan 2026 to 31 May 2026</div>
            <div style={{ marginTop: "12px", background: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "8px", fontSize: "12px" }}>
              Status: <span style={{ color: "#a5d6a7", fontWeight: 700 }}>● Active & Approved</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
