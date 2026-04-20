// GlassCard gives each class card the translucent visual treatment.
import { GlassCard } from '@/app/components/GlassCard';
// React state tracks the active search input and subject filter.
import { useState } from 'react';
// lucide-react icons are used for search, filter, and card visuals.
import { Calendar, BookOpen, Users, Clock, Plus, Search, Filter } from 'lucide-react';

// Mock class records used to preview the design without backend data.
const classesData = [
  {
    id: 'CLS001',
    name: 'Mathematics - Class X-A',
    subject: 'Mathematics',
    teacher: 'Mr. Sharma',
    students: 35,
    schedule: 'Mon, Wed, Fri - 9:00 AM',
    room: 'Room 101',
    status: 'active'
  },
  {
    id: 'CLS002',
    name: 'Physics - Class X-A',
    subject: 'Physics',
    teacher: 'Ms. Patel',
    students: 32,
    schedule: 'Tue, Thu - 10:30 AM',
    room: 'Lab 201',
    status: 'active'
  },
  {
    id: 'CLS003',
    name: 'Chemistry - Class X-B',
    subject: 'Chemistry',
    teacher: 'Dr. Kumar',
    students: 28,
    schedule: 'Mon, Wed - 11:00 AM',
    room: 'Lab 202',
    status: 'active'
  },
  {
    id: 'CLS004',
    name: 'English - Class IX-A',
    subject: 'English',
    teacher: 'Mrs. Singh',
    students: 40,
    schedule: 'Tue, Thu, Sat - 8:00 AM',
    room: 'Room 105',
    status: 'active'
  },
];

export function Classes() {
  // Stores the text typed into the search field.
  const [searchTerm, setSearchTerm] = useState('');
  // Stores the subject selected in the dropdown filter.
  const [selectedSubject, setSelectedSubject] = useState('all');

  // Builds the subject filter list from unique subject names.
  const subjects = ['all', ...Array.from(new Set(classesData.map(cls => cls.subject)))];

  // Narrows the visible cards to classes matching the search and selected subject.
  const filteredClasses = classesData.filter(cls => {
    const matchesSearch = cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cls.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || cls.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    // Main content container for the classes page.
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Classes Management</h1>
          <p className="text-slate-600">Manage all class schedules and assignments</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#b28722] to-[#472e94] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300">
          <Plus className="w-4 h-4" />
          Add New Class
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search classes or teachers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#472e94]/20 focus:border-[#472e94]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#472e94]/20 focus:border-[#472e94]"
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subject === 'all' ? 'All Subjects' : subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((cls) => (
          <GlassCard key={cls.id} className="p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-br from-[#b28722] to-[#472e94] p-3 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                cls.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {cls.status}
              </span>
            </div>

            <h3 className="font-semibold text-slate-800 mb-2">{cls.name}</h3>
            <p className="text-slate-600 text-sm mb-3">{cls.subject}</p>

            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{cls.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{cls.schedule}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500">Teacher: {cls.teacher}</p>
              <p className="text-sm text-slate-500">Room: {cls.room}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600">No classes found matching your criteria.</p>
        </div>
      )}
    </main>
  );
}
