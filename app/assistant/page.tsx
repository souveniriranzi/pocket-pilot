'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MessageSquare, Send, Brain, DollarSign, TrendingUp, Target } from 'lucide-react'

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: 'Hello! I\'m your AI financial assistant. How can I help you today?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')

  const quickQuestions = [
    'How can I save more money?',
    'What\'s my spending pattern?',
    'Help me create a budget',
    'Investment advice'
  ]

  const handleSend = () => {
    if (!input.trim()) return
    
    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date()
    }
    
    setMessages([...messages, newMessage])
    setInput('')
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'assistant',
        content: 'I\'m analyzing your financial data to provide personalized advice. This is a demo response.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

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
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Assistant</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Financial Assistant</h1>
          <p className="text-gray-600">Get personalized financial advice and insights</p>
        </div>

        <div className="card h-[600px] flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-premium-500 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInput(question)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about your finances..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-premium-500 text-white rounded-lg hover:bg-premium-600"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card text-center">
            <Brain className="w-8 h-8 text-premium-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Smart Analysis</h3>
            <p className="text-sm text-gray-600">AI-powered insights into your spending patterns</p>
          </div>
          <div className="card text-center">
            <DollarSign className="w-8 h-8 text-premium-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Budget Advice</h3>
            <p className="text-sm text-gray-600">Get personalized budget recommendations</p>
          </div>
          <div className="card text-center">
            <Target className="w-8 h-8 text-premium-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Goal Planning</h3>
            <p className="text-sm text-gray-600">Plan and track your financial goals</p>
          </div>
        </div>
      </div>
    </div>
  )
} 