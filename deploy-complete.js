#!/usr/bin/env node

// Complete Deployment Script for Mountain Meditation & Yoga
// This script will set up the entire system including database, functions, and configuration

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Complete Deployment for Mountain Meditation & Yoga\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found. Please run this script from the project directory.');
  process.exit(1);
}

// Check if .env exists
if (!fs.existsSync('.env')) {
  console.error('❌ Error: .env file not found. Please create it with your Supabase credentials.');
  process.exit(1);
}

async function runCommand(command, description) {
  console.log(`\n📋 ${description}`);
  console.log(`Running: ${command}`);
  
  try {
    const result = execSync(command, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    console.log(`✅ ${description} completed successfully`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    return false;
  }
}

async function deployComplete() {
  console.log('🔧 Step 1: Deploying Database Schema...');
  
  // Deploy database migrations
  const dbSuccess = await runCommand(
    'npx supabase db push',
    'Deploying database schema and migrations'
  );
  
  if (!dbSuccess) {
    console.error('❌ Database deployment failed. Please check your Supabase connection.');
    return false;
  }

  console.log('\n🔧 Step 2: Deploying Supabase Functions...');
  
  // Deploy Stripe functions
  const stripeCheckoutSuccess = await runCommand(
    'npx supabase functions deploy stripe-checkout',
    'Deploying Stripe checkout function'
  );
  
  const stripeWebhookSuccess = await runCommand(
    'npx supabase functions deploy stripe-webhook',
    'Deploying Stripe webhook function'
  );
  
  if (!stripeCheckoutSuccess || !stripeWebhookSuccess) {
    console.error('❌ Function deployment failed. Please check your Supabase CLI setup.');
    return false;
  }

  console.log('\n🔧 Step 3: Setting up Environment Variables...');
  
  // Check if environment variables are set in Supabase
  console.log('⚠️  IMPORTANT: You need to set the following environment variables in your Supabase dashboard:');
  console.log('   - Go to your Supabase project dashboard');
  console.log('   - Navigate to Settings > Functions');
  console.log('   - Add these environment variables:');
  console.log('     * STRIPE_SECRET_KEY: Your Stripe secret key');
  console.log('     * STRIPE_WEBHOOK_SECRET: Your Stripe webhook secret');
  console.log('     * SUPABASE_URL: Your Supabase project URL');
  console.log('     * SUPABASE_SERVICE_ROLE_KEY: Your Supabase service role key');

  console.log('\n🔧 Step 4: Setting up Stripe Webhooks...');
  console.log('⚠️  IMPORTANT: You need to configure Stripe webhooks:');
  console.log('   1. Go to your Stripe dashboard');
  console.log('   2. Navigate to Developers > Webhooks');
  console.log('   3. Add endpoint: https://[YOUR_PROJECT_REF].supabase.co/functions/v1/stripe-webhook');
  console.log('   4. Select these events:');
  console.log('      - checkout.session.completed');
  console.log('      - payment_intent.succeeded');
  console.log('      - customer.subscription.created');
  console.log('      - customer.subscription.updated');
  console.log('      - customer.subscription.deleted');

  console.log('\n🔧 Step 5: Testing the Setup...');
  
  // Test the development server
  const devServerSuccess = await runCommand(
    'npm run dev',
    'Starting development server for testing'
  );
  
  if (!devServerSuccess) {
    console.error('❌ Development server failed to start.');
    return false;
  }

  console.log('\n🎉 Deployment Summary:');
  console.log('✅ Database schema deployed');
  console.log('✅ Supabase functions deployed');
  console.log('✅ Development server running');
  console.log('⚠️  Manual steps required:');
  console.log('   - Set environment variables in Supabase dashboard');
  console.log('   - Configure Stripe webhooks');
  console.log('   - Test the complete user flow');

  console.log('\n📋 Next Steps:');
  console.log('1. Open http://localhost:5179/ in your browser');
  console.log('2. Test the complete user flow:');
  console.log('   - Sign up for an account');
  console.log('   - Select a program and make payment');
  console.log('   - Verify you are redirected to the booking page');
  console.log('   - Test booking a session');
  console.log('3. Deploy to production when ready');

  console.log('\n🚀 Your Mountain Meditation & Yoga system is ready for testing!');
  
  return true;
}

// Run the deployment
deployComplete().then((success) => {
  if (success) {
    console.log('\n✅ Complete deployment finished successfully!');
  } else {
    console.log('\n❌ Deployment failed. Please check the errors above.');
    process.exit(1);
  }
}).catch((error) => {
  console.error('❌ Deployment script failed:', error);
  process.exit(1);
}); 