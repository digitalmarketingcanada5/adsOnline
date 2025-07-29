import React from 'react';

const HowItWorksSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300">How it works</h2>
            <p className="text-black lg:w-[95%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-200">When a customer books a Google-verified service provider, they know they're getting guaranteed services from a trustworthy and qualified business.</p>
            <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden">
                <div className="h-full bg-[#32B355] flex justify-center items-end">
                    <img src="https://cdn.searchkings.ca/img/google-local-service/google-phone-f8600cd8db.webp" alt="Phone with Google Local Services" className="w-[300px]" />
                </div>
                <div className="flex items-center h-full py-8 lg:p-12 bg-gray-50">
                    <ul className="w-full px-0 text-gray-700 text-xl my-0 py-0 space-y-4">
                        <li className="flex items-start"><img className="mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg" width="24" height="24" alt="bullet" /> Pay for phone leads, not for clicks </li>
                        <li className="flex items-start"><img className="mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg" width="24" height="24" alt="bullet" /> Be seen right at the top of Google </li>
                        <li className="flex items-start"><img className="mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg" width="24" height="24" alt="bullet" /> Connect with potential customers when they need you </li>
                        <li className="flex items-start"><img className="mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg" width="24" height="24" alt="bullet" /> Simple set up and communication through an easy-to-use app </li>
                        <li className="flex items-start"><img className="mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg" width="24" height="24" alt="bullet" /> Build trust with the verified-by-Google badge </li>
                        <li className="flex items-start"><img className="mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg" width="24" height="24" alt="bullet" /> Only pay for leads related to your business and the services you offer </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default HowItWorksSection;
