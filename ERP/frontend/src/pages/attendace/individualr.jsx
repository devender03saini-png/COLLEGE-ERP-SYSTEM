// lucide-react provides the icons shown inside each attendance event card.
import { CalendarDays, Clock3, UserRound } from "lucide-react";

// Individualr renders per-class attendance entries.
function Individualr() {
  // Demo records used for the individual attendance history.
  const records = [
    { id: 1, subject: "Maths", teacher: "Mr. Sharma", date: "2026-03-20", time: "10:00 AM", status: "Present" },
    { id: 2, subject: "Physics", teacher: "Ms. Verma", date: "2026-03-21", time: "12:00 PM", status: "Absent" },
    { id: 3, subject: "Chemistry", teacher: "Ms. Yadav", date: "2026-03-23", time: "09:15 AM", status: "Present" },
  ];

  // Returns the detailed attendance history card grid.
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#8b6a2b]">Attendance History</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-800">Individual class records</h2>
        <p className="mt-2 text-sm text-slate-600">Each card captures one attendance event with subject, date, time, and teacher details.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {records.map((rec) => {
          const statusStyle =
            rec.status === "Present"
              ? "bg-[#f2e4c2] text-[#8b6a2b]"
              : "bg-[#f8efe0] text-[#8e5b2e]";

          return (
            <div
              key={rec.id}
              className="rounded-[24px] border border-[#eadcc0] bg-[#fffaf3] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{rec.subject}</h3>
                  <p className="mt-1 text-sm text-slate-500">Attendance event #{rec.id}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle}`}>{rec.status}</span>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <UserRound className="h-4 w-4 text-[#9d7530]" />
                  <span>{rec.teacher}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 text-[#9d7530]" />
                  <span>{rec.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 text-[#9d7530]" />
                  <span>{rec.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Exports the individual attendance history page.
export default Individualr;
