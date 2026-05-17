import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const s = {
  page: { background: "#FAFAFA", minHeight: "100vh", display: "flex", flexDirection: "column" },
  hero: {
    background: "linear-gradient(135deg, #f0faf5 0%, #e8f5e9 60%, #fff8e7 100%)",
    padding: "72px 64px 80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap",
  },
  heroLeft: { flex: 1, minWidth: "280px", maxWidth: "540px" },
  heroTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    color: "#006A4E",
    lineHeight: 1.15,
    marginBottom: "16px",
  },
  heroSub: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "32px",
    fontWeight: 400,
    lineHeight: 1.6,
  },
  btn: {
    background: "#006A4E",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "16px 40px",
    fontSize: "18px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 24px rgba(0,106,78,0.25)",
    transition: "all 0.2s",
    letterSpacing: "0.3px",
  },
  heroRight: {
    flex: 1,
    minWidth: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  passCard: {
    background: "linear-gradient(135deg, #006A4E 0%, #00897b 60%, #1565c0 100%)",
    borderRadius: "20px",
    padding: "28px 32px",
    color: "#fff",
    width: "260px",
    boxShadow: "0 20px 60px rgba(0,106,78,0.35)",
    transform: "rotate(-4deg)",
    position: "relative",
  },
  passCard2: {
    background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
    borderRadius: "20px",
    padding: "28px 32px",
    color: "#fff",
    width: "260px",
    boxShadow: "0 20px 60px rgba(26,35,126,0.25)",
    transform: "rotate(3deg) translate(40px, -20px)",
    position: "absolute",
    zIndex: 1,
  },
  passStack: { position: "relative", width: "300px", height: "200px" },
  passLabel: { fontSize: "11px", opacity: 0.75, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" },
  passTitle: { fontSize: "22px", fontWeight: 900, letterSpacing: "1px", fontFamily: "'Syne', sans-serif" },
  passSub: { fontSize: "13px", marginTop: "8px", opacity: 0.85 },
  passRoute: { fontSize: "28px", fontWeight: 900, marginTop: "12px", letterSpacing: "2px" },
  features: { padding: "64px", background: "#fff" },
  featuresTitle: { textAlign: "center", fontSize: "28px", fontWeight: 700, color: "#006A4E", marginBottom: "40px", fontFamily: "'Syne', sans-serif" },
  featuresGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", maxWidth: "900px", margin: "0 auto" },
  featureCard: {
    background: "#fff8e7",
    border: "1px solid #ffe0b2",
    borderRadius: "16px",
    padding: "32px 24px",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  featureIcon: { fontSize: "40px", marginBottom: "16px" },
  featureTitle: { fontSize: "18px", fontWeight: 700, color: "#006A4E", marginBottom: "10px" },
  featureText: { fontSize: "14px", color: "#666", lineHeight: 1.6 },
  mapSection: { padding: "64px", background: "#f0faf5" },
  mapTitle: { textAlign: "center", fontSize: "24px", fontWeight: 700, color: "#006A4E", marginBottom: "28px", fontFamily: "'Syne', sans-serif" },
  mapContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,106,78,0.15)",
    background: "#e8f5e9",
    position: "relative",
    height: "380px",
  },
  mapOverlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
};

const features = [
  { icon: "💻", title: "Online Application", text: "Apply from anywhere — no need to visit campus office. Fill in your details and submit in minutes." },
  { icon: "🪪", title: "Pass Card", text: "Download or print your pass after approval. QR code included for instant verification." },
  { icon: "⚡", title: "Quick Approval", text: "Admin approves fast so you get your pass without delay. Track status in real-time." },
];

// Simple SVG campus map
function CampusMap() {
  return (
    <svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Background */}
      <rect width="900" height="380" fill="#e8f5e9" />
      {/* Roads */}
      <rect x="0" y="180" width="900" height="20" fill="#c8e6c9" rx="2" />
      <rect x="420" y="0" width="20" height="380" fill="#c8e6c9" rx="2" />
      <rect x="600" y="0" width="16" height="380" fill="#dcedc8" rx="2" />
      <rect x="0" y="80" width="900" height="12" fill="#dcedc8" rx="2" />
      <rect x="0" y="290" width="900" height="12" fill="#dcedc8" rx="2" />
      {/* Campus building */}
      <rect x="160" y="100" width="120" height="80" fill="#006A4E" rx="8" opacity="0.85" />
      <text x="220" y="148" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Green University</text>
      <text x="220" y="162" textAnchor="middle" fill="white" fontSize="9">of Bangladesh</text>
      {/* Playground */}
      <ellipse cx="300" cy="90" rx="50" ry="30" fill="#81c784" opacity="0.6" />
      <text x="300" y="93" textAnchor="middle" fill="#1b5e20" fontSize="9" fontWeight="600">Playground</text>
      {/* Bus Terminal */}
      <rect x="440" y="150" width="100" height="50" fill="#FF9F1C" rx="8" opacity="0.9" />
      <text x="490" y="172" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">GUB Bus</text>
      <text x="490" y="186" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Terminal 🚌</text>
      {/* Cafeteria */}
      <rect x="180" y="220" width="80" height="45" fill="#43a047" rx="6" opacity="0.75" />
      <text x="220" y="246" textAnchor="middle" fill="white" fontSize="9">Cafeteria</text>
      {/* Purbachal */}
      <rect x="700" y="120" width="140" height="50" fill="#1565c0" rx="8" opacity="0.7" />
      <text x="770" y="140" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">Purbachal</text>
      <text x="770" y="154" textAnchor="middle" fill="white" fontSize="9">American City</text>
      {/* Route line */}
      <polyline points="490,200 490,240 300,240 300,310 150,310" stroke="#FF9F1C" strokeWidth="3" fill="none" strokeDasharray="8,4" />
      {/* Route markers */}
      <circle cx="490" cy="200" r="8" fill="#FF9F1C" />
      <circle cx="300" cy="310" r="8" fill="#006A4E" />
      <text x="310" y="330" fill="#006A4E" fontSize="9" fontWeight="700">Shonir Akhra (Route 7)</text>
      {/* Road label */}
      <text x="750" y="75" fill="#888" fontSize="10">Road No-05</text>
      {/* City Bank marker */}
      <circle cx="490" cy="310" r="6" fill="#e53935" />
      <text x="500" y="330" fill="#e53935" fontSize="9">City Bank | Kanchan</text>
      {/* View larger map btn */}
      <rect x="20" y="20" width="110" height="28" fill="white" rx="6" opacity="0.9" />
      <text x="75" y="38" textAnchor="middle" fill="#006A4E" fontSize="11" fontWeight="600">View larger map</text>
      {/* Legend */}
      <rect x="680" y="280" width="180" height="80" fill="white" rx="8" opacity="0.9" />
      <circle cx="700" cy="300" r="6" fill="#FF9F1C" />
      <text x="714" y="305" fill="#333" fontSize="10">Bus Terminal</text>
      <circle cx="700" cy="320" r="6" fill="#006A4E" />
      <text x="714" y="325" fill="#333" fontSize="10">Pickup Point</text>
      <line x1="692" y1="340" x2="720" y2="340" stroke="#FF9F1C" strokeWidth="2" strokeDasharray="4,2" />
      <text x="728" y="345" fill="#333" fontSize="10">Route 7</text>
      {/* Google Maps style attribution */}
      <text x="450" y="370" textAnchor="middle" fill="#888" fontSize="9">© Map data 2025 Green University Campus</text>
    </svg>
  );
}

export default function LandingPage({ navigate }) {
  return (
    <div style={s.page}>
      <Navbar navigate={navigate} activePage="landing" />
      <style>{`
        .apply-btn:hover { background: #004d38 !important; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,106,78,0.35) !important; }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(255,159,28,0.2); }
      `}</style>

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.heroLeft}>
          <h1 style={s.heroTitle}>Smart Transport Pass for GUB Students</h1>
          <p style={s.heroSub}>Apply, Manage your pass easily and smoothly</p>
          <button className="apply-btn" style={s.btn} onClick={() => navigate("auth")}>🚌 Apply Now</button>
        </div>
        <div style={s.heroRight}>
          <div style={s.passStack}>
            <div style={s.passCard2}>
              <div style={s.passLabel}>Back Side</div>
              <div style={{ fontSize: "13px", opacity: 0.85, marginTop: "8px" }}>Authorized Signature _______</div>
              <div style={{ marginTop: "12px", background: "rgba(255,255,255,0.2)", borderRadius: "8px", padding: "8px", textAlign: "center", fontSize: "11px" }}>
                ▪▪▪ QR Code ▪▪▪<br />Digital Verification
              </div>
              <div style={{ fontSize: "10px", opacity: 0.65, marginTop: "8px" }}>Green University of Bangladesh</div>
            </div>
            <div style={s.passCard}>
              <div style={s.passLabel}>Transport Pass</div>
              <div style={s.passTitle}>TRANSPORT<br />PASS</div>
              <div style={s.passRoute}>ROUTE | 07</div>
              <div style={s.passSub}>Shonir Akhra to GUB</div>
              <div style={{ ...s.passLabel, marginTop: "10px" }}>Summer 2025 • CARD NO: 114</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={s.features}>
        <h2 style={s.featuresTitle}>Why Use GUB Transport Pass?</h2>
        <div style={s.featuresGrid}>
          {features.map((f) => (
            <div key={f.title} className="feature-card" style={s.featureCard}>
              <div style={s.featureIcon}>{f.icon}</div>
              <div style={s.featureTitle}>{f.title}</div>
              <p style={s.featureText}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section style={s.mapSection}>
        <h2 style={s.mapTitle}>📍 Campus to Pickup Point</h2>
        <div style={s.mapContainer}>
          <CampusMap />
        </div>
      </section>

      <Footer />
    </div>
  );
}
