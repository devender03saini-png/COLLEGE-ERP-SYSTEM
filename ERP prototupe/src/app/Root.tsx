import { Sidebar } from '@/app/components/Sidebar';
import { TopNavBar } from '@/app/components/TopNavBar';
import { Outlet } from 'react-router';
import { useState } from 'react';

export function Root() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6d197] via-[#eddcb0] to-[#e6d197] dark:from-[#472e94] dark:via-[#5c3cae] dark:to-[#472e94] relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#d8be79] dark:bg-[#6c4ac7] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#f3e6c6] dark:bg-[#7f5bdd] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#ceb06c] dark:bg-[#3c267e] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex relative z-10">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col min-w-0">
          <TopNavBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
