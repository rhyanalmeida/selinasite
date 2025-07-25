import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock } from 'lucide-react';

const ResourcesPage = () => {
  const articles = [
    {
      id: 'what-is-meditation',
      title: 'What is Meditation?',
      icon: Brain,
      excerpt: 'Understanding the fundamental process of aligning mind and body for inner peace.',
      readTime: '5 min read',
      category: 'Fundamentals',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'why-meditate',
      title: 'Why Do We Meditate?',
      icon: Heart,
      excerpt: 'Discovering the essential need for organizing our minds peacefully and healthily.',
      readTime: '8 min read',
      category: 'Understanding',
      image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'power-of-affirmation',
      title: 'How Affirmation Can Make Our Life Great',
      icon: Mountain,
      excerpt: 'Teaching the mind positive responses for challenging life situations.',
      readTime: '4 min read',
      category: 'Practice',
      image: 'https://images.pexels.com/photos/1757731/pexels-photo-1757731.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'emotional-strength',
      title: 'Building Emotional Strength',
      icon: Shield,
      excerpt: 'Developing resilience and inner stability for life\'s challenges.',
      readTime: '6 min read',
      category: 'Development',
      image: 'https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'mind-friend-enemy',
      title: 'Your Mind: Friend or Enemy?',
      icon: Brain,
      excerpt: 'Understanding how thoughts shape our reality and learning to pause.',
      readTime: '10 min read',
      category: 'Awareness',
      image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 'happiness-meditation',
      title: 'Happiness is in Meditation',
      icon: Heart,
      excerpt: 'Discovering permanent happiness through inner connection and self-awareness.',
      readTime: '12 min read',
      category: 'Wisdom',
      image: 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Meditation Resources & Articles - Mountain Meditation & Yoga | Learn & Grow</title>
        <meta name="description" content="Explore our comprehensive collection of meditation articles and resources available to students nationwide. Learn about mindfulness, emotional strength, affirmations, and the path to inner peace." />
        <meta name="keywords" content="online meditation articles, virtual mindfulness resources, emotional strength, affirmations, inner peace, meditation guides, spiritual wisdom" />
        <link rel="canonical" href="https://mountainmeditation.com/resources" />
        <meta property="og:title" content="Meditation Resources & Articles - Learn & Grow" />
        <meta property="og:description" content="Comprehensive collection of meditation articles and resources for mindfulness and spiritual growth." />
        <meta property="og:url" content="https://mountainmeditation.com/resources" />
      </Helmet>
      <div className="pt-20 min-h-screen bg-gray-50">
        <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Learning <span className="text-blue-600">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the wisdom of meditation and spiritual growth with our comprehensive collection of articles and teachings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/resources/${article.id}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                      <article.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <span className="text-sm font-medium mr-1">Read More</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Deepen Your Practice?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our comprehensive programs to experience guided meditation and personalized instruction from our experienced teachers.
              </p>
              <Link
                to="/programs"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ResourcesPage;