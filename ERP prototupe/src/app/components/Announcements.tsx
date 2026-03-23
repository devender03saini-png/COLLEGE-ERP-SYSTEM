import { GlassCard } from '@/app/components/GlassCard';
import { Bell, Calendar } from 'lucide-react';

const announcements = [
  { id: 1, title: 'Mid-term Exam Schedule Released', date: 'Jan 28, 2026', priority: 'high' },
  { id: 2, title: 'Library Hours Extended During Exams', date: 'Jan 27, 2026', priority: 'medium' },
  { id: 3, title: 'Guest Lecture on AI & Machine Learning', date: 'Jan 26, 2026', priority: 'low' },
  { id: 4, title: 'Sports Day Registration Open', date: 'Jan 25, 2026', priority: 'low' },
  { id: 5, title: 'Fee Payment Deadline Extended', date: 'Jan 24, 2026', priority: 'high' },
];

export function Announcements() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Announcements</h3>
        <Bell className="w-5 h-5 text-slate-600" />
      </div>
      
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-gradient-to-br from-white/60 via-white/40 to-white/30 backdrop-blur-xl rounded-2xl p-4 border border-white/50 hover:from-white/70 hover:via-white/50 hover:to-white/40 transition-all cursor-pointer shadow-lg shadow-[#472e94]/10"
          >
            <div className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                announcement.priority === 'high' ? 'bg-red-500' :
                announcement.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
              }`}></div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 mb-1">{announcement.title}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Calendar className="w-3 h-3" />
                  <span>{announcement.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
