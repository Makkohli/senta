'use client'
import React, { useState } from "react";
import { BarChart, LineChart, PieChart, Pie, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [connectedPlatforms, setConnectedPlatforms] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  const platforms = [
    { name: "Facebook", icon: "📘", color: "bg-blue-600", textColor: "text-blue-600" },
    { name: "Twitter", icon: "🐦", color: "bg-sky-500", textColor: "text-sky-500" },
    { name: "Instagram", icon: "📸", color: "bg-pink-500", textColor: "text-pink-500" },
    { name: "LinkedIn", icon: "💼", color: "bg-blue-700", textColor: "text-blue-700" },
  ];

  const connectPlatform = (platform) => {
    if (!connectedPlatforms.includes(platform)) {
      setConnectedPlatforms([...connectedPlatforms, platform]);
    }
  };

  // Sample data for charts
  const engagementData = [
    { name: 'Mon', Facebook: 4000, Twitter: 2400, Instagram: 2400 },
    { name: 'Tue', Facebook: 3000, Twitter: 1398, Instagram: 2210 },
    { name: 'Wed', Facebook: 2000, Twitter: 9800, Instagram: 2290 },
    { name: 'Thu', Facebook: 2780, Twitter: 3908, Instagram: 2000 },
    { name: 'Fri', Facebook: 1890, Twitter: 4800, Instagram: 2181 },
    { name: 'Sat', Facebook: 2390, Twitter: 3800, Instagram: 2500 },
    { name: 'Sun', Facebook: 3490, Twitter: 4300, Instagram: 2100 },
  ];

  const sentimentData = [
    { name: 'Positive', value: 65, fill: '#10B981' },
    { name: 'Neutral', value: 25, fill: '#6B7280' },
    { name: 'Negative', value: 10, fill: '#EF4444' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen p-6 hidden md:block">
          <div className="mb-8">
            <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
              SA
            </div>
            <h2 className="text-xl font-bold text-gray-800">Sentiment Analytics</h2>
            <p className="text-sm text-gray-500">Dashboard</p>
          </div>
          
          <nav className="mb-8">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${activeTab === "overview" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className="mr-3">📊</span> Overview
                </button>
              </li>
              <li>
                <button 
                   onClick={() => router.push("/engagement")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${activeTab === "engagement" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className="mr-3">👥</span> Engagement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push("/sentiment")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${activeTab === "sentiment" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className="mr-3">😊</span> Sentiment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push("/setting")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${activeTab === "settings" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className="mr-3">⚙️</span> Settings
                </button>
              </li>
            </ul>
          </nav>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Connected Platforms</h3>
            <div className="space-y-2">
              {platforms.map(platform => (
                <div key={platform.name} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${connectedPlatforms.includes(platform.name) ? "bg-green-500" : "bg-gray-300"}`}></div>
                  <span className={`${connectedPlatforms.includes(platform.name) ? platform.textColor : "text-gray-400"}`}>
                    {platform.icon} {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6 md:p-10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
              <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Logout
            </button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Engagement</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">12.5K</h3>
                  <p className="text-sm text-green-500 flex items-center mt-1">
                    <span>↑ 12%</span>
                    <span className="text-gray-400 ml-1">vs last week</span>
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
                  <p className="text-sm font-medium text-gray-500">Audience Reach</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">58.3K</h3>
                  <p className="text-sm text-green-500 flex items-center mt-1">
                    <span>↑ 18%</span>
                    <span className="text-gray-400 ml-1">vs last week</span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                  🌐
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Sentiment Score</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">8.7/10</h3>
                  <p className="text-sm text-green-500 flex items-center mt-1">
                    <span>↑ 5%</span>
                    <span className="text-gray-400 ml-1">vs last week</span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">
                  😊
                </div>
              </div>
            </div>
          </div>
          
          {/* Charts Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Engagement Over Time</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Facebook" stroke="#4F46E5" />
                    <Line type="monotone" dataKey="Twitter" stroke="#0EA5E9" />
                    <Line type="monotone" dataKey="Instagram" stroke="#EC4899" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sentiment Analysis</h3>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sentimentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label
                    />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Connect Platforms */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect Your Platforms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {platforms.map(({ name, icon, color }) => (
                <button
                  key={name}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-medium transition focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                    connectedPlatforms.includes(name) 
                      ? "bg-gradient-to-r from-green-400 to-green-500 shadow-md" 
                      : `${color} hover:opacity-90 shadow-md`
                  }`}
                  onClick={() => connectPlatform(name)}
                >
                  <span>{icon}</span> {connectedPlatforms.includes(name) ? "Connected" : `Connect ${name}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;