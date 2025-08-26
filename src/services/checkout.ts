export interface CheckoutResponse {
  url?: string;
  error?: string;
}

// Stripe configuration - in production, these would come from environment variables
const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_live_51Rht82ArWwnUoTZRP9XWQbTy3ZDgC46t0Sihr4krKHbckkPiRoBTNVFvQ9XugDl2vsd0UqLYr18zZOrssEgGAkXS00HLVDXC5Z';

export const createCheckoutSession = async (priceId: string): Promise<CheckoutResponse> => {
  try {
    // Store the selected product info for the success page
    sessionStorage.setItem('selected_product', priceId);

    // Create Stripe checkout session
    const stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/programs`,
    });

    if (error) {
      console.error('Stripe checkout error:', error);
      return { error: error.message || 'Failed to create checkout session' };
    }

    return { url: 'redirecting_to_stripe' };
  } catch (error) {
    console.error('Checkout error:', error);
    return { error: 'Failed to create checkout session' };
  }
};

// Load Stripe script dynamically
export const loadStripe = (): Promise<any> => {
  return new Promise((resolve) => {
    if (window.Stripe) {
      resolve(window.Stripe(STRIPE_PUBLISHABLE_KEY));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.onload = () => {
      if (window.Stripe) {
        resolve(window.Stripe(STRIPE_PUBLISHABLE_KEY));
      } else {
        resolve(null);
      }
    };
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });
};

// Declare Stripe types for TypeScript
declare global {
  interface Window {
    Stripe: any;
  }
}

interface Stripe {
  redirectToCheckout: (options: any) => Promise<{ error?: any }>;
}