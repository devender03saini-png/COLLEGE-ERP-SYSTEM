import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  BookOpen,
  FileText,
  DollarSign,
  BarChart3,
  Calendar,
  X,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { id: 1, name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { id: 2, name: 'Students', icon: Users, path: '/students' },
  { id: 3, name: 'Attendance', icon: ClipboardCheck, path: '/attendance' },
  { id: 4, name: 'Classes', icon: BookOpen, path: '/classes' },
  { id: 5, name: 'Timetable', icon: Calendar, path: '/timetable' },
  { id: 6, name: 'Exams', icon: FileText, path: '/exams' },
  { id: 7, name: 'Fees', icon: DollarSign, path: '/fees' },
  { id: 8, name: 'Reports', icon: BarChart3, path: '/reports' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className={`
      fixed lg:sticky top-0 left-0 z-50
      w-64 h-screen 
      bg-gradient-to-b from-white/25 via-white/15 to-white/20
      backdrop-blur-3xl 
      border-r border-white/30
      shadow-2xl shadow-[#472e94]/15
      p-4 flex flex-col
      transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="mb-8">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b28722] to-[#472e94] flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-slate-800">EduERP</h2>
              <p className="text-xs text-slate-600">Education Portal</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-xl hover:bg-white/50 transition-colors"
          >
            <X className="w-5 h-5 text-slate-700" />
          </button>
        </div>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={onClose}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-[#b28722] to-[#472e94] text-white shadow-lg'
                  : 'text-slate-700 hover:bg-white/50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
