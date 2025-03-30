import React from 'react';

const Analytics = () => {
  const metrics = [
    {
      title: "Total Sales",
      Value: "$120,00",
      change: "+12%",
      ispositive: true,
    },
    {
      title: "Active User",
      Value: "1,200",
      change: "-12%",
      ispositive: false,
    },
    {
      title: "Website Visits",
      Value: "8,500",
      change: "+5%",
      ispositive: true,
    },
    {
      title: "New Sign-Ups",
      Value: "350",
      change: "+12%",
      ispositive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8 ">
      <div className="max-w-7xl rounded-2xl mx-auto bg-white shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 ">Analytics Dashboard</h1>
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 "> 
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4 ${
                metric.ispositive ? 'border-green-500' : 'border-red-500'
              }`}
            >
              <div >
                <h3 className="text-xl font-semibold text-gray-800">{metric.title}</h3>
                <p className="text-lg text-gray-600 mt-2">{metric.Value}</p>
                <p
                  className={`text-sm mt-2 ${
                    metric.ispositive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Website Traffic</h2>
          <div className="bg-gray-100 rounded-lg h-72  ">
            <p>Charts Placeholder</p>
          </div>
          
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Website Traffic</h2>
          <div className="bg-gray-100 rounded-lg h-72 ">
            <p>Charts Placeholder</p>
          </div>
          
     {/* {resent activities} */}
          <div className="mb-8">
            <h2 className='text-xl font-semibold text-gray-700 mb-4'>Resent Activities</h2>
            <ul className="space-y-4">
              <li className='flex items-center justify-between bg-white rounded-lg  shadow-md p-4'>
                <div>
                  <h3 className='text-xl font-semibold text-gray-700'>
                    User Registeration
                  </h3>
                  <p className="text-sm text-gray-600">New user signed up on 2026-02-16</p>
                </div>
                <div >
                  <p className="text-sm text-gray-500 ">+10 Users</p>
                </div>

              </li>
              <li className='flex items-center justify-between bg-white rounded-lg  shadow-md p-4'>
                <div>
                  <h3 className='text-xl font-semibold text-gray-700'>
                    User Registeration
                  </h3>
                  <p className="text-sm text-gray-600">New user signed up on 2026-02-16</p>
                </div>
                <div >
                  <p className="text-sm text-gray-500 ">+10 Users</p>
                </div>

              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Analytics;