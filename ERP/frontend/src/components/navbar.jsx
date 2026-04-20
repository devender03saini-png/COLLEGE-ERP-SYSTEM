import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Shirt,
  ClipboardCheck,
  LogOut,
  ChevronDown,
  GraduationCap,
  ShieldCheck,
  UserCircle2,
  Settings2,
} from "lucide-react";

function Navbar({ user }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { path: "/student", name: "Dashboard", icon: LayoutDashboard },
    { path: "/student/timetable", name: "Timetable", icon: CalendarDays },
    { path: "/student/laundary", name: "Laundry", icon: Shirt },
    { path: "/student/attendance", name: "Attendance", icon: ClipboardCheck },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* 🔹 PROFILE BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="erp-glass flex w-full items-center justify-between rounded-[30px] p-5 text-left transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#f0d37f] to-[#b99249] text-slate-900 shadow-lg">
            <UserCircle2 className="h-8 w-8" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b6a2b]">
              Student Space
            </p>

            {/* ✅ Username limit */}
            <h2 className="mt-1 text-xl font-semibold text-[#24201b]">
              {user?.name
                ? user.name.length > 6
                  ? user.name.slice(0, 6) + ".."
                  : user.name
                : "Demo Student"}
            </h2>

            <p className="text-sm text-[#62584b]">
              {user?.email || "student@example.com"}
            </p>
          </div>
        </div>

        <div className="erp-card flex h-11 w-11 items-center justify-center rounded-2xl text-[#54483b]">
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* 🔥 NEW: Semester + Status Panel (outside dropdown) */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {/* Semester */}
        <div className="erp-card rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2 text-[#54483b]">
            <GraduationCap className="h-4 w-4 text-[#9d7530]" />
            <span className="text-sm font-medium">Semester</span>
          </div>
          <p className="mt-1 text-sm font-semibold text-[#24201b]">
            {user?.semester || "6th"}
          </p>
        </div>

        {/* Status */}
        <div className="erp-card rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2 text-[#54483b]">
            <ShieldCheck className="h-4 w-4 text-[#9d7530]" />
            <span className="text-sm font-medium">Status</span>
          </div>
          <p className="mt-1 text-sm font-semibold text-green-600">
            {user?.status || "Active"}
          </p>
        </div>
      </div>

      {/* 🔽 DROPDOWN */}
      {isOpen && (
        <div className="erp-glass absolute right-0 z-50 mt-3 w-full rounded-[30px] p-4 shadow-2xl">
          {/* Header */}
          <div className="erp-highlight mb-4 rounded-[24px] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#8b6a2b]">
                  Profile Menu
                </p>
                <p className="mt-1 text-base font-semibold text-[#24201b]">
                  Navigate your workspace
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-[#6a5231]">
                <Settings2 className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Routes */}
          <nav className="space-y-3">
            {routes.map((route) => {
              const Icon = route.icon;

              const isActive =
                route.path === "/student"
                  ? location.pathname === "/student"
                  : location.pathname.startsWith(route.path);

              return (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={handleMenuClose}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "erp-button"
                      : "erp-card text-[#54483b] hover:bg-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{route.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="erp-card mt-4 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-[#54483b] hover:bg-white"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;