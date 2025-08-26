import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Mountain Meditation & Yoga | Get in Touch</title>
        <meta name="description" content="Contact Mountain Meditation & Yoga for online meditation classes, programs, and spiritual guidance available nationwide. Call 347-456-3508 for consultation." />
        <meta name="keywords" content="contact meditation center, online meditation classes, virtual spiritual guidance, meditation consultation, nationwide service" />
        <link rel="canonical" href="https://mountainmeditation.com/contact" />
        <meta property="og:title" content="Contact Us - Mountain Meditation & Yoga" />
        <meta property="og:description" content="Get in touch for meditation classes, programs, and spiritual guidance." />
        <meta property="og:url" content="https://mountainmeditation.com/contact" />
      </Helmet>
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;