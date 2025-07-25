# Database Deployment Guide

Since the CLI linking had permission issues, let's deploy the database schema manually through the Supabase dashboard.

## Step 1: Access Your Supabase Dashboard

1. Go to [https://supabase.com/dashboard/project/ivlupfsjjekiftvwgdid](https://supabase.com/dashboard/project/ivlupfsjjekiftvwgdid)
2. Navigate to **SQL Editor** in the left sidebar

## Step 2: Run the Database Migrations

Copy and paste each migration file content into the SQL Editor and run them in order:

### Migration 1: Stripe Integration Schema
```sql
-- Copy the content from: supabase/migrations/20250724125125_round_shrine.sql
-- This creates the Stripe tables and views
```

### Migration 2: Additional Schema
```sql
-- Copy the content from: supabase/migrations/20250725132243_gentle_tower.sql
```

### Migration 3: Final Schema
```sql
-- Copy the content from: supabase/migrations/20250725134842_purple_tower.sql
```

## Step 3: Deploy Edge Functions

1. Go to **Edge Functions** in the left sidebar
2. Deploy the `stripe-checkout` function
3. Deploy the `stripe-webhook` function

## Step 4: Test the Application

1. The development server should be running at `http://localhost:5173`
2. Open your browser and go to the local URL
3. Scroll down to the "Supabase Auth Test" section
4. Test the connection first
5. Try signing up with a test email
6. Test the checkout flow

## Alternative: Use Supabase CLI with Service Role

If you want to use the CLI, you can set the service role key:

```bash
supabase link --project-ref ivlupfsjjekiftvwgdid --password your-database-password
```

Then run:
```bash
supabase db push
supabase functions deploy
```

## Current Status

✅ **Environment variables configured**
✅ **Application builds successfully**
✅ **Supabase connection established**
⏳ **Database schema needs deployment**
⏳ **Edge functions need deployment**

Once you complete the database deployment, the authentication and checkout flow will be fully functional! 