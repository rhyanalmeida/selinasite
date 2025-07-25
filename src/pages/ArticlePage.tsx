import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Brain, Heart, Mountain, Shield, Clock, User, ChevronRight } from 'lucide-react';

const ArticlePage = () => {
  const { articleId } = useParams();

  const articles = {
    'what-is-meditation': {
      title: 'What is Meditation?',
      icon: Brain,
      excerpt: 'Understanding the fundamental process of aligning mind and body for inner peace.',
      readTime: '5 min read',
      category: 'Fundamentals',
      content: `Very simply we can say that meditation is a process that can move our mind and body in one direction. And when we are in one direction, our mind can form the proper relationship with our body and mind. We can effectively go through specific emotions that come from specific knowledge. Beyond our imaginations our Universal Truths can respond beautifully and harmoniously within us. The rhythm between the creation and the creator makes us alive.

This cheerfulness is the consciousness that keeps us awake in the face of trouble and danger is meditation, meditation or dhayan.

Or, You have to charge yourself. What happens if we don't charge our device? We cannot use them. This is exactly how we cannot use ourselves. Someone else uses us. So human relationships, bodies are always at risk. Who is that other person? Greater power. You might have planned the whole day but suddenly something happened that changed everything. If we are aware we can minimize our mistakes. I can handle mind and body. Even if things don't go your way, the chances of getting disappointed are reduced. Meditation and inner connection are essential for this.`
    },
    'why-meditate': {
      title: 'Why Do We Meditate?',
      icon: Heart,
      excerpt: 'Discovering the essential need for organizing our minds peacefully and healthily.',
      readTime: '8 min read',
      category: 'Understanding',
      content: `We need meditation to organize our minds peacefully and healthily. If mind complaining always then medicine will not work for body. We all are a student from birth to death. And notice that we are always learning something. So that we don't learn things that harm us, that's what meditation is for. Learning or putting the mind in a mode that protects us.

After birth you will see many mothers saying that the baby did not get breast milk. Actually she was not taught. A small baby needs to be taught by holding the nipple to his lips, or he/she will not learn to express milk. And new mothers often do not understand. Especially in the case of those who have a cesarean baby, it is often heard that the baby did not receive breast milk. To tell the truth, she could not teach the child because of his physical condition. If the child does not pull, the mother's breast does not produce milk. After a certain time feeder take the place. In this way other things occupy our mind. This is the beginning of learning until the moment before death has to be learned for various reasons.

Pay attention and you will see that we are learning something consciously or unconsciously. Now you don't have to go anywhere to learn. Just open the phone and you will see how many resources there are. There is no shortage of education. There is a lot to learn in everything from captions with pictures to large and small text, including video content. Just as there are love poems with very beautiful pictures, there are lines of hatred as well. What you will learn from here is your choice.

Learn when you need to learn something better consciously. We are auto-learning all the time in our subconscious mind. Just as there are diamonds in the subconscious mind, there are also bad ones. To get the diamond, you have to close it first. It has to be emptied. Self consciousness has to be created between the conscious mind and the subconscious mind. Then the mind stops eating. It is called emotional diet.

The body cannot take it all at one time in life. Can't jump, can't do entertainment! Can not be silent! But silence is the greatest blessing. The best thing is to learn to be silent. without anything some time Can't we learn to be silent as we learn so many difficult things? I can You can see yourself as a student of silence. If you cultivate knowledge within yourself, you will find your own guide line.`
    },
    'power-of-affirmation': {
      title: 'How Affirmation Can Make Our Life Great',
      icon: Mountain,
      excerpt: 'Teaching the mind positive responses for challenging life situations.',
      readTime: '4 min read',
      category: 'Practice',
      content: `We know that much of what we think or answer in the classroom or in our exam hall is learned beforehand. And then our mind remembers and can write. Similarly, when a situation arises in our life, we write the answer to the question like this. I react to situations but some situations are very weak and if we don't teach our mind what to say or how to react? Then the mind will act aggressively and then various accidents occur.

For example - I have money. If you read this formula, you can pay someone if you want money. Similarly, I can love someone if I have enough love. For this we teach the mind that I love me. So that the seeds of love and sufficiency are planted in me. Then no more begging.

"I am a calm soul." If this is taught to the mind, in a moment of anger the mind will say I am a calm soul. So we don't have a confirmation option to get out of a bad situation.`
    },
    'emotional-strength': {
      title: 'Building Emotional Strength',
      icon: Shield,
      excerpt: 'Developing resilience and inner stability for life\'s challenges.',
      readTime: '6 min read',
      category: 'Development',
      content: `Are you emotionally strong? How do you understand your emotional strength? Do the words of others break you easily, do the eyes get wet very easily? If there is any sign of what many call too much love. But this is a complete misconception. These symptoms easily destroy your stability of mind, make you sad for the suffering of others, how can it be love? Love is creating pleasure or comfort. So this kind of emotion can never be love.

Only if you are emotionally strong can you become a strong person to save yourself as well as others from any kind of pain, temptation, or harm. Does it matter how much physical ability you have? Have the financial ability? If your mind power is not good then the rest will be of no use. You have to be stable and strong minded in every situation of life and only then can you become loving and lovable. You can always reflect love, otherwise you are a pain radiator.`
    },
    'mind-friend-enemy': {
      title: 'Your Mind: Friend or Enemy?',
      icon: Brain,
      excerpt: 'Understanding how thoughts shape our reality and learning to pause.',
      readTime: '10 min read',
      category: 'Awareness',
      content: `Your biggest enemy is your own mind and the thoughts it produces itself. The thing that hurts you most is your own thoughts. Now, what is the nature of human thoughts? Happiness and sadness both surround over it. And it's surely possible to look down on big events if you have a mind so deep. Small events are magnified when the soul's power is exhausted because there remains no power to take anything. Actually, there is no problem in the world. It only takes shape in the way a person views and ponders it.

For example, in the same incident, four people in the house might react in four ways. One says, "Okay, okay." One says "Oh my God how is this possible? What's right, nothing's right"? Another person might say, he will not be able to find the words and will start crying. Another says, "Let's see what happens"? The truth is that everyone sees the matter with his own state of mind.

Feelings, reactions after following an event are all secondary matters before your thoughts act which in turn creates a reaction in the mind - not external things or any source. So if you want you can use a pause button after the event. At one time the pause button is far away, there is no need to think, the reaction comes and later people say that it is normal to become angry.

Many people might think that they will be happy if they get it in life. There is also a wrong equation. External things give comfort, pleasure, or temporary bliss or pain. Don't get the comfort you get from sitting on a sofa or on a wooden chair? Now ask if all people are happy sitting on the sofa? Not really so! Your thoughts about sofa doesn't make you happy just like other people or situations don't make you sad. But the one who gives is your thought.

When a person expects something from others he is in the role of a fakir (beggar). The mind is always begging. Know that it is your mind that opposes you and no one else. Your intellect is working against you. Much of what holds people back in life is own feelings of thought and self-judgment which is constantly uniting his past, present and future.`
    },
    'happiness-meditation': {
      title: 'Happiness is in Meditation',
      icon: Heart,
      excerpt: 'Discovering permanent happiness through inner connection and self-awareness.',
      readTime: '12 min read',
      category: 'Wisdom',
      content: `Poet Jalaluddin Rumi used to read a book with deep concentration every night before sleeping. After reading the book, he would keep the book under his pillow. He used to talk to the devotees about his various kinds of creations. He used to distribute knowledge, but he did not tell anyone about this book. When he died, leaving his body, all eyes were on the book under the pillow. Everyone forgot the grief and started looking for books first. They saw the book which turned out to be a book with all white pages. There is nothing written on it. But he used to read it for hours. It was actually a similar type of meditation.

It is generally believed that meditation is necessary when there is a weak moment in life or if you are over 40 years old. But if you can master these things in the beginning than meditation at the end of life, life is different. Meditation should be started not after something happens, but always to keep the body and mind healthy and fresh.

We learn from childhood, how to be happy? I went to the picnic happily. Eid, Puja is really happy occasion. I am happy if someone gives something. Arguably, this is how we are coded to say that happiness means getting something with joy. This happiness is actually not permanent. They give temporary pleasure, but do not fulfill satisfaction of the soul.

Purification of the soul is possible only when for some time one can dive into oneself, into creation. Just like a mobile, if does not last even a day if it is not charged every day, similarly if people's minds are not organized, if they are not charged, it keeps going down. A time when there is no charge, it easily makes us sad. Meditation helps to calm the mind with bliss of heart.

No situation can change the course of our mind. Keeping calm is very important in any difficult situation. The problem should be seen as a situation rather than a problem. Taking it as a possibility will not seem like a problem. We become totally dependent on the situation and react accordingly.

For example, when someone wakes up and sees the description of the accident. When driving a car is always afraid, when an accident happens! Any type of bad news that comes through various channels directly affects the mind. In the morning the mind absorbs it all and thus has a negative effect on the body.

In the morning you can meditate for at least half an hour and listen to the message of knowledge or any religious message. The mind is the main source of control over the body. Meditation first teaches you how to be good to yourself. If you are good, everything around you will be good.`
    }
  };

  const article = articles[articleId as keyof typeof articles];

  if (!article) {
    return (
      <>
        <Helmet>
          <title>Article Not Found - Mountain Meditation & Yoga</title>
          <meta name="description" content="The requested article could not be found. Return to our resources page for meditation articles and guides." />
        </Helmet>
        <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <Link to="/resources" className="text-blue-600 hover:text-blue-800">
              Return to Resources
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - Mountain Meditation & Yoga | Meditation Wisdom</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={`${article.title}, meditation, mindfulness, spiritual growth, ${article.category.toLowerCase()}`} />
        <link rel="canonical" href={`https://mountainmeditation.com/resources/${articleId}`} />
        <meta property="og:title" content={`${article.title} - Mountain Meditation & Yoga`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={`https://mountainmeditation.com/resources/${articleId}`} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="Shopna Khidr" />
        <meta property="article:section" content={article.category} />
      </Helmet>
      <div className="pt-20 min-h-screen bg-gray-50">
        <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/resources"
            className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
          >
            <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
            Back to Resources
          </Link>

          <article className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <article.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Shopna Khidr</span>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">{article.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{article.excerpt}</p>

            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 rounded-xl text-white text-center">
                <h3 className="text-xl font-bold mb-3">Ready to Begin Your Journey?</h3>
                <p className="text-blue-100 mb-4">
                  Join our meditation programs to experience these teachings in practice.
                </p>
                <Link
                  to="/programs"
                  className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
      </div>
    </>
  );
};

export default ArticlePage;