# 🚀 STRIPE PRODUCTS SETUP GUIDE

## Current Status
✅ **Your Stripe API Key is configured**
❌ **Products need to be created in Stripe Dashboard**

## 🔧 STEP 1: Create Products in Stripe Dashboard

Go to: https://dashboard.stripe.com/products

### Create These 6 Products:

#### 1. Complete Wellness Access ($25/week)
- **Name**: Complete Wellness Access
- **Description**: Only $25.00 for one week, consultation and unlock unlimited access and choose according to your needs. Our plan offers a holistic approach to healing, growth, and self-care, available anywhere.
- **Price**: $25.00
- **Billing**: Weekly subscription

#### 2. Unlimited Meditations ($25/month)
- **Name**: Unlimited Meditations
- **Description**: Booked from anywhere. Unlimited Meditations: Stress relief, emotional healing, sleep improvement, self-love, and success-focused sessions.
- **Price**: $25.00
- **Billing**: Monthly subscription

#### 3. Holistic Healing Plan ($25/month)
- **Name**: Holistic Healing Plan
- **Description**: Our plan offers a holistic approach to natural healing, growth, and self-care, available anytime, anywhere.
- **Price**: $25.00
- **Billing**: Monthly subscription

#### 4. Unlimited Yoga Classes ($25/month)
- **Name**: Unlimited Yoga Classes
- **Description**: Unlimited Yoga Classes: Yoga for physical health, emotional balance, and mental well-being.
- **Price**: $25.00
- **Billing**: Monthly subscription

#### 5. Relationship Counseling ($25/month)
- **Name**: Relationship Counseling
- **Description**: Unlimited Counseling for conflicts relationship $25/Hours - Billed Monthly $25.00
- **Price**: $25.00
- **Billing**: Monthly subscription

#### 6. Guided Meditations Premium ($25/week)
- **Name**: Guided Meditations Premium
- **Description**: Unlimited Guided Meditations: Relief Anxiety, Stress relief, emotional healing, sleep improvement, self-love, self awareness. $25/week – Billed Monthly
- **Price**: $25.00
- **Billing**: Weekly subscription

## 📋 STEP 2: Get Product and Price IDs

After creating each product:

1. Click on the product in your dashboard
2. Copy the **Product ID** (starts with `prod_`)
3. Copy the **Price ID** (starts with `price_`)
4. Note them down for the next step

## 🔧 STEP 3: Update Your Code

Update `src/stripe-config.ts` with the real IDs:

```typescript
export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_XXXXXXX', // Replace with real product ID
    priceId: 'price_XXXXXXX', // Replace with real price ID
    name: 'Complete Wellness Access',
    // ... rest of config
  },
  // ... update all 6 products
];
```

## 🚀 STEP 4: Test and Deploy

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

## 🧪 STEP 5: Test Payment Flow

1. Visit your live site
2. Click on any program
3. Try the "Get Started Now" button
4. Should redirect to Stripe checkout successfully

## 📞 Support

If you need help creating the products, you can:
1. Share your Product IDs and Price IDs with me
2. Or I can guide you through the Stripe Dashboard process

## 🎯 Expected Result

After setup, your users will be able to:
- ✅ View all 6 programs
- ✅ Click "Get Started Now"
- ✅ Be redirected to Stripe checkout
- ✅ Complete payment successfully
- ✅ Return to success page
- ✅ Call 347-456-3508 for booking

---

**Need help?** Let me know if you have questions about creating the products in Stripe!


