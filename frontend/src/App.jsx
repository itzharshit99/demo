import React from 'react';
import { 
  BarChart3, 
  Clock, 
  Brain, 
  Lightbulb, 
  Award,
  TrendingUp,
  BookOpen,
  Timer,
  Home,
  Settings,
  Bell,
  User
} from 'lucide-react';

function App() {
  const subjects = [
    { name: 'Geography', active: true },
    { name: 'Politics', active: true },
    { name: 'Current Affairs', active: true },
    { name: 'General Studies', active: false },
    { name: 'Mathematics', active: true },
    { name: 'Social Studies', active: false },
    { name: 'English Literature', active: true },
    { name: 'Indian History', active: true },
    { name: 'Economics', active: true }
  ];

  const approachData = [
    { label: 'Facts', percentage: 25, color: 'bg-indigo-100 text-indigo-600' },
    { label: 'Analysis', percentage: 32, color: 'bg-blue-100 text-blue-600' },
    { label: 'Elimination', percentage: 19, color: 'bg-purple-100 text-purple-600' },
    { label: 'Guess', percentage: 24, color: 'bg-pink-100 text-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-[#1E293B] text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <BarChart3 className="w-6 h-6 text-teal-400" />
              <span className="ml-2 font-semibold">Firstbench</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center space-x-1">
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>FirstGuru</span>
              </a>
              <a href="#" className="flex items-center space-x-1">
                <Settings className="w-4 h-4" />
                <span>TownHall</span>
              </a>
              <a href="#" className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>AI Evaluation</span>
              </a>
              <a href="#" className="flex items-center space-x-1">
                <BarChart3 className="w-4 h-4" />
                <span>Performance</span>
              </a>
              <a href="#" className="flex items-center space-x-1 text-teal-400">
                <Clock className="w-4 h-4" />
                <span>Mock Test</span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <span>P</span>
              </div>
              <span>Profile</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Your Result!</h1>
                <p className="text-gray-600">All your insights & details in one place</p>
              </div>
              <div className="text-right">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-sm text-indigo-600 font-medium">YOU'VE PASSED!</div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold">136</span>
                    <span className="text-gray-500 mb-1">/240</span>
                  </div>
                  <div className="text-emerald-500 text-sm font-medium">76% ACCURACY</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subject Understanding */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="text-indigo-600" />
                <h2 className="text-lg font-semibold">Subject Understanding</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      subject.active
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {subject.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Timer className="text-indigo-600" />
                <h2 className="text-lg font-semibold">Response Time</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-indigo-600">60<span className="text-xl">%</span></div>
                <div>
                  <div className="text-gray-600">Ans took</div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-red-500" />
                    <span className="text-red-500 font-medium">2min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach Data */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-indigo-600" />
                <h2 className="text-lg font-semibold">Approach Data</h2>
              </div>
              <div className="space-y-3">
                {approachData.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`${item.color} px-2 py-1 rounded text-sm font-medium`}>
                      {item.percentage}%
                    </div>
                    <div className="text-gray-600">Based on {item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-indigo-600" />
                <h2 className="text-lg font-semibold">Suggestions</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-emerald-50 rounded-lg">
                  <div className="text-emerald-600 font-medium">Easy</div>
                  <div className="text-sm text-gray-600">40sec</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-yellow-600 font-medium">Medium</div>
                  <div className="text-sm text-gray-600">1.5min</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-red-600 font-medium">Hard</div>
                  <div className="text-sm text-gray-600">3min</div>
                </div>
              </div>
            </div>

            {/* Time Taken Graph */}
            <div className="bg-white rounded-lg shadow-sm p-6 col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="text-indigo-600" />
                <h2 className="text-lg font-semibold">Time Taken</h2>
              </div>
              <div className="h-64 flex items-end justify-between gap-2">
                {[75, 45, 35, 65, 55, 45, 70].map((height, index) => (
                  <div key={index} className="w-full">
                    <div 
                      className="bg-indigo-500 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {[10, 15, 20, 25, 30, 35, 40].map((time, index) => (
                  <div key={index} className="text-sm text-gray-500">{time}min</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;