export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <p className="text-gray-600 mt-2">
          Manage your users here. You can view detailed information or browse a list of users.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <a href="/dashboard/users/users-details" className="block p-4 border border-green-300 bg-green-100 rounded-lg hover:bg-green-200 transition">
            <h2 className="font-semibold text-green-800">Users Details</h2>
            <p className="text-sm text-green-700">View detailed information about each user in your system</p>
          </a>

          <a href="/dashboard/users/users-list" className="block p-4 border border-yellow-300 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition">
            <h2 className="font-semibold text-yellow-800">Users List</h2>
            <p className="text-sm text-yellow-700">View detailed information about each user in your system</p>
          </a>
        </div>
      </div>
    </div>
  );
}