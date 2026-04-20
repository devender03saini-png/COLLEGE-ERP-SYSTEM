// useState is used to manage which subject card is currently expanded.
import { useState } from "react";
// lucide-react provides the icons used in metric cards and modal details.
import { BookOpen, CircleCheckBig, CircleX, Clock3 } from "lucide-react";

// Reportr renders the high-level attendance dashboard.
function Reportr() {
    // This state stores the subject currently selected for the detail modal.
    const [selectedCard, setSelectedCard] = useState(null);

    // Demo data for subject-level attendance.
    const subjects = [
        { id: 1, name: "Maths", percentage: 82, teacher: "Mr. Sharma", total: 22, attended: 18, leave: 2, status: "Safe" },
        { id: 2, name: "Physics", percentage: 70, teacher: "Ms. Verma", total: 20, attended: 14, leave: 3, status: "Watchlist" },
        { id: 3, name: "Chemistry", percentage: 90, teacher: "Ms. Yadav", total: 24, attended: 14, leave: 10, status: "Excellent" },
    ];

    // Summary metrics shown at the top of the page.
    const stats = [
        { label: "Overall Attendance", value: "81%", icon: CircleCheckBig, color: "from-[#e1c78f] to-[#b99249]" },
        { label: "Classes Missed", value: "05", icon: CircleX, color: "from-[#d8b16a] to-[#9d7530]" },
        { label: "Late Arrivals", value: "02", icon: Clock3, color: "from-[#f2e4c2] to-[#d7bf7e]" },
    ];

    // Returns the upgraded attendance report UI.
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8b6a2b]">Attendance Report</p>
                    <h2 className="mt-2 text-3xl font-semibold text-slate-800">Subject-wise performance</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Tailwind CSS drives the layout and color system here, and lucide-react is used for the summary icons.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="rounded-[24px] border border-[#eadcc0] bg-[#fffaf3] p-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">{stat.label}</p>
                                    <p className="mt-3 text-3xl font-semibold text-slate-800">{stat.value}</p>
                                </div>
                                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-[28px] border border-[#eadcc0] bg-[#fffaf3] p-6">
                    <h3 className="text-xl font-semibold text-slate-800">Subject cards</h3>
                    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {subjects.map((sub) => (
                            <button
                                key={sub.id}
                                type="button"
                                onClick={() => setSelectedCard(sub)}
                                className="rounded-[24px] border border-[#eadcc0] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e1c78f] to-[#b99249] text-slate-900">
                                        <BookOpen className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-full bg-[#f2e4c2] px-3 py-1 text-xs font-medium text-[#8b6a2b]">{sub.status}</span>
                                </div>
                                <h4 className="mt-5 text-lg font-semibold text-slate-800">{sub.name}</h4>
                                <p className="mt-2 text-sm text-slate-500">{sub.teacher}</p>
                                <div className="mt-4">
                                    <div className="flex items-center justify-between text-sm text-slate-600">
                                        <span>Attendance</span>
                                        <span className="font-semibold text-slate-800">{sub.percentage}%</span>
                                    </div>
                                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                                        <div className="h-full rounded-full bg-gradient-to-r from-[#e1c78f] to-[#b99249]" style={{ width: `${sub.percentage}%` }}></div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="rounded-[28px] border border-[#eadcc0] bg-[#fffaf3] p-6">
                    <h3 className="text-xl font-semibold text-slate-800">Insights</h3>
                    <div className="mt-5 space-y-4">
                        <div className="rounded-2xl bg-gradient-to-br from-[#f3e5c5] to-[#ede0be] p-4">
                            <p className="text-sm text-slate-600">Best standing</p>
                            <p className="mt-2 text-xl font-semibold text-slate-800">Chemistry at 90%</p>
                            <p className="mt-1 text-sm text-slate-600">Keep this buffer for finals and practical weeks.</p>
                        </div>
                        <div className="rounded-2xl bg-white/60 p-4">
                            <p className="text-sm text-slate-600">Needs attention</p>
                            <p className="mt-2 text-xl font-semibold text-slate-800">Physics at 70%</p>
                            <p className="mt-1 text-sm text-slate-600">Attend the next 3 sessions to stay comfortably above threshold.</p>
                        </div>
                    </div>
                </div>
            </div>

            {selectedCard && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedCard(null)}
                >
                    <div
                        className="w-full max-w-lg rounded-[30px] border border-white/30 bg-white p-6 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h3 className="text-2xl font-semibold text-slate-800">{selectedCard.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">{selectedCard.teacher}</p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-sm text-slate-500">Attendance</p>
                                <p className="mt-2 text-2xl font-semibold text-slate-800">{selectedCard.percentage}%</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-sm text-slate-500">Total classes</p>
                                <p className="mt-2 text-2xl font-semibold text-slate-800">{selectedCard.total}</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-sm text-slate-500">Attended</p>
                                <p className="mt-2 text-2xl font-semibold text-[#9d7530]">{selectedCard.attended}</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-sm text-slate-500">Leaves</p>
                                <p className="mt-2 text-2xl font-semibold text-[#9d7530]">{selectedCard.leave}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Exports the attendance report page.
export default Reportr;
