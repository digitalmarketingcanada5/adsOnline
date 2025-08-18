import React from 'react';
import ContactUsHero from './components/ContactUsHero';
import GoogleAdsEvaluation from './components/GoogleAdsEvaluation';
import WhyWorkWithAdsOnline from './components/WhyWorkWithAdsOnline';

export default function ContactUsPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <ContactUsHero />
        <GoogleAdsEvaluation />
        <WhyWorkWithAdsOnline />
      </main>
    </>
  );
}
