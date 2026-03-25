import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";


import Notifications from "./components/notification_bar.jsx";
import Navbar from "./components/navbar.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Attendance from "./pages/attendance.jsx"
import Laundary from "./pages/laundary.jsx"
import Timetable from "./pages/timetable.jsx"

function App() {
  const [FirstDIv, setFirstDiv] = useState(<Notifications />);

  return (

    <div className="p-6">

      {/*notification and dropdown aligned*/}
      <div className="notification flex gap-4 items-start">

        {/* Notifications */}
        <div className={"w-4/5 bg-gray-100 rounded-xl shadow p-4 "}>
          {FirstDIv}
        </div>

        {/* Dropdown Menu */}
        <div className="w-1/5 relative bg-gray-200 rounded-xl shadow p-4 flex justify-center items-center">
          <Navbar />
        </div>

      </div>
      <Routes>{/* we can't put routes in navbar.jsx since routes will render the route and its wrong if it renders in navbar */}
        <Route path="/" element={<Dashboard setFirstDiv={setFirstDiv} />} />
        <Route path="/a" element={<Timetable />} />
        <Route path="/laundary" element={<Laundary />} />
        <Route path="/attendance" element={<Attendance setFirstDiv={setFirstDiv} />} />
      </Routes>

    </div>
  );
}

export default App;