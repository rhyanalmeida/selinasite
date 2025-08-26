import React from 'react';
import { MapPin, Phone, Mail, Send, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to begin your meditation journey? We're here to guide you every step of the way.
          </p>
        </div>

        {/* Call-to-Action for Booking */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl mb-12 text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Book Your Session?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            After completing your payment, call us to schedule your personalized meditation or yoga session.
          </p>
          <div className="bg-white p-6 rounded-xl inline-block">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">347-456-3508</span>
            </div>
            <p className="text-gray-600 text-sm">Call now to book your session</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              />

              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base">
                <option>Select a program</option>
                <option>Beginner's Mind</option>
                <option>Mindful Living</option>
                <option>Inner Mastery</option>
              </select>

              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              ></textarea>

              <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-sm md:text-base">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-600">347 456 3508</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-600">info@mountainmeditation.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Online Sessions</p>
                    <p className="text-gray-600">Available Nationwide via Video Call</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Session Availability</h3>
              <div className="space-y-2 text-gray-600 text-sm md:text-base">
                <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                <p>Saturday - Sunday: 7:00 AM - 8:00 PM</p>
                <p>Time zones: Eastern, Central, Mountain, Pacific</p>
                <p>Holiday sessions available by appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;