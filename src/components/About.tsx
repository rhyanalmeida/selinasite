import React from 'react';
import { Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We cultivate loving-kindness and empathy in all our teachings.'
    },
    {
      icon: Lightbulb,
      title: 'Wisdom',
      description: 'Ancient wisdom combined with modern understanding.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community of practitioners.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Mountain</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Dedicated to guiding individuals on their journey to inner peace and spiritual awakening.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Peaceful meditation practice with person sitting in lotus position surrounded by nature"
              className="rounded-xl shadow-lg w-full hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Mountain represents the natural flow of consciousness where peace and clarity 
              flow effortlessly through our being. We make authentic meditation practices 
              accessible to all seekers of truth.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Through our comprehensive programs, we guide students from their first breath 
              of awareness to deeper states of self-realization.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center lg:col-span-1 sm:col-span-1 last:sm:col-span-2 last:lg:col-span-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;