"use client"; // Only needed if using Next.js App Router

import { useRouter } from "next/navigation"; // For App Router
// import { useRouter } from "next/router"; // Use this for Pages Router

const Home = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
        <div className="flex flex-col items-center">
          {/* Logo/Icon */}
          <div className="mb-6 relative">
            <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 h-6 w-6 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
            Sentiment Analytics
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mb-8 text-center">
            Harness the power of AI to analyze social media sentiment, track emerging trends, and gain actionable insights that drive your business forward.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10">
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="text-blue-600 font-semibold mb-1">Real-time Analysis</div>
              <div className="text-sm text-gray-600">Monitor sentiment as it happens</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-xl">
              <div className="text-indigo-600 font-semibold mb-1">AI-Powered</div>
              <div className="text-sm text-gray-600">Advanced machine learning models</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl">
              <div className="text-emerald-600 font-semibold mb-1">Actionable Insights</div>
              <div className="text-sm text-gray-600">Data you can use immediately</div>
            </div>
          </div>

          {/* CTA Buttons with Redirect */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => router.push("/auth/login")}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 text-center"
            >
              Log In
            </button>
            <button
              onClick={() => router.push("/auth/signup")}
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-xl shadow-md border border-blue-200 hover:bg-blue-50 transition-all duration-200 text-center"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mt-10 text-center">
        <p className="text-sm font-medium text-gray-500 mb-2">Trusted by leading companies</p>
        <div className="flex justify-center space-x-8 opacity-70">
          <div className="w-16 h-6 bg-gray-400 rounded"></div>
          <div className="w-16 h-6 bg-gray-400 rounded"></div>
          <div className="w-16 h-6 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
