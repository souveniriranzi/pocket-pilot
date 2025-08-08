'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Plus, 
  BarChart3, 
  Settings, 
  User,
  Calendar,
  DollarSign,
  CreditCard,
  PiggyBank
} from 'lucide-react'

export default function FreeDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const mockData = {
    balance: 2847.50,
    income: 5200,
    expenses: 2352.50,
    savings: 847.50,
    recentTransactions: [
      { id: 1, name: 'Grocery Store', amount: -85.30, category: 'Food', date: '2024-01-15' },
      { id: 2, name: 'Salary Deposit', amount: 5200, category: 'Income', date: '2024-01-14' },
      { id: 3, name: 'Gas Station', amount: -45.20, category: 'Transport', date: '2024-01-13' },
      { id: 4, name: 'Netflix Subscription', amount: -15.99, category: 'Entertainment', date: '2024-01-12' },
      { id: 5, name: 'Coffee Shop', amount: -8.50, category: 'Food', date: '2024-01-11' },
    ],
    categories: [
      { name: 'Food', amount: 450.30, percentage: 19.1 },
      { name: 'Transport', amount: 320.50, percentage: 13.6 },
      { name: 'Entertainment', amount: 280.00, percentage: 11.9 },
      { name: 'Shopping', amount: 520.70, percentage: 22.1 },
      { name: 'Bills', amount: 781.00, percentage: 33.2 },
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Pocket Pilot</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Free Plan</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/settings" className="text-gray-600 hover:text-gray-900">
                <Settings className="w-5 h-5" />
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, User!</h1>
          <p className="text-gray-600">Here's your financial overview for January 2024</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Balance</p>
                <p className="text-2xl font-bold text-gray-900">${mockData.balance.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Income</p>
                <p className="text-2xl font-bold text-green-600">+${mockData.income.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Expenses</p>
                <p className="text-2xl font-bold text-red-600">-${mockData.expenses.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Savings</p>
                <p className="text-2xl font-bold text-blue-600">${mockData.savings.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                <Link href="/transactions/add" className="btn-secondary text-sm flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Transaction
                </Link>
              </div>
              
              <div className="space-y-4">
                {mockData.recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.name}</p>
                        <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                      </div>
                    </div>
                    <div className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Link href="/transactions" className="text-primary-600 hover:text-primary-500 text-sm font-medium">
                  View all transactions →
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Actions & Categories */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/transactions/add" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Plus className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Add Transaction</span>
                </Link>
                <Link href="/budget/setup" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <BarChart3 className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Set Budget</span>
                </Link>
                <Link href="/categories" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Settings className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Manage Categories</span>
                </Link>
              </div>
            </div>

            {/* Spending by Category */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending by Category</h3>
              <div className="space-y-3">
                {mockData.categories.map((category, index) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        index === 0 ? 'bg-blue-500' :
                        index === 1 ? 'bg-green-500' :
                        index === 2 ? 'bg-yellow-500' :
                        index === 3 ? 'bg-purple-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-gray-700">{category.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${category.amount.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">{category.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade Banner */}
            <div className="card bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upgrade to Pro</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get advanced analytics, custom categories, and detailed reports.
              </p>
              <Link href="/auth/signup/pro" className="btn-primary text-sm">
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 