import { GlassCard } from '@/app/components/GlassCard';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Present', value: 85 },
  { name: 'Absent', value: 15 },
];

const COLORS = ['#3b82f6', '#e2e8f0'];

export function AttendanceChart() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Attendance</h3>
      
      <div className="relative h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <p className="text-4xl font-semibold text-slate-800">85%</p>
          <p className="text-sm text-slate-600">Overall</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <p className="text-sm text-slate-600">Present</p>
          </div>
          <p className="text-xl font-semibold text-slate-800">85%</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <p className="text-sm text-slate-600">Absent</p>
          </div>
          <p className="text-xl font-semibold text-slate-800">15%</p>
        </div>
      </div>
    </GlassCard>
  );
}

