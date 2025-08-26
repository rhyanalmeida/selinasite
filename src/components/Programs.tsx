import React from 'react';
import { stripeProducts } from '../stripe-config';
import PricingCard from './PricingCard';

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-green-600">Plan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4">
            Select the perfect plan for your meditation and wellness journey. All plans include unlimited access to programs and sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {stripeProducts.map((product, index) => (
            <PricingCard 
              key={product.id} 
              product={product} 
              featured={index === 0} // Make the first product featured
            />
          ))}
        </div>

        {/* How It Works */}
        <div className="text-center">
          <div className="bg-blue-50 p-6 md:p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-gray-600 mb-4">
              Simple 3-step process to access your meditation programs:
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Choose Plan</h4>
                <p className="text-sm text-gray-600">Select the plan that best fits your needs</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Complete Payment</h4>
                <p className="text-sm text-gray-600">Secure payment through Stripe</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact to Book</h4>
                <p className="text-sm text-gray-600">Call 347-456-3508 to schedule sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;