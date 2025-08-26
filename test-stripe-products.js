// Test script to verify all Stripe products are working
console.log('🧪 Testing Stripe Products Configuration...\n');

// Import the stripe config
import { stripeProducts } from './src/stripe-config.js';

console.log(`📊 Found ${stripeProducts.length} Stripe products:\n`);

stripeProducts.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name}`);
  console.log(`   💰 Price: $${product.price}/${product.billing}`);
  console.log(`   🆔 Product ID: ${product.id}`);
  console.log(`   🔑 Price ID: ${product.priceId}`);
  console.log(`   📝 Description: ${product.description}`);
  console.log(`   ✨ Features: ${product.features?.length || 0} features`);
  console.log(`   🔄 Mode: ${product.mode}`);
  console.log('');
});

console.log('✅ All products loaded successfully!');
console.log('\n🎯 Next steps:');
console.log('1. Test the checkout flow on the website');
console.log('2. Verify Stripe integration works');
console.log('3. Test the success page redirect');
console.log('4. Verify contact information is displayed');
