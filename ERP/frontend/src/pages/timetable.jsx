// React state and lifecycle support are used for the selected class modal and shared header updates.
import { useEffect, useMemo, useState } from "react";
// Emp is the shared placeholder component used in the summary header area.
import Emp from "../components/empty";
// lucide-react provides icons for the header, cards, and modal details.
import { CalendarDays, Clock3, MapPin, UserRound } from "lucide-react";

// timetableData stores the class schedule extracted from the provided PDF timetable.
const timetableData = [
    {
        day: "Monday",
        classes: [
            { start: "08:15", end: "11:15", title: "CDUP421 - FSD Lab", type: "Lab", room: "Computer Lab 17 (2nd Floor)", faculty: "Sumit Kumar" },
            { start: "12:00", end: "13:00", title: "MAUL402 - DMLA", type: "Lecture", room: "304", faculty: "Surbhi Sharma" },
        ],
    },
    {
        day: "Tuesday",
        classes: [
            { start: "08:15", end: "09:15", title: "CDUL405 - CAM", type: "Lecture", room: "302", faculty: "Shanu Tripathi" },
            { start: "09:15", end: "10:15", title: "CDUL401 - DBMS", type: "Lecture", room: "302", faculty: "Jyoti Singh" },
            { start: "10:15", end: "11:15", title: "CDUL404 - Operating System", type: "Lecture", room: "302", faculty: "Anjana Sangwan" },
            { start: "12:00", end: "15:00", title: "CDUP423 - R-Programming Lab", type: "Lab", room: "Computer Lab 1 (3rd Floor)", faculty: "Swati" },
        ],
    },
    {
        day: "Wednesday",
        classes: [
            { start: "08:15", end: "09:15", title: "CDUL403 - Computer Networks", type: "Lecture", room: "405", faculty: "Sarla Jangir" },
            { start: "09:15", end: "10:15", title: "CDUL404 - Operating System", type: "Lecture", room: "405", faculty: "Anjana Sangwan" },
            { start: "10:15", end: "11:15", title: "CDUL402 - FSD", type: "Lecture", room: "405", faculty: "Sumit Kumar" },
            { start: "12:00", end: "13:00", title: "HSUL401 - MEFA", type: "Lecture", room: "405", faculty: "Madhukar Kumar" },
            { start: "13:00", end: "14:00", title: "CDUL401 - DBMS", type: "Lecture", room: "405", faculty: "Jyoti Singh" },
        ],
    },
    {
        day: "Thursday",
        classes: [
            { start: "08:15", end: "11:15", title: "CDUP422 - Microprocessor Lab", type: "Lab", room: "ECL-08 (Basement)", faculty: "Shanu Tripathi" },
            { start: "12:00", end: "13:00", title: "NU99.5 - Soft Skills Training", type: "Lab", room: "APJ Kalam Seminar Hall (ME 1st Floor)", faculty: "Raunak Goswami" },
            { start: "13:00", end: "14:00", title: "CDUL402 - FSD", type: "Lecture", room: "403", faculty: "Sumit Kumar" },
            { start: "14:00", end: "15:00", title: "CDUL403 - Computer Networks", type: "Lecture", room: "403", faculty: "Sarla Jangir" },
        ],
    },
    {
        day: "Friday",
        classes: [
            { start: "08:15", end: "09:15", title: "CDUL403 - Computer Networks", type: "Lecture", room: "305", faculty: "Sarla Jangir" },
            { start: "09:15", end: "10:15", title: "MAUL402 - DMLA", type: "Lecture", room: "305", faculty: "Surbhi Sharma" },
            { start: "10:15", end: "11:15", title: "CDUL405 - CAM", type: "Lecture", room: "305", faculty: "Shanu Tripathi" },
            { start: "12:00", end: "13:00", title: "CDUL404 - Operating System", type: "Lecture", room: "305", faculty: "Anjana Sangwan" },
        ],
    },
    {
        day: "Saturday",
        classes: [
            { start: "08:15", end: "09:15", title: "CDUL401 - DBMS", type: "Lecture", room: "302", faculty: "Jyoti Singh" },
            { start: "09:15", end: "10:15", title: "MAUL402 - DMLA", type: "Lecture", room: "302", faculty: "Surbhi Sharma" },
            { start: "10:15", end: "11:15", title: "NU99.5 - Soft Skills Training", type: "Lab", room: "APJ Kalam Seminar Hall (ME 1st Floor)", faculty: "Raunak Goswami" },
            { start: "12:00", end: "15:00", title: "CDUP420 - DBMS Lab", type: "Lab", room: "Computer Lab 7 (First Floor)", faculty: "Jyoti Singh" },
        ],
    },
];

// timeSlots defines the horizontal grid headers shown at the top of the timetable.
const timeSlots = [
    { start: "08:15", end: "09:15", label: "8:15 AM - 9:15 AM" },
    { start: "09:15", end: "10:15", label: "9:15 AM - 10:15 AM" },
    { start: "10:15", end: "11:15", label: "10:15 AM - 11:15 AM" },
    { start: "12:00", end: "13:00", label: "12:00 PM - 1:00 PM" },
    { start: "13:00", end: "14:00", label: "1:00 PM - 2:00 PM" },
    { start: "14:00", end: "15:00", label: "2:00 PM - 3:00 PM" },
];

// weekDays maps JavaScript weekday indexes to the timetable row labels.
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// toMinutes converts a HH:MM string into minutes for easier time comparisons.
const toMinutes = (value) => {
    const [hours, minutes] = value.split(":").map(Number);
    return hours * 60 + minutes;
};

// Timetable renders the student's weekly schedule using the extracted PDF data.
function Timetable({ setFirstDiv }) {
    // selected stores whichever class card was clicked so its details can be shown in a modal.
    const [selected, setSelected] = useState(null);
    // now stores the current local time so the active day and class can be highlighted.
    const [now, setNow] = useState(() => new Date());

    // When the page loads, it swaps the shared summary header to the timetable placeholder.
    useEffect(() => {
        setFirstDiv(<Emp />);
    }, [setFirstDiv]);

    // This effect refreshes the current time every minute so active highlighting stays accurate.
    useEffect(() => {
        const timer = window.setInterval(() => setNow(new Date()), 60000);
        return () => window.clearInterval(timer);
    }, []);

    // currentDay resolves the live day label for row highlighting.
    const currentDay = weekDays[now.getDay()];
    // currentMinutes resolves the live time into minutes for schedule comparisons.
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // currentClass determines the class that matches the current day and current time.
    const currentClass = useMemo(() => {
        const activeDay = timetableData.find((day) => day.day === currentDay);
        if (!activeDay) {
            return null;
        }
        return activeDay.classes.find((item) => currentMinutes >= toMinutes(item.start) && currentMinutes < toMinutes(item.end)) || null;
    }, [currentDay, currentMinutes]);

    // typeStyles defines the base color treatment for lecture and lab classes.
    const typeStyles = {
        Lecture: "from-[#f4ead3] to-[#dec08a] text-slate-900 border-[#d4b06a]",
        Lab: "from-[#e3c98f] to-[#b68a3c] text-slate-900 border-[#a6782d]",
    };

    // getCellContent finds the class that starts at a given slot in a given day.
    const getCellContent = (day, slot) => day.classes.find((item) => item.start === slot.start) || null;
    // getSpanCount converts a class duration into the number of horizontal columns it should span.
    const getSpanCount = (item) => Math.max(1, (toMinutes(item.end) - toMinutes(item.start)) / 60);

    // Returns the upgraded weekly timetable layout.
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8b6a2b]">Weekly Timetable</p>
                    <h2 className="mt-2 text-3xl font-semibold text-slate-800">Time across, days down</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        
                    </p>
                </div>
                <div className="rounded-2xl border border-[#eadcc0] bg-[#fffaf3] px-4 py-3 text-sm text-slate-700">
                    {currentClass ? `Current class: ${currentClass.title}` : "No active class right now"}
                </div>
            </div>

            <div className="overflow-x-auto rounded-[28px] border border-[#eadcc0] bg-[#fffaf3] p-4">
                <div className="min-w-[980px]">
                    <div className="grid grid-cols-[180px_repeat(6,minmax(120px,1fr))] gap-3">
                        <div className="rounded-2xl bg-[#f5efe4] p-4 text-center text-sm font-semibold text-slate-600">Day / Time</div>

                        {timeSlots.map((slot) => (
                            <div key={slot.start} className="rounded-2xl bg-white p-4 text-center text-sm font-semibold text-slate-700">
                                {slot.label}
                            </div>
                        ))}

                        {timetableData.map((day) => {
                            const isToday = day.day === currentDay;

                            return (
                                <div key={day.day} className="contents">
                                    <div className={`rounded-2xl border p-4 text-center font-semibold ${isToday ? "border-[#d7bf7e] bg-[#f3e5c5] text-[#8b6a2b]" : "border-[#eadcc0] bg-[#f8f2e6] text-slate-700"}`}>
                                        {day.day}
                                    </div>

                                    {timeSlots.map((slot, slotIndex) => {
                                        const item = getCellContent(day, slot);

                                        if (item) {
                                            const isCurrentClass =
                                                day.day === currentDay &&
                                                currentClass &&
                                                currentClass.title === item.title &&
                                                currentClass.start === item.start;

                                            return (
                                                <button
                                                    key={`${day.day}-${slot.start}`}
                                                    type="button"
                                                    onClick={() => setSelected(item)}
                                                    className={`rounded-2xl border bg-gradient-to-br p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isCurrentClass ? "from-[#ff4049] to-[#000000] text-white border-[#000000]" : typeStyles[item.type] || "from-[#f4ead3] to-[#dec08a] text-slate-900 border-[#d4b06a]"}`}
                                                    style={{ gridColumn: `span ${getSpanCount(item)}` }}
                                                >
                                                    <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${isCurrentClass ? "text-white/80" : "text-slate-700/80"}`}>{item.type}</div>
                                                    <div className="mt-2 text-sm font-semibold">{item.title}</div>
                                                    <div className={`mt-2 text-xs ${isCurrentClass ? "text-white/80" : "text-slate-700"}`}>{item.room}</div>
                                                    <div className={`mt-1 text-xs ${isCurrentClass ? "text-white/70" : "text-slate-600"}`}>{item.faculty}</div>
                                                </button>
                                            );
                                        }

                                        const isCovered = day.classes.some((entry) => toMinutes(slot.start) > toMinutes(entry.start) && toMinutes(slot.start) < toMinutes(entry.end));

                                        if (isCovered) {
                                            return null;
                                        }

                                        return (
                                            <div
                                                key={`${day.day}-${slotIndex}`}
                                                className={`rounded-2xl border border-dashed p-4 ${isToday ? "border-[#eadcc0] bg-[#fdf7ec]" : "border-[#f0e6d3] bg-white"}`}
                                            ></div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="w-full max-w-lg rounded-[30px] border border-[#eadcc0] bg-white p-6 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-[#8b6a2b]">Selected Session</p>
                                <h3 className="mt-2 text-2xl font-semibold text-slate-800">{selected.title}</h3>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e1c78f] to-[#b99249] text-slate-900">
                                <CalendarDays className="h-5 w-5" />
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-slate-700">
                                <MapPin className="h-4 w-4 text-[#9d7530]" />
                                <span>{selected.room}</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-slate-700">
                                <UserRound className="h-4 w-4 text-[#9d7530]" />
                                <span>{selected.faculty}</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-slate-700">
                                <Clock3 className="h-4 w-4 text-[#9d7530]" />
                                <span>{selected.start} - {selected.end}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Exports the timetable route component.
export default Timetable;
