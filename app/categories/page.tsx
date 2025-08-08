'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Tag, Plus, Edit, Trash2 } from 'lucide-react'

export default function CustomCategoriesPage() {
  const customCategories = [
    {
      id: 1,
      name: 'Coffee & Snacks',
      budget: 150,
      spent: 120,
      remaining: 30,
      transactions: 45
    },
    {
      id: 2,
      name: 'Work Lunch',
      budget: 300,
      spent: 280,
      remaining: 20,
      transactions: 22
    },
    {
      id: 3,
      name: 'Weekend Activities',
      budget: 200,
      spent: 150,
      remaining: 50,
      transactions: 8
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
                <Tag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Custom Categories</span>
            </div>
            <button className="btn-pro text-sm flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Add Category
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Custom Categories</h1>
          <p className="text-gray-600">Create and manage your personalized spending categories</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Your Categories</h2>
            <span className="text-sm text-gray-500">{customCategories.length} custom categories</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customCategories.map((category) => (
              <div key={category.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Budget:</span>
                    <span className="font-medium">${category.budget}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Spent:</span>
                    <span className="font-medium">${category.spent}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Remaining:</span>
                    <span className="font-medium">${category.remaining}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-pro-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(category.spent / category.budget) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 