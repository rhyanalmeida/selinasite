import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import BookingForm from '../components/BookingForm';
import ResourcesPreview from '../components/ResourcesPreview';
import AuthTest from '../components/AuthTest';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Mountain Meditation & Yoga - Find Inner Peace & Spiritual Growth</title>
        <meta name="description" content="Transform your life through authentic meditation and yoga practices. Join Selina Akhter for online mindfulness classes, emotional healing, and spiritual growth nationwide." />
        <meta name="keywords" content="mountain meditation, online yoga classes, mindfulness, spiritual growth, inner peace, Shopna Khidr, virtual meditation, stress relief" />
        <link rel="canonical" href="https://mountainmeditation.com/" />
        <meta property="og:title" content="Mountain Meditation & Yoga - Find Inner Peace & Spiritual Growth" />
        <meta property="og:description" content="Transform your life through authentic meditation and yoga practices with expert guidance." />
        <meta property="og:url" content="https://mountainmeditation.com/" />
      </Helmet>
      <div>
        <Hero />
        <About />
        <Programs />
        <ResourcesPreview />
        <Testimonials />
        <BookingForm />
        {/* Temporary auth test - remove after testing */}
        <AuthTest />
      </div>
    </>
  );
};

export default HomePage;