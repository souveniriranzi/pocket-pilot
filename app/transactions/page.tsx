'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft,
  Search,
  Filter,
  Download,
  Plus,
  Calendar,
  DollarSign,
  CreditCard,
  ShoppingBag,
  Car,
  Home,
  Utensils,
  Gamepad2,
  Heart,
  BookOpen,
  Plane
} from 'lucide-react'

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  // Mock transactions data
  const transactions = [
    { id: 1, name: 'Grocery Store', amount: -85.30, category: 'Food', type: 'expense', date: '2024-01-15', description: 'Weekly groceries' },
    { id: 2, name: 'Salary Deposit', amount: 5200, category: 'Income', type: 'income', date: '2024-01-14', description: 'Monthly salary' },
    { id: 3, name: 'Gas Station', amount: -45.20, category: 'Transport', type: 'expense', date: '2024-01-13', description: 'Fuel for car' },
    { id: 4, name: 'Netflix Subscription', amount: -15.99, category: 'Entertainment', type: 'expense', date: '2024-01-12', description: 'Monthly subscription' },
    { id: 5, name: 'Coffee Shop', amount: -8.50, category: 'Food', type: 'expense', date: '2024-01-11', description: 'Morning coffee' },
    { id: 6, name: 'Freelance Project', amount: 1200, category: 'Income', type: 'income', date: '2024-01-10', description: 'Web development project' },
    { id: 7, name: 'Amazon Purchase', amount: -67.89, category: 'Shopping', type: 'expense', date: '2024-01-09', description: 'Books and electronics' },
    { id: 8, name: 'Electric Bill', amount: -120.50, category: 'Bills', type: 'expense', date: '2024-01-08', description: 'Monthly electricity' },
    { id: 9, name: 'Restaurant', amount: -45.00, category: 'Food', type: 'expense', date: '2024-01-07', description: 'Dinner with friends' },
    { id: 10, name: 'Uber Ride', amount: -23.40, category: 'Transport', type: 'expense', date: '2024-01-06', description: 'Airport transfer' },
    { id: 11, name: 'Movie Tickets', amount: -32.00, category: 'Entertainment', type: 'expense', date: '2024-01-05', description: 'Weekend movie' },
    { id: 12, name: 'Investment Return', amount: 450, category: 'Income', type: 'income', date: '2024-01-04', description: 'Stock dividends' },
    { id: 13, name: 'Gym Membership', amount: -29.99, category: 'Health', type: 'expense', date: '2024-01-03', description: 'Monthly gym fee' },
    { id: 14, name: 'Phone Bill', amount: -89.99, category: 'Bills', type: 'expense', date: '2024-01-02', description: 'Monthly phone plan' },
    { id: 15, name: 'Bookstore', amount: -28.50, category: 'Shopping', type: 'expense', date: '2024-01-01', description: 'New books' },
  ]

  const categories = [
    { name: 'Food', icon: Utensils, color: 'bg-orange-100 text-orange-600' },
    { name: 'Transport', icon: Car, color: 'bg-blue-100 text-blue-600' },
    { name: 'Entertainment', icon: Gamepad2, color: 'bg-purple-100 text-purple-600' },
    { name: 'Shopping', icon: ShoppingBag, color: 'bg-pink-100 text-pink-600' },
    { name: 'Bills', icon: Home, color: 'bg-gray-100 text-gray-600' },
    { name: 'Income', icon: DollarSign, color: 'bg-green-100 text-green-600' },
    { name: 'Health', icon: Heart, color: 'bg-red-100 text-red-600' },
  ]

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName)
    if (category) {
      const IconComponent = category.icon
      return <IconComponent className="w-4 h-4" />
    }
    return <CreditCard className="w-4 h-4" />
  }

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName)
    return category ? category.color : 'bg-gray-100 text-gray-600'
  }

  // Filter and sort transactions
  const filteredTransactions = transactions
    .filter(transaction => {
      const matchesSearch = transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || transaction.category === selectedCategory
      const matchesType = selectedType === 'all' || transaction.type === selectedType
      return matchesSearch && matchesCategory && matchesType
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'amount':
          return Math.abs(b.amount) - Math.abs(a.amount)
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const totalIncome = filteredTransactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = filteredTransactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/free" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">All Transactions</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-secondary text-sm flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <Link href="/transactions/add" className="btn-primary text-sm flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Add Transaction
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Transactions</p>
                <p className="text-2xl font-bold text-gray-900">{filteredTransactions.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Income</p>
                <p className="text-2xl font-bold text-green-600">+${totalIncome.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                <p className="text-2xl font-bold text-red-600">-${totalExpenses.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="date">Sort by Date</option>
              <option value="amount">Sort by Amount</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>

        {/* Transactions List */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Transaction</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{transaction.name}</p>
                        <p className="text-sm text-gray-500">{transaction.description}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getCategoryColor(transaction.category)}`}>
                          {getCategoryIcon(transaction.category)}
                        </div>
                        <span className="text-gray-700">{transaction.category}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">{new Date(transaction.date).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No transactions found</p>
              <p className="text-sm text-gray-400">Try adjusting your filters or add a new transaction</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 