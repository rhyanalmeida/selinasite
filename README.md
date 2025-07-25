# 🏔️ Mountain Meditation & Yoga

A modern, responsive web application for meditation and yoga classes with integrated authentication, subscription management, and Stripe checkout.

## 🌟 Features

- **User Authentication** - Secure login/signup with Supabase
- **Subscription Management** - Multiple meditation and yoga programs
- **Stripe Integration** - Secure payment processing
- **Responsive Design** - Works on all devices
- **Protected Routes** - Secure access to premium content
- **User Profiles** - Personal account management
- **Booking System** - Session scheduling and management

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Payments**: Stripe
- **Deployment**: Netlify
- **Edge Functions**: Supabase Edge Functions

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account (for payments)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rhyanalmeida/selinasite.git
   cd selinasite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the project root:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

4. **Deploy database schema**
   ```bash
   supabase link --project-ref your-project-ref
   supabase db push
   ```

5. **Deploy edge functions**
   ```bash
   supabase functions deploy
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Setup

The application requires the following database tables (automatically created by migrations):

- `stripe_customers` - Links users to Stripe customers
- `stripe_subscriptions` - Manages subscription data
- `stripe_orders` - Stores order information
- `users` - User profile data

## 🔐 Authentication Flow

1. **Sign Up**: Users create accounts with email/password
2. **Sign In**: Secure authentication with Supabase
3. **Protected Routes**: Access control for premium content
4. **User Profile**: Manage personal information

## 💳 Payment Integration

- **Stripe Checkout**: Secure payment processing
- **Subscription Management**: Automatic billing
- **Order Tracking**: Complete purchase history
- **Webhook Handling**: Real-time payment updates

## 📱 Available Programs

- Complete Wellness Access ($25/week)
- Unlimited Meditations ($25/month)
- Holistic Healing Plan ($25/month)
- Unlimited Yoga Classes ($25/month)
- Relationship Counseling ($25/month)
- Guided Meditations Premium ($25/week)

## 🎨 UI Components

- **Hero Section**: Engaging landing page
- **Program Cards**: Interactive pricing display
- **Booking Form**: Session scheduling
- **User Dashboard**: Account management
- **Responsive Navigation**: Mobile-friendly menu

## 🚀 Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Project Structure

```
src/
├── components/          # React components
│   ├── Auth/           # Authentication components
│   ├── pages/          # Page components
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── services/           # API services
└── types/              # TypeScript types
```

## 🧪 Testing

The application includes a test component (`AuthTest.tsx`) for verifying:
- Supabase connection
- User authentication
- Database access
- Checkout flow

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email info@mountainmeditation.com or create an issue in this repository.

---

**Built with ❤️ for the Mountain Meditation & Yoga community** 