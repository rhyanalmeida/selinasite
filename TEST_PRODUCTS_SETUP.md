# 🧪 TEST PRODUCTS SETUP (Using Only Publishable Key)

## Current Situation
You only have the **publishable key** (pk_live_...) but need the **secret key** (sk_live_...) to create products programmatically.

## 📋 OPTION 1: Get Your Secret Key (Recommended)

### Step 1: Get Secret Key from Stripe Dashboard
1. Go to: https://dashboard.stripe.com/apikeys
2. Make sure you're in **Live mode** (not test mode)
3. Copy your **Secret key** (starts with `sk_live_...`)
4. **⚠️ IMPORTANT:** Keep this key secure and never share it!

### Step 2: Run the Automated Script
Once you have the secret key, run:
```bash
node create-products-automation.cjs
```

## 📋 OPTION 2: Create Products Manually in Dashboard

### Step 1: Go to Stripe Products
1. Visit: https://dashboard.stripe.com/products
2. Click **"Add product"**

### Step 2: Create These 6 Products

#### Product 1: Complete Wellness Access
- **Name**: Complete Wellness Access
- **Description**: Only $25.00 for one week, consultation and unlock unlimited access and choose according to your needs. Our plan offers a holistic approach to healing, growth, and self-care, available anywhere.
- **Price**: $25.00
- **Billing**: Weekly subscription
- **Save** the product

#### Product 2: Unlimited Meditations
- **Name**: Unlimited Meditations
- **Description**: Booked from anywhere. Unlimited Meditations: Stress relief, emotional healing, sleep improvement, self-love, and success-focused sessions.
- **Price**: $25.00
- **Billing**: Monthly subscription
- **Save** the product

#### Product 3: Holistic Healing Plan
- **Name**: Holistic Healing Plan
- **Description**: Our plan offers a holistic approach to natural healing, growth, and self-care, available anytime, anywhere.
- **Price**: $25.00
- **Billing**: Monthly subscription
- **Save** the product

#### Product 4: Unlimited Yoga Classes
- **Name**: Unlimited Yoga Classes
- **Description**: Unlimited Yoga Classes: Yoga for physical health, emotional balance, and mental well-being.
- **Price**: $25.00
- **Billing**: Monthly subscription
- **Save** the product

#### Product 5: Relationship Counseling
- **Name**: Relationship Counseling
- **Description**: Unlimited Counseling for conflicts relationship $25/Hours - Billed Monthly $25.00
- **Price**: $25.00
- **Billing**: Monthly subscription
- **Save** the product

#### Product 6: Guided Meditations Premium
- **Name**: Guided Meditations Premium
- **Description**: Unlimited Guided Meditations: Relief Anxiety, Stress relief, emotional healing, sleep improvement, self-love, self awareness. $25/week – Billed Monthly
- **Price**: $25.00
- **Billing**: Weekly subscription
- **Save** the product

### Step 3: Get Product and Price IDs
After creating each product:
1. Click on the product name in your products list
2. Copy the **Product ID** (looks like `prod_abc123...`)
3. Copy the **Price ID** (looks like `price_xyz789...`)
4. Note them down

## 📋 OPTION 3: Use Test Mode (Temporary Solution)

For testing purposes, you can:
1. Switch to **Test mode** in Stripe Dashboard
2. Create products in test mode
3. Use test publishable key: `pk_test_...`
4. Test the payment flow
5. Then create live products when ready

## 🔧 STEP 4: Update Your Code

Once you have the Product IDs and Price IDs, update `src/stripe-config.ts`:

```typescript
export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_abc123...', // Your actual product ID
    priceId: 'price_xyz789...', // Your actual price ID
    name: 'Complete Wellness Access',
    description: 'Only $25.00 for one week, consultation and unlock unlimited access...',
    price: 25.00,
    mode: 'subscription',
    billing: 'Weekly',
    features: [
      'Unlimited access to all programs',
      'Personal consultation included',
      // ... rest of features
    ]
  },
  // ... repeat for all 6 products
];
```

## 🚀 STEP 5: Deploy Updated Site

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

## 🎯 FINAL RESULT

After completing these steps, your users will be able to:
- ✅ View all 6 programs on your website
- ✅ Click "Get Started Now" buttons
- ✅ Be redirected to Stripe checkout
- ✅ Complete payment successfully
- ✅ Return to success page
- ✅ Call 347-456-3508 for booking

## 📞 Need Help?

If you need assistance with any of these steps, let me know:
1. Getting your secret key
2. Creating products in Stripe dashboard
3. Updating the configuration
4. Testing the payment flow

**Let's get your products working!** 🚀


