import React, { useState, useEffect } from "react";
import axios from "axios";
import Emp from "../components/empty";

function Timetable({ setFirstDiv }) {

    const [data, setData] = useState(null);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setFirstDiv(<Emp />);
        fetchTimetable();
    }, []);

    //FETCH DATA FROM BACKEND
    const fetchTimetable = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get("http://localhost:3000/api/timetable", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setData(res.data);
            setLoading(false);

        } catch (err) {
            console.log("This is timetable.jsx catch part")
            console.error("Error fetching timetable:", err);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="p-4">Loading timetable...</div>;
    }

    //Safety check
    if (!data) {
        return <div className="p-4">No timetable found</div>;
    }

    const { timeSlots, timetable } = data;//destructing

    const typeColors = {
        lecture: "bg-blue-500",
        lab: "bg-green-500",
        remedial: "bg-yellow-500",
        makeup: "bg-red-500"
    };

    return (
        <div className="p-4">

            {/* GRID */}
            <div className="grid grid-cols-7 gap-2">

                <div></div>{/* empty div */}

                {timeSlots.map((slot, i) => (
                    <div key={i} className="bg-gray-300 p-2 text-center rounded font-semibold">
                        {slot}
                    </div>
                ))}

                {timetable.map((day, i) => (
                    <React.Fragment key={i}>{/* used to group multiple elements together without introducing an extra wrapper <div></div> */}

                        <div className="bg-gray-200 p-2 font-bold text-center rounded">
                            {day.day}
                        </div>

                        {timeSlots.map((_, slotIndex) => {
                            const period = day.periods.find(p => p.start === slotIndex);

                            if (period) {
                                return (
                                    <div
                                        key={slotIndex}
                                        onClick={() => setSelected(period)}
                                        className={`text-white p-2 rounded cursor-pointer text-center hover:scale-105 transition ${typeColors[period.type] || "bg-gray-500"}`}
                                        style={{ gridColumn: `span ${period.duration}` }}
                                    >
                                        <div className="font-semibold">{period.name}</div>
                                        <div className="text-sm">{period.venue}</div>
                                    </div>
                                );
                            }

                            const isCovered = day.periods.some(
                                p => slotIndex > p.start && slotIndex < p.start + p.duration
                            );

                            if (isCovered) return null;

                            return <div key={slotIndex} className="bg-gray-100 p-2 rounded"></div>;
                        })}
                    </React.Fragment>
                ))}
            </div>

            {/* EXPANDED MODAL */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="bg-white p-6 rounded-xl w-96 shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold">{selected.name}</h2>

                        <p className="mt-2">Venue: {selected.venue}</p>
                        <p>Teacher: {selected.teacher}</p>
                        <p>Type: {selected.type}</p>
                        <p>
                            Time: {timeSlots[selected.start]} -{" "}
                            {timeSlots[selected.start + selected.duration - 1]}
                        </p>

                        <button
                            onClick={() => setSelected(null)}
                            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Timetable;