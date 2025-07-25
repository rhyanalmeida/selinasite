export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  mode: 'payment' | 'subscription';
  billing?: string;
  features?: string[];
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_SinnCcKF5fkqJ1',
    priceId: 'price_1RnMCIArWwnUoTZRYPsy52I0',
    name: 'Complete Wellness Access',
    description: 'Only $25.00 for one week, consultation and unlock unlimited access and choose according to your needs. Our plan offers a holistic approach to healing, growth, and self-care, available anywhere.',
    price: 25.00,
    mode: 'subscription',
    billing: 'Weekly',
    features: [
      'Unlimited access to all programs',
      'Personal consultation included',
      'Holistic healing approach',
      'Available anywhere, anytime',
      'Choose programs based on your needs',
      'Growth and self-care focus'
    ]
  },
  {
    id: 'prod_Simx9M0wOBLUtn',
    priceId: 'price_1RnLNlArWwnUoTZRSAHkxR7x',
    name: 'Unlimited Meditations',
    description: 'Booked from anywhere. Unlimited Meditations: Stress relief, emotional healing, sleep improvement, self-love, and success-focused sessions.',
    price: 25.00,
    mode: 'subscription',
    billing: 'Monthly',
    features: [
      'Unlimited meditation sessions',
      'Stress relief techniques',
      'Emotional healing practices',
      'Sleep improvement guidance',
      'Self-love meditations',
      'Success-focused sessions',
      'Book from anywhere'
    ]
  },
  {
    id: 'prod_SimkBzDpTxTD9t',
    priceId: 'price_1RnLAdArWwnUoTZRS1M1zhYO',
    name: 'Holistic Healing Plan',
    description: 'Our plan offers a holistic approach to natural healing, growth, and self-care, available anytime, anywhere.',
    price: 25.00,
    mode: 'subscription',
    billing: 'Monthly',
    features: [
      'Natural healing approaches',
      'Personal growth programs',
      'Self-care practices',
      'Available 24/7',
      'Holistic wellness approach',
      'Comprehensive healing support'
    ]
  },
  {
    id: 'prod_SimhaURN1mQz9d',
    priceId: 'price_1RnL7eArWwnUoTZRYBAAVCJN',
    name: 'Unlimited Yoga Classes',
    description: 'Unlimited Yoga Classes: Yoga for physical health, emotional balance, and mental well-being.',
    price: 25.00,
    mode: 'subscription',
    billing: 'Monthly',
    features: [
      'Unlimited yoga sessions',
      'Physical health improvement',
      'Emotional balance techniques',
      'Mental well-being practices',
      'Various yoga styles',
      'Expert instruction',
      'Flexible scheduling'
    ]
  },
  {
    id: 'prod_SimfAqsneO3MF7',
    priceId: 'price_1RnL60ArWwnUoTZRE3CZffxv',
    name: 'Relationship Counseling',
    description: 'Unlimited Counseling for conflicts relationship $25/Hours - Billed Monthly $25.00',
    price: 25.00,
    mode: 'subscription',
    billing: 'Monthly',
    features: [
      'Unlimited counseling sessions',
      'Relationship conflict resolution',
      'Communication improvement',
      'Emotional support',
      'Professional guidance',
      'Flexible scheduling',
      'Monthly billing'
    ]
  },
  {
    id: 'prod_SimDXTceKR6mnE',
    priceId: 'price_1RnKfHArWwnUoTZRTVUfY2dm',
    name: 'Guided Meditations Premium',
    description: 'Unlimited Guided Meditations: Relief Anxiety, Stress relief, emotional healing, sleep improvement, self-love, self awareness. $25/week – Billed Monthly',
    price: 25.00,
    mode: 'subscription',
    billing: 'Weekly (Billed Monthly)',
    features: [
      'Unlimited guided meditations',
      'Anxiety relief sessions',
      'Stress management techniques',
      'Emotional healing practices',
      'Sleep improvement programs',
      'Self-love and awareness building',
      'Weekly pricing, monthly billing'
    ]
  }
];

export const getProductById = (id: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.id === id);
};

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};