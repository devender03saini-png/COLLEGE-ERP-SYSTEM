import { GlassCard } from '@/app/components/GlassCard';
import { Calendar, Clock } from 'lucide-react';

const exams = [
  { id: 1, subject: 'Data Structures', date: 'Feb 15, 2026', time: '10:00 AM', duration: '3 hours' },
  { id: 2, subject: 'Database Systems', date: 'Feb 18, 2026', time: '2:00 PM', duration: '3 hours' },
  { id: 3, subject: 'Web Development', date: 'Feb 22, 2026', time: '10:00 AM', duration: '2 hours' },
];

export function UpcomingExams() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Upcoming Exams</h3>
      
      <div className="space-y-4">
        {exams.map((exam, index) => (
          <div key={exam.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b28722] to-[#472e94] flex items-center justify-center text-white font-semibold">
                {index + 1}
              </div>
              {index < exams.length - 1 && (
                <div className="w-0.5 h-12 bg-gradient-to-b from-[#b28722] to-[#472e94] my-2"></div>
              )}
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-white/60 via-white/40 to-white/30 backdrop-blur-xl rounded-2xl p-4 border border-white/50 hover:from-white/70 hover:via-white/50 hover:to-white/40 transition-all shadow-lg shadow-[#472e94]/10">
              <h4 className="font-semibold text-slate-800 mb-2">{exam.subject}</h4>
              
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                <Calendar className="w-4 h-4" />
                <span>{exam.date}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4" />
                <span>{exam.time} • {exam.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
