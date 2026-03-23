import { GlassCard } from '@/app/components/GlassCard';
import { useState } from 'react';
import { DollarSign, Calendar, Users, TrendingUp, TrendingDown, Plus, Search, Filter, Receipt } from 'lucide-react';

// Mock fees data
const feesData = [
  {
    id: 'FEE001',
    studentName: 'Chander Kant',
    studentId: 'STU001',
    class: 'Class X-A',
    totalFees: 25000,
    paidAmount: 20000,
    pendingAmount: 5000,
    dueDate: '2024-04-30',
    status: 'partial'
  },
  {
    id: 'FEE002',
    studentName: 'Priya Sharma',
    studentId: 'STU002',
    class: 'Class X-A',
    totalFees: 25000,
    paidAmount: 25000,
    pendingAmount: 0,
    dueDate: '2024-04-30',
    status: 'paid'
  },
  {
    id: 'FEE003',
    studentName: 'Rahul Verma',
    studentId: 'STU003',
    class: 'Class X-B',
    totalFees: 25000,
    paidAmount: 15000,
    pendingAmount: 10000,
    dueDate: '2024-04-30',
    status: 'partial'
  },
  {
    id: 'FEE004',
    studentName: 'Ananya Singh',
    studentId: 'STU004',
    class: 'Class IX-A',
    totalFees: 22000,
    paidAmount: 0,
    pendingAmount: 22000,
    dueDate: '2024-04-30',
    status: 'pending'
  },
];

const feeStats = [
  { title: 'Total Revenue', value: '₹8,50,000', change: '+12%', trend: 'up' },
  { title: 'Pending Amount', value: '₹32,000', change: '-5%', trend: 'down' },
  { title: 'Paid This Month', value: '₹2,40,000', change: '+8%', trend: 'up' },
  { title: 'Overdue Amount', value: '₹15,000', change: '+2%', trend: 'up' },
];

export function Fees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statuses = ['all', 'paid', 'partial', 'pending'];

  const filteredFees = feesData.filter(fee => {
    const matchesSearch = fee.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fee.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fee.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || fee.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalRevenue = feesData.reduce((sum, fee) => sum + fee.paidAmount, 0);
  const totalPending = feesData.reduce((sum, fee) => sum + fee.pendingAmount, 0);

  return (
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Fees Management</h1>
          <p className="text-slate-600">Track and manage student fee payments</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#b28722] to-[#472e94] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300">
          <Plus className="w-4 h-4" />
          Record Payment
        </button>
      </div>

      {/* Fee Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {feeStats.map((stat, index) => (
          <GlassCard key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-semibold text-slate-800 mb-1">{stat.value}</p>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  <span>{stat.change} from last month</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#b28722] to-[#472e94] p-3 rounded-xl">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search students, IDs, or classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#472e94]/20 focus:border-[#472e94]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#472e94]/20 focus:border-[#472e94]"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFees.map((fee) => (
          <GlassCard key={fee.id} className="p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-br from-[#b28722] to-[#472e94] p-3 rounded-xl">
                <Receipt className="w-6 h-6 text-white" />
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(fee.status)}`}>
                {fee.status}
              </span>
            </div>

            <h3 className="font-semibold text-slate-800 mb-1">{fee.studentName}</h3>
            <p className="text-slate-600 text-sm mb-3">{fee.studentId} • {fee.class}</p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total Fees:</span>
                <span className="font-medium">₹{fee.totalFees.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Paid:</span>
                <span className="font-medium text-green-600">₹{fee.paidAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Pending:</span>
                <span className="font-medium text-red-600">₹{fee.pendingAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>Due: {fee.dueDate}</span>
                </div>
                <button className="text-[#472e94] hover:text-[#b28722] text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {filteredFees.length === 0 && (
        <div className="text-center py-12">
          <DollarSign className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600">No fee records found matching your criteria.</p>
        </div>
      )}
    </main>
  );
}