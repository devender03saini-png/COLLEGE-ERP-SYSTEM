import { GlassCard } from '@/app/components/GlassCard';
import { User, Hash, BookOpen, Calendar } from 'lucide-react';

export function StudentIDCard() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Student ID</h3>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#b28722] to-[#472e94] flex items-center justify-center text-white text-2xl font-semibold">
          CK
        </div>
        <div>
          <h4 className="text-xl font-semibold text-slate-800">Chander Kant</h4>
          <p className="text-slate-600 text-sm">Active Student</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#f4e8c4] flex items-center justify-center">
            <Hash className="w-5 h-5 text-[#7d5a00]" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Student ID</p>
            <p className="text-sm font-medium text-slate-800">STU-2024-001</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#e1d4ff] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#472e94]" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Department</p>
            <p className="text-sm font-medium text-slate-800">Computer Science</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Semester</p>
            <p className="text-sm font-medium text-slate-800">6th Semester</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
