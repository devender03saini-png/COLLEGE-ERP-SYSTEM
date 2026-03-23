import { GlassCard } from '@/app/components/GlassCard';
import { Clock } from 'lucide-react';

const classes = [
  { id: 1, subject: 'Data Structures', time: '9:00 AM - 10:30 AM', venue: 'Room 301', teacher: 'Dr. Smith' },
  { id: 2, subject: 'Database Systems', time: '11:00 AM - 12:30 PM', venue: 'Room 205', teacher: 'Prof. Johnson' },
  { id: 3, subject: 'Web Development', time: '2:00 PM - 3:30 PM', venue: 'Lab 102', teacher: 'Dr. Williams' },
  { id: 4, subject: 'Software Engineering', time: '4:00 PM - 5:30 PM', venue: 'Room 401', teacher: 'Prof. Brown' },
];

export function ClassesToday() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Today Timetable (Class, Venue, Teacher)</h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-slate-500 border-b border-white/40">
              <th className="py-3 pr-4">Time</th>
              <th className="py-3 pr-4">Class</th>
              <th className="py-3 pr-4">Venue</th>
              <th className="py-3">Teacher</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem.id} className="border-b border-white/30 last:border-b-0">
                <td className="py-3 pr-4">
                  <div className="inline-flex items-center gap-2 text-sm text-slate-700">
                    <Clock className="w-4 h-4" />
                    {classItem.time}
                  </div>
                </td>
                <td className="py-3 pr-4 text-sm font-semibold text-slate-800">{classItem.subject}</td>
                <td className="py-3 pr-4 text-sm text-slate-700">{classItem.venue}</td>
                <td className="py-3 text-sm text-slate-700">{classItem.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
