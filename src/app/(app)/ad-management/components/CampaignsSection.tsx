"use client";
import { useState } from 'react';

interface MaterialIconProps {
    children: string;
    className?: string;
}

const MaterialIcon = ({ children, className = "" }: MaterialIconProps) => (
    <span className={`material-symbols-outlined ${className}`}>
        {children}
    </span>
);

const CampaignsSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { name: 'Search', icon: 'search' },
        { name: 'Display', icon: 'image' },
        { name: 'Shopping', icon: 'sell' },
        { name: 'Video', icon: 'smart_display' },
    ];
    const tabContent = [
        {
            image: "https://cdn.searchkings.ca/img/ads-management/ad-slider/search-5ca2977a8a.webp",
            title: "Start with search",
            text: "Help drive sales, leads, and site traffic by getting your business in front of people who are actively searching for the products or services you offer."
        },
        {
            image: "https://cdn.searchkings.ca/img/ads-management/ad-slider/display-5856a091e6.webp",
            title: "Engage the eye",
            text: "Build awareness and consideration with memorable, visually engaging ads that reach your audience when they're online."
        },
        {
            image: "https://cdn.searchkings.ca/img/ads-management/ad-slider/shopping-792bf1082d.webp",
            title: "Offer up your inventory",
            text: "Boost awareness of your brand and present your inventory and online store to shoppers who are looking for your products.",
            button: { text: "Learn More", href: "/services/ecommerce/" }
        },
        {
            image: "https://cdn.searchkings.ca/img/ads-management/ad-slider/video-ad7c2b5208.webp",
            title: "Bring your brand to life with video",
            text: "Boost awareness of your brand, follow up with former ad viewers, and reach potential customers while they're watching or searching for videos on YouTube.",
            button: { text: "Learn More", href: "/services/video-marketing/" }
        }
    ];

    return (
        <section className="py-16">
            <div className="container px-12 mx-auto">
                <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-800">Campaigns that can help you meet your goals</h2>
                <p className="lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-gray-600">Drive sales, leads, and site traffic by getting your business in front of people who are actively searching for products or services you offer.</p>
            </div>
            <div className="flex flex-col lg:flex-row container gap-8 justify-center px-12 mx-auto">
                <div className="flex justify-center lg:w-1/3 w-full">
                    <ul className="w-full flex flex-wrap sm:flex-nowrap lg:flex-col md:justify-center">
                        {tabs.map((tab, index) => (
                            <li key={tab.name} className="w-full sm:w-auto flex">
                                <div onClick={() => setActiveTab(index)} className={`rounded-full flex justify-between items-center gap-6 px-8 py-4 mx-1 my-3 sm:mx-3 shadow-md lg:shadow-lg lg:w-[200px] w-full cursor-pointer transition-all ${activeTab === index ? 'bg-gradient-to-tr from-yellow-400 to-yellow-300 text-black' : 'bg-gray-800 text-white'}`}>
                                    {tab.name}
                                    <MaterialIcon>{tab.icon}</MaterialIcon>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-center lg:w-1/3 w-full">
                    <img src={tabContent[activeTab].image} alt={tabContent[activeTab].title} className="max-w-full h-auto" />
                </div>
                <div className="flex items-center lg:w-1/3 w-full">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h3>
                        <p className="font-light text-gray-600">{tabContent[activeTab].text}</p>
                        {tabContent[activeTab].button && (
                             <a href={tabContent[activeTab].button.href} className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden bg-gradient-to-r from-red-600 to-red-500">
                                <div className="group md:text-lg text-base text-white font-bold h-full hover:from-black hover:to-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                                    <span className="tracking-tight">{tabContent[activeTab].button.text}</span>
                                    <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="invert group-hover:invert" />
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampaignsSection;
