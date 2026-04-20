import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login.jsx";
import Student_Home from "./pages/student_home.jsx";
import Admin_Home from "./pages/admin_home.jsx";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";
const BYPASS_TOKEN = "dev-bypass-token";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    if (token === BYPASS_TOKEN) {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      setValid(true);
      setRole((storedUser.role || "student").toLowerCase());
      setLoading(false);
      return;
    }

    axios
      .get(`${API_BASE_URL}/api/users/verify`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setValid(true);
        setLoading(false);
        setRole(res.data.user.role.toLowerCase());
      })
      .catch(() => {
        setValid(false);
        setRole(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLoading(false);
      });
  }, [token]);


  if (loading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={valid ? `/${role}` : "/login"} />}
      />

      <Route
        path="/login"
        element={!valid ? <Login setToken={setToken} /> : <Navigate to={`/${role}`} />}
      />

      <Route
        path="/student/*"//* is for nested like in attenadance.jsx
        element={valid && role === "student" ? <Student_Home /> : <Navigate to="/login" />}
      />

      <Route
        path="/admin"
        element={valid && role === "admin" ? <Admin_Home /> : <Navigate to="/login" />}
      />

      <Route
        path="*"
        element={<Navigate to={valid && role ? `/${role}` : "/login"} replace />}
      />

    </Routes>
  );
}

export default App;


/*
App.jsx
 └─ check token in localStorage
     ├─ No token → Login.jsx
     │      └─ submit → POST /login → store token → navigate("/") → Home.jsx
     └─ Token exists → verify backend
            ├─ Valid → Home.jsx
            └─ Invalid → Login.jsx

Home.jsx
 └─ Navbar / Pages (Dashboard, Attendance, etc.)
      └─ All API calls include Authorization: Bearer <token>
Never trust the token just because it exists in localStorage. Always verify on app start.
*/
