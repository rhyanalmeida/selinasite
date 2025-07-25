export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface StripeCustomer {
  id: number;
  user_id: string;
  customer_id: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface StripeSubscription {
  id: number;
  customer_id: string;
  subscription_id?: string;
  price_id?: string;
  current_period_start?: number;
  current_period_end?: number;
  cancel_at_period_end?: boolean;
  payment_method_brand?: string;
  payment_method_last4?: string;
  status: 'not_started' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid' | 'paused';
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}