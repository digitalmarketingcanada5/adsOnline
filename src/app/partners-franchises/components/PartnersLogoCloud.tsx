import React from 'react';

const PartnersLogoCloud: React.FC = () => {
  const logos = [
    "https://cdn.searchkings.ca/img/partners-franchises/mrrooter-logo-8a240f95e8.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/trane-logo-f5fadeca02.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/trane-tech-logo-bbaf2f81fa.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/amstd-logo-4ee988c79e.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/mr-electric-logo-74b78ecd8b.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/airserv-logo-f660927a6f.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/glassdoctor-logo-b5c9c2a80a.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/molly-maid-logo-3ce05bbc71.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/garage-living-logo-3fdb15c7db.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/fivestar-painting-logo-b71886bdab.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/mr-appliance-logo-ff41c8f002.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/mr-handyman-logo-cd8b524201.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/spraynet-ce9dfaede3.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/modern-purair-6189fc88c6.png",
    "https://cdn.searchkings.ca/img/partners-franchises/mdp-2aa7a5bf0a.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/mr-transmission-24330e7c28.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/nexstar-f0b3e8bfd0.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/imperial-capital-551f4d720f.svg",
    "https://cdn.searchkings.ca/img/partners-franchises/rolling-suds-8b87197ddc.png",
  ];

  return (
    <section className="py-16">
      <div className="container px-12 mx-auto">
        <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300 mb-8">A few of our partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map(logo => <img key={logo} src={logo} alt="Partner logo" className="max-h-16" />)}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogoCloud;
