// Shared dashboard widgets used to compose the route.
import { KPICard } from '@/app/components/KPICard';
import { StudentIDCard } from '@/app/components/StudentIDCard';
import { ClassesToday } from '@/app/components/ClassesToday';
import { Announcements } from '@/app/components/Announcements';
import { TasksDue } from '@/app/components/TasksDue';
import { UpcomingExams } from '@/app/components/UpcomingExams';
import { FeesQuarterStatus } from '@/app/components/FeesQuarterStatus';
// lucide-react supplies the icon components passed into KPICard.
import { Users, UserCheck, DollarSign, GraduationCap } from 'lucide-react';

export function Dashboard() {
  return (
    // Shared content wrapper with responsive spacing.
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      {/* KPI summary row reused from the landing dashboard design. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <KPICard title="Total Students" value="1,245" icon={Users} trend="+12% from last month" trendUp={true} />
        <KPICard title="Present Today" value="1,058" icon={UserCheck} trend="85% attendance" trendUp={true} />
        <KPICard title="Fees Due" value="Rs 45,200" icon={DollarSign} trend="2 quarters pending" trendUp={false} />
        <KPICard title="Active Classes" value="32" icon={GraduationCap} trend="6 labs, 26 lectures" trendUp={true} />
      </div>

      {/* Two-column dashboard layout: operations on the left, quick info on the right. */}
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
  );
}

