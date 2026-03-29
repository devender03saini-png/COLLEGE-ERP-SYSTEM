import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import Toogle_bar from "../components/atteandance_tooglebar"
import Reportr from "./attendace/reportr";
import Individualr from "./attendace/individualr";

function Attendance({ setFirstDiv }) {


    useEffect(() => {
        setFirstDiv(<Toogle_bar />);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Reportr/>} />
            <Route path="report" element={<Reportr/>} />
            <Route path="individual" element={<Individualr/>} />
        </Routes>
    );
}

export default Attendance