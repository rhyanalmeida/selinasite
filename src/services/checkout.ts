import { supabase } from '../lib/supabase';

export interface CheckoutResponse {
  url?: string;
  error?: string;
}

export const createCheckoutSession = async (priceId: string): Promise<CheckoutResponse> => {
  try {
    const { data, error } = await supabase.functions.invoke('stripe-checkout', {
      body: { 
        price_id: priceId,
        success_url: `${window.location.origin}/calendly`,
        cancel_url: `${window.location.origin}/programs`,
        mode: 'subscription'
      }
    });

    if (error) {
      console.error('Supabase function error:', error);
      return { error: 'Failed to create checkout session' };
    }

    if (data?.url) {
      return { url: data.url };
    } else {
      return { error: 'No checkout URL received' };
    }
  } catch (error) {
    console.error('Checkout error:', error);
    return { error: 'Failed to create checkout session' };
  }
};