'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Palette, Check, Download, Upload, Settings } from 'lucide-react'

export default function CustomThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState('premium')
  const [customColors, setCustomColors] = useState({
    primary: '#8B5CF6',
    secondary: '#06B6D4',
    accent: '#10B981'
  })

  const themes = [
    {
      id: 'premium',
      name: 'Premium Purple',
      description: 'Default premium theme with purple accents',
      colors: {
        primary: '#8B5CF6',
        secondary: '#06B6D4',
        accent: '#10B981'
      },
      preview: 'bg-gradient-to-br from-purple-500 to-cyan-500'
    },
    {
      id: 'ocean',
      name: 'Ocean Blue',
      description: 'Calming blue theme for focused work',
      colors: {
        primary: '#3B82F6',
        secondary: '#06B6D4',
        accent: '#10B981'
      },
      preview: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      id: 'sunset',
      name: 'Sunset Orange',
      description: 'Warm orange theme for creativity',
      colors: {
        primary: '#F59E0B',
        secondary: '#EF4444',
        accent: '#10B981'
      },
      preview: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      id: 'forest',
      name: 'Forest Green',
      description: 'Natural green theme for growth',
      colors: {
        primary: '#10B981',
        secondary: '#059669',
        accent: '#3B82F6'
      },
      preview: 'bg-gradient-to-br from-green-500 to-emerald-500'
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
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Custom Themes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Custom Themes</h1>
          <p className="text-gray-600">Personalize your dashboard with custom themes and colors</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Theme Selection */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Choose Theme</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {themes.map((theme) => (
                <div
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedTheme === theme.id
                      ? 'border-premium-500 bg-premium-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">{theme.name}</h3>
                    {selectedTheme === theme.id && (
                      <Check className="w-5 h-5 text-premium-600" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{theme.description}</p>
                  <div className={`w-full h-12 rounded-lg ${theme.preview}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Colors */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Custom Colors</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Color
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={customColors.primary}
                    onChange={(e) => setCustomColors({...customColors, primary: e.target.value})}
                    className="w-12 h-12 rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    value={customColors.primary}
                    onChange={(e) => setCustomColors({...customColors, primary: e.target.value})}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="#8B5CF6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Color
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={customColors.secondary}
                    onChange={(e) => setCustomColors({...customColors, secondary: e.target.value})}
                    className="w-12 h-12 rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    value={customColors.secondary}
                    onChange={(e) => setCustomColors({...customColors, secondary: e.target.value})}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="#06B6D4"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accent Color
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={customColors.accent}
                    onChange={(e) => setCustomColors({...customColors, accent: e.target.value})}
                    className="w-12 h-12 rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    value={customColors.accent}
                    onChange={(e) => setCustomColors({...customColors, accent: e.target.value})}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="#10B981"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="card mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Theme Preview</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-premium-500 to-premium-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Pocket Pilot</span>
              <span className="px-2 py-1 bg-premium-100 text-premium-700 text-xs rounded-full font-medium">
                Premium Plan
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-premium-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Primary Button</h3>
                <button className="btn-premium text-sm">Apply Theme</button>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Secondary Button</h3>
                <button className="btn-secondary text-sm">Cancel</button>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Text Colors</h3>
                <p className="text-premium-600 text-sm">Premium text color</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="btn-premium flex items-center justify-center">
            <Check className="w-5 h-5 mr-2" />
            Apply Theme
          </button>
          <button className="btn-secondary flex items-center justify-center">
            <Download className="w-5 h-5 mr-2" />
            Export Theme
          </button>
          <button className="btn-secondary flex items-center justify-center">
            <Upload className="w-5 h-5 mr-2" />
            Import Theme
          </button>
        </div>
      </div>
    </div>
  )
} 