'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Users, UserPlus, Share2, Settings, MessageSquare, Calendar, DollarSign, Eye } from 'lucide-react'

export default function TeamCollaborationPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Owner',
      avatar: 'JD',
      status: 'online',
      permissions: ['view', 'edit', 'admin']
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      avatar: 'JS',
      status: 'offline',
      permissions: ['view', 'edit']
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'Viewer',
      avatar: 'MJ',
      status: 'online',
      permissions: ['view']
    }
  ]

  const sharedBudgets = [
    {
      id: 1,
      name: 'Household Budget',
      total: 5000,
      spent: 3200,
      members: 3,
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'Vacation Fund',
      total: 3000,
      spent: 1200,
      members: 2,
      lastUpdated: '1 day ago'
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
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Team Collaboration</span>
            </div>
            <button className="btn-premium text-sm flex items-center">
              <UserPlus className="w-4 h-4 mr-2" />
              Invite Member
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Collaboration</h1>
          <p className="text-gray-600">Manage shared budgets and financial goals with your team</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-8">
          {['overview', 'members', 'budgets', 'activity'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab
                  ? 'bg-premium-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Team Members */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>
                <button className="text-premium-600 hover:text-premium-500 text-sm">
                  Manage
                </button>
              </div>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-premium-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-premium-700">{member.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${
                        member.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></span>
                      <span className="text-sm text-gray-500">{member.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shared Budgets */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Shared Budgets</h2>
                <button className="btn-premium text-sm">Create Budget</button>
              </div>
              <div className="space-y-4">
                {sharedBudgets.map((budget) => (
                  <div key={budget.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">{budget.name}</h3>
                      <span className="text-sm text-gray-500">{budget.members} members</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">
                        ${budget.spent.toLocaleString()} / ${budget.total.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-premium-500 h-2 rounded-full"
                        style={{ width: `${(budget.spent / budget.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">Updated {budget.lastUpdated}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>
              <button className="btn-premium text-sm flex items-center">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Member
              </button>
            </div>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-premium-100 rounded-full flex items-center justify-center">
                      <span className="text-lg font-medium text-premium-700">{member.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.email}</p>
                      <p className="text-xs text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'budgets' && (
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Shared Budgets</h2>
              <button className="btn-premium text-sm">Create New Budget</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sharedBudgets.map((budget) => (
                <div key={budget.id} className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">{budget.name}</h3>
                    <button className="text-premium-600 hover:text-premium-500">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Spent</span>
                      <span className="font-medium">${budget.spent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total</span>
                      <span className="font-medium">${budget.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Members</span>
                      <span className="font-medium">{budget.members}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Updated {budget.lastUpdated}</span>
                      <button className="text-premium-600 hover:text-premium-500">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 