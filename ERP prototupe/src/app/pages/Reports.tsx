import { GlassCard } from '@/app/components/GlassCard';
import { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, FileText, Download, Calendar, Filter } from 'lucide-react';

// Mock reports data
const reportStats = [
  { title: 'Total Students', value: '1,245', change: '+5.2%', icon: Users, color: 'from-blue-500 to-blue-600' },
  { title: 'Average Attendance', value: '87%', change: '+2.1%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
  { title: 'Total Revenue', value: '₹12,50,000', change: '+8.7%', icon: DollarSign, color: 'from-yellow-500 to-yellow-600' },
  { title: 'Active Classes', value: '32', change: '+1', icon: FileText, color: 'from-purple-500 to-purple-600' },
];

const recentReports = [
  {
    id: 'REP001',
    title: 'Monthly Attendance Report - March 2024',
    type: 'Attendance',
    generatedDate: '2024-04-01',
    period: 'March 2024',
    status: 'completed'
  },
  {
    id: 'REP002',
    title: 'Fee Collection Summary - Q1 2024',
    type: 'Financial',
    generatedDate: '2024-04-05',
    period: 'Q1 2024',
    status: 'completed'
  },
  {
    id: 'REP003',
    title: 'Student Performance Analysis',
    type: 'Academic',
    generatedDate: '2024-04-10',
    period: 'Academic Year 2023-24',
    status: 'processing'
  },
  {
    id: 'REP004',
    title: 'Teacher Workload Report',
    type: 'Administrative',
    generatedDate: '2024-04-12',
    period: 'Current Semester',
    status: 'pending'
  },
];

export function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const periods = ['all', 'this-month', 'last-month', 'this-quarter', 'last-quarter'];
  const types = ['all', 'attendance', 'financial', 'academic', 'administrative'];

  const filteredReports = recentReports.filter(report => {
    const matchesPeriod = selectedPeriod === 'all' || true; // Simplified for demo
    const matchesType = selectedType === 'all' || report.type.toLowerCase().includes(selectedType);
    return matchesPeriod && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Reports & Analytics</h1>
          <p className="text-slate-600">Generate and view comprehensive reports</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#b28722] to-[#472e94] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300">
          <FileText className="w-4 h-4" />
          Generate New Report
        </button>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {reportStats.map((stat, index) => (
          <GlassCard key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-semibold text-slate-800 mb-1">{stat.value}</p>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>{stat.change} from last month</span>
                </div>
              </div>
              <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Quick Report Generation */}
      <GlassCard className="p-6 mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Report Generation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-md transition-all duration-300">
            <Users className="w-8 h-8 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Attendance Report</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-md transition-all duration-300">
            <DollarSign className="w-8 h-8 text-green-600" />
            <span className="text-sm font-medium text-slate-700">Financial Report</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-md transition-all duration-300">
            <FileText className="w-8 h-8 text-purple-600" />
            <span className="text-sm font-medium text-slate-700">Academic Report</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-md transition-all duration-300">
            <BarChart3 className="w-8 h-8 text-orange-600" />
            <span className="text-sm font-medium text-slate-700">Performance Report</span>
          </button>
        </div>
      </GlassCard>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-400" />
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#472e94]/20 focus:border-[#472e94]"
          >
            {periods.map(period => (
              <option key={period} value={period}>
                {period === 'all' ? 'All Periods' :
                 period === 'this-month' ? 'This Month' :
                 period === 'last-month' ? 'Last Month' :
                 period === 'this-quarter' ? 'This Quarter' : 'Last Quarter'}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#472e94]/20 focus:border-[#472e94]"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Recent Reports */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Reports</h3>
        <div className="space-y-4">
          {filteredReports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#b28722] to-[#472e94] p-3 rounded-xl">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">{report.title}</h4>
                  <p className="text-sm text-slate-600">{report.type} • {report.period}</p>
                  <p className="text-xs text-slate-500">Generated: {report.generatedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
                <button className="flex items-center gap-1 text-[#472e94] hover:text-[#b28722] transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600">No reports found matching your criteria.</p>
          </div>
        )}
      </GlassCard>
    </main>
  );
}