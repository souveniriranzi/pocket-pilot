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
  Crown,
  Filter,
  Download,
  PieChart,
  Target,
  Brain,
  Zap,
  MessageSquare,
  Bell,
  Users,
  Palette
} from 'lucide-react'

export default function PremiumDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const mockData = {
    balance: 2847.50,
    income: 5200,
    expenses: 2352.50,
    savings: 847.50,
    budgetProgress: 78,
    aiInsights: [
      { id: 1, type: 'warning', message: 'Your food spending is 15% higher than last month', action: 'Review budget' },
      { id: 2, type: 'opportunity', message: 'You could save $200/month by optimizing subscriptions', action: 'View analysis' },
      { id: 3, type: 'forecast', message: 'Based on trends, you\'ll reach your savings goal by March', action: 'See forecast' },
    ],
    recentTransactions: [
      { id: 1, name: 'Grocery Store', amount: -85.30, category: 'Food', date: '2024-01-15', wallet: 'Main Account', aiTag: 'High spending' },
      { id: 2, name: 'Salary Deposit', amount: 5200, category: 'Income', date: '2024-01-14', wallet: 'Main Account', aiTag: null },
      { id: 3, name: 'Gas Station', amount: -45.20, category: 'Transport', date: '2024-01-13', wallet: 'Main Account', aiTag: null },
      { id: 4, name: 'Netflix Subscription', amount: -15.99, category: 'Entertainment', date: '2024-01-12', wallet: 'Main Account', aiTag: 'Recurring' },
      { id: 5, name: 'Coffee Shop', amount: -8.50, category: 'Food', date: '2024-01-11', wallet: 'Main Account', aiTag: 'Frequent' },
    ],
    categories: [
      { name: 'Food', amount: 450.30, percentage: 19.1, budget: 500, remaining: 49.70, aiSuggestion: 'Consider meal planning' },
      { name: 'Transport', amount: 320.50, percentage: 13.6, budget: 400, remaining: 79.50, aiSuggestion: 'Good progress' },
      { name: 'Entertainment', amount: 280.00, percentage: 11.9, budget: 300, remaining: 20.00, aiSuggestion: 'Near limit' },
      { name: 'Shopping', amount: 520.70, percentage: 22.1, budget: 600, remaining: 79.30, aiSuggestion: 'On track' },
      { name: 'Bills', amount: 781.00, percentage: 33.2, budget: 800, remaining: 19.00, aiSuggestion: 'Almost at limit' },
    ],
    wallets: [
      { name: 'Main Account', balance: 2847.50, type: 'Checking' },
      { name: 'Savings', balance: 12500.00, type: 'Savings' },
      { name: 'Investment', balance: 45000.00, type: 'Investment' },
    ],
    forecast: {
      nextMonth: 3200,
      savingsGoal: 15000,
      projectedSavings: 12500,
      monthsToGoal: 2
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-premium-500 to-premium-600 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Pocket Pilot</span>
              <span className="px-2 py-1 bg-premium-100 text-premium-700 text-xs rounded-full font-medium">Premium Plan</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <Bell className="w-5 h-5" />
              </button>
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Premium User!</h1>
          <p className="text-gray-600">Your AI-powered financial insights for January 2024</p>
        </div>

        {/* AI Insights Banner */}
        <div className="card bg-gradient-to-r from-premium-50 to-premium-100 border border-premium-200 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-premium-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
                <p className="text-gray-600 text-sm">3 new insights available</p>
              </div>
            </div>
            <Link href="/insights/ai" className="btn-premium text-sm">
              View All
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card border-l-4 border-premium-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Balance</p>
                <p className="text-2xl font-bold text-gray-900">${mockData.balance.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-premium-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-premium-600" />
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
                <p className="text-sm font-medium text-gray-600">Savings Goal</p>
                <p className="text-2xl font-bold text-blue-600">{mockData.forecast.monthsToGoal} months</p>
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
                  <Link href="/transactions/add" className="btn-premium text-sm flex items-center">
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
                        {transaction.aiTag && (
                          <span className="inline-block px-2 py-1 bg-premium-100 text-premium-700 text-xs rounded-full mt-1">
                            {transaction.aiTag}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <Link href="/transactions" className="text-premium-600 hover:text-premium-500 text-sm font-medium">
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Premium Actions</h3>
              <div className="space-y-3">
                <Link href="/insights/ai" className="flex items-center p-3 bg-premium-50 rounded-lg hover:bg-premium-100 transition-colors">
                  <Brain className="w-5 h-5 text-premium-600 mr-3" />
                  <span className="text-gray-700">AI Insights</span>
                </Link>
                <Link href="/forecast" className="flex items-center p-3 bg-premium-50 rounded-lg hover:bg-premium-100 transition-colors">
                  <Zap className="w-5 h-5 text-premium-600 mr-3" />
                  <span className="text-gray-700">Financial Forecast</span>
                </Link>
                <Link href="/assistant" className="flex items-center p-3 bg-premium-50 rounded-lg hover:bg-premium-100 transition-colors">
                  <MessageSquare className="w-5 h-5 text-premium-600 mr-3" />
                  <span className="text-gray-700">AI Assistant</span>
                </Link>
                <Link href="/collaboration" className="flex items-center p-3 bg-premium-50 rounded-lg hover:bg-premium-100 transition-colors">
                  <Users className="w-5 h-5 text-premium-600 mr-3" />
                  <span className="text-gray-700">Team Collaboration</span>
                </Link>
                <Link href="/themes" className="flex items-center p-3 bg-premium-50 rounded-lg hover:bg-premium-100 transition-colors">
                  <Palette className="w-5 h-5 text-premium-600 mr-3" />
                  <span className="text-gray-700">Custom Themes</span>
                </Link>
              </div>
            </div>

            {/* AI Insights */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Brain className="w-5 h-5 text-premium-600 mr-2" />
                AI Insights
              </h3>
              <div className="space-y-3">
                {mockData.aiInsights.map((insight) => (
                  <div key={insight.id} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">{insight.message}</p>
                    <button className="text-premium-600 hover:text-premium-500 text-xs font-medium">
                      {insight.action} →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Forecast */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Forecast</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">Next month's projected expenses</p>
                  <p className="text-lg font-bold text-blue-600">${mockData.forecast.nextMonth.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-700">Months to savings goal</p>
                  <p className="text-lg font-bold text-green-600">{mockData.forecast.monthsToGoal} months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 