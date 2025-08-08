import Link from 'next/link'
import { Check, Star, Zap, Shield, TrendingUp, BarChart3, Wallet, Brain } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Take Control of Your
              <span className="text-primary-600"> Finances</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Pocket Pilot helps you track expenses, set budgets, and get AI-powered insights 
              to make smarter financial decisions. Start your journey to financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup/free" className="btn-primary text-lg px-8 py-3">
                Start Tracking for Free
              </Link>
              <Link href="/auth/signup/premium" className="btn-premium text-lg px-8 py-3">
                Try Premium Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pocket Pilot?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you manage your money smarter, not harder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Analytics</h3>
              <p className="text-gray-600">Get detailed insights into your spending patterns and financial health.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Insights</h3>
              <p className="text-gray-600">Advanced AI helps you identify opportunities to save and invest better.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-premium-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-premium-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Bank-level security keeps your financial data safe and confidential.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Goal Tracking</h3>
              <p className="text-gray-600">Set and track financial goals with personalized recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Start free and upgrade as you grow. All plans include core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="card text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <p className="text-gray-600">Forever free</p>
              </div>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic expense tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Simple budget setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic categories</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Mobile app access</span>
                </li>
              </ul>
              
              <Link href="/auth/signup/free" className="btn-secondary w-full">
                Start Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="card text-center relative border-2 border-primary-200 bg-primary-50">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$9</div>
                <p className="text-gray-600">per month</p>
              </div>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom categories</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Multiple wallets</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Detailed reports</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Budget rules</span>
                </li>
              </ul>
              
              <Link href="/auth/signup/pro" className="btn-primary w-full">
                Upgrade to Pro
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="card text-center relative border-2 border-premium-200 bg-premium-50">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-premium-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Premium
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$19</div>
                <p className="text-gray-600">per month</p>
              </div>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>AI-powered insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Financial forecasting</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Smart reminders</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>AI assistant</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom themes</span>
                </li>
              </ul>
              
              <Link href="/auth/signup/premium" className="btn-premium w-full">
                Go Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who are already managing their finances smarter with Pocket Pilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup/free" className="btn-primary text-lg px-8 py-3">
              Start Your Free Trial
            </Link>
            <Link href="/auth/login" className="btn-secondary text-lg px-8 py-3">
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 