// useEffect updates the shared summary panel when this route becomes active.
import { useEffect } from "react";
// Notifications is reused as the dashboard's top summary component.
import Notifications from "../components/notification_bar";
// lucide-react provides the icons used in the metric cards and quick lists.
import { CalendarDays, CircleDollarSign, ClipboardCheck, GraduationCap, TrendingUp, ArrowUpRight, Clock3 } from "lucide-react";

// Dashboard renders the student overview page.
function Dashboard({ setFirstDiv }) {
    // When the route loads, it places the notifications card into the shared summary region.
    useEffect(() => {
        setFirstDiv(<Notifications />);
    }, [setFirstDiv]);

    // These cards give the student a quick at-a-glance summary.
    const stats = [
        { title: "Attendance", value: "89%", detail: "Up 4% this month", icon: ClipboardCheck },
        { title: "Classes Today", value: "4", detail: "2 labs, 2 lectures", icon: GraduationCap },
        { title: "Fee Status", value: "Pending", detail: "Quarter 2 due soon", icon: CircleDollarSign },
        { title: "Progress", value: "A-", detail: "Strong overall standing", icon: TrendingUp },
    ];

    // These items populate the quick agenda list.
    const agenda = [
        { time: "09:15 AM", title: "DBMS Lecture", place: "Room 302" },
        { time: "11:00 AM", title: "Operating Systems", place: "Room 405" },
        { time: "01:00 PM", title: "FSD Lab Prep", place: "Computer Lab" },
    ];

    // These chips provide the small top filters seen in the upgraded dashboard design.
    const filters = ["This week", "Performance", "Calendar"];

    // Returns the upgraded dashboard content.
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8b6a2b]">Student Dashboard</p>
                    <h2 className="mt-2 text-3xl font-semibold text-[#24201b]">Your academic overview</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#62584b]">
                        This page uses Tailwind CSS for layout and spacing, plus lucide-react for the icons inside the summary cards.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    {filters.map((item, index) => (
                        <span
                            key={item}
                            className={`${index === 0 ? "erp-button" : "erp-pill text-[#54483b]"} rounded-full px-4 py-3 text-sm font-medium`}
                        >
                            {item}
                        </span>
                    ))}

                    <div className="erp-card flex items-center gap-2 rounded-full px-4 py-3 text-sm text-[#54483b]">
                        <CalendarDays className="h-4 w-4 text-[#9d7530]" />
                        <span>Updated for today's schedule</span>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.title} className="erp-card rounded-[28px] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm text-[#62584b]">{item.title}</p>
                                    <p className="mt-3 text-3xl font-semibold text-[#24201b]">{item.value}</p>
                                    <p className="mt-2 text-sm text-[#7a6d5b]">{item.detail}</p>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0d37f] to-[#b99249] text-slate-900">
                                    <Icon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="erp-card rounded-[32px] p-6">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <h3 className="text-xl font-semibold text-[#24201b]">Today's agenda</h3>
                            <p className="mt-1 text-sm text-[#62584b]">Priority sessions and submissions for the day.</p>
                        </div>
                        <button type="button" className="erp-card rounded-full p-3 text-[#54483b]">
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="mt-5 space-y-4">
                        {agenda.map((item) => (
                            <div key={item.time + item.title} className="erp-card flex items-center justify-between rounded-[24px] px-4 py-4">
                                <div>
                                    <p className="text-sm font-medium text-[#8b6a2b]">{item.time}</p>
                                    <h4 className="mt-1 text-lg font-semibold text-[#24201b]">{item.title}</h4>
                                    <p className="text-sm text-[#7a6d5b]">{item.place}</p>
                                </div>
                                <span className="erp-pill rounded-full px-3 py-1 text-xs font-medium text-[#8b6a2b]">On track</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="erp-highlight rounded-[32px] p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm text-[#6b604f]">Focus score</p>
                                <p className="mt-2 text-4xl font-semibold text-[#24201b]">82%</p>
                                <p className="mt-2 text-sm text-[#62584b]">Excellent consistency in theory classes this week.</p>
                            </div>
                            <div className="rounded-full bg-white/80 p-3 text-[#6b5230]">
                                <Clock3 className="h-5 w-5" />
                            </div>
                        </div>
                    </div>

                    <div className="erp-card rounded-[32px] p-6">
                        <h3 className="text-xl font-semibold text-[#24201b]">Highlights</h3>
                        <div className="mt-5 space-y-4">
                            <div className="erp-highlight rounded-[24px] p-4">
                                <p className="text-sm text-[#62584b]">Best subject</p>
                                <p className="mt-2 text-2xl font-semibold text-[#24201b]">Computer Networks</p>
                                <p className="mt-1 text-sm text-[#62584b]">Consistent attendance and strong test scores.</p>
                            </div>
                            <div className="erp-card rounded-[24px] p-4">
                                <p className="text-sm text-[#62584b]">Reminder</p>
                                <p className="mt-2 text-base font-semibold text-[#24201b]">Lab record submission tomorrow</p>
                                <p className="mt-1 text-sm text-[#62584b]">Prepare DBMS and FSD practical notes before 10:00 AM.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exports the dashboard route component.
export default Dashboard;
