import React from 'react';

const ConversionRatesSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300">Measure & improve conversion rates</h2>
            <p className="text-black mb-8 font-light md:text-center text-left text-gray-200">Our sites focus on the core aspects of a businesses product or service offering. This allows us <br className="hidden xl:block" /> to focus the customer's attention on calling or filling out a form.</p>
            <div className="grid md:grid-cols-2 gap-8 xl:gap-14">
                <div className="h-full">
                    <div className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-[#063649]">
                        <div className="w-full h-full flex justify-center items-center mx-auto">
                            <img src="https://cdn.searchkings.ca/img/web/web-conversion-browser-fe238188be.webp" alt="Website conversion" className="shadow-3xl mt-4 sm:mt-8 !mb-0 px-8" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center h-full">
                    <ul className="w-full px-0 text-gray-200 text-xl my-0 py-0 space-y-4">
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg" width="24" height="24" alt="bullet" /> Site design and functionality built to drive conversion </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg" width="24" height="24" alt="bullet" /> Clear and concise calls to action </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg" width="24" height="24" alt="bullet" /> Mobile and desktop friendly </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg" width="24" height="24" alt="bullet" /> Data-optimized designs </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg" width="24" height="24" alt="bullet" /> Modern and lightweight frontend frameworks </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg" width="24" height="24" alt="bullet" /> Built for speed and performance </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default ConversionRatesSection;
