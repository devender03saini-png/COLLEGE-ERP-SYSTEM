// useEffect updates the shared summary region whenever the attendance page loads.
import { useEffect } from "react";
// Nested routing is used to switch between attendance report and individual views.
import { Routes, Route } from "react-router-dom";
// Shared attendance toggle component and nested page modules.
import Toogle_bar from "../components/atteandance_tooglebar";
import Reportr from "./attendace/reportr";
import Individualr from "./attendace/individualr";

// Attendance is the parent route for all attendance-related student pages.
function Attendance({ setFirstDiv }) {
    // When the route loads, it replaces the shared summary block with the attendance toggle bar.
    useEffect(() => {
        setFirstDiv(<Toogle_bar />);
    }, [setFirstDiv]);

    // Returns the nested attendance routes.
    return (
        <Routes>
            <Route index element={<Reportr />} />
            <Route path="report" element={<Reportr />} />
            <Route path="individual" element={<Individualr />} />
        </Routes>
    );
}

// Exports the attendance route wrapper.
export default Attendance;
