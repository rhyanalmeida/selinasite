import React from 'react';
import { Helmet } from 'react-helmet-async';
import Programs from '../components/Programs';

const ProgramsPage = () => {
  return (
    <>
      <Helmet>
        <title>Meditation Programs - Mountain Meditation & Yoga | Transform Your Life</title>
        <meta name="description" content="Explore our comprehensive online meditation and wellness programs for emotional wellness, mind & mental health, and body & spirit. Master your mind with expert guidance from anywhere in the US." />
        <meta name="keywords" content="online meditation programs, virtual emotional wellness, mental health, stress relief, anger management, self esteem, mindfulness practices, online yoga classes" />
        <link rel="canonical" href="https://mountainmeditation.com/programs" />
        <meta property="og:title" content="Meditation Programs - Transform Your Life" />
        <meta property="og:description" content="Comprehensive meditation and wellness programs for emotional wellness, mental health, and spiritual growth." />
        <meta property="og:url" content="https://mountainmeditation.com/programs" />
      </Helmet>
      <div className="pt-20">
        <Programs />
      </div>
    </>
  );
};

export default ProgramsPage;