import { Link, useLocation } from "react-router-dom";

function Toogle_bar() {
    
  const location = useLocation();

  return (
    <div className="flex bg-gray-200 rounded-xl p-1 w-fit">

      <Link
        to="/student/attendance/individual"
        className={`px-4 py-2 rounded-lg 
          ${location.pathname.includes("/student/attendance/report")
            ? "bg-red-500"
            : "bg-yellow-500"}
        `}
      >
        Report
      </Link>

      <Link
        to="/student/attendance/report"
        className={`px-4 py-2 rounded-lg 
          ${location.pathname.includes("/student/attendance/individual")
            ? "bg-blue-400"
            : "bg-green-500"}
        `}
      >
        Individual
      </Link>

    </div>
  );
}

export default Toogle_bar;