import { GlassCard } from '@/app/components/GlassCard';
import { useState } from 'react';
import { Search, UserPlus, Filter, Mail, Phone, MapPin, Calendar, BookOpen, Award } from 'lucide-react';

// Mock student data
const studentsData = [
  {
    id: 'STU001',
    name: 'Chander Kant',
    email: 'chander.kant@example.com',
    phone: '+91 98765 43210',
    class: 'Class X-A',
    rollNo: '15',
    attendance: 92,
    grade: 'A+',
    address: 'New Delhi',
    enrollDate: '2023-04-15',
    photo: null
  },
  {
    id: 'STU002',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43211',
    class: 'Class X-A',
    rollNo: '22',
    attendance: 88,
    grade: 'A',
    address: 'Mumbai',
    enrollDate: '2023-04-15',
    photo: null
  },
  {
    id: 'STU003',
    name: 'Rahul Verma',
    email: 'rahul.verma@example.com',
    phone: '+91 98765 43212',
    class: 'Class X-B',
    rollNo: '08',
    attendance: 95,
    grade: 'A+',
    address: 'Bangalore',
    enrollDate: '2023-04-16',
    photo: null
  },
  {
    id: 'STU004',
    name: 'Ananya Singh',
    email: 'ananya.singh@example.com',
    phone: '+91 98765 43213',
    class: 'Class IX-A',
    rollNo: '12',
    attendance: 90,
    grade: 'A',
    address: 'Kolkata',
    enrollDate: '2023-04-16',
    photo: null
  },
  {
    id: 'STU005',
    name: 'Arjun Patel',
    email: 'arjun.patel@example.com',
    phone: '+91 98765 43214',
    class: 'Class X-A',
    rollNo: '05',
    attendance: 85,
    grade: 'B+',
    address: 'Ahmedabad',
    enrollDate: '2023-04-17',
    photo: null
  },
  {
    id: 'STU006',
    name: 'Neha Reddy',
    email: 'neha.reddy@example.com',
    phone: '+91 98765 43215',
    class: 'Class IX-B',
    rollNo: '18',
    attendance: 93,
    grade: 'A+',
    address: 'Hyderabad',
    enrollDate: '2023-04-17',
    photo: null
  }
];

export function Students() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState<typeof studentsData[0] | null>(null);

  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const classes = ['all', ...Array.from(new Set(studentsData.map(s => s.class)))];

  return (
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-800 mb-2">Students</h1>
        <p className="text-slate-600">Manage and view all student records</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Students List */}
        <div className="lg:col-span-2">
          <GlassCard className="p-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#472e94]/50 text-slate-700 placeholder:text-slate-400"
                />
              </div>
              
              <div className="flex gap-2">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="pl-10 pr-8 py-2.5 rounded-xl bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#472e94]/50 text-slate-700 appearance-none cursor-pointer"
                  >
                    {classes.map(cls => (
                      <option key={cls} value={cls}>
                        {cls === 'all' ? 'All Classes' : cls}
                      </option>
                    ))}
                  </select>
                </div>
                
                <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#b28722] to-[#472e94] text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  <span className="hidden sm:inline">Add Student</span>
                </button>
              </div>
            </div>

            {/* Students Table */}
            <div className="space-y-3">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedStudent?.id === student.id
                      ? 'bg-gradient-to-r from-[#b28722]/20 to-[#472e94]/20 border border-[#472e94]/50'
                      : 'bg-white/30 border border-white/20 hover:bg-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b28722] to-[#472e94] flex items-center justify-center text-white font-semibold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{student.name}</h3>
                        <p className="text-sm text-slate-600">{student.id} • Roll No: {student.rollNo}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-800">{student.class}</p>
                      <p className="text-sm text-slate-600">Grade: {student.grade}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-slate-600">Attendance: {student.attendance}%</span>
                    <div className="w-32 h-2 bg-white/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#b28722] to-[#472e94] rounded-full transition-all duration-300"
                        style={{ width: `${student.attendance}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {filteredStudents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500">No students found</p>
                </div>
              )}
            </div>
          </GlassCard>
        </div>

        {/* Student Details */}
        <div className="lg:col-span-1">
          <GlassCard className="p-6">
            {selectedStudent ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#b28722] to-[#472e94] flex items-center justify-center text-white text-3xl font-semibold mx-auto mb-4">
                    {selectedStudent.name.charAt(0)}
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-800">{selectedStudent.name}</h2>
                  <p className="text-slate-600">{selectedStudent.id}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Mail className="w-5 h-5 text-[#7d5a00]" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="font-medium">{selectedStudent.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="w-5 h-5 text-[#7d5a00]" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-500">Phone</p>
                      <p className="font-medium">{selectedStudent.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <BookOpen className="w-5 h-5 text-[#7d5a00]" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-500">Class & Roll No</p>
                      <p className="font-medium">{selectedStudent.class} • Roll {selectedStudent.rollNo}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="w-5 h-5 text-[#7d5a00]" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-500">Address</p>
                      <p className="font-medium">{selectedStudent.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <Calendar className="w-5 h-5 text-[#7d5a00]" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-500">Enrollment Date</p>
                      <p className="font-medium">{new Date(selectedStudent.enrollDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <Award className="w-5 h-5 text-[#7d5a00]" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-500">Current Grade</p>
                      <p className="font-medium">{selectedStudent.grade}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Overall Attendance</span>
                    <span className="font-semibold text-slate-800">{selectedStudent.attendance}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#b28722] to-[#472e94] rounded-full transition-all duration-300"
                      style={{ width: `${selectedStudent.attendance}%` }}
                    />
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#b28722] to-[#472e94] text-white font-medium hover:shadow-lg transition-all duration-300">
                  View Full Profile
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#b28722]/20 to-[#472e94]/20 flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-[#7d5a00]" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">No Student Selected</h3>
                <p className="text-sm text-slate-600">Select a student to view details</p>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </main>
  );
}

