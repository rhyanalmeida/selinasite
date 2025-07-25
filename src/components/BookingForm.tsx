import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    preferredDate: '',
    preferredTime: '',
    experience: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        preferredDate: '',
        preferredTime: '',
        experience: '',
        message: ''
      });
    }, 3000);
  };

  const programs = [
    "Checking my Emotional Health",
    "Mindfulness practices for healthy lifestyle",
    "Yoga for healthy body",
    "Meditation for Stress relief & Well sleeping patterns",
    "Anger Management",
    "Truthfulness practices",
    "Self Esteem Practice (Self Love, Self Respect)",
    "Healing Relationships",
    "Emotional Development",
    "Emotional Intelligence Development",
    "Relief from Depression, stress",
    "Love meditation",
    "Health Manifestations",
    "Success Meditation",
    "Private Session",
    "Group Workshop"
  ];

  const timeSlots = [
    "6:00 AM - 7:00 AM",
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
    "8:00 PM - 9:00 PM"
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-xl text-gray-600 mb-6">
              Your booking request has been submitted successfully. We'll contact you within 24 hours to confirm your session.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 font-medium">
                Check your email for confirmation details and preparation guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book Your <span className="text-green-600">Session</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Take the first step towards inner peace and transformation. Schedule your personalized meditation session or join one of our comprehensive programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Booking Benefits */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Book With Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Expert Guidance</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Learn from Master Kai and Dr. Sarah Chen with 25+ years combined experience.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Flexible Scheduling</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Online sessions available across all US time zones to fit your lifestyle.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Personalized Approach</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Tailored sessions based on your experience level and goals.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                <p className="text-xs md:text-sm text-gray-700 font-medium mb-2">First Session Special:</p>
                <p className="text-xl md:text-2xl font-bold text-green-600">50% Off</p>
                <p className="text-xs md:text-sm text-gray-600">New students only</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Schedule Your Session</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Select Program/Session *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                  >
                    <option value="">Choose a program...</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                    >
                      <option value="">Select time slot...</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Meditation Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                  >
                    <option value="">Select your experience level...</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="some-experience">Some Experience (1-6 months)</option>
                    <option value="intermediate">Intermediate (6 months - 2 years)</option>
                    <option value="advanced">Advanced (2+ years)</option>
                  </select>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="Tell us about your goals, any questions, or special requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-sm md:text-base"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book My Session</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We'll confirm your booking within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Questions? We're Here to Help</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base px-4">
              Have questions about our online programs or need assistance with booking? We serve students nationwide and are here to help.
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm md:text-base">Call Us</p>
                <p className="text-gray-600 text-sm md:text-base">347 456 3508</p>
              </div>
              <div>
                <Mail className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm md:text-base">Email Us</p>
                <p className="text-gray-600 text-sm md:text-base">info@mountainmeditation.com</p>
              </div>
              <div>
                <MessageSquare className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm md:text-base">Online Support</p>
                <p className="text-gray-600 text-sm md:text-base">Available All Time Zones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;