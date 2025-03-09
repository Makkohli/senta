'use client'
import React, { useState } from "react";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EngagementPage = () => {
  // Sample data for charts
  const dailyEngagementData = [
    { name: 'Mon', Likes: 4000, Comments: 2400, Shares: 1400 },
    { name: 'Tue', Likes: 3000, Comments: 1398, Shares: 2210 },
    { name: 'Wed', Likes: 2000, Comments: 9800, Shares: 2290 },
    { name: 'Thu', Likes: 2780, Comments: 3908, Shares: 2000 },
    { name: 'Fri', Likes: 1890, Comments: 4800, Shares: 2181 },
    { name: 'Sat', Likes: 2390, Comments: 3800, Shares: 2500 },
    { name: 'Sun', Likes: 3490, Comments: 4300, Shares: 2100 },
  ];

  const platformEngagementData = [
    { name: 'Facebook', Likes: 12000, Comments: 8400, Shares: 9400 },
    { name: 'Twitter', Likes: 9800, Comments: 6200, Shares: 11200 },
    { name: 'Instagram', Likes: 15600, Comments: 5700, Shares: 4300 },
    { name: 'LinkedIn', Likes: 7200, Comments: 3100, Shares: 5800 },
  ];

  const topPostsData = [
    { id: 1, platform: "Instagram", content: "New product launch announcement", engagement: 4527, date: "Mar 5, 2025" },
    { id: 2, platform: "Facebook", content: "Behind the scenes company tour", engagement: 3982, date: "Mar 2, 2025" },
    { id: 3, platform: "Twitter", content: "Industry insights thread on AI trends", engagement: 3541, date: "Mar 7, 2025" },
    { id: 4, platform: "LinkedIn", content: "Job openings for senior developers", engagement: 3128, date: "Mar 4, 2025" },
    { id: 5, platform: "Instagram", content: "Customer testimonial spotlight", engagement: 2964, date: "Mar 1, 2025" },
  ];

  const [timeRange, setTimeRange] = useState("week");

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white-800">Engagement Analytics</h1>
          <p className="text-white-500">Track interactions across all your social platforms</p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <button 
            onClick={() => setTimeRange("day")} 
            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${timeRange === "day" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Day
          </button>
          <button 
            onClick={() => setTimeRange("week")} 
            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${timeRange === "week" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Week
          </button>
          <button 
            onClick={() => setTimeRange("month")} 
            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${timeRange === "month" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Month
          </button>
          <button 
            onClick={() => setTimeRange("year")} 
            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${timeRange === "year" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Year
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Engagement</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">86.4K</h3>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <span>↑ 14%</span>
                <span className="text-gray-400 ml-1">vs last period</span>
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              👥
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Likes</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">44.6K</h3>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <span>↑ 12%</span>
                <span className="text-gray-400 ml-1">vs last period</span>
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
              ❤️
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Comments</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">23.4K</h3>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <span>↑ 8%</span>
                <span className="text-gray-400 ml-1">vs last period</span>
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
              💬
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Shares</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">18.4K</h3>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <span>↑ 22%</span>
                <span className="text-gray-400 ml-1">vs last period</span>
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
              🔄
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Engagement Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyEngagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Likes" stroke="#F87171" />
                <Line type="monotone" dataKey="Comments" stroke="#34D399" />
                <Line type="monotone" dataKey="Shares" stroke="#A78BFA" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Engagement by Platform</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformEngagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Likes" fill="#F87171" />
                <Bar dataKey="Comments" fill="#34D399" />
                <Bar dataKey="Shares" fill="#A78BFA" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Performing Posts */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Posts</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platform
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Content
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topPostsData.map((post, index) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{index + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{post.platform}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{post.content}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{post.engagement.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Engagement Tips */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl text-white shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Engagement Optimization Tips</h3>
        <p className="mb-4">Based on your analytics, here are some suggestions to increase engagement:</p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Post more content similar to "Behind the scenes company tour" which saw high engagement.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Instagram posts are performing best. Consider increasing frequency on this platform.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Engagement peaks on weekends. Schedule important posts for Saturday.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EngagementPage;