'use client';

import React from 'react';

type UserStatus = 'Active' | 'Inactive' | 'Suspended';

interface User {
  name: string;
  email: string;
  role: string;
  status: UserStatus;
}

const users: User[] = [
  { name: 'Dennis', email: 'dennis@example.com', role: 'Admin', status: 'Active' },
  { name: 'Abin', email: 'abin@example.com', role: 'Editor', status: 'Inactive' },
  { name: 'Sam ', email: 'sam@example.com', role: 'User', status: 'Suspended' },
  { name: 'Emily', email: 'emily@example.com', role: 'Admin', status: 'Active' },
  { name: 'Michael', email: 'michael@example.com', role: 'Editor', status: 'Inactive' },
  { name: 'Shwetha', email: 'Shwwetha@example.com', role: 'User', status: 'Suspended' },
];

const statusColors: Record<UserStatus, string> = {
  Active: 'text-green-500',
  Inactive: 'text-yellow-500',
  Suspended: 'text-red-500',
};

export default function UsersList() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Users List</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className={`px-4 py-2 font-medium ${statusColors[user.status]}`}>
                    {user.status}
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
                      Edit
                    </button>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}