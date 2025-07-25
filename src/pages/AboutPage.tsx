import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';
import Instructors from '../components/Instructors';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us & Meet Selina - Mountain Meditation & Yoga | Our Mission & Teacher</title>
        <meta name="description" content="Learn about Mountain Meditation & Yoga's mission and meet Selina Akhter, our expert meditation teacher with 15+ years experience serving students nationwide through online classes." />
        <title>About Us & Meet Shopna - Mountain Meditation & Yoga | Our Mission & Teacher</title>
        <meta name="keywords" content="about mountain meditation, Shopna Khidr, online meditation teacher, spiritual awakening, inner peace, meditation expert" />
        <link rel="canonical" href="https://mountainmeditation.com/about" />
        <meta property="og:title" content="About Us & Meet Shopna - Mountain Meditation & Yoga" />
        <meta property="og:url" content="https://mountainmeditation.com/about" />
      </Helmet>
      <div className="pt-20">
        <About />
        <Instructors />
      </div>
    </>
  );
};

export default AboutPage;