import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const s = {
  page: { background: "#f0faf5", minHeight: "100vh", display: "flex", flexDirection: "column" },
  layout: { display: "flex", flex: 1 },
  sidebar: {
    width: "220px",
    background: "#1a2744",
    minHeight: "calc(100vh - 120px)",
    padding: "24px 0",
    flexShrink: 0,
  },
  sideItem: {
    padding: "14px 24px",
    color: "rgba(255,255,255,0.7)",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
    borderLeft: "3px solid transparent",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  sideActive: {
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    borderLeft: "3px solid #006A4E",
  },
  main: { flex: 1, padding: "32px 36px", background: "#f0faf5" },
  pageTitle: { fontSize: "26px", fontWeight: 800, color: "#fff", marginBottom: "28px", fontFamily: "'Syne', sans-serif" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "28px" },
  statCard: { background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 16px rgba(0,106,78,0.08)", position: "relative", overflow: "hidden" },
  statLabel: { fontSize: "13px", fontWeight: 600, color: "#888", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" },
  statValue: { fontSize: "36px", fontWeight: 900, color: "#006A4E", fontFamily: "'Syne', sans-serif" },
  statIcon: { position: "absolute", right: "20px", top: "20px", fontSize: "32px", opacity: 0.18 },
  tableCard: { background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 16px rgba(0,106,78,0.08)" },
  tableTitle: { fontSize: "17px", fontWeight: 700, color: "#333", marginBottom: "16px" },
  searchBar: {
    width: "100%",
    padding: "11px 16px",
    borderRadius: "10px",
    border: "1.5px solid #e0e0e0",
    fontSize: "14px",
    outline: "none",
    marginBottom: "16px",
    background: "#fafafa",
    boxSizing: "border-box",
  },
  table: { width: "100%", borderCollapse: "collapse" },
  th: { padding: "12px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "2px solid #f0f0f0" },
  td: { padding: "14px 16px", fontSize: "14px", color: "#333", borderBottom: "1px solid #f5f5f5" },
  badge: (color) => ({
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: 600,
    background: color === "green" ? "#e8f5e9" : color === "orange" ? "#fff3e0" : "#fce4ec",
    color: color === "green" ? "#006A4E" : color === "orange" ? "#e65100" : "#c62828",
  }),
  viewBtn: {
    padding: "6px 16px",
    background: "#006A4E",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  sideTitle: { padding: "12px 24px 8px", fontSize: "11px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "1.5px", marginTop: "8px" },
};

const sideItems = [
  { icon: "📊", label: "Dashboard", key: "dashboard" },
  { icon: "👨‍🎓", label: "Student", key: "students" },
  { icon: "🎟️", label: "Pass Management", key: "passes" },
  { icon: "📋", label: "Pass Request", key: "requests" },
  { icon: "🗺️", label: "Route Management", key: "routes" },
  { icon: "📅", label: "Schedule Management", key: "schedule" },
  { icon: "💳", label: "Payment Management", key: "payment" },
];

const students = [
  { name: "Md. Mamun Shahriar", id: "232002008", dept: "CSE", status: "Approved", route: "Route 7" },
  { name: "Sanjida Salam Joyonti", id: "232002215", dept: "CSE", status: "Approved", route: "Route 3" },
  { name: "Md. Rakin Afsar", id: "202002052", dept: "EEE", status: "Pending", route: "Route 5" },
  { name: "Farhan Ahmed", id: "231003021", dept: "BBA", status: "Approved", route: "Route 7" },
  { name: "Nusrat Jahan", id: "232004011", dept: "English", status: "Rejected", route: "Route 9" },
  { name: "Tanvir Hossain", id: "222001055", dept: "CSE", status: "Pending", route: "Route 2" },
];

export default function AdminDashboard({ navigate }) {
  const [activeKey, setActiveKey] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [studentList, setStudentList] = useState(students);

  const filtered = studentList.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.id.includes(search) ||
    s.dept.toLowerCase().includes(search.toLowerCase())
  );

  const handleApprove = (id) => {
    setStudentList(prev => prev.map(s => s.id === id ? { ...s, status: "Approved" } : s));
  };

  return (
    <div style={s.page}>
      <Navbar navigate={navigate} activePage="admin" />
      <style>{`
        .side-item:hover { background: rgba(255,255,255,0.06) !important; color: #fff !important; }
        .view-btn:hover { background: #004d38 !important; }
      `}</style>
      <div style={s.layout}>
        {/* Sidebar */}
        <div style={s.sidebar}>
          <div style={{ padding: "16px 24px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "8px" }}>
            <div style={{ fontSize: "16px", fontWeight: 800, color: "#fff", fontFamily: "'Syne', sans-serif" }}>GUB Transport Pass</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>Admin Panel</div>
          </div>
          {sideItems.map(item => (
            <div key={item.key}
              className="side-item"
              style={{ ...s.sideItem, ...(activeKey === item.key ? s.sideActive : {}) }}
              onClick={() => setActiveKey(item.key)}>
              <span>{item.icon}</span> {item.label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div style={s.main}>
          {/* Header strip */}
          <div style={{ background: "#1a2744", borderRadius: "14px", padding: "20px 28px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={s.pageTitle}>GUB Transport Pass</div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 16px", color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>
                👤 Admin • Transport Office
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={s.statsGrid}>
            {[
              { label: "Total Students", value: "5000+", icon: "👨‍🎓", color: "#006A4E" },
              { label: "Active Passes", value: "3194", icon: "✅", color: "#006A4E" },
              { label: "Pending Requests", value: "63", icon: "⏳", color: "#e65100" },
              { label: "Complain Box", value: "02", icon: "📮", color: "#c62828" },
              { label: "Active Buses", value: "72", icon: "🚌", color: "#006A4E" },
            ].map(s => (
              <div key={s.label} style={s.statCard}>
                <div style={s.statLabel}>{s.label}</div>
                <div style={{ ...s.statValue, color: s.color }}>{s.value}</div>
                <div style={{ ...s.statIcon }}>{s.icon}</div>
                <div style={{ height: "3px", background: s.color, borderRadius: "2px", marginTop: "12px", opacity: 0.3 }} />
              </div>
            ))}
          </div>

          {/* Student Table */}
          <div style={s.tableCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={s.tableTitle}>Student Management</div>
              <div style={{ fontSize: "13px", color: "#888" }}>Total: {filtered.length} records</div>
            </div>
            <input
              className="gub-input"
              style={s.searchBar}
              placeholder="🔍  Search by ID / Name / Dept..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Student Name</th>
                  <th style={s.th}>ID / Dept</th>
                  <th style={s.th}>Route</th>
                  <th style={s.th}>Status</th>
                  <th style={s.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((st) => (
                  <tr key={st.id} style={{ transition: "background 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#f9fffe"}
                    onMouseLeave={e => e.currentTarget.style.background = ""}>
                    <td style={s.td}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>👤</div>
                        <span style={{ fontWeight: 600 }}>{st.name}</span>
                      </div>
                    </td>
                    <td style={s.td}><span style={{ fontFamily: "monospace", background: "#f5f5f5", padding: "2px 8px", borderRadius: "4px" }}>{st.id}</span><br /><span style={{ color: "#888", fontSize: "12px" }}>{st.dept}</span></td>
                    <td style={s.td}><span style={{ color: "#006A4E", fontWeight: 500 }}>{st.route}</span></td>
                    <td style={s.td}>
                      <span style={s.badge(st.status === "Approved" ? "green" : st.status === "Pending" ? "orange" : "red")}>
                        {st.status === "Approved" ? "✅" : st.status === "Pending" ? "⏳" : "❌"} {st.status}
                      </span>
                    </td>
                    <td style={s.td}>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button className="view-btn" style={s.viewBtn}>View</button>
                        {st.status === "Pending" && (
                          <button onClick={() => handleApprove(st.id)} style={{ ...s.viewBtn, background: "#FF9F1C" }}>Approve</button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "32px", color: "#bbb", fontSize: "15px" }}>
                No students found matching "{search}"
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
