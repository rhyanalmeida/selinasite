import React from 'react';
import { Star, Award, Users, Heart } from 'lucide-react';

const Instructors = () => {
  return (
    <section id="instructors" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Your <span className="text-blue-600">Teacher</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Learn from an experienced master who has dedicated her life to meditation practice, healing, and guiding others toward inner peace and transformation.
          </p>
        </div>

        {/* Main Instructor Profile */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 lg:p-12">
              {/* Header with photo and basic info */}
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-6 md:mb-8">
                <img
                  src="https://i.ibb.co/vvPDs5v4/IMG-1039.jpg"
                  alt="Shopna Khidr - Meditation Teacher"
                  className="w-24 md:w-32 h-24 md:h-32 rounded-full object-cover shadow-lg border-4 border-blue-100"
                />
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-blue-600 font-semibold">Lead Instructor & Founder</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Selina Akhter</h3>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-1 sm:space-y-0 sm:space-x-4 mb-6 text-gray-600 text-sm md:text-base">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>15+ years experience</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>Serving Nationwide</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                  Shopna is a compassionate meditation teacher and spiritual guide who has transformed thousands of lives through her authentic approach to mindfulness and emotional healing. Serving students nationwide through online classes and virtual sessions, she combines ancient wisdom with modern understanding to help students master their minds and find lasting inner peace.
                </p>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  Her teachings focus on the fundamental truth that "You are the Master of your Mind" - empowering students across the United States to break free from limiting patterns and step into their highest potential through accessible online programs.
                </p>

                {/* Specializations */}
                <div className="grid md:grid-cols-2 gap-4 mb-6 md:mb-8">
                  <div className="bg-blue-50 p-4 md:p-5 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">Mind Mastery</h4>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">Emotional intelligence & mental clarity</p>
                  </div>
                  <div className="bg-green-50 p-4 md:p-5 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">Healing & Growth</h4>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">Relationship healing & self-esteem</p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="border-t border-gray-200 pt-4 md:pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Expertise & Training</h4>
                  <div className="space-y-2 text-gray-600 text-sm md:text-base">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>Certified Meditation & Mindfulness Teacher</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>Emotional Intelligence Specialist</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>Stress Management & Anger Resolution Expert</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>Relationship & Self-Esteem Coach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 md:p-8 text-white text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Selina's Teaching Philosophy</h3>
            <blockquote className="text-lg md:text-xl italic mb-4 md:mb-6 px-2">
              "You are the Master of your Mind. Don't be a slave of Your mind. Every moment is an opportunity to choose peace over chaos, love over fear, and wisdom over reactivity."
            </blockquote>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base px-2">
              Through personalized guidance and compassionate teaching, Shopna helps students develop the emotional strength and mental clarity needed to navigate life's challenges with grace and wisdom.
            </p>
          </div>
        </div>

        {/* Student Success */}
        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600 text-sm md:text-base">Students Transformed</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">15+</div>
            <p className="text-gray-600 text-sm md:text-base">Years of Experience</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">14</div>
            <p className="text-gray-600 text-sm md:text-base">Specialized Programs</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Transformation?</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base px-4">
              Experience Shopna's compassionate guidance and proven methods for achieving lasting inner peace and emotional freedom.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Book a Session with Shopna
              </button>
              <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all">
                Learn About Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;