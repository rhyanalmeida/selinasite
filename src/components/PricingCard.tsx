import React, { useEffect, useState } from 'react';
import { Check, Crown } from 'lucide-react';
import { StripeProduct } from '../stripe-config';
import { createCheckoutSession, loadStripe } from '../services/checkout';

interface PricingCardProps {
  product: StripeProduct;
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ product, featured = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [stripeLoaded, setStripeLoaded] = useState(false);

  useEffect(() => {
    // Load Stripe when component mounts
    loadStripe().then(() => {
      setStripeLoaded(true);
    });
  }, []);

  const handleCheckout = async () => {
    if (!stripeLoaded) {
      alert('Please wait while we load the payment system...');
      return;
    }

    setIsLoading(true);
    
    try {
      const { url, error } = await createCheckoutSession(product.priceId);
      if (error) {
        console.error('Checkout error:', error);
        alert(`Checkout error: ${error}`);
        return;
      }
      // Stripe will handle the redirect automatically
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error creating your checkout session. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
      featured 
        ? 'border-blue-500 shadow-blue-100 scale-105' 
        : 'border-gray-200 hover:border-blue-300'
    }`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
            <Crown className="w-4 h-4 mr-2" />
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">${product.price}</span>
            <span className="text-gray-600 ml-2">
              {product.billing && `/ ${product.billing}`}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
        </div>

        <div className="space-y-4 mb-8">
          {product.features?.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleCheckout}
          disabled={isLoading || !stripeLoaded}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            featured
              ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Loading...' : !stripeLoaded ? 'Loading Payment...' : 'Get Started Now'}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;