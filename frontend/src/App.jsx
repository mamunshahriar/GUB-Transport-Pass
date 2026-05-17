import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import StatusPage from "./pages/StatusPage";

export default function App() {
  const [page, setPage] = useState("landing");
  const [userRole, setUserRole] = useState(null);

  const navigate = (p, role = null) => {
    setPage(p);
    if (role) setUserRole(role);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>
      {page === "landing" && <LandingPage navigate={navigate} />}
      {page === "auth" && <AuthPage navigate={navigate} />}
      {page === "dashboard" && <StudentDashboard navigate={navigate} />}
      {page === "admin" && <AdminDashboard navigate={navigate} />}
      {page === "status" && <StatusPage navigate={navigate} />}
    </div>
  );
}
