// GlassCard provides the shared frosted-card styling.
import { GlassCard } from '@/app/components/GlassCard';
// React state powers the search and status filter controls.
import { useState } from 'react';
// lucide-react icons are used for page actions and exam metadata.
import { FileText, Calendar, Clock, Users, Plus, Search, Filter, Eye } from 'lucide-react';

// Mock exam records used to demonstrate the UI.
const examsData = [
  {
    id: 'EXM001',
    name: 'Mathematics Mid-Term Exam',
    subject: 'Mathematics',
    class: 'Class X-A',
    date: '2024-04-15',
    time: '9:00 AM - 12:00 PM',
    duration: '3 hours',
    totalMarks: 100,
    students: 35,
    status: 'upcoming'
  },
  {
    id: 'EXM002',
    name: 'Physics Practical Exam',
    subject: 'Physics',
    class: 'Class X-A',
    date: '2024-04-18',
    time: '10:00 AM - 1:00 PM',
    duration: '3 hours',
    totalMarks: 50,
    students: 32,
    status: 'upcoming'
  },
  {
    id: 'EXM003',
    name: 'Chemistry Final Exam',
    subject: 'Chemistry',
    class: 'Class X-B',
    date: '2024-03-20',
    time: '8:00 AM - 11:00 AM',
    duration: '3 hours',
    totalMarks: 100,
    students: 28,
    status: 'completed'
  },
  {
    id: 'EXM004',
    name: 'English Literature Test',
    subject: 'English',
    class: 'Class IX-A',
    date: '2024-04-22',
    time: '9:30 AM - 11:30 AM',
    duration: '2 hours',
    totalMarks: 50,
    students: 40,
    status: 'upcoming'
  },
];

export function Exams() {
  // Search text entered by the user.
  const [searchTerm, setSearchTerm] = useState('');
  // Active exam status filter.
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statuses = ['all', 'upcoming', 'ongoing', 'completed'];

  const filteredExams = examsData.filter(exam => {
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || exam.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    // Main page wrapper for the exams route.
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Exams Management</h1>
          <p className="text-slate-600">Schedule and manage all examinations</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#b28722] to-[#472e94] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300">
          <Plus className="w-4 h-4" />
          Schedule New Exam
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search exams, subjects, or classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#472e94]/20 focus:border-[#472e94]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#472e94]/20 focus:border-[#472e94]"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map((exam) => (
          <GlassCard key={exam.id} className="p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-br from-[#b28722] to-[#472e94] p-3 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                {exam.status}
              </span>
            </div>

            <h3 className="font-semibold text-slate-800 mb-2">{exam.name}</h3>
            <p className="text-slate-600 text-sm mb-1">{exam.subject} • {exam.class}</p>

            <div className="space-y-2 text-sm text-slate-600 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{exam.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{exam.time} ({exam.duration})</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{exam.students} students</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-sm text-slate-500">Total Marks: {exam.totalMarks}</span>
              <button className="flex items-center gap-1 text-[#472e94] hover:text-[#b28722] transition-colors">
                <Eye className="w-4 h-4" />
                View Details
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {filteredExams.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600">No exams found matching your criteria.</p>
        </div>
      )}
    </main>
  );
}
