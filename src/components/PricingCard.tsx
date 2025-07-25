import React from 'react';
import { Check, Crown } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { StripeProduct } from '../stripe-config';
import { createCheckoutSession } from '../services/checkout';

interface PricingCardProps {
  product: StripeProduct;
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ product, featured = false }) => {
  const { user } = useAuth();

  const handleCheckout = async () => {
    if (!user) {
      // Store the intended product for checkout after login
      sessionStorage.setItem('intended_product', product.priceId);
      // Redirect to login if not logged in
      window.location.href = '/login';
      return;
    }

    try {
      const { url, error } = await createCheckoutSession(product.priceId);
      if (error) {
        console.error('Checkout error:', error);
        alert('There was an error creating your checkout session. Please try again.');
        return;
      }
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error creating your checkout session. Please try again.');
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
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            featured
              ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg hover:scale-105'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {user ? 'Get Started' : 'Sign Up to Start'}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;