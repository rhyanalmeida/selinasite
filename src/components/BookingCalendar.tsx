import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase-config';

interface TimeSlot {
  slot_id: number;
  start_time: string;
  end_time: string;
  session_type: 'meditation' | 'yoga' | 'counseling' | 'group_session';
  is_available: boolean;
}

interface Booking {
  id: number;
  session_type: string;
  session_date: string;
  session_time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
}

const BookingCalendar = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [userBookings, setUserBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [bookingNotes, setBookingNotes] = useState('');

  // Get available slots for selected date
  const fetchAvailableSlots = async (date: Date) => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase.rpc('get_available_slots', {
        booking_date: date.toISOString().split('T')[0]
      });

      if (error) {
        console.error('Error fetching slots:', error);
        return;
      }

      setTimeSlots(data || []);
    } catch (error) {
      console.error('Error fetching slots:', error);
    } finally {
      setLoading(false);
    }
  };

  // Get user's existing bookings
  const fetchUserBookings = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user.id)
        .gte('session_date', new Date().toISOString().split('T')[0])
        .order('session_date', { ascending: true });

      if (error) {
        console.error('Error fetching bookings:', error);
        return;
      }

      setUserBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  // Create a new booking
  const createBooking = async () => {
    if (!user || !selectedSlot) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          user_id: user.id,
          session_type: selectedSlot.session_type,
          session_date: selectedDate.toISOString().split('T')[0],
          session_time: selectedSlot.start_time,
          notes: bookingNotes,
          status: 'pending'
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating booking:', error);
        alert('Failed to create booking. Please try again.');
        return;
      }

      alert('Booking created successfully!');
      setSelectedSlot(null);
      setBookingNotes('');
      fetchUserBookings();
      fetchAvailableSlots(selectedDate);
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Cancel a booking
  const cancelBooking = async (bookingId: number) => {
    if (!user) return;

    if (!confirm('Are you sure you want to cancel this booking?')) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status: 'cancelled' })
        .eq('id', bookingId)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error cancelling booking:', error);
        alert('Failed to cancel booking. Please try again.');
        return;
      }

      alert('Booking cancelled successfully!');
      fetchUserBookings();
      fetchAvailableSlots(selectedDate);
    } catch (error) {
      console.error('Error cancelling booking:', error);
      alert('Failed to cancel booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailableSlots(selectedDate);
    fetchUserBookings();
  }, [selectedDate, user]);

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getSessionTypeColor = (type: string) => {
    switch (type) {
      case 'meditation': return 'bg-blue-100 text-blue-800';
      case 'yoga': return 'bg-green-100 text-green-800';
      case 'counseling': return 'bg-purple-100 text-purple-800';
      case 'group_session': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600';
      case 'pending': return 'text-yellow-600';
      case 'cancelled': return 'text-red-600';
      case 'completed': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Calendar</h2>
        <p className="text-gray-600">Please log in to access the booking calendar.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Your Session</h1>
        <p className="text-gray-600">Select a date and time to book your meditation or yoga session</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar and Time Slots */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Available Sessions</h2>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">{formatDate(selectedDate)}</span>
            </div>
          </div>

          {/* Date Navigation */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setDate(newDate.getDate() - 1);
                setSelectedDate(newDate);
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              ← Previous
            </button>
            <button
              onClick={() => setSelectedDate(new Date())}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Today
            </button>
            <button
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setDate(newDate.getDate() + 1);
                setSelectedDate(newDate);
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Next →
            </button>
          </div>

          {/* Time Slots */}
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading available slots...</p>
            </div>
          ) : (
            <div className="space-y-3">
              {timeSlots.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No available slots for this date</p>
              ) : (
                timeSlots.map((slot) => (
                  <div
                    key={slot.slot_id}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      slot.is_available
                        ? 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                    }`}
                    onClick={() => slot.is_available && setSelectedSlot(slot)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">
                            {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
                          </p>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getSessionTypeColor(slot.session_type)}`}>
                            {slot.session_type.charAt(0).toUpperCase() + slot.session_type.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {slot.is_available ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Booking Form and User Bookings */}
        <div className="space-y-6">
          {/* Booking Form */}
          {selectedSlot && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Session</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session Details
                  </label>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-900">
                      <strong>Date:</strong> {formatDate(selectedDate)}
                    </p>
                    <p className="text-gray-900">
                      <strong>Time:</strong> {formatTime(selectedSlot.start_time)} - {formatTime(selectedSlot.end_time)}
                    </p>
                    <p className="text-gray-900">
                      <strong>Type:</strong> {selectedSlot.session_type.charAt(0).toUpperCase() + selectedSlot.session_type.slice(1)}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Any special requests or notes for your session..."
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={createBooking}
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? 'Booking...' : 'Confirm Booking'}
                  </button>
                  <button
                    onClick={() => setSelectedSlot(null)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* User's Bookings */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Bookings</h3>
            {userBookings.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No upcoming bookings</p>
            ) : (
              <div className="space-y-3">
                {userBookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(booking.status)}`}></div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {new Date(booking.session_date).toLocaleDateString()} at {formatTime(booking.session_time)}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.session_type.charAt(0).toUpperCase() + booking.session_type.slice(1)} - {booking.status}
                          </p>
                          {booking.notes && (
                            <p className="text-sm text-gray-500 mt-1">{booking.notes}</p>
                          )}
                        </div>
                      </div>
                      {booking.status === 'pending' && (
                        <button
                          onClick={() => cancelBooking(booking.id)}
                          disabled={loading}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar; 