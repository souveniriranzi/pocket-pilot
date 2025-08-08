 Pocket Pilot - Smart Financial Management

A complete frontend-only version of a financial management web application built with Next.js 14 and Tailwind CSS. This project demonstrates a modern SaaS application with tiered pricing, beautiful UI, and fully functional mockup features.

 🚀 Features

 ✨ Core Features
- **Responsive Design**: Works perfectly on mobile and desktop
- **Tiered Pricing**: Free, Pro ($9/month), and Premium ($19/month) plans
- **Authentication System**: Complete signup/login flows for each tier
- **Dashboard Views**: Unique dashboards for each subscription level
- **Transaction Management**: Add, view, and categorize transactions
- **Budget Tracking**: Visual budget progress and spending analysis
- **Mock Data**: Realistic financial data for demonstration

 🎨 Design Features
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Tier-Specific Branding**: Different color schemes and features per plan
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Mobile-First**: Fully responsive design
- **Accessibility**: Proper semantic HTML and ARIA labels

 📊 Dashboard Features

 Free Tier
- Basic expense tracking
- Simple budget setup
- Basic categories
- Recent transactions view
- Spending by category breakdown

 Pro Tier
- Everything in Free
- Advanced analytics
- Custom categories
- Multiple wallets
- Detailed reports
- Budget rules
- Export functionality

 Premium Tier
- Everything in Pro
- AI-powered insights
- Financial forecasting
- Smart reminders
- AI assistant
- Team collaboration
- Custom themes

 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts (for future implementation)
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

 📁 Project Structure

```
pocket-pilot/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   └── signup/
│   │       ├── free/
│   │       ├── pro/
│   │       └── premium/
│   ├── dashboard/
│   │   ├── free/
│   │   ├── pro/
│   │   └── premium/
│   ├── transactions/
│   │   └── add/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── NavBar.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

 🚀 Getting Started

 Prerequisites
- Node.js 18+ 
- npm or yarn

 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pocket-pilot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

 🎯 Demo Accounts

For testing different tiers, use these demo accounts:

- **Free Tier**: `free@demo.com` / `password`
- **Pro Tier**: `pro@demo.com` / `password`
- **Premium Tier**: `premium@demo.com` / `password`

 📱 Pages & Routes

 Landing & Auth
- `/` - Landing page with pricing
- `/auth/login` - Login page
- `/auth/signup/free` - Free tier signup
- `/auth/signup/pro` - Pro tier signup
- `/auth/signup/premium` - Premium tier signup

 Dashboards
- `/dashboard/free` - Free tier dashboard
- `/dashboard/pro` - Pro tier dashboard
- `/dashboard/premium` - Premium tier dashboard

 Features
- `/transactions/add` - Add new transaction
- `/budget/setup` - Budget setup (Free)
- `/budget/rules` - Budget rules (Pro+)
- `/categories` - Category management (Free)
- `/categories/custom` - Custom categories (Pro+)
- `/analytics/basic` - Basic analytics (Free)
- `/reports` - Detailed reports (Pro+)
- `/wallets` - Wallet management (Pro+)
- `/insights/ai` - AI insights (Premium)
- `/forecast` - Financial forecasting (Premium)
- `/assistant` - AI assistant (Premium)
- `/collaboration` - Team collaboration (Premium)
- `/themes` - Custom themes (Premium)

 🎨 Design System

 Colors
- **Primary**: Blue gradient (`0ea5e9` to `0284c7`)
- **Secondary**: Purple gradient (`d946ef` to `c026d3`)
- **Premium**: Orange gradient (`f97316` to `ea580c`)
- **Success**: Green (`22c55e`)
- **Warning**: Yellow (`eab308`)
- **Error**: Red (`ef4444`)

 Components
- **Cards**: White background with subtle shadows
- **Buttons**: Primary, secondary, and premium variants
- **Forms**: Consistent input styling with icons
- **Navigation**: Responsive navbar with mobile menu

 🔧 Customization

 Adding New Features
1. Create new page in appropriate directory
2. Add navigation links in relevant dashboard
3. Update tier restrictions as needed
4. Add mock data for demonstration

 Styling Changes
- Modify `tailwind.config.js` for theme changes
- Update `app/globals.css` for custom styles
- Use existing component classes for consistency

 📦 Deployment

 Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Deploy with zero configuration

 Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Easy deployment option
- **AWS Amplify**: Full-stack deployment

 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

 📄 License

This project is open source and available under the [MIT License](LICENSE).

 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Design inspiration from modern SaaS applications

---

**Note**: This is a frontend-only demonstration. In a real application, you would need:
- Backend API integration
- Database for data persistence
- Authentication service
- Payment processing
- Real-time updates
- Data validation and security measures

For questions or support, please open an issue on GitHub. 