// lucide-react provides decorative icons for the notification summary card.
import { BellRing, Sparkles, TrendingUp, CalendarRange } from "lucide-react";

// Notifications renders a styled summary card for dashboard updates.
function Notifications() {
    // This demo list powers the visible notification rows.
    const notifications = [
        "Internal assessment submissions close this Friday.",
        "FSD lab moved to Room 302 for tomorrow's session.",
        "Quarterly fee reminder has been generated for pending students.",
    ];

    // These quick stats make the summary area feel more like a real dashboard header.
    const quickStats = [
        { label: "Interviews", value: "15%", icon: TrendingUp },
        { label: "Attendance", value: "89%", icon: BellRing },
        { label: "This Week", value: "4 Classes", icon: CalendarRange },
    ];

    // Returns the upgraded prototype-inspired notification panel.
    return (
        <div className="erp-glass rounded-[28px] p-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8b6a2b]">Overview</p>
                    <h2 className="mt-2 text-3xl font-semibold text-[#24201b]">Welcome in, Student</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#62584b]">
                        This header uses Tailwind CSS utilities for spacing and layout, while lucide-react supplies the icons for the summary blocks and updates list.
                    </p>
                </div>

                <div className="flex items-center gap-3 self-start rounded-full bg-white/70 p-2 shadow-sm">
                    <button type="button" className="erp-button rounded-full px-5 py-3 text-sm font-medium">
                        Dashboard
                    </button>
                    <button type="button" className="erp-pill rounded-full px-5 py-3 text-sm font-medium">
                        Student Feed
                    </button>
                </div>
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="erp-highlight rounded-[26px] p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.28em] text-[#94712d]">Performance Pulse</p>
                            <h3 className="mt-2 text-2xl font-semibold text-[#24201b]">Your semester is on track</h3>
                        </div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0d37f] to-[#bd9240] text-[#27231d] shadow-lg">
                            <BellRing className="h-7 w-7" />
                        </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {quickStats.map((item) => {
                            // Each stat item carries a lucide-react icon component, so it is assigned to a local variable before rendering.
                            const Icon = item.icon;

                            return (
                                <div key={item.label} className="rounded-[22px] bg-white/75 px-4 py-4 shadow-sm">
                                    <div className="flex items-center gap-2 text-[#6b604f]">
                                        <Icon className="h-4 w-4 text-[#9d7530]" />
                                        <span className="text-xs uppercase tracking-[0.2em]">{item.label}</span>
                                    </div>
                                    <p className="mt-3 text-2xl font-semibold text-[#24201b]">{item.value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="erp-card rounded-[26px] p-5">
                    <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-[#24201b]">Live notices</h3>
                        <span className="erp-pill rounded-full px-3 py-1 text-xs font-medium">3 updates</span>
                    </div>

                    <div className="mt-4 grid gap-3">
                        {notifications.map((item) => (
                            <div
                                key={item}
                                className="rounded-[20px] border border-[#eadcc0] bg-white/85 px-4 py-4"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#f6e8c2]">
                                        <Sparkles className="h-4 w-4 text-[#9d7530]" />
                                    </div>
                                    <p className="text-sm leading-6 text-[#4f453a]">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exports the notification panel component.
export default Notifications;
