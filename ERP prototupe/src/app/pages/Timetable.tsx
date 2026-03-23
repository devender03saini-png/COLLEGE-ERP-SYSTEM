import { GlassCard } from '@/app/components/GlassCard';
import { useState } from 'react';
import { Calendar, Clock, MapPin, User, BookOpen, Sun, Moon } from 'lucide-react';

// Timetable data extracted from the HTML
const timetableData = [
  {
    day: 'Monday',
    classes: [
      {
        time: '8:15–11:15',
        subject: 'CDUP421 – FSD Lab',
        type: 'Lab',
        room: 'Computer Lab 17 (2nd Floor)',
        faculty: 'Sumit Kumar'
      },
      {
        time: '12:00–1:00',
        subject: 'MAUL402 – DMLA',
        type: 'Lecture',
        room: '304',
        faculty: 'Surbhi Sharma'
      }
    ]
  },
  {
    day: 'Tuesday',
    classes: [
      {
        time: '8:15–9:15',
        subject: 'CDUL405 – CAM',
        type: 'Lecture',
        room: '302',
        faculty: 'Shanu Tripathi'
      },
      {
        time: '9:15–10:15',
        subject: 'CDUL401 – DBMS',
        type: 'Lecture',
        room: '302',
        faculty: 'Jyoti Singh'
      },
      {
        time: '10:15–11:15',
        subject: 'CDUL404 – Operating System',
        type: 'Lecture',
        room: '302',
        faculty: 'Anjana Sangwan'
      },
      {
        time: '12:00–3:00',
        subject: 'CDUP423 – R Programming Lab',
        type: 'Lab',
        room: 'Computer Lab 1 (3rd Floor)',
        faculty: 'Swati'
      }
    ]
  },
  {
    day: 'Wednesday',
    classes: [
      {
        time: '8:15–9:15',
        subject: 'CDUL403 – Computer Networks',
        type: 'Lecture',
        room: '405',
        faculty: 'Sarla Jangir'
      },
      {
        time: '9:15–10:15',
        subject: 'CDUL404 – Operating System',
        type: 'Lecture',
        room: '405',
        faculty: 'Anjana Sangwan'
      },
      {
        time: '10:15–11:15',
        subject: 'CDUL402 – FSD',
        type: 'Lecture',
        room: '405',
        faculty: 'Sumit Kumar'
      },
      {
        time: '12:00–1:00',
        subject: 'HSUL401 – MEFA',
        type: 'Lecture',
        room: '405',
        faculty: 'Madhukar Kumar'
      },
      {
        time: '1:00–2:00',
        subject: 'CDUL401 – DBMS',
        type: 'Lecture',
        room: '405',
        faculty: 'Jyoti Singh'
      }
    ]
  },
  {
    day: 'Thursday',
    classes: [
      {
        time: '8:15–11:15',
        subject: 'CDUP422 – Microprocessor Lab',
        type: 'Lab',
        room: 'ECL-08 (Basement)',
        faculty: 'Shanu Tripathi'
      },
      {
        time: '12:00–1:00',
        subject: 'NU99.5 – Soft Skills Training',
        type: 'Lab',
        room: 'APJ Kalam Seminar Hall',
        faculty: 'Raunak Goswami'
      },
      {
        time: '1:00–2:00',
        subject: 'CDUL402 – FSD',
        type: 'Lecture',
        room: '403',
        faculty: 'Sumit Kumar'
      },
      {
        time: '2:00–3:00',
        subject: 'CDUL403 – Computer Networks',
        type: 'Lecture',
        room: '403',
        faculty: 'Sarla Jangir'
      }
    ]
  },
  {
    day: 'Friday',
    classes: [
      {
        time: '8:15–9:15',
        subject: 'CDUL403 – Computer Networks',
        type: 'Lecture',
        room: '305',
        faculty: 'Sarla Jangir'
      },
      {
        time: '9:15–10:15',
        subject: 'MAUL402 – DMLA',
        type: 'Lecture',
        room: '305',
        faculty: 'Surbhi Sharma'
      },
      {
        time: '10:15–11:15',
        subject: 'CDUL405 – CAM',
        type: 'Lecture',
        room: '305',
        faculty: 'Shanu Tripathi'
      },
      {
        time: '12:00–1:00',
        subject: 'CDUL404 – Operating System',
        type: 'Lecture',
        room: '305',
        faculty: 'Anjana Sangwan'
      }
    ]
  },
  {
    day: 'Saturday',
    classes: [
      {
        time: '8:15–9:15',
        subject: 'CDUL401 – DBMS',
        type: 'Lecture',
        room: '302',
        faculty: 'Jyoti Singh'
      },
      {
        time: '9:15–10:15',
        subject: 'MAUL402 – DMLA',
        type: 'Lecture',
        room: '302',
        faculty: 'Surbhi Sharma'
      },
      {
        time: '10:15–11:15',
        subject: 'NU99.5 – Soft Skills Training',
        type: 'Lab',
        room: 'APJ Kalam Seminar Hall',
        faculty: 'Raunak Goswami'
      },
      {
        time: '12:00–3:00',
        subject: 'CDUP420 – DBMS Lab',
        type: 'Lab',
        room: 'Computer Lab 7 (First Floor)',
        faculty: 'Jyoti Singh'
      }
    ]
  }
];

export function Timetable() {
  const [selectedDay, setSelectedDay] = useState('all');

  const filteredTimetable = selectedDay === 'all'
    ? timetableData
    : timetableData.filter(day => day.day === selectedDay);

  const getTypeColor = (type: string) => {
    return type === 'Lab'
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-green-100 text-green-800 border-green-200';
  };

  return (
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Weekly Timetable</h1>
          <p className="text-slate-600">Semester 6 - Computer Science</p>
        </div>
      </div>

      {/* Day Filter */}
      <GlassCard className="p-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedDay('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              selectedDay === 'all'
                ? 'bg-[#b28722] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Days
          </button>
          {timetableData.map(day => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                selectedDay === day.day
                  ? 'bg-[#b28722] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Timetable */}
      <div className="space-y-6">
        {filteredTimetable.map(day => (
          <GlassCard key={day.day} className="p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#b28722]" />
              {day.day}
            </h3>

            <div className="space-y-4">
              {day.classes.map((cls, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="bg-[#b28722] text-white p-2 rounded-lg">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{cls.time}</div>
                      <div className="text-sm text-slate-600">{cls.subject}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className={`px-3 py-1 rounded-full border ${getTypeColor(cls.type)}`}>
                      {cls.type}
                    </div>

                    <div className="flex items-center gap-1 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>{cls.room}</span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-600">
                      <User className="w-4 h-4" />
                      <span>{cls.faculty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {day.classes.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>No classes scheduled for this day</p>
              </div>
            )}
          </GlassCard>
        ))}
      </div>

      {filteredTimetable.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600">No timetable data found for the selected day.</p>
        </div>
      )}
    </main>
  );
}