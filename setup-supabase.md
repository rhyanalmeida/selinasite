# Supabase Setup Guide

## Step 1: Get Your Supabase Project Information

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in to your account
3. Select your project (or create a new one)
4. Go to **Settings** > **API**
5. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## Step 2: Create Environment File

Create a `.env` file in the project root with:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here
```

## Step 3: Link to Your Project

Run this command with your project reference ID:

```bash
supabase link --project-ref your-project-ref-id
```

To find your project reference ID:
1. Go to your Supabase project dashboard
2. Look at the URL: `https://supabase.com/dashboard/project/your-project-ref-id`
3. Copy the `your-project-ref-id` part

## Step 4: Deploy Database Schema

Run this command to apply the database migrations:

```bash
supabase db push
```

## Step 5: Deploy Edge Functions

Run this command to deploy the Stripe functions:

```bash
supabase functions deploy
```

## Step 6: Test the Application

Run the development server:

```bash
npm run dev
```

## Troubleshooting

If you get errors:
1. Make sure your `.env` file is in the project root
2. Verify your Supabase URL and key are correct
3. Check that your project is active in Supabase dashboard
4. Ensure you have the correct permissions for the project 