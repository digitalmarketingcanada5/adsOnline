import React from 'react';
import AboutUsHero from './components/AboutUsHero';
import TheStartOfAdsOnline from './components/TheStartOfAdsOnline';
import WhatMakesUsUnique from './components/WhatMakesUsUnique';
import HelpingPartnersSection from './components/HelpingPartnersSection';
import GreatCompanyGreaterPeople from './components/GreatCompanyGreaterPeople';
import GettingStartedEasySection from './components/GettingStartedEasySection';

export default function AboutUsPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <AboutUsHero />
        {/* <TheStartOfAdsOnline /> */}
        <WhatMakesUsUnique />
        {/* <HelpingPartnersSection /> */}
        {/* <GreatCompanyGreaterPeople /> */}
        <GettingStartedEasySection />
      </main>
    </>
  );
}
