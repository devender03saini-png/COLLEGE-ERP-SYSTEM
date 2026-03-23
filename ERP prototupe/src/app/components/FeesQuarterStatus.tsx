import { GlassCard } from '@/app/components/GlassCard';
import { CheckCircle2, Clock3 } from 'lucide-react';

const quarterFees = [
  { id: 1, quarter: 'Quarter 1', amount: '?18,000', status: 'Submitted', paidOn: 'Jul 12, 2025' },
  { id: 2, quarter: 'Quarter 2', amount: '?18,000', status: 'Submitted', paidOn: 'Oct 15, 2025' },
  { id: 3, quarter: 'Quarter 3', amount: '?18,000', status: 'Pending', paidOn: 'Due Mar 10, 2026' },
  { id: 4, quarter: 'Quarter 4', amount: '?18,000', status: 'Pending', paidOn: 'Due Jun 10, 2026' },
];

export function FeesQuarterStatus() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Fee Status by Quarter</h3>

      <div className="space-y-3">
        {quarterFees.map((fee) => {
          const submitted = fee.status === 'Submitted';
          return (
            <div
              key={fee.id}
              className="bg-gradient-to-br from-white/60 via-white/40 to-white/30 backdrop-blur-xl rounded-xl p-3 border border-white/50 shadow-lg shadow-[#472e94]/10"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{fee.quarter}</p>
                  <p className="text-xs text-slate-600">{fee.amount}</p>
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full ${
                    submitted ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {fee.status}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                {submitted ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Clock3 className="w-4 h-4 text-amber-600" />}
                <span>{fee.paidOn}</span>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}

