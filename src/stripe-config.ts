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
    id: 'prod_T0UZG5g0LSyR8a',
    priceId: 'price_1S4TbYArWwnUoTZRjogCOoDi',
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
    id: 'prod_T0UZmyeybDeudi',
    priceId: 'price_1S4TbZArWwnUoTZRQ9eWgl1w',
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
    id: 'prod_T0UZlhJgLkPoZR',
    priceId: 'price_1S4TbaArWwnUoTZREnw4cg6r',
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
    id: 'prod_T0UZTvlPMTrU9R',
    priceId: 'price_1S4TbaArWwnUoTZRAcHh63Ex',
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
    id: 'prod_T0UZfK8oKuvhEO',
    priceId: 'price_1S4TbaArWwnUoTZRrEbxWrcZ',
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
    id: 'prod_T0UZgaUivcFziH',
    priceId: 'price_1S4TbbArWwnUoTZRJIKAqDyh',
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