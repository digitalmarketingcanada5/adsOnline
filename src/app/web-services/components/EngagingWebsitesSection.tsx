import React from 'react';

const EngagingWebsitesSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300">Engaging websites to drive conversions</h2>
            <p className="text-black lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-200">AdsOnline creates engaging websites that display the core aspects of your product or service offering.</p>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 px-12 mx-auto">
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Lead-generation focused web design </p>
                <img src="https://cdn.searchkings.ca/img/web/card-1-01dbe87772.webp" alt="Lead generation" className="!w-full md:rounded-3xl rounded-xl overflow-hidden shadow-lg" />
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Conversion-based experience </p>
                <img src="https://cdn.searchkings.ca/img/web/card-2-98ee8d354b.webp" alt="Contact form" className="!w-full md:rounded-3xl rounded-xl overflow-hidden shadow-lg" />
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Turn browsers into leads </p>
                <img src="https://cdn.searchkings.ca/img/web/card-3-eaf35236ce.webp" alt="Phone call screen" className="!w-full md:rounded-3xl rounded-xl overflow-hidden shadow-lg" />
            </div>
        </div>
    </section>
);

export default EngagingWebsitesSection;
