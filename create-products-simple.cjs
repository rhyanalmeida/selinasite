// Simple Stripe Products Creation using Environment Variables
// Run with: node create-products-simple.cjs

const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();

console.log('🚀 CREATING STRIPE PRODUCTS FOR MOUNTAIN MEDITATION\n');

// Check if secret key exists
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey || stripeSecretKey === 'your-stripe-secret-key-here') {
  console.log('❌ STRIPE_SECRET_KEY not found in .env file');
  console.log('Please add your Stripe secret key to the .env file');
  process.exit(1);
}

if (!stripeSecretKey.startsWith('sk_')) {
  console.log('❌ Invalid Stripe Secret Key format. It should start with "sk_"');
  process.exit(1);
}

console.log('✅ Stripe Secret Key found');

// Your products configuration
const products = [
  {
    name: 'Complete Wellness Access',
    description: 'Only $25.00 for one week, consultation and unlock unlimited access and choose according to your needs. Our plan offers a holistic approach to healing, growth, and self-care, available anywhere.',
    price: 2500, // $25.00 in cents
    interval: 'week'
  },
  {
    name: 'Unlimited Meditations',
    description: 'Booked from anywhere. Unlimited Meditations: Stress relief, emotional healing, sleep improvement, self-love, and success-focused sessions.',
    price: 2500,
    interval: 'month'
  },
  {
    name: 'Holistic Healing Plan',
    description: 'Our plan offers a holistic approach to natural healing, growth, and self-care, available anytime, anywhere.',
    price: 2500,
    interval: 'month'
  },
  {
    name: 'Unlimited Yoga Classes',
    description: 'Unlimited Yoga Classes: Yoga for physical health, emotional balance, and mental well-being.',
    price: 2500,
    interval: 'month'
  },
  {
    name: 'Relationship Counseling',
    description: 'Unlimited Counseling for conflicts relationship $25/Hours - Billed Monthly $25.00',
    price: 2500,
    interval: 'month'
  },
  {
    name: 'Guided Meditations Premium',
    description: 'Unlimited Guided Meditations: Relief Anxiety, Stress relief, emotional healing, sleep improvement, self-love, self awareness. $25/week – Billed Monthly',
    price: 2500,
    interval: 'week'
  }
];

function createProduct(productData) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      name: productData.name,
      description: productData.description,
      type: 'service'
    });

    const options = {
      hostname: 'api.stripe.com',
      path: '/v1/products',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          if (res.statusCode === 200) {
            resolve(response);
          } else {
            reject(new Error(`Stripe API Error: ${response.error?.message || 'Unknown error'}`));
          }
        } catch (error) {
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

function createPrice(productId, productData) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      product: productId,
      unit_amount: productData.price,
      currency: 'usd',
      recurring: {
        interval: productData.interval
      }
    });

    const options = {
      hostname: 'api.stripe.com',
      path: '/v1/prices',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          if (res.statusCode === 200) {
            resolve(response);
          } else {
            reject(new Error(`Stripe API Error: ${response.error?.message || 'Unknown error'}`));
          }
        } catch (error) {
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

async function createAllProducts() {
  const results = [];
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`\n${i + 1}. Creating: ${product.name}`);
    
    try {
      // Create product
      const productResponse = await createProduct(product);
      console.log(`   ✅ Product created: ${productResponse.id}`);
      
      // Create price
      const priceResponse = await createPrice(productResponse.id, product);
      console.log(`   ✅ Price created: ${priceResponse.id}`);
      
      results.push({
        name: product.name,
        productId: productResponse.id,
        priceId: priceResponse.id,
        price: product.price,
        interval: product.interval
      });
      
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
  }
  
  return results;
}

// Main execution
createAllProducts()
  .then((results) => {
    console.log('\n🎉 PRODUCTS CREATION COMPLETE!');
    console.log('=====================================\n');
    
    results.forEach((result, index) => {
      console.log(`${index + 1}. ${result.name}`);
      console.log(`   Product ID: ${result.productId}`);
      console.log(`   Price ID: ${result.priceId}`);
      console.log(`   Price: $${result.price / 100}/${result.interval}`);
      console.log('');
    });
    
    console.log('📝 Next steps:');
    console.log('1. Copy the Product IDs and Price IDs above');
    console.log('2. Update src/stripe-config.ts with these real IDs');
    console.log('3. Test your payment flow');
    
  })
  .catch((error) => {
    console.error('❌ Error creating products:', error.message);
  });
