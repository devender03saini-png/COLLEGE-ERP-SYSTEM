// Link and useLocation from react-router-dom are used to navigate between nested attendance views and style the active tab.
import { Link, useLocation } from "react-router-dom";
// lucide-react provides the icons used for the attendance mode switcher.
import { BarChart3, ListChecks, Sparkles } from "lucide-react";

// Toogle_bar renders the attendance page tab switcher.
function Toogle_bar() {
  // useLocation exposes the current route path so the active tab can be highlighted.
  const location = useLocation();
  // This boolean tracks whether the report screen is currently active.
  const isReportActive = location.pathname.includes("/student/attendance/report") || location.pathname === "/student/attendance";
  // This boolean tracks whether the individual screen is currently active.
  const isIndividualActive = location.pathname.includes("/student/attendance/individual");

  // Returns the upgraded attendance tab card.
  return (
    <div className="erp-glass rounded-[26px] p-3">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#8b6a2b]">Attendance</p>
          <p className="mt-1 text-base font-semibold text-[#24201b]">Track your class record</p>
        </div>
        <div className="erp-pill flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5 text-[#9d7530]" />
          <span>Updated live</span>
        </div>
      </div>

      <div className="inline-flex rounded-[22px] bg-white/60 p-2">
        <Link
          to="/student/attendance/report"
          className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
            isReportActive ? "erp-button" : "text-[#54483b] hover:bg-[#fffaf3]"
          }`}
        >
          <BarChart3 className="h-4 w-4" />
          <span>Report</span>
        </Link>

        <Link
          to="/student/attendance/individual"
          className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
            isIndividualActive ? "erp-button" : "text-[#54483b] hover:bg-[#fffaf3]"
          }`}
        >
          <ListChecks className="h-4 w-4" />
          <span>Individual</span>
        </Link>
      </div>
    </div>
  );
}

// Exports the attendance toggle bar for use in the attendance layout.
export default Toogle_bar;
