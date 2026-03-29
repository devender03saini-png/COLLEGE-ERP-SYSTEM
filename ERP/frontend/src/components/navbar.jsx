import { Link } from "react-router-dom";

function Navbar() {
    const routess = [
        {
            path: "/student",
            name: "Dashboard",
        },
        {
            path: "/student/a",
            name: "Timetable",
        },
        {
            path: "/student/laundary",
            name: "Laundary",
        },
        {
            path: "/student/attendance",
            name: "Attendance",
        },
    ];

    return (
        <div className="relative w-48 group">

            {/* Button */}
            <button className="w-full bg-blue-500 text-white py-2 rounded">
                Hover Me
            </button>
            <nav className="absolute left-0 top-100 w-full bg-white border rounded shadow-md hidden group-hover:block z-50">
                {
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