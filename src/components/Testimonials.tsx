import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Matthews',
      role: 'Corporate Executive',
      image: 'https://images.pexels.com/photos/3823070/pexels-photo-3823070.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'Mountain Meditation & Yoga has completely transformed my relationship with stress and anxiety. After just 8 weeks in their Mindful Living program, I feel more centered and peaceful than I have in years. The instructors are incredibly knowledgeable and compassionate.',
      program: 'Mindful Living Program'
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/3823074/pexels-photo-3823074.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'As someone who was skeptical about meditation, I was amazed by how practical and accessible the teachings at Mountain Meditation & Yoga are. The science-based approach helped me understand the "why" behind the practice. I now meditate daily and my focus has improved dramatically.',
      program: 'Beginner\'s Mind Course'
    },
    {
      name: 'Dr. Lisa Rodriguez',
      role: 'Physician',
      image: 'https://images.pexels.com/photos/3823077/pexels-photo-3823077.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'The teacher training program at Mountain Meditation & Yoga exceeded all my expectations. Not only did I deepen my own practice, but I gained the confidence and skills to share meditation with my patients. The support and mentorship continue long after graduation.',
      program: 'Teacher Training Certification'
    },
    {
      name: 'David Thompson',
      role: 'Retired Teacher',
      image: 'https://images.pexels.com/photos/3823078/pexels-photo-3823078.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'At 68, I thought it was too late to learn meditation. Master Kai and his team showed me that every moment is perfect for beginning. The Inner Mastery program has given me a sense of purpose and joy I never knew was possible.',
      program: 'Inner Mastery Program'
    },
    {
      name: 'Sarah Kim',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/3823079/pexels-photo-3823079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'The Family Meditation program has brought our family closer together. My kids actually ask to meditate now! It\'s become our special bonding time, and we\'ve all learned better ways to handle emotions and communicate with each other.',
      program: 'Family Meditation Program'
    },
    {
      name: 'Robert Wilson',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/3823080/pexels-photo-3823080.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'The Corporate Wellness program Mountain Meditation & Yoga implemented at our company has been a game-changer. Employee satisfaction is up, stress-related sick days are down, and productivity has increased. It\'s been one of our best investments.',
      program: 'Corporate Wellness Program'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Student <span className="text-green-600">Experiences</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Hear from our students about their transformative journeys and the profound impact 
            meditation has had on their lives, relationships, and well-being.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic text-sm md:text-base">"{testimonial.text}"</p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-xs md:text-sm font-medium">{testimonial.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 md:p-8 rounded-2xl text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to Begin Your Transformation?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm md:text-base px-4">
              Join thousands of students who have discovered inner peace, clarity, and joy through our programs. 
              Your journey to a more mindful, compassionate life starts with a single step.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all w-full sm:w-auto">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;