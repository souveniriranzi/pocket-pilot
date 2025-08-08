'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Settings, AlertTriangle, DollarSign, Calendar, Plus, Edit, Trash2, Bell } from 'lucide-react'

export default function BudgetRulesPage() {
  const [activeTab, setActiveTab] = useState('rules')

  const budgetRules = [
    {
      id: 1,
      name: 'Food Budget Alert',
      category: 'Food & Dining',
      condition: 'spends_more_than',
      amount: 500,
      period: 'monthly',
      action: 'alert',
      status: 'active'
    },
    {
      id: 2,
      name: 'Entertainment Limit',
      category: 'Entertainment',
      condition: 'reaches',
      amount: 300,
      period: 'monthly',
      action: 'block',
      status: 'active'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/pro" className="text-gray-600 hover:text-gray-900">
                ← Back to Dashboard
              </Link>
              <div className="w-8 h-8 bg-gradient-to-br from-pro-500 to-pro-600 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Budget Rules</span>
            </div>
            <button className="btn-pro text-sm flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Add Rule
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Budget Rules</h1>
          <p className="text-gray-600">Set up automated rules to manage your spending and savings</p>
        </div>

        <div className="flex space-x-2 mb-8">
          {['rules', 'categories', 'alerts'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab
                  ? 'bg-pro-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'rules' && (
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Active Rules</h2>
                <span className="text-sm text-gray-500">{budgetRules.length} rules active</span>
              </div>
              <div className="space-y-4">
                {budgetRules.map((rule) => (
                  <div key={rule.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-pro-100 rounded-lg flex items-center justify-center">
                          <AlertTriangle className="w-5 h-5 text-pro-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{rule.name}</h3>
                          <p className="text-sm text-gray-500">{rule.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Condition:</span>
                        <p className="font-medium">{rule.condition.replace('_', ' ')}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Amount:</span>
                        <p className="font-medium">${rule.amount}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Period:</span>
                        <p className="font-medium">{rule.period}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Action:</span>
                        <p className="font-medium capitalize">{rule.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 