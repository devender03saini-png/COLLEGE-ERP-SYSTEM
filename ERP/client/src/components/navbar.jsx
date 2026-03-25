import { Link } from "react-router-dom";

function Navbar() {
    //array of pages we extract data from it and fill it in navbar(dynamic approach)
    const routess = [
        {
            path: "/",
            name: "Dashboard",
        },
        {
            path: "/a",
            name: "Timetable",
        },
        {
            path: "/laundary",
            name: "Laundary",
        },
        {
            path: "/attendance",
            name: "Attendance",
        },
    ];

    return (
        <div className="relative w-48 group">

            {/* Button */}
            <button className="w-full bg-blue-500 text-white py-2 rounded">
                Hover Me
            </button>

            {/* Dropdown, we never give margin to button this will create a gap between button and menu that makes cursor never be able to go to menu due to gap */}
            <nav className="absolute left-0 top-100 w-full bg-white border rounded shadow-md hidden group-hover:block z-50">
                {
                    // dynamic navbar through looping .map fn is looping and extracting data from routess array
                    routess.map((route, index) => (
                        <Link
                            key={index}
                            to={route.path}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            {route.name}
                        </Link>
                    ))}
            </nav>
        </div >
    );
}

export default Navbar