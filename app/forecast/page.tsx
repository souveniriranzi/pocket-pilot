'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, TrendingDown, Target, Calendar, DollarSign, BarChart3 } from 'lucide-react'

export default function FinancialForecastPage() {
  const [timeframe, setTimeframe] = useState('3months')

  const forecastData = {
    income: {
      current: 5200,
      projected: 5400,
      trend: '+3.8%'
    },
    expenses: {
      current: 2352,
      projected: 2480,
      trend: '+5.4%'
    },
    savings: {
      current: 847,
      projected: 920,
      trend: '+8.6%'
    },
    goals: [
      {
        name: 'Emergency Fund',
        target: 15000,
        current: 12500,
        projected: 15000,
        monthsToGoal: 2
      },
      {
        name: 'Vacation Fund',
        target: 5000,
        current: 3200,
        projected: 5000,
        monthsToGoal: 6
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/premium" className="text-gray-600 hover:text-gray-900">
                ← Back to Dashboard
              </Link>
              <div className="w-8 h-8 bg-gradient-to-br from-premium-500 to-premium-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Financial Forecast</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Forecast</h1>
          <p className="text-gray-600">AI-powered predictions for your financial future</p>
        </div>

        <div className="flex space-x-2 mb-8">
          {['1month', '3months', '6months', '1year'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                timeframe === period
                  ? 'bg-premium-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {period === '1month' ? '1 Month' : 
               period === '3months' ? '3 Months' :
               period === '6months' ? '6 Months' : '1 Year'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Projected Income</p>
                <p className="text-2xl font-bold text-green-600">${forecastData.income.projected.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {forecastData.income.trend}
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="card border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Projected Expenses</p>
                <p className="text-2xl font-bold text-red-600">${forecastData.expenses.projected.toLocaleString()}</p>
                <p className="text-sm text-red-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {forecastData.expenses.trend}
                </p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <div className="card border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Projected Savings</p>
                <p className="text-2xl font-bold text-blue-600">${forecastData.savings.projected.toLocaleString()}</p>
                <p className="text-sm text-blue-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {forecastData.savings.trend}
                </p>
              </div>
              <Target className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Savings Goals Forecast</h2>
          <div className="space-y-6">
            {forecastData.goals.map((goal, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium text-gray-900">{goal.name}</h3>
                  <span className="text-sm text-gray-500">{goal.monthsToGoal} months to goal</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium text-gray-900">
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-premium-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 