const { execSync } = require('child_process');

console.log('🔍 Checking your Stripe products...\n');

try {
  // List all products
  console.log('📦 Your Stripe Products:');
  const products = execSync('stripe products list --limit 10', { encoding: 'utf8' });
  console.log(products);
  
  console.log('\n💰 Your Stripe Prices:');
  const prices = execSync('stripe prices list --limit 20', { encoding: 'utf8' });
  console.log(prices);
  
  console.log('\n✅ Compare these with your app config in stripe-config.ts');
  console.log('Make sure the product IDs and price IDs match!');
  
} catch (error) {
  console.log('❌ Error: Make sure you have Stripe CLI installed and logged in');
  console.log('Install: https://stripe.com/docs/stripe-cli');
  console.log('Login: stripe login');
} 