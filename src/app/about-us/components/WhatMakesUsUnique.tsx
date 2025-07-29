import React from 'react';
import MaterialIcon from '../../../components/MaterialIcon';

const WhatMakesUsUnique: React.FC = () => {
  const uniquePoints = [
    {
      icon: "filter_tilt_shift",
      title: "Focus & Expertise",
      description: "We offer a focused scope of services, and we do it well."
    },
    {
      icon: "query_stats",
      title: "Transparency",
      description: "We measure and report on what matters to our customers. We separate our fees from the advertising budget, so our customers can easily understand their investment."
    },
    {
      icon: "rebase",
      title: "Flexibility and Freedom to Choose",
      description: "We do not ask for long-term commitments or contracts, as we believe our customers should have the right to make a change at any time."
    },
    {
      icon: "monitoring",
      title: "Prioritizing Performance",
      description: "Our fees are not linked to advertising budgets, which means we can remain aligned with our customers' interests and advise them professionally and objectively."
    },
    {
      icon: "volunteer_activism",
      title: "Empathy Powered by Automation",
      description: "We combine technology and automation with the power of empathy and human interaction."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-12">
        <div className="w-full pb-8 lg:text-center text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300">What makes us unique?</h2>
          <p className="text-gray-200 mt-4">We are experts at managing scalable search, remarketing, display and video advertising campaigns.</p>
        </div>
        <div className="grid lg:grid-cols-6 gap-8">
          {uniquePoints.map((point, index) => (
            <div key={point.title} className={`card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-gradient-to-b from-red-600 to-red-500 text-white h-full ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
              <div className="w-full h-full flex flex-col justify-start content-start gap-2">
                <MaterialIcon className="!text-[100px] mb-8 -ml-4">{point.icon}</MaterialIcon>
                <p className="title !leading-tight text-white xl:text-4xl text-3xl">{point.title}</p>
                <p className="text-lg font-light tracking-tight lg:text-xl text-white mt-4">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsUnique;
