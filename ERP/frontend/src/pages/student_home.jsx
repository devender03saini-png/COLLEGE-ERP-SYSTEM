// useState is used to swap the top summary panel based on the active nested route.
import { useState } from "react";
// Routes and Route from react-router-dom render the nested student pages.
import { Routes, Route } from "react-router-dom";
// Shared summary components and page modules used inside the student layout.
import Notifications from "../components/notification_bar.jsx";
import Navbar from "../components/navbar.jsx";
import Dashboard from "./dashboard.jsx";
import Attendance from "./attendance.jsx";
import Laundary from "./laundary.jsx";
import Timetable from "./timetable.jsx";
// Student_Home is the main shell for all student-facing nested routes.
function Student_Home() {
    // This state stores whichever summary component should appear at the top of the page.
    const [firstDiv, setFirstDiv] = useState(<Notifications />);
    // This reads the locally stored user so the header can show a name even in bypass mode.
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    // Returns the upgraded student dashboard shell inspired by the prototype design.
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="erp-orb left-[-6rem] top-[-4rem] h-72 w-72 bg-[#ead7ae]"></div>
            <div className="erp-orb right-[-4rem] top-10 h-80 w-80 bg-[#d8bb7b]/60"></div>
            <div className="erp-orb bottom-[-7rem] left-1/3 h-80 w-80 bg-[#f0e3c5]"></div>

            <div className="relative z-10 p-4 md:p-6">
                <div className="erp-glass rounded-[38px] p-4 md:p-6">
                    <div className="mb-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                        <div>{firstDiv}</div>

                        <Navbar user={user} />
                    </div>

                    <div className="rounded-[34px] border border-[#ede0c1] bg-[#f7f1e5]/90 p-4 md:p-6">
                        <Routes>
                            <Route index element={<Dashboard setFirstDiv={setFirstDiv} />} />
                            <Route path="attendance/*" element={<Attendance setFirstDiv={setFirstDiv} />} />
                            <Route path="timetable" element={<Timetable setFirstDiv={setFirstDiv} />} />
                            <Route path="laundary" element={<Laundary />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exports the student layout component.
export default Student_Home;
