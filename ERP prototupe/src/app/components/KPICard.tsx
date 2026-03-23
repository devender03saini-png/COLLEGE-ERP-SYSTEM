import { LucideIcon } from 'lucide-react';
import { GlassCard } from '@/app/components/GlassCard';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export function KPICard({ title, value, icon: Icon, trend, trendUp }: KPICardProps) {
  return (
    <GlassCard className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-slate-600 text-sm mb-2">{title}</p>
          <p className="text-3xl font-semibold text-slate-800 mb-1">{value}</p>
          {trend && (
            <p className={`text-sm ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
              {trend}
            </p>
          )}
        </div>
        <div className="bg-gradient-to-br from-[#b28722] to-[#472e94] p-3 rounded-2xl">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </GlassCard>
  );
}

