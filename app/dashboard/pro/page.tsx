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
  PiggyBank,
  Star,
  Filter,
  Download,
  PieChart,
  Target,
  Tag,
  FileText
} from 'lucide-react'

export default function ProDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const mockData = {
    balance: 2847.50,
    income: 5200,
    expenses: 2352.50,
    savings: 847.50,
    budgetProgress: 78,
    recentTransactions: [
      { id: 1, name: 'Grocery Store', amount: -85.30, category: 'Food', date: '2024-01-15', wallet: 'Main Account' },
      { id: 2, name: 'Salary Deposit', amount: 5200, category: 'Income', date: '2024-01-14', wallet: 'Main Account' },
      { id: 3, name: 'Gas Station', amount: -45.20, category: 'Transport', date: '2024-01-13', wallet: 'Main Account' },
      { id: 4, name: 'Netflix Subscription', amount: -15.99, category: 'Entertainment', date: '2024-01-12', wallet: 'Main Account' },
      { id: 5, name: 'Coffee Shop', amount: -8.50, category: 'Food', date: '2024-01-11', wallet: 'Main Account' },
    ],
    categories: [
      { name: 'Food', amount: 450.30, percentage: 19.1, budget: 500, remaining: 49.70 },
      { name: 'Transport', amount: 320.50, percentage: 13.6, budget: 400, remaining: 79.50 },
      { name: 'Entertainment', amount: 280.00, percentage: 11.9, budget: 300, remaining: 20.00 },
      { name: 'Shopping', amount: 520.70, percentage: 22.1, budget: 600, remaining: 79.30 },
      { name: 'Bills', amount: 781.00, percentage: 33.2, budget: 800, remaining: 19.00 },
    ],
    wallets: [
      { name: 'Main Account', balance: 2847.50, type: 'Checking' },
      { name: 'Savings', balance: 12500.00, type: 'Savings' },
      { name: 'Investment', balance: 45000.00, type: 'Investment' },
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Pocket Pilot</span>
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Pro Plan</span>
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Pro User!</h1>
          <p className="text-gray-600">Here's your advanced financial overview for January 2024</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card border-l-4 border-primary-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Balance</p>
                <p className="text-2xl font-bold text-gray-900">${mockData.balance.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="card border-l-4 border-green-500">
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

          <div className="card border-l-4 border-red-500">
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

          <div className="card border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Budget Progress</p>
                <p className="text-2xl font-bold text-blue-600">{mockData.budgetProgress}%</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
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
                <div className="flex items-center space-x-2">
                  <button className="btn-secondary text-sm flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </button>
                  <Link href="/transactions/add" className="btn-primary text-sm flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Transaction
                  </Link>
                </div>
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
                        <p className="text-sm text-gray-500">{transaction.category} • {transaction.wallet} • {transaction.date}</p>
                      </div>
                    </div>
                    <div className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <Link href="/transactions" className="text-primary-600 hover:text-primary-500 text-sm font-medium">
                  View all transactions →
                </Link>
                <button className="text-gray-600 hover:text-gray-900 text-sm flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
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
                <Link href="/budget-rules" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Settings className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Budget Rules</span>
                </Link>
                <Link href="/categories" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Tag className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Custom Categories</span>
                </Link>
                <Link href="/reports" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <FileText className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Generate Reports</span>
                </Link>
              </div>
            </div>

            {/* Budget Progress */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Progress</h3>
              <div className="space-y-4">
                {mockData.categories.map((category, index) => (
                  <div key={category.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-sm text-gray-500">${category.amount.toFixed(2)} / ${category.budget}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          (category.amount / category.budget) > 0.9 ? 'bg-red-500' :
                          (category.amount / category.budget) > 0.7 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((category.amount / category.budget) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">${category.remaining.toFixed(2)} remaining</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wallets */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Wallets</h3>
              <div className="space-y-3">
                {mockData.wallets.map((wallet) => (
                  <div key={wallet.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{wallet.name}</p>
                      <p className="text-sm text-gray-500">{wallet.type}</p>
                    </div>
                    <p className="font-semibold text-gray-900">${wallet.balance.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade Banner */}
            <div className="card bg-gradient-to-r from-premium-50 to-premium-100 border border-premium-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upgrade to Premium</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get AI-powered insights, forecasting, and advanced automation.
              </p>
              <Link href="/auth/signup/premium" className="btn-premium text-sm">
                Go Premium
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 