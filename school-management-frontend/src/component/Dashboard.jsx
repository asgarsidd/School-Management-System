'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, BookOpen, GraduationCap, ChevronDown, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data for demonstration
const classData = [
  { name: 'Class A', maleStudents: 15, femaleStudents: 18 },
  { name: 'Class B', maleStudents: 12, femaleStudents: 20 },
  { name: 'Class C', maleStudents: 17, femaleStudents: 16 },
];

const financialData = [
  { month: 'Jan', income: 50000, expenses: 40000 },
  { month: 'Feb', income: 55000, expenses: 42000 },
  { month: 'Mar', income: 60000, expenses: 45000 },
  { month: 'Apr', income: 58000, expenses: 43000 },
  { month: 'May', income: 62000, expenses: 46000 },
  { month: 'Jun', income: 65000, expenses: 48000 },
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State for showing logout popup

  // Function to toggle the logout popup
  const toggleLogoutPopup = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };
   const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logged out');
    navigate('/login');
    // Add your logout logic here (e.g., clearing session, redirecting)

  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-semibold text-gray-700 ml-2">School CRM Dashboard</h1>
            </div>
            <div className="relative">
              <button
                onClick={toggleLogoutPopup} // Toggle the logout popup
                className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <span className="mr-1">John Doe</span>
                <ChevronDown size={16} />
              </button>
              {showLogoutPopup && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <button
                    onClick={handleLogout} // Handle logout logic
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>

            {/* Stats */}
            <div className="mt-4">
              <div className="flex flex-wrap -mx-6">
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">8,282</h4>
                      <div className="text-gray-500">Total Students</div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                  <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="p-3 rounded-full bg-green-600 bg-opacity-75">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">200</h4>
                      <div className="text-gray-500">Total Classes</div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                  <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">215</h4>
                      <div className="text-gray-500">Total Teachers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="mt-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-4">Class Gender Distribution</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={classData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="maleStudents" fill="#3B82F6" name="Male" />
                      <Bar dataKey="femaleStudents" fill="#EC4899" name="Female" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0 md:ml-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-4">Financial Overview</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={financialData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="income" fill="#10B981" name="Income" />
                      <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
