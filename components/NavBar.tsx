'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Wallet, BarChart3, Settings, User } from 'lucide-react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Pocket Pilot</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signup/free" className="btn-secondary text-sm">
                Start Free
              </Link>
              <Link href="/auth/signup/pro" className="btn-primary text-sm">
                Go Pro
              </Link>
              <Link href="/auth/signup/premium" className="btn-premium text-sm">
                Premium
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/auth/login"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <div className="pt-4 space-y-2">
                <Link
                  href="/auth/signup/free"
                  className="block w-full text-center btn-secondary text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Free
                </Link>
                <Link
                  href="/auth/signup/pro"
                  className="block w-full text-center btn-primary text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Go Pro
                </Link>
                <Link
                  href="/auth/signup/premium"
                  className="block w-full text-center btn-premium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Premium
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 