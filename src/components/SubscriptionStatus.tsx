import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { getProductByPriceId } from '../stripe-config';
import { Crown, Calendar, CreditCard } from 'lucide-react';

interface SubscriptionData {
  subscription_status: string;
  price_id: string | null;
  current_period_end: number | null;
  payment_method_brand: string | null;
  payment_method_last4: string | null;
}

const SubscriptionStatus = () => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && isSupabaseConfigured) {
      fetchSubscription();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchSubscription = async () => {
    try {
      const { data, error } = await supabase
        .from('stripe_user_subscriptions')
        .select('subscription_status, price_id, current_period_end, payment_method_brand, payment_method_last4')
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
      } else {
        setSubscription(data);
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user || loading) {
    return null;
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return null;
  }

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null;
  const isActive = subscription.subscription_status === 'active';

  return (
    <div className={`p-4 rounded-lg border-2 ${
      isActive 
        ? 'bg-green-50 border-green-200' 
        : 'bg-yellow-50 border-yellow-200'
    }`}>
      <div className="flex items-center space-x-3">
        <Crown className={`w-5 h-5 ${isActive ? 'text-green-600' : 'text-yellow-600'}`} />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">
            {product ? product.name : 'Active Subscription'}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className={`capitalize ${
              isActive ? 'text-green-600' : 'text-yellow-600'
            }`}>
              {subscription.subscription_status.replace('_', ' ')}
            </span>
            {subscription.current_period_end && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>
                  Renews {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
                </span>
              </div>
            )}
            {subscription.payment_method_brand && subscription.payment_method_last4 && (
              <div className="flex items-center space-x-1">
                <CreditCard className="w-4 h-4" />
                <span>
                  {subscription.payment_method_brand.toUpperCase()} ****{subscription.payment_method_last4}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionStatus;