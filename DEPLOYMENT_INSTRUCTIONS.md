# 🚀 COMPLETE DEPLOYMENT INSTRUCTIONS

## Step 1: Database Setup (Manual)
1. Go to Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: Mountain Meditation
3. Navigate to SQL Editor
4. Copy and paste the following SQL:

```sql
-- Copy the entire content from: supabase/migrations/20250726000000_booking_system.sql
```

5. Run the SQL to create all tables

## Step 2: Deploy Supabase Functions
1. Go to Supabase Dashboard → Functions
2. Create new function: stripe-checkout
3. Copy code from: supabase/functions/stripe-checkout/index.ts
4. Create new function: stripe-webhook
5. Copy code from: supabase/functions/stripe-webhook/index.ts

## Step 3: Set Environment Variables
In Supabase Dashboard → Settings → Functions, add:
- STRIPE_SECRET_KEY=sk_live_YOUR_STRIPE_SECRET_KEY_HERE
- STRIPE_WEBHOOK_SECRET=[Get from Stripe Dashboard]
- SUPABASE_URL=https://yloroyrwlfcvocwxtnta.supabase.co
- SUPABASE_SERVICE_ROLE_KEY=[Get from Supabase Dashboard]

## Step 4: Configure Stripe Webhooks
1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: https://yloroyrwlfcvocwxtnta.supabase.co/functions/v1/stripe-webhook
3. Select events: checkout.session.completed, payment_intent.succeeded

## Step 5: Test Complete System
1. Open http://localhost:5179/ in browser
2. Test: Sign up → Select program → Payment → Booking
3. Verify all functionality works
