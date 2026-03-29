import React, { useState, useEffect } from "react";

import Emp from "../components/empty";

function Timetable({ setFirstDiv }) {

    useEffect(() => {
        setFirstDiv(<Emp />);
    }, []);

    const timeSlots = [
        "8-9",
        "9-10",
        "10-11",
        "11-12",
        "BREAK",
        "12-1",
        "1-2",
        "2-3"
    ];

    const timetable = [
        {
            day: "Mon",
            periods: [
                { name: "Maths", room: "A1", start: 0, duration: 2, teacher: "Sharma" },
                { name: "Physics", room: "B1", start: 2, duration: 1, teacher: "Verma" },
                { name: "Chem", room: "C1", start: 5, duration: 3, teacher: "Singh" },
            ]
        },
        {
            day: "Tue",
            periods: [
                { name: "English", room: "A2", start: 0, duration: 1, teacher: "Roy" },
                { name: "Lab", room: "Lab1", start: 1, duration: 3, teacher: "Kumar" },
            ]
        },
        {
            day: "Wed",
            periods: [
                { name: "Maths", room: "A1", start: 0, duration: 2, teacher: "Sharma" },
                { name: "CS", room: "Lab2", start: 5, duration: 3, teacher: "Agarwal" },
            ]
        },
        {
            day: "Thu",
            periods: [
                { name: "Physics", room: "B1", start: 0, duration: 2, teacher: "Verma" },
                { name: "English", room: "A2", start: 2, duration: 1, teacher: "Roy" },
            ]
        },
        {
            day: "Fri",
            periods: [
                { name: "Chem", room: "C1", start: 0, duration: 3, teacher: "Singh" },
                { name: "Maths", room: "A1", start: 5, duration: 2, teacher: "Sharma" },
            ]
        },
        {
            day: "Sat",
            periods: [
                { name: "CS", room: "Lab2", start: 0, duration: 3, teacher: "Agarwal" },
            ]
        }
    ];

    const [selected, setSelected] = useState(null);

    return (
        <div className="mt-6">

            <div className="grid grid-cols-9 gap-2">

                <div></div>

                {timeSlots.map((slot, i) => (
                    <div key={i} className="bg-gray-300 p-2 text-center rounded font-semibold">
                        {slot}
                    </div>
                ))}

                {timetable.map((day, i) => (
                    <React.Fragment key={i}>

                        {/* Day Name */}
                        <div className="bg-gray-200 p-2 font-bold text-center rounded">
                            {day.day}
                        </div>

                        {/* Slots */}
                        {timeSlots.map((_, slotIndex) => {

                            const period = day.periods.find(p => p.start === slotIndex);

                            if (period) {
                                return (
                                    <div
                                        key={slotIndex}
                                        onClick={() => setSelected(period)}
                                        className="bg-blue-500 text-white p-2 rounded cursor-pointer hover:scale-105 transition text-center"
                                        style={{ gridColumn: `span ${period.duration}` }}
                                    >
                                        {period.name}
                                        <br />
                                        {period.room}
                                    </div>
                                );
                            }

                            const isCovered = day.periods.some(
                                p =>
                                    slotIndex > p.start &&
                                    slotIndex < p.start + p.duration
                            );

                            if (isCovered) return null;

                            return (
                                <div key={slotIndex} className="bg-gray-100 p-2 rounded"></div>
                            );
                        })}

                    </React.Fragment>
                ))}

            </div>

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

                        <p className="mt-2">Room: {selected.room}</p>
                        <p>Teacher: {selected.teacher}</p>
                        <p>Duration: {selected.duration} hour(s)</p>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Timetable