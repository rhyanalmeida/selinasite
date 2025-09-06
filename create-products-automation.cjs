// Automated Stripe Products Creation
// Run with: node create-products-automation.cjs

const https = require('https');
const readline = require('readline');

// Your products configuration
const products = [
  {
    name: 'Complete Wellness Access',
    description: 'Only $25.00 for one week, consultation and unlock unlimited access and choose according to your needs. Our plan offers a holistic approach to healing, growth, and self-care, available anywhere.',
    price: 2500, // $25.00 in cents
    interval: 'week',
    productId: 'prod_complete_wellness'
  },
  {
    name: 'Unlimited Meditations',
    description: 'Booked from anywhere. Unlimited Meditations: Stress relief, emotional healing, sleep improvement, self-love, and success-focused sessions.',
    price: 2500,
    interval: 'month',
    productId: 'prod_unlimited_meditations'
  },
  {
    name: 'Holistic Healing Plan',
    description: 'Our plan offers a holistic approach to natural healing, growth, and self-care, available anytime, anywhere.',
    price: 2500,
    interval: 'month',
    productId: 'prod_holistic_healing'
  },
  {
    name: 'Unlimited Yoga Classes',
    description: 'Unlimited Yoga Classes: Yoga for physical health, emotional balance, and mental well-being.',
    price: 2500,
    interval: 'month',
    productId: 'prod_unlimited_yoga'
  },
  {
    name: 'Relationship Counseling',
    description: 'Unlimited Counseling for conflicts relationship $25/Hours - Billed Monthly $25.00',
    price: 2500,
    interval: 'month',
    productId: 'prod_relationship_counseling'
  },
  {
    name: 'Guided Meditations Premium',
    description: 'Unlimited Guided Meditations: Relief Anxiety, Stress relief, emotional healing, sleep improvement, self-love, self awareness. $25/week – Billed Monthly',
    price: 2500,
    interval: 'week',
    productId: 'prod_guided_meditations'
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForSecretKey() {
  return new Promise((resolve) => {
    console.log('\n🔑 Enter your Stripe SECRET Key (sk_live_... or sk_test_...):');
    console.log('⚠️  IMPORTANT: This is your SECRET key, not the publishable key!');
    console.log('Find it at: https://dashboard.stripe.com/apikeys');
    console.log('For testing, you can use a test secret key.');

    rl.question('Stripe Secret Key: ', (answer) => {
      resolve(answer.trim());
    });
  });
}

function createProduct(stripeSecret, productData) {
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
        'Authorization': `Bearer ${stripeSecret}`,
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

    req.write(data);
    req.end();
  });
}

function createPrice(stripeSecret, productId, priceData) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
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

    req.write(data);
    req.end();
  });
}

async function createAllProducts() {
  console.log('🚀 CREATING ALL STRIPE PRODUCTS FOR MOUNTAIN MEDITATION\n');

  const stripeSecret = await askForSecretKey();

  if (!stripeSecret.startsWith('sk_')) {
    console.log('❌ Invalid Stripe Secret Key format. It should start with "sk_"');
    rl.close();
    return;
  }

  console.log('\n📦 Creating products and prices...\n');

  const createdProducts = [];
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`${i + 1}. Creating: ${product.name}`);
    console.log(`   Price: $${product.price/100}/${product.interval}`);

    try {
      // Create product
      console.log('   📦 Creating product...');
      const createdProduct = await createProduct(stripeSecret, product);
      console.log(`   ✅ Product created: ${createdProduct.id}`);

      // Create price
      console.log('   💰 Creating price...');
      const createdPrice = await createPrice(stripeSecret, createdProduct.id, product);
      console.log(`   ✅ Price created: ${createdPrice.id}`);

      createdProducts.push({
        name: product.name,
        productId: createdProduct.id,
        priceId: createdPrice.id,
        amount: product.price / 100,
        interval: product.interval
      });

      successCount++;
      console.log('   🎉 SUCCESS!\n');

    } catch (error) {
      console.log(`   ❌ FAILED: ${error.message}\n`);
      failCount++;
    }
  }

  console.log('🎉 PRODUCTS CREATION COMPLETE!');
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📦 Total Products: ${products.length}\n`);

  if (createdProducts.length > 0) {
    console.log('📋 CREATED PRODUCTS SUMMARY:\n');

    createdProducts.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name}`);
      console.log(`   Product ID: ${product.productId}`);
      console.log(`   Price ID: ${product.priceId}`);
      console.log(`   Amount: $${product.amount}/${product.interval}`);
      console.log('');
    });

    console.log('🔧 NEXT STEPS:');
    console.log('1. Copy the Product IDs and Price IDs above');
    console.log('2. Update your stripe-config.ts file');
    console.log('3. Run: npm run build');
    console.log('4. Run: netlify deploy --prod --dir=dist');
    console.log('5. Test the payment flow on your live site!');

    console.log('\n📝 UPDATE THIS IN YOUR stripe-config.ts:');

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
  }

  rl.close();
}

createAllProducts().catch(console.error);


