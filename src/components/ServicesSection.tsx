// START:ServicesSection
// Services Section

import React from 'react';
import MaterialIcon from './MaterialIcon';
const ServicesSection = () => {
    const services = [
        {
            icon: 'https://cdn.searchkings.ca/img/home/ads-management-white-b092da1f16.svg',
            title: 'Ads Management',
            description: 'Show up where your customers are',
            href: '/ad-management'
        },
        {
            icon: 'https://cdn.searchkings.ca/img/home/local-services-ads-white-dcdd346e7c.svg',
            title: 'Local Services Ads',
            description: 'Get verified and generate more leads',
            href: '/local-services-ads'
        },
        {
            icon: 'https://cdn.searchkings.ca/img/home/web-services-white-a110031c74.svg',
            title: 'Web Services',
            description: 'Modern sites for lead generation',
            href: '/web-services'
        },
        {
            icon: 'https://cdn.searchkings.ca/img/home/call-intelligence-white-c0760fd428.svg',
            title: <>Call Intelligence<sup>™</sup></>,
            description: 'Score and summarize all calls',
            href: '/call-intelligence'
        }
    ];

    return (
        <section className="flex items-center px-4 sm:px-12 py-16 bg-gray-50 w-full">
            <div className="container mx-auto flex justify-center items-center rounded-3xl">
                <div className="rounded-3xl flex flex-col lg:flex-row shadow-2xl justify-center items-center h-full overflow-hidden">
                    <div className="w-full lg:w-1/3 p-8 lg:p-12 bg-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-8 text-gray-800">Streamline your digital advertising</h2>
                        <p className="mb-4 lg:mb-8 text-gray-600">We are experts at managing scalable search, remarketing, display and video advertising campaigns.</p>
                        <p className="text-gray-600">Our key areas of expertise include home and professional services, with a large portion operating under a franchise or a dealer network.</p>
                    </div>
                    <div className="w-full h-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 p-8 lg:p-12 bg-gray-800 text-white">
                        {services.map(service => (
                             <a href={service.href} key={service.href} className="group">
                                <div className="flex flex-col gap-2 items-start h-full">
                                    <img className="w-[40px] h-[40px] mb-2" alt={typeof service.title === 'string' ? service.title : 'Service Icon'} src={service.icon} />
                                    <div className="flex-grow">
                                        <p className="lg:text-2xl text-xl font-bold mb-1">{service.title}</p>
                                        <p className="font-light leading-tight text-gray-300">{service.description}</p>
                                    </div>
                                    <div className="flex mt-4 items-center">
                                        <span className="text-white border-b-2 border-white pb-1 group-hover:text-red-500 group-hover:border-red-500 transition-all flex items-center pr-1 leading-none font-bold">
                                            Learn More
                                        </span>
                                        <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="group-hover:invert"/>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
// END:ServicesSection
