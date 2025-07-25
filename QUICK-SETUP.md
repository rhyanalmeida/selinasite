# 🚀 Quick Setup Guide - Mountain Meditation & Yoga

## Step 1: Set Up Environment Variables

**Option A: Use the setup script (Recommended)**
```bash
node setup-env.js
```

**Option B: Manual setup**
Create a `.env` file in the project root with:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here
```

## Step 2: Get Your Supabase Credentials

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project (or create a new one)
3. Go to **Settings** > **API**
4. Copy:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## Step 3: Link to Your Supabase Project

```bash
supabase link --project-ref YOUR-PROJECT-REF-ID
```

To find your project reference ID:
- Look at your dashboard URL: `https://supabase.com/dashboard/project/YOUR-PROJECT-REF-ID`
- Copy the `YOUR-PROJECT-REF-ID` part

## Step 4: Deploy Database Schema

```bash
supabase db push
```

This will create all the necessary tables for:
- User authentication
- Stripe customers
- Stripe subscriptions
- Stripe orders

## Step 5: Deploy Edge Functions

```bash
supabase functions deploy
```

This deploys the Stripe checkout and webhook functions.

## Step 6: Test the Application

```bash
npm run dev
```

Then:
1. Open your browser to the local development URL
2. Scroll down to the "Supabase Auth Test" section
3. Test the connection first
4. Try signing up with a test email
5. Try signing in
6. Test the checkout flow by clicking "Get Started" on any program

## Step 7: Test the Full Flow

1. **Authentication Test**: Use the test component on the home page
2. **Checkout Flow**: 
   - Go to Programs section
   - Click "Get Started" on any plan
   - If not logged in, it should redirect to login
   - After login, it should redirect to Stripe checkout
3. **Protected Routes**: Try accessing `/success` without being logged in

## Troubleshooting

### If you get "Supabase not configured" errors:
- Make sure your `.env` file is in the project root
- Verify the URL and key are correct
- Restart the development server

### If authentication doesn't work:
- Check the browser console for errors
- Verify your Supabase project is active
- Make sure you have the correct permissions

### If checkout doesn't work:
- Check that the Edge Functions are deployed
- Verify your Stripe configuration in Supabase
- Check the browser console for errors

## Success Indicators

✅ **Working correctly when:**
- You can sign up and sign in
- The test component shows "Database connection successful!"
- Clicking "Get Started" redirects to Stripe checkout
- Protected routes work properly
- User profile shows correctly in the header

## Next Steps

Once everything is working:
1. Remove the `AuthTest` component from `HomePage.tsx`
2. Set up your Stripe webhook endpoints
3. Configure your production environment variables
4. Deploy to your hosting platform

---

**Need help?** Check the browser console for detailed error messages! 