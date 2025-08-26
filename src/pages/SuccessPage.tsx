import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Star, Heart, Calendar } from 'lucide-react';
import { getProductByPriceId } from '../stripe-config';

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    // Get selected product from sessionStorage
    const priceId = sessionStorage.getItem('selected_product');
    if (priceId) {
      const product = getProductByPriceId(priceId);
      setSelectedProduct(product);
    }

    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Processing Payment - Mountain Meditation & Yoga</title>
        </Helmet>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing Your Payment</h2>
            <p className="text-gray-600">Please wait while we confirm your subscription...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Payment Successful - Mountain Meditation & Yoga | Welcome to Your Journey</title>
        <meta name="description" content="Payment successful! Welcome to Mountain Meditation & Yoga. Your subscription is now active and you can begin your meditation journey." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Success Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-center text-white">
              <CheckCircle className="w-20 h-20 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
              <p className="text-green-100 text-lg">Welcome to Mountain Meditation & Yoga</p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Journey Begins Now</h2>
                <p className="text-gray-600 text-lg">
                  Thank you for choosing Mountain Meditation & Yoga. Your subscription is now active and you have access to all the programs and resources.
                </p>
              </div>

              {/* Selected Plan Info */}
              {selectedProduct && (
                <div className="bg-green-50 rounded-2xl p-6 mb-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Selected Plan</h3>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-green-800 font-medium text-lg">{selectedProduct.name}</p>
                    <p className="text-green-600 text-sm">${selectedProduct.price}/{selectedProduct.billing}</p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You now have access to all features included in this plan
                  </p>
                </div>
              )}

              {/* What's Next */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Call to Book Your Session</h4>
                      <p className="text-gray-600 text-sm">Contact us at <strong>347-456-3508</strong> to schedule your personalized session</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                      <Star className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Explore Your Programs</h4>
                      <p className="text-gray-600 text-sm">Access all meditation and yoga programs included in your subscription</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Book?</h3>
                <p className="text-gray-600 mb-4">
                  Your subscription is active and you're ready to start your meditation journey!
                </p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <p className="text-blue-800 font-medium text-lg">📞 Call <strong>347-456-3508</strong></p>
                  <p className="text-blue-600 text-sm">to schedule your first session</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Our team will help you choose the perfect time and program for your needs
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/programs"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-all text-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Support */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm mb-2">Need help getting started?</p>
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Contact our support team
                </Link>
              </div>

              {/* Session ID for reference */}
              {sessionId && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <p className="text-xs text-gray-500">
                    Stripe Session ID: {sessionId}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;