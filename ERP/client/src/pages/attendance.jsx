import { useEffect } from "react";


import Toogle_bar from "../components/atteandance_tooglebar"

function Attendance({ setFirstDiv }) {

    useEffect(() => {
        setFirstDiv(<Toogle_bar />);
    }, []);

    return (
        <>
            <div className="relative w-full h-64 bg-gray-200 m-20">

                {/* Small top-right div */}
                <div className="absolute top-4 right-4 w-[10%] h-[10%] bg-blue-500 rounded-lg">
                </div>

            </div>
        </>


    )
}

export default Attendance