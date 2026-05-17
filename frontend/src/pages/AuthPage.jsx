import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const s = {
  page: { background: "#f0faf5", minHeight: "100vh", display: "flex", flexDirection: "column" },
  main: { flex: 1, padding: "48px 24px", display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "48px", flexWrap: "wrap" },
  formSection: { flex: 1, maxWidth: "460px", minWidth: "300px" },
  card: { background: "#fff", borderRadius: "20px", padding: "36px 32px", boxShadow: "0 4px 32px rgba(0,106,78,0.10)" },
  tabs: { display: "flex", marginBottom: "28px", borderBottom: "2px solid #e8f5e9" },
  tab: { flex: 1, padding: "10px", textAlign: "center", cursor: "pointer", fontWeight: 600, fontSize: "15px", border: "none", background: "none", borderBottom: "3px solid transparent", marginBottom: "-2px", transition: "all 0.2s", color: "#888" },
  tabActive: { borderBottom: "3px solid #006A4E", color: "#006A4E" },
  title: { fontSize: "22px", fontWeight: 800, color: "#006A4E", marginBottom: "24px", fontFamily: "'Syne', sans-serif" },
  fieldGroup: { marginBottom: "16px" },
  label: { display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1.5px solid #e0e0e0",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    background: "#fafafa",
    color: "#222",
  },
  select: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1.5px solid #e0e0e0",
    fontSize: "14px",
    outline: "none",
    background: "#fafafa",
    color: "#222",
    boxSizing: "border-box",
    cursor: "pointer",
  },
  btnGreen: {
    width: "100%",
    padding: "14px",
    background: "#006A4E",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
    marginTop: "8px",
    transition: "all 0.2s",
  },
  btnGray: {
    width: "100%",
    padding: "14px",
    background: "#4a4a4a",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
    marginTop: "10px",
    transition: "all 0.2s",
  },
  btnRow: { display: "flex", gap: "12px", marginTop: "4px" },
  btnOutline: {
    flex: 1,
    padding: "13px",
    background: "transparent",
    color: "#006A4E",
    border: "2px solid #006A4E",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  previewSection: {
    flex: 1,
    maxWidth: "340px",
    minWidth: "260px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "48px",
    gap: "20px",
  },
  passPreview: {
    background: "linear-gradient(135deg, #006A4E 0%, #00897b 100%)",
    borderRadius: "20px",
    padding: "28px 28px",
    color: "#fff",
    width: "100%",
    boxShadow: "0 16px 48px rgba(0,106,78,0.3)",
  },
  infoBox: {
    background: "#fff",
    borderRadius: "14px",
    padding: "20px 24px",
    boxShadow: "0 2px 16px rgba(0,106,78,0.08)",
    fontSize: "13px",
    color: "#555",
    lineHeight: 1.8,
    width: "100%",
    boxSizing: "border-box",
  },
};

const pickupPoints = [
  "Shonir Akhra (Route_7)", "Demra (Route_3)", "Jatrabari (Route_5)",
  "Signboard (Route_7)", "Kanchpur (Route_9)", "Fatullah (Route_2)",
  "Narayanganj (Route_1)", "Mugda (Route_6)",
];

export default function AuthPage({ navigate }) {
  const [tab, setTab] = useState("register");
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({
    name: "", studentId: "", dept: "CSE", email: "", phone: "", pickup: pickupPoints[0], password: "",
  });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleApply = () => {
    if (!form.name || !form.studentId || !form.email || !form.password) {
      setMsg("⚠️ Please fill all required fields.");
      return;
    }
    setMsg("✅ Application submitted! Your status is now Pending. Admin will review soon.");
    setTimeout(() => navigate("status"), 2000);
  };

  const handleLogin = (role) => {
    if (!loginForm.email || !loginForm.password) {
      setMsg("⚠️ Please enter your email and password.");
      return;
    }
    setMsg(`✅ Logged in as ${role}!`);
    setTimeout(() => navigate(role === "Admin" ? "admin" : "dashboard"), 1000);
  };

  return (
    <div style={s.page}>
      <Navbar navigate={navigate} activePage="auth" />
      <style>{`
        .gub-input:focus { border-color: #006A4E !important; background: #fff !important; }
        .btn-green:hover { background: #004d38 !important; }
        .btn-gray:hover { background: #333 !important; }
        .btn-outline:hover { background: #006A4E !important; color: #fff !important; }
      `}</style>
      <div style={s.main}>
        <div style={s.formSection}>
          {tab === "register" ? (
            <div style={s.card}>
              <h2 style={s.title}>Apply for Transport Pass</h2>
              {[
                { label: "Full Name", key: "name", placeholder: "Mamun Shahriar" },
                { label: "Student ID", key: "studentId", placeholder: "ex: 232002001" },
                { label: "Phone Number", key: "phone", placeholder: "017*****122" },
              ].map(f => (
                <div key={f.key} style={s.fieldGroup}>
                  <label style={s.label}>{f.label}</label>
                  <input className="gub-input" style={s.input} placeholder={f.placeholder}
                    value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
                </div>
              ))}
              <div style={s.fieldGroup}>
                <label style={s.label}>Department</label>
                <select style={s.select} value={form.dept} onChange={e => setForm({ ...form, dept: e.target.value })}>
                  {["CSE", "EEE", "BBA", "English", "Law", "Pharmacy"].map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div style={s.fieldGroup}>
                <label style={s.label}>Student Email</label>
                <input className="gub-input" style={s.input} placeholder="ex: 232002001@student.green.ac.bd"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div style={s.fieldGroup}>
                <label style={s.label}>Pickup Point</label>
                <select style={s.select} value={form.pickup} onChange={e => setForm({ ...form, pickup: e.target.value })}>
                  {pickupPoints.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div style={s.fieldGroup}>
                <label style={s.label}>Password</label>
                <div style={{ position: "relative" }}>
                  <input className="gub-input" style={s.input} type={showPw ? "text" : "password"} placeholder="••••••••••••"
                    value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                  <button onClick={() => setShowPw(!showPw)} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}>
                    {showPw ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
              {msg && <div style={{ padding: "10px 14px", borderRadius: "8px", background: msg.includes("✅") ? "#e8f5e9" : "#fff3e0", color: msg.includes("✅") ? "#006A4E" : "#e65100", fontSize: "13px", marginBottom: "12px" }}>{msg}</div>}
              <div style={s.btnRow}>
                <button className="btn-green" style={{ ...s.btnGreen, flex: 1, marginTop: 0 }} onClick={handleApply}>Apply</button>
                <button className="btn-outline" style={s.btnOutline} onClick={() => setTab("login")}>Log In</button>
              </div>
              <p style={{ textAlign: "center", marginTop: "12px", fontSize: "12px", color: "#999" }}>Already have an account?</p>
            </div>
          ) : (
            <div style={s.card}>
              <h2 style={s.title}>Login</h2>
              <div style={s.fieldGroup}>
                <label style={s.label}>Email</label>
                <input className="gub-input" style={s.input} placeholder="example@gub.edu.bd"
                  value={loginForm.email} onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} />
              </div>
              <div style={s.fieldGroup}>
                <label style={s.label}>Password</label>
                <input className="gub-input" style={s.input} type="password" placeholder="Enter your password"
                  value={loginForm.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} />
              </div>
              {msg && <div style={{ padding: "10px 14px", borderRadius: "8px", background: msg.includes("✅") ? "#e8f5e9" : "#fff3e0", color: msg.includes("✅") ? "#006A4E" : "#e65100", fontSize: "13px", marginBottom: "12px" }}>{msg}</div>}
              <button className="btn-green" style={s.btnGreen} onClick={() => handleLogin("Student")}>Login as Student</button>
              <button className="btn-gray" style={s.btnGray} onClick={() => handleLogin("Admin")}>Login as Admin</button>
              <p style={{ textAlign: "center", marginTop: "16px", fontSize: "13px", color: "#777" }}>
                New student? <span style={{ color: "#006A4E", cursor: "pointer", fontWeight: 600 }} onClick={() => setTab("register")}>Apply Here</span>
              </p>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px" }}>
            <button onClick={() => { setTab("register"); setMsg(""); }} style={{ ...s.tab, ...(tab === "register" ? s.tabActive : {}), border: "1.5px solid #e0e0e0", borderRadius: "8px", padding: "8px 20px", background: tab === "register" ? "#e8f5e9" : "#fff" }}>📝 Register</button>
            <button onClick={() => { setTab("login"); setMsg(""); }} style={{ ...s.tab, ...(tab === "login" ? s.tabActive : {}), border: "1.5px solid #e0e0e0", borderRadius: "8px", padding: "8px 20px", background: tab === "login" ? "#e8f5e9" : "#fff" }}>🔑 Login</button>
          </div>
        </div>

        {/* Right side preview */}
        <div style={s.previewSection}>
          <div style={s.passPreview}>
            <div style={{ fontSize: "10px", opacity: 0.7, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Transport Pass</div>
            <div style={{ fontSize: "24px", fontWeight: 900, fontFamily: "'Syne', sans-serif" }}>TRANSPORT<br />PASS</div>
            <div style={{ fontSize: "28px", fontWeight: 900, marginTop: "12px", letterSpacing: "2px" }}>ROUTE | 07</div>
            <div style={{ fontSize: "13px", marginTop: "6px", opacity: 0.85 }}>Shonir Akhra to GUB</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "14px", fontSize: "11px", opacity: 0.7 }}>
              <span>Summer 2025</span>
              <span>CARD NO: 114</span>
            </div>
          </div>
          <div style={s.infoBox}>
            <strong style={{ color: "#006A4E" }}>📋 How to Apply</strong><br />
            1. Fill in your student details<br />
            2. Select your pickup point<br />
            3. Submit your application<br />
            4. Admin reviews within 24hrs<br />
            5. Download your digital pass<br /><br />
            <strong style={{ color: "#FF9F1C" }}>⚠️ Requirements</strong><br />
            • Valid student ID<br />
            • @student.green.ac.bd email<br />
            • Semester fee cleared
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
