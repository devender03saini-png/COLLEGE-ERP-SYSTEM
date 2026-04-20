import { Sidebar } from '@/app/components/Sidebar';
// Shared layout components used to build the prototype shell.
import { TopNavBar } from '@/app/components/TopNavBar';
import { KPICard } from '@/app/components/KPICard';
import { StudentIDCard } from '@/app/components/StudentIDCard';
import { ClassesToday } from '@/app/components/ClassesToday';
import { Announcements } from '@/app/components/Announcements';
import { TasksDue } from '@/app/components/TasksDue';
import { UpcomingExams } from '@/app/components/UpcomingExams';
import { FeesQuarterStatus } from '@/app/components/FeesQuarterStatus';
// lucide-react provides the SVG icon components used in the KPI cards.
import { Users, UserCheck, DollarSign, GraduationCap } from 'lucide-react';
// React state is used to toggle the mobile sidebar drawer.
import { useState } from 'react';

export default function App() {
  // Stores whether the sidebar is open on smaller screens.
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // Main page background with the shared gold-purple gradient look.
    <div className="min-h-screen bg-gradient-to-br from-[#e6d197] via-[#eddcb0] to-[#e6d197] dark:from-[#472e94] dark:via-[#5c3cae] dark:to-[#472e94] relative overflow-hidden">
      {/* Decorative floating blobs that give the background a soft glassmorphism feel. */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#d8be79] dark:bg-[#6c4ac7] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#f3e6c6] dark:bg-[#7f5bdd] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#ceb06c] dark:bg-[#3c267e] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main app shell: sidebar on the left and content on the right. */}
      <div className="flex relative z-10">
        {/* Mobile-only overlay that closes the sidebar when clicked. */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Shared navigation sidebar. */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Content column that holds the top bar and dashboard widgets. */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* TopNavBar includes the mobile menu trigger button. */}
          <TopNavBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

          {/* Scrollable content area for the dashboard body. */}
          <main className="flex-1 p-4 md:p-8 overflow-y-auto">
            {/* Top KPI grid styled consistently with the rest of the prototype pages. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              <KPICard title="Total Students" value="1,245" icon={Users} trend="+12% from last month" trendUp={true} />
              <KPICard title="Present Today" value="1,058" icon={UserCheck} trend="85% attendance" trendUp={true} />
              <KPICard title="Fees Due" value="₹45,200" icon={DollarSign} trend="2 quarters pending" trendUp={false} />
              <KPICard title="Active Classes" value="32" icon={GraduationCap} trend="6 labs, 26 lectures" trendUp={true} />
            </div>

            {/* Main dashboard content grid. Left side holds action widgets, right side holds summary widgets. */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <ClassesToday />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TasksDue />
                  <FeesQuarterStatus />
                </div>
              </div>

              <div className="space-y-6">
                <StudentIDCard />
                <Announcements />
                <UpcomingExams />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
