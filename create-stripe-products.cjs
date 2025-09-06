// Create Stripe Products Script
// Run with: node create-stripe-products.cjs

const https = require('https');
const readline = require('readline');

// Your products configuration
const products = [
  {
    name: 'Complete Wellness Access',
    description: 'Only $25.00 for one week, consultation and unlock unlimited access and choose according to your needs. Our plan offers a holistic approach to healing, growth, and self-care, available anywhere.',
    price: 2500, // $25.00 in cents
    interval: 'week',
    productId: 'prod_wellness_access'
  },
  {
    name: 'Unlimited Meditations',
    description: 'Booked from anywhere. Unlimited Meditations: Stress relief, emotional healing, sleep improvement, self-love, and success-focused sessions.',
    price: 2500, // $25.00 in cents
    interval: 'month',
    productId: 'prod_unlimited_meditations'
  },
  {
    name: 'Holistic Healing Plan',
    description: 'Our plan offers a holistic approach to natural healing, growth, and self-care, available anytime, anywhere.',
    price: 2500, // $25.00 in cents
    interval: 'month',
    productId: 'prod_holistic_healing'
  },
  {
    name: 'Unlimited Yoga Classes',
    description: 'Unlimited Yoga Classes: Yoga for physical health, emotional balance, and mental well-being.',
    price: 2500, // $25.00 in cents
    interval: 'month',
    productId: 'prod_unlimited_yoga'
  },
  {
    name: 'Relationship Counseling',
    description: 'Unlimited Counseling for conflicts relationship $25/Hours - Billed Monthly $25.00',
    price: 2500, // $25.00 in cents
    interval: 'month',
    productId: 'prod_relationship_counseling'
  },
  {
    name: 'Guided Meditations Premium',
    description: 'Unlimited Guided Meditations: Relief Anxiety, Stress relief, emotional healing, sleep improvement, self-love, self awareness. $25/week – Billed Monthly',
    price: 2500, // $25.00 in cents
    interval: 'week',
    productId: 'prod_guided_meditations'
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForStripeSecret() {
  return new Promise((resolve) => {
    console.log('\n🔑 Enter your Stripe Secret Key (sk_test_... or sk_live_...):');
    console.log('You can find this in your Stripe Dashboard: https://dashboard.stripe.com/apikeys');
    console.log('For testing, use your test secret key.');

    rl.question('Stripe Secret Key: ', (answer) => {
      resolve(answer.trim());
    });
  });
}

function createProduct(stripeSecret, productData) {
  return new Promise((resolve, reject) => {
    const productPayload = JSON.stringify({
      name: productData.name,
      description: productData.description,
      type: 'service'
    });

    const options = {
      hostname: 'api.stripe.com',
      path: '/v1/products',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeSecret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(productPayload)
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
            reject(new Error(response.error.message));
          } else {
            resolve(response);
          }
        } catch (e) {
          reject(new Error('Invalid JSON response'));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(productPayload);
    req.end();
  });
}

function createPrice(stripeSecret, productId, priceData) {
  return new Promise((resolve, reject) => {
    const pricePayload = JSON.stringify({
      product: productId,
      unit_amount: priceData.price,
      currency: 'usd',
      recurring: {
        interval: priceData.interval
      }
    });

    const options = {
      hostname: 'api.stripe.com',
      path: '/v1/prices',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeSecret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(pricePayload)
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
            reject(new Error(response.error.message));
          } else {
            resolve(response);
          }
        } catch (e) {
          reject(new Error('Invalid JSON response'));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(pricePayload);
    req.end();
  });
}

async function createAllProducts() {
  console.log('🚀 Creating Stripe Products for Mountain Meditation...\n');

  const stripeSecret = await askForStripeSecret();

  if (!stripeSecret.startsWith('sk_')) {
    console.log('❌ Invalid Stripe Secret Key format. It should start with "sk_"');
    rl.close();
    return;
  }

  console.log('\n📦 Creating products and prices...\n');

  const createdProducts = [];

  for (const product of products) {
    try {
      console.log(`Creating: ${product.name}`);

      // Create product
      const createdProduct = await createProduct(stripeSecret, product);
      console.log(`✅ Product created: ${createdProduct.id}`);

      // Create price
      const createdPrice = await createPrice(stripeSecret, createdProduct.id, product);
      console.log(`✅ Price created: ${createdPrice.id}`);

      createdProducts.push({
        name: product.name,
        productId: createdProduct.id,
        priceId: createdPrice.id,
        amount: product.price / 100,
        interval: product.interval
      });

      console.log('---\n');

    } catch (error) {
      console.log(`❌ Failed to create ${product.name}: ${error.message}`);
    }
  }

  console.log('🎉 PRODUCTS CREATED SUCCESSFULLY!');
  console.log('\n📋 Update your stripe-config.ts with these new IDs:\n');

  console.log('export const stripeProducts: StripeProduct[] = [');

  createdProducts.forEach((product, index) => {
    console.log(`  {`);
    console.log(`    id: '${product.productId}',`);
    console.log(`    priceId: '${product.priceId}',`);
    console.log(`    name: '${product.name}',`);
    console.log(`    description: 'Description for ${product.name}',`);
    console.log(`    price: ${product.amount},`);
    console.log(`    mode: 'subscription',`);
    console.log(`    billing: '${product.interval === 'week' ? 'Weekly' : 'Monthly'}',`);
    console.log(`    features: []`);
    console.log(`  }${index < createdProducts.length - 1 ? ',' : ''}`);
  });

  console.log('];');

  console.log('\n🔧 NEXT STEPS:');
  console.log('1. Copy the above configuration to your stripe-config.ts file');
  console.log('2. Update the descriptions and features for each product');
  console.log('3. Run: npm run build');
  console.log('4. Run: netlify deploy --prod --dir=dist');
  console.log('5. Test the payment flow on your live site!');

  rl.close();
}

createAllProducts().catch(console.error);


