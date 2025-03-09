'use client'
import React, { useState } from "react";
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SentimentPage = () => {
  const [timeRange, setTimeRange] = useState("week");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  // Sample data for charts
  const sentimentTrendData = [
    { date: 'Mar 03', positive: 65, neutral: 25, negative: 10 },
    { date: 'Mar 04', positive: 68, neutral: 22, negative: 10 },
    { date: 'Mar 05', positive: 62, neutral: 28, negative: 10 },
    { date: 'Mar 06', positive: 70, neutral: 20, negative: 10 },
    { date: 'Mar 07', positive: 72, neutral: 18, negative: 10 },
    { date: 'Mar 08', positive: 75, neutral: 18, negative: 7 },
    { date: 'Mar 09', positive: 78, neutral: 17, negative: 5 },
  ];

  const platformSentimentData = [
    { name: 'Facebook', positive: 70, neutral: 20, negative: 10 },
    { name: 'Twitter', positive: 65, neutral: 25, negative: 10 },
    { name: 'Instagram', positive: 80, neutral: 15, negative: 5 },
    { name: 'LinkedIn', positive: 75, neutral: 20, negative: 5 },
  ];

  const keywordSentimentData = [
    { keyword: 'Service', positive: 85, neutral: 10, negative: 5 },
    { keyword: 'Quality', positive: 80, neutral: 10, negative: 10 },
    { keyword: 'Price', positive: 60, neutral: 20, negative: 20 },
    { keyword: 'Support', positive: 75, neutral: 15, negative: 10 },
    { keyword: 'Delivery', positive: 65, neutral: 20, negative: 15 },
  ];

  const recentMentionsData = [
    { id: 1, platform: "Twitter", content: "\"Love the new features! The app is so much more intuitive now. #GreatService\"", sentiment: "Positive", date: "Mar 8, 2025" },
    { id: 2, platform: "Facebook", content: "\"Customer support team was very helpful with my issue. Resolved within minutes.\"", sentiment: "Positive", date: "Mar 8, 2025" },
    { id: 3, platform: "Instagram", content: "\"The quality is excellent as always, but prices seem to be increasing quite a bit lately.\"", sentiment: "Neutral", date: "Mar 7, 2025" },
    { id: 4, platform: "Twitter", content: "\"Been waiting for delivery for 3 days now. Not happy with the service.\"", sentiment: "Negative", date: "Mar 7, 2025" },
    { id: 5, platform: "LinkedIn", content: "\"Your company's commitment to quality and customer satisfaction is impressive. Great work!\"", sentiment: "Positive", date: "Mar 6, 2025" },
  ];
  

  const getSentimentColor = (sentiment) => {
    switch (sentiment.toLowerCase()) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'neutral': return 'bg-gray-100 text-gray-800';
      case 'negative': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white-800">Sentiment Analysis</h1>
          <p className="text-white-500">Understand how your audience feels about your brand</p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center">
          <select 
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="mr-2 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Platforms</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
          </select>

          <div className="flex items-center space-x-2">
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
          </div>
        </div>
      </div>

      {/* Overall Sentiment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Positive Sentiment</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">78%</h3>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <span>↑ 6%</span>
                <span className="text-gray-400 ml-1">vs last period</span>
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-xl">
              😊
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Neutral Sentiment</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">17%</h3>
              <p className="text-sm text-red-500 flex items-center mt-1">
                <span>↓ 3%</span>
                <span className="text-gray-400 ml-1">vs last period</span>
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xl">
              😐
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Negative Sentiment</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">5%</h3>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <span>↓ 2%</span>
                <span className="text-gray-400 ml-1">vs last period</span>
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xl">
              ☹️
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sentiment Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sentimentTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="positive" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="neutral" stroke="#6B7280" strokeWidth={2} />
                <Line type="monotone" dataKey="negative" stroke="#EF4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sentiment by Platform</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformSentimentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="positive" stackId="a" fill="#10B981" />
                <Bar dataKey="neutral" stackId="a" fill="#6B7280" />
                <Bar dataKey="negative" stackId="a" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Keyword Analysis */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Keyword Sentiment Analysis</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keyword
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mentions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sentiment Distribution
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {keywordSentimentData.map((item) => (
                <tr key={item.keyword}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.keyword}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {Math.floor(Math.random() * 100) + 20}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="flex h-2.5 rounded-full overflow-hidden">
                        <div style={{ width: `${item.positive}%` }} className="bg-green-500"></div>
                        <div style={{ width: `${item.neutral}%` }} className="bg-gray-400"></div>
                        <div style={{ width: `${item.negative}%` }} className="bg-red-500"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-green-600">{item.positive}% Positive</span>
                      <span className="text-gray-500">{item.neutral}% Neutral</span>
                      <span className="text-red-600">{item.negative}% Negative</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Mentions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Mentions</h3>
        <div className="space-y-4">
          {recentMentionsData.map((mention) => (
            <div key={mention.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start">
                <div className="flex items-center mb-2">
                  <span className="font-medium text-gray-900 mr-2">{mention.platform}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(mention.sentiment)}`}>
                    {mention.sentiment}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{mention.date}</span>
              </div>
              <p className="text-gray-700 italic">{mention.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            View All Mentions
          </button>
        </div>
      </div>

      {/* Action Recommendations */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Recommended Actions</h3>
        <p className="mb-4">Based on sentiment analysis, we recommend these actions to improve perception:</p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2">⚡</span>
            <span>Address negative feedback about delivery times, which has the highest negative sentiment.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">⚡</span>
            <span>Amplify positive service testimonials, as this is your strongest sentiment category.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">⚡</span>
            <span>Focus more on Instagram content, which shows the most positive sentiment across platforms.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SentimentPage;