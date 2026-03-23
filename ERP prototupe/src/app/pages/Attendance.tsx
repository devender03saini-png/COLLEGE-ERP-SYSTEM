import { GlassCard } from '@/app/components/GlassCard';
import { useState } from 'react';
import { Calendar, Check, X, Users, Clock, ChevronLeft, ChevronRight, Download } from 'lucide-react';

// Mock attendance data
const studentsForAttendance = [
  { id: 'STU001', name: 'Chander Kant', rollNo: '15', class: 'Class X-A', status: 'present' as const },
  { id: 'STU002', name: 'Priya Sharma', rollNo: '22', class: 'Class X-A', status: 'present' as const },
  { id: 'STU003', name: 'Rahul Verma', rollNo: '08', class: 'Class X-B', status: 'absent' as const },
  { id: 'STU004', name: 'Ananya Singh', rollNo: '12', class: 'Class IX-A', status: 'present' as const },
  { id: 'STU005', name: 'Arjun Patel', rollNo: '05', class: 'Class X-A', status: 'late' as const },
  { id: 'STU006', name: 'Neha Reddy', rollNo: '18', class: 'Class IX-B', status: 'present' as const },
];

const attendanceStats = [
  { month: 'Jan', percentage: 88 },
  { month: 'Feb', percentage: 92 },
  { month: 'Mar', percentage: 87 },
  { month: 'Apr', percentage: 90 },
  { month: 'May', percentage: 91 },
  { month: 'Jun', percentage: 89 },
];

export function Attendance() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceList, setAttendanceList] = useState(studentsForAttendance);
  const [selectedClass, setSelectedClass] = useState('all');

  const classes = ['all', ...Array.from(new Set(studentsForAttendance.map(s => s.class)))];

  const filteredStudents = attendanceList.filter(
    student => selectedClass === 'all' || student.class === selectedClass
  );

  const toggleAttendance = (id: string) => {
    setAttendanceList(prev => prev.map(student => {
      if (student.id === id) {
        const statuses: Array<'present' | 'absent' | 'late'> = ['present', 'absent', 'late'];
        const currentIndex = statuses.indexOf(student.status);
        const nextIndex = (currentIndex + 1) % statuses.length;
        return { ...student, status: statuses[nextIndex] };
      }
      return student;
    }));
  };

  const presentCount = filteredStudents.filter(s => s.status === 'present').length;
  const absentCount = filteredStudents.filter(s => s.status === 'absent').length;
  const lateCount = filteredStudents.filter(s => s.status === 'late').length;
  const totalCount = filteredStudents.length;
  const attendancePercentage = totalCount > 0 ? Math.round((presentCount / totalCount) * 100) : 0;

  return (
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-800 mb-2">Attendance</h1>
        <p className="text-slate-600">Mark and track student attendance</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Students</p>
              <p className="text-3xl font-semibold text-slate-800">{totalCount}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#b28722]/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#7d5a00]" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Present</p>
              <p className="text-3xl font-semibold text-green-600">{presentCount}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Absent</p>
              <p className="text-3xl font-semibold text-red-600">{absentCount}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
              <X className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Attendance Rate</p>
              <p className="text-3xl font-semibold text-[#472e94]">{attendancePercentage}%</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#472e94]/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Marking */}
        <div className="lg:col-span-2">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-1">Mark Attendance</h2>
                <p className="text-sm text-slate-600">{selectedDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="px-4 py-2 rounded-xl bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#472e94]/50 text-slate-700"
                >
                  {classes.map(cls => (
                    <option key={cls} value={cls}>
                      {cls === 'all' ? 'All Classes' : cls}
                    </option>
                  ))}
                </select>
                
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#b28722] to-[#472e94] text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="p-4 rounded-2xl bg-white/30 border border-white/20 hover:bg-white/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b28722] to-[#472e94] flex items-center justify-center text-white font-semibold text-sm">
                        {student.rollNo}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800">{student.name}</h3>
                        <p className="text-sm text-slate-600">{student.id} • {student.class}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                          student.status === 'present'
                            ? 'bg-green-500 text-white shadow-lg'
                            : 'bg-white/50 text-slate-600 hover:bg-white/70'
                        }`}
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                          student.status === 'late'
                            ? 'bg-yellow-500 text-white shadow-lg'
                            : 'bg-white/50 text-slate-600 hover:bg-white/70'
                        }`}
                      >
                        <Clock className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                          student.status === 'absent'
                            ? 'bg-red-500 text-white shadow-lg'
                            : 'bg-white/50 text-slate-600 hover:bg-white/70'
                        }`}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#b28722] to-[#472e94] text-white font-medium hover:shadow-lg transition-all duration-300">
                Save Attendance
              </button>
            </div>
          </GlassCard>
        </div>

        {/* Calendar & Statistics */}
        <div className="lg:col-span-1 space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Calendar</h2>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <button className="p-2 rounded-xl hover:bg-white/50 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <h3 className="font-semibold text-slate-800">
                  {selectedDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                </h3>
                <button className="p-2 rounded-xl hover:bg-white/50 transition-colors">
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-center text-xs font-semibold text-slate-600 py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 2;
                  const isToday = day === selectedDate.getDate();
                  return (
                    <button
                      key={i}
                      className={`aspect-square rounded-xl text-sm transition-all duration-300 ${
                        day < 1 || day > 30
                          ? 'text-slate-400'
                          : isToday
                          ? 'bg-gradient-to-br from-[#b28722] to-[#472e94] text-white shadow-lg'
                          : 'bg-white/30 hover:bg-white/50 text-slate-700'
                      }`}
                    >
                      {day > 0 && day <= 30 ? day : ''}
                    </button>
                  );
                })}
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Monthly Trends</h2>
            
            <div className="space-y-4">
              {attendanceStats.map((stat) => (
                <div key={stat.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">{stat.month}</span>
                    <span className="text-sm font-semibold text-slate-800">{stat.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#b28722] to-[#472e94] rounded-full transition-all duration-300"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}

