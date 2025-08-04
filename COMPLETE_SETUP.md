# 🚀 Complete Setup Guide - Mountain Meditation & Yoga

## 📊 Complete System Architecture

```mermaid
graph TD
    A[User visits site] --> B{User logged in?}
    B -->|No| C[Show "Start Your Journey"]
    B -->|Yes| D[Show "Explore Programs"]
    
    C --> E[User clicks button]
    E --> F[Redirect to /signup]
    F --> G[User creates account]
    G --> H[Store in Supabase Auth]
    H --> I[Redirect to /programs]
    
    D --> I
    I --> J[User sees programs]
    J --> K[User clicks "Get Started"]
    K --> L{User logged in?}
    L -->|No| M[Store product in sessionStorage]
    M --> N[Redirect to /login]
    N --> O[User logs in]
    O --> P[Retrieve product from sessionStorage]
    P --> Q[Call Stripe Checkout Function]
    
    L -->|Yes| Q
    Q --> R[Create Stripe Checkout Session]
    R --> S[Redirect to Stripe]
    S --> T[User completes payment]
    T --> U[Stripe Webhook triggered]
    U --> V[Update database tables]
    V --> W[Redirect to /booking]
    
    W --> X[Show Booking Calendar]
    X --> Y[User selects session time]
    Y --> Z[Confirm booking]
    Z --> AA[Send confirmation email]
    AA --> BB[User can access sessions]

    subgraph "Database Tables"
        CC[stripe_customers]
        DD[stripe_subscriptions]
        EE[stripe_orders]
        FF[bookings]
        GG[user_profiles]
    end

    subgraph "Supabase Functions"
        HH[stripe-checkout]
        II[stripe-webhook]
        JJ[create-booking]
    end

    subgraph "Frontend Components"
        KK[AuthProvider]
        LL[Hero Component]
        MM[PricingCard]
        NN[BookingCalendar]
        OO[UserDashboard]
    end
```

## 🗄️ Database Schema

### Required Tables:

1. **stripe_customers** - Links users to Stripe customers
2. **stripe_subscriptions** - Manages subscription data
3. **stripe_orders** - Stores order/payment information
4. **bookings** - Stores user session bookings
5. **user_profiles** - Extended user information

## 🔧 Setup Steps

### Step 1: Create Database Tables
### Step 2: Deploy Stripe Functions
### Step 3: Configure Webhooks
### Step 4: Create Booking System
### Step 5: Test Complete Flow

---

## 📋 Implementation Checklist

- [ ] Create database migration files
- [ ] Deploy database schema
- [ ] Deploy Stripe functions
- [ ] Configure Stripe webhooks
- [ ] Create booking components
- [ ] Test complete payment flow
- [ ] Test booking system
- [ ] Deploy to production 