import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Star } from 'lucide-react';

const ResourcesPreview = () => {
  const featuredArticles = [
    {
      id: 'what-is-meditation',
      title: 'What is Meditation?',
      icon: Clock,
      excerpt: 'Understanding the fundamental process of aligning mind and body for inner peace.',
      category: 'Fundamentals'
    },
    {
      id: 'happiness-meditation',
      title: 'Happiness is in Meditation',
      icon: Star,
      excerpt: 'Discovering permanent happiness through inner connection and self-awareness.',
      category: 'Wisdom'
    },
    {
      id: 'emotional-strength',
      title: 'Building Emotional Strength',
      icon: Clock,
      excerpt: 'Developing resilience and inner stability for life\'s challenges.',
      category: 'Development'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meditation <span className="text-blue-600">Wisdom</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our collection of articles and teachings to deepen your understanding of meditation and spiritual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/resources/${article.id}`}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <article.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-blue-600 font-medium">{article.category}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-1">{article.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center text-blue-600 mt-4 group-hover:text-blue-800 transition-colors">
                <span className="text-sm font-medium">Read More</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore All Resources</h3>
            <p className="text-gray-600 mb-6">
              Discover our complete collection of meditation articles, teachings, and spiritual wisdom to support your journey.
            </p>
            <Link
              to="/resources"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <span>View All Resources</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;