'use client'

import Link from 'next/link'
import { FileText, Download, BarChart3 } from 'lucide-react'

export default function GenerateReportsPage() {
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
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Generate Reports</span>
            </div>
            <button className="btn-pro text-sm flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Generate Reports</h1>
          <p className="text-gray-600">Create comprehensive financial reports and insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 border-2 rounded-lg cursor-pointer transition-all border-pro-500 bg-pro-50">
            <div className="flex items-center space-x-3 mb-3">
              <BarChart3 className="w-8 h-8 text-pro-600" />
              <h3 className="font-medium text-gray-900">Spending Analysis</h3>
            </div>
            <p className="text-sm text-gray-600">Detailed breakdown of your spending patterns</p>
          </div>
          <div className="p-6 border-2 rounded-lg cursor-pointer transition-all border-gray-200 hover:border-gray-300">
            <div className="flex items-center space-x-3 mb-3">
              <BarChart3 className="w-8 h-8 text-gray-600" />
              <h3 className="font-medium text-gray-900">Income Report</h3>
            </div>
            <p className="text-sm text-gray-600">Track your income sources and trends</p>
          </div>
          <div className="p-6 border-2 rounded-lg cursor-pointer transition-all border-gray-200 hover:border-gray-300">
            <div className="flex items-center space-x-3 mb-3">
              <BarChart3 className="w-8 h-8 text-gray-600" />
              <h3 className="font-medium text-gray-900">Budget Performance</h3>
            </div>
            <p className="text-sm text-gray-600">Compare actual vs planned spending</p>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Spending Analysis Preview</h2>
            <button className="btn-pro text-sm flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Total Amount</h3>
                <p className="text-2xl font-bold text-gray-900">$2,847.50</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Transactions</h3>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Categories</h3>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Chart Preview</h3>
              <p className="text-gray-500">Interactive charts and graphs will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 