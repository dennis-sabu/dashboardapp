import React from 'react';

const UserDetails = () => {
  const user = {
    name: "Dennis Sabu",
    email: "Dennis444@gmail.com",
    role: "Admin",
    status: "Active",
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.`,
    profilePicture: "https://via.placeholder.com/150",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    activities: [
      { action: "Updated password", date: "2025-02-10" },
      { action: "Changed email address", date: "2025-01-25" },
      { action: "Logged in from a new device", date: "2025-01-15" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Profile Picture */}
        <div className="flex items-center space-x-6 mb-6">
        <div
  className="w-32 h-32 rounded-full border-2 border-gray-200 bg-gray-300 flex items-center justify-center text-2xl font-bold text-white"
>
  {user.name
    .split(" ")
    .map((n) => n[0])
    .join("")}
</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-700">{user.role}</p>
            <p
              className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${
                user.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {user.status}
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">About</h2>
          <p className="text-gray-600">{user.about}</p>
        </div>

        {/* Activities Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Recent Activities</h2>
          <ul className="space-y-2">
            {user.activities.map((activity, index) => (
              <li key={index} className="text-gray-600">
                <span className="font-semibold">{activity.action}</span> -{" "}
                <span className="text-sm text-gray-500">{activity.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;