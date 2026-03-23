import { Search, Bell, Settings, ChevronDown, Menu } from 'lucide-react';

interface TopNavBarProps {
  onMenuClick: () => void;
}

export function TopNavBar({ onMenuClick }: TopNavBarProps) {
  return (
    <header className="h-20 bg-gradient-to-r from-white/25 via-white/20 to-white/25 backdrop-blur-3xl border-b border-white/30 shadow-lg shadow-[#472e94]/10 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl bg-white/50 hover:bg-white/70 transition-colors"
        >
          <Menu className="w-6 h-6 text-slate-700" />
        </button>
        
        <div className="flex items-center gap-3">
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800">Dashboard</h1>
        </div>
        
        <div className="relative hidden md:block flex-1 max-w-md">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/40 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#472e94]/50 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <button className="relative p-2 md:p-3 rounded-xl bg-white/50 hover:bg-white/70 transition-colors">
          <Bell className="w-5 h-5 text-slate-700" />
          <span className="absolute top-1 md:top-2 right-1 md:right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="p-2 md:p-3 rounded-xl bg-white/50 hover:bg-white/70 transition-colors hidden sm:block">
          <Settings className="w-5 h-5 text-slate-700" />
        </button>
        
        <div className="h-8 w-px bg-white/40 hidden sm:block"></div>
        
        <button className="flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 rounded-2xl bg-white/50 hover:bg-white/70 transition-colors">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#b28722] to-[#472e94] flex items-center justify-center text-white font-semibold text-sm">
            CK
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">Chander Kant</p>
            <p className="text-xs text-slate-600">Student</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-600 hidden md:block" />
        </button>
      </div>
    </header>
  );
}
