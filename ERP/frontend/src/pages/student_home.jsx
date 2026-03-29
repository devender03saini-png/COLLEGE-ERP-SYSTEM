import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Notifications from "../components/notification_bar.jsx";
import Navbar from "../components/navbar.jsx";
import Dashboard from "./dashboard.jsx";
import Attendance from "./attendance.jsx"
import Laundary from "./laundary.jsx"
import Timetable from "./timetable.jsx"

function Student_Home() {

    const [FirstDIv, setFirstDiv] = useState(<Notifications />);

    return (

        <div className="p-6">

            <div className="flex gap-4 items-start">

                <div className={"w-4/5 bg-gray-100 rounded-xl shadow p-4 "}>
                    {FirstDIv}
                </div>

                <div className="w-1/5 relative bg-gray-200 rounded-xl shadow p-4 flex justify-center items-center">
                    <Navbar />
                </div>

            </div>

            <Routes>
                <Route path="/" element={<Dashboard setFirstDiv={setFirstDiv} />} />
                <Route path="attendance/*" element={<Attendance setFirstDiv={setFirstDiv} />} />
                <Route path="a" element={<Timetable setFirstDiv={setFirstDiv} />} />
                <Route path="laundary" element={<Laundary />} />
            </Routes>

        </div>
    );
}

export default Student_Home