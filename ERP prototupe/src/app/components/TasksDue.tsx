import { GlassCard } from '@/app/components/GlassCard';
import { CheckCircle2, Circle } from 'lucide-react';

const tasks = [
  { id: 1, title: 'Database Assignment - Chapter 5', dueDate: 'Jan 30', completed: false },
  { id: 2, title: 'Data Structures Lab Report', dueDate: 'Feb 2', completed: false },
  { id: 3, title: 'Web Dev Project Submission', dueDate: 'Feb 5', completed: true },
  { id: 4, title: 'Software Engineering Case Study', dueDate: 'Feb 8', completed: false },
];

export function TasksDue() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Assignments / Tasks Due</h3>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 bg-gradient-to-br from-white/60 via-white/40 to-white/30 backdrop-blur-xl rounded-xl p-3 border border-white/50 hover:from-white/70 hover:via-white/50 hover:to-white/40 transition-all cursor-pointer shadow-lg shadow-[#472e94]/10"
          >
            {task.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-slate-400 flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className={`text-sm font-medium ${task.completed ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                {task.title}
              </p>
              <p className="text-xs text-slate-600">Due: {task.dueDate}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
