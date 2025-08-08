'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Calendar, Tag, Wallet, DollarSign, Upload, Camera, Receipt } from 'lucide-react'

export default function AddTransactionPage() {
  const [formData, setFormData] = useState({
    type: 'expense',
    amount: '',
    description: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    wallet: '',
    tags: [],
    receipt: null,
    notes: ''
  })

  const categories = [
    'Food & Dining', 'Transportation', 'Shopping', 'Entertainment', 
    'Bills & Utilities', 'Healthcare', 'Education', 'Travel',
    'Investment', 'Salary', 'Freelance', 'Business'
  ]

  const wallets = [
    'Main Account', 'Savings', 'Credit Card', 'Cash', 'Investment'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle transaction submission
    console.log('Transaction data:', formData)
  }

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
                <Plus className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Add Transaction</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add Transaction</h1>
          <p className="text-gray-600">Quick and easy transaction entry with Pro features</p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Transaction Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transaction Type
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="expense"
                    checked={formData.type === 'expense'}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="text-pro-600 focus:ring-pro-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Expense</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="income"
                    checked={formData.type === 'income'}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="text-pro-600 focus:ring-pro-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Income</span>
                </label>
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pro-500 focus:border-transparent"
                  placeholder="0.00"
                  step="0.01"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pro-500 focus:border-transparent"
                placeholder="What was this transaction for?"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pro-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pro-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Wallet */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Wallet/Account
              </label>
              <select
                value={formData.wallet}
                onChange={(e) => setFormData({...formData, wallet: e.target.value})}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pro-500 focus:border-transparent"
                required
              >
                <option value="">Select wallet</option>
                {wallets.map((wallet) => (
                  <option key={wallet} value={wallet}>{wallet}</option>
                ))}
              </select>
            </div>

            {/* Receipt Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Receipt (Optional)
              </label>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Take Photo
                </button>
                <button
                  type="button"
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </button>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes (Optional)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows={3}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pro-500 focus:border-transparent"
                placeholder="Add any additional notes..."
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 btn-pro"
              >
                Add Transaction
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>

        {/* Pro Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                • Recurring Transaction
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                • Split Transaction
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                • Import from Bank
              </button>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Categories</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                • Grocery Store
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                • Gas Station
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                • Coffee Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 