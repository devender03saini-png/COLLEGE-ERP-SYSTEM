// lucide-react provides icons used in the laundry status cards.
import { Shirt, TimerReset, Truck } from "lucide-react";

// Laundary renders a small student services page with the upgraded visual system.
function Laundary() {
    // Demo status cards for the laundry page.
    const items = [
        { title: "Current Load", value: "12 items", note: "Expected delivery tomorrow", icon: Shirt },
        { title: "Last Pickup", value: "Friday", note: "Collected from hostel block B", icon: Truck },
        { title: "Turnaround", value: "36 hrs", note: "Average washing and folding time", icon: TimerReset },
    ];

    // Returns the upgraded laundry information panel.
    return (
        <div className="space-y-6">
            <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8b6a2b]">Student Service</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-800">Laundry tracker</h2>
                <p className="mt-2 text-sm text-slate-600">This screen reuses the same Tailwind glass-card style as the other student pages.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {items.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.title} className="rounded-[28px] border border-[#eadcc0] bg-[#fffaf3] p-6">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e1c78f] to-[#b99249] text-slate-900">
                                <Icon className="h-6 w-6" />
                            </div>
                            <p className="mt-5 text-sm text-slate-600">{item.title}</p>
                            <p className="mt-2 text-3xl font-semibold text-slate-800">{item.value}</p>
                            <p className="mt-2 text-sm text-slate-500">{item.note}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// Exports the laundry page component.
export default Laundary;
