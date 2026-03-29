import { useState } from "react";

function Reportr() {

    const [selectedCard, setSelectedCard] = useState(null);

    const subjects = [
        {
            id: 1,
            name: "Maths",
            percentage: 82,
            teacher: "Mr. Sharma",
            total: 22,
            attended: 18,
            leave: 2
        },
        {
            id: 2,
            name: "Physics",
            percentage: 70,
            teacher: "Ms. Verma",
            total: 20,
            attended: 14,
            leave: 3
        },
        {
            id: 3,
            name: "Chemistry",
            percentage: 90,
            teacher: "Ms. Yadav",
            total: 24,
            attended: 14,
            leave: 10
        }
    ];

    return (
        <>
            <div className="relative w-full h-64 bg-gray-200 m-20">

                {/* Small top-right div */}
                <div className="absolute top-4 right-4 w-[10%] h-[10%] bg-blue-500 rounded-lg">
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {subjects.map((sub) => (
                    <div
                        key={sub.id}
                        onClick={() => setSelectedCard(sub)}
                        className="bg-white p-4 rounded-xl shadow cursor-pointer hover:scale-105 transition"
                    >
                        <h2 className="text-lg font-semibold">{sub.name}</h2>
                        <p className="mt-2 font-bold">{sub.percentage}%</p>
                    </div>
                ))}
            </div>

            {selectedCard && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    /* creates a centered, full-screen modal backdrop (overlay)
                    fixed inset-0: Fixes the div to the viewport, spanning top, right, bottom, and left at 0, covering the entire screen.
                    bg-black bg-opacity-40: Sets a black background with opacity, creating a dimming effect.
                    flex items-center justify-center: Enables Flexbox, aligns child elements to the center vertically (items-center), and centers them horizontally (justify-center) */

                    onClick={() => setSelectedCard(null)} //this line for close expanded div, by writing this we click any where on screen div closes but for not closing it when we click inside the the we write the line e.stopPropagation below
                >
                    {/* Card */}
                    <div
                        className="bg-white p-6 rounded-xl w-96 shadow-lg"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        <h2 className="text-xl font-bold">{selectedCard.name}</h2>
                        <p className="mt-2">Attendance: {selectedCard.percentage}%</p>
                        <p>Teacher: {selectedCard.teacher}</p>
                        <p>Total Classes: {selectedCard.total}</p>
                        <p>Attended: {selectedCard.attended}</p>
                        <p>Leave: {selectedCard.leave}</p>
                    </div>

                </div>
            )}
        </>
    )
}
export default Reportr