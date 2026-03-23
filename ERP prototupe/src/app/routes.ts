import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/app/Root';
import { Dashboard } from '@/app/pages/Dashboard';
import { Students } from '@/app/pages/Students';
import { Attendance } from '@/app/pages/Attendance';
import { Classes } from '@/app/pages/Classes';
import { Exams } from '@/app/pages/Exams';
import { Fees } from '@/app/pages/Fees';
import { Reports } from '@/app/pages/Reports';
import { Timetable } from '@/app/pages/Timetable';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: 'students', Component: Students },
      { path: 'attendance', Component: Attendance },
      { path: 'classes', Component: Classes },
      { path: 'exams', Component: Exams },
      { path: 'fees', Component: Fees },
      { path: 'reports', Component: Reports },
      { path: 'timetable', Component: Timetable },
    ],
  },
]);
