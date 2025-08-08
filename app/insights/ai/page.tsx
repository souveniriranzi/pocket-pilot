'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target, Calendar, DollarSign, ArrowRight } from 'lucide-react'

export default function AIInsightsPage() {
  const insights = [
    {
      id: 1,
      type: 'warning',
      title: 'High Food Spending Alert',
      message: 'Your food spending is 15% higher than last month. Consider meal planning to reduce costs.',
      impact: 'Could save $200/month',
      priority: 'high'
    },
    {
      id: 2,
      type: 'opportunity',
      title: 'Subscription Optimization',
      message: 'You have 3 unused subscriptions costing $45/month. Consider canceling them.',
      impact: 'Save $540/year',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'forecast',
      title: 'Savings Goal Progress',
      message: 'Based on current trends, you\'ll reach your $15,000 savings goal by March 2024.',
      impact: '2 months ahead of schedule',
      priority: 'low'
    }
  ]

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
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Insights</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI-Powered Financial Insights</h1>
          <p className="text-gray-600">Get personalized recommendations and insights to optimize your financial health</p>
        </div>

        <div className="space-y-6">
          {insights.map((insight) => (
            <div key={insight.id} className="card border-l-4 border-premium-500">
              <div className="flex items-start space-x-4">
                <Brain className="w-6 h-6 text-premium-600 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{insight.title}</h3>
                  <p className="text-gray-600 mb-3">{insight.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Impact: {insight.impact}</span>
                    <button className="btn-premium text-sm flex items-center">
                      Take Action
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 