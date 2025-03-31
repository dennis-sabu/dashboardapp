import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full">
          <div className="flex flex-col mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back! Here you can manage your tasks, view analytics, and make adjustments.
            </p>
          </div>
          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Task Card */}
            <Link href="/dashboard/tasks">
              <div className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105">
                <h2 className="text-xl font-bold">Tasks</h2>
                <span className="absolute top-2 right-2 text-2xl opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  📋
                </span>
                <p className="text-gray-600 mt-2">View, organize, and manage your daily tasks.</p>
              </div>
            </Link>

            {/* Analytics Card */}
            <Link href="/dashboard/analytics">
              <div className="bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105">
                <h2 className="text-xl font-bold">Analytics</h2>
                <span className="absolute top-2 right-2 text-2xl opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  📊
                </span>
                <p className="text-gray-600 mt-2">Gain insights into your performance and trends.</p>
              </div>
            </Link>

            {/* Settings Card */}
            <Link href="/dashboard/settings">
              <div className="bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105">
                <h2 className="text-xl font-bold">Settings</h2>
                <span className="absolute top-2 right-2 text-2xl opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  ⚙️
                </span>
                <p className="text-gray-600 mt-2">Customize and tweak your dashboard settings.</p>
              </div>
            </Link>

            {/* Users Card */}
            <Link href="/dashboard/users">
              <div className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105">
                <h2 className="text-xl font-bold">Users</h2>
                <span className="absolute top-2 right-2 text-2xl opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  👥
                </span>
                <p className="text-gray-600 mt-2">Manage and view user details and insights.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;