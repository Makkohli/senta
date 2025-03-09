'use client'
import React, { useState } from "react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    emailNotifications: true,
    pushNotifications: false,
    currentPassword: "",
    newPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = (section) => {
    console.log(`Saving ${section} settings:`, formData);
    // Add API call here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Account Settings</h1>
            <span className="text-sm text-gray-500">Last updated: March 9, 2025</span>
          </div>
          
          {/* Content Container */}
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 border-r border-gray-100">
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === "profile" 
                          ? "bg-blue-50 text-blue-600" 
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("notifications")}
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === "notifications" 
                          ? "bg-blue-50 text-blue-600" 
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                      Notifications
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("security")}
                      className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center ${
                        activeTab === "security" 
                          ? "bg-blue-50 text-blue-600" 
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                      Security
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-6">
              {activeTab === "profile" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-800 mb-4">Profile Information</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-2/3 space-y-4">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/3 flex flex-col items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Change Photo
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleSave("profile")}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-800 mb-4">Notification Preferences</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="emailNotifications"
                            checked={formData.emailNotifications}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <div className="ml-3">
                            <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                            <p className="text-xs text-gray-500 mt-1">Receive updates, alerts, and promotional messages to your email</p>
                          </div>
                        </label>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="pushNotifications"
                            checked={formData.pushNotifications}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <div className="ml-3">
                            <span className="text-sm font-medium text-gray-700">Push Notifications</span>
                            <p className="text-xs text-gray-500 mt-1">Receive real-time alerts even when you're not using the application</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleSave("notifications")}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === "security" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-800 mb-4">Change Password</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your current password"
                        />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your new password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleSave("security")}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
