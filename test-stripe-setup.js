// Test Stripe Products Setup
// Run with: node test-stripe-setup.js

const https = require('https');

const STRIPE_PUBLISHABLE_KEY = 'pk_live_51Rht82ArWwnUoTZRP9XWQbTy3ZDgC46t0Sihr4krKHbckkPiRoBTNVFvQ9XugDl2vsd0UqLYr18zZOrssEgGAkXS00HLVDXC5Z';

// Test products from your config
const testProducts = [
  { id: 'prod_SinnCcKF5fkqJ1', priceId: 'price_1RnMCIArWwnUoTZRYPsy52I0', name: 'Complete Wellness Access' },
  { id: 'prod_Simx9M0wOBLUtn', priceId: 'price_1RnLNlArWwnUoTZRSAHkxR7x', name: 'Unlimited Meditations' },
  { id: 'prod_SimkBzDpTxTD9t', priceId: 'price_1RnLAdArWwnUoTZRS1M1zhYO', name: 'Holistic Healing Plan' },
  { id: 'prod_SimhaURN1mQz9d', priceId: 'price_1RnL7eArWwnUoTZRYBAAVCJN', name: 'Unlimited Yoga Classes' },
  { id: 'prod_SimfAqsneO3MF7', priceId: 'price_1RnL60ArWwnUoTZRE3CZffxv', name: 'Relationship Counseling' },
  { id: 'prod_SimDXTceKR6mnE', priceId: 'price_1RnKfHArWwnUoTZRTVUfY2dm', name: 'Guided Meditations Premium' }
];

console.log('🔍 Testing Stripe Products Configuration...\n');

// Function to test a price ID
function testPriceId(priceId) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.stripe.com',
      path: `/v1/prices/${priceId}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${STRIPE_PUBLISHABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.error) {
            resolve({ success: false, error: response.error.message });
          } else {
            resolve({
              success: true,
              product: response.product,
              amount: response.unit_amount,
              currency: response.currency,
              active: response.active
            });
          }
        } catch (e) {
          resolve({ success: false, error: 'Invalid JSON response' });
        }
      });
    });

    req.on('error', (error) => {
      resolve({ success: false, error: error.message });
    });

    req.end();
  });
}

// Test all products
async function testAllProducts() {
  console.log('📦 Testing each product...\n');

  for (const product of testProducts) {
    console.log(`Testing: ${product.name}`);
    console.log(`Product ID: ${product.id}`);
    console.log(`Price ID: ${product.priceId}`);

    const result = await testPriceId(product.priceId);

    if (result.success) {
      console.log(`✅ Price exists - Amount: $${result.amount/100}, Currency: ${result.currency}, Active: ${result.active}`);
    } else {
      console.log(`❌ Price NOT found - Error: ${result.error}`);
    }

    console.log('---\n');
  }

  console.log('🎯 NEXT STEPS:');
  console.log('1. If prices exist but are inactive, activate them in Stripe Dashboard');
  console.log('2. If prices are missing, create new ones in Stripe Dashboard');
  console.log('3. Update stripe-config.ts with correct product/price IDs');
  console.log('4. Redeploy the website');
}

testAllProducts();


