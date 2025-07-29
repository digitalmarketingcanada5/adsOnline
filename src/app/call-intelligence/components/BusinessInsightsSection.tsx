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

const BusinessInsightsSection = () => {
     const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { name: 'Call Scoring & Summary', icon: 'troubleshoot' },
        { name: 'Performance Insights', icon: 'support_agent' },
        { name: 'Filter Your Call Data', icon: 'instant_mix' },
        { name: 'Real-time Notifications', icon: 'notifications_active' },
    ];
    const tabContent = [
        {
            image: "https://cdn.searchkings.ca/img/call-intelligence/call-scoring-7dc92e34f0.svg",
            title: "Call Scoring & Summary",
            text: "Call Intelligence™ scores leads and provides summaries to help you quickly prioritize high-value prospects and identify lost revenue opportunities."
        },
        {
            image: "https://cdn.searchkings.ca/img/call-intelligence/booking-insight-ef7649a038.svg",
            title: "Performance Insights",
            text: "Quickly see how your business is doing over time and compared to your competition."
        },
        {
            image: "https://cdn.searchkings.ca/img/call-intelligence/filter-your-call-7a90a9cd4f.svg",
            title: "Filter Your Call Data",
            text: "Create your own filters to see what's important to your business. You can filter for where the ad came from, the call score, the region, and more."
        },
        {
            image: "https://cdn.searchkings.ca/img/call-intelligence/realtime-notification-c65370bfd9.svg",
            title: "Real-time Notifications",
            text: "Create instant notifications based on your filters. This will help you and your team stay informed about the most valuable calls and reduce missed chances to turn those calls into customers."
        }
    ];

    return (
        <section className="py-16">
            <div className="container px-12 mx-auto">
                <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300">Powerful Business Insights</h2>
                <p className="lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-gray-200">Our AdsOnline app lets you see your Call Intelligence™ data and how you're doing at any time, from anywhere.</p>
            </div>
            <div className="flex flex-col container justify-center px-12 lg:gap-8 lg:flex-row mx-auto">
                <div className="flex justify-end w-full lg:w-1/4">
                    <ul className="w-full flex flex-wrap overflow-x-auto no-scrollbar sm:py-2 sm:overflow-y-auto sm:gap-7 sm:flex-nowrap md:justify-center lg:flex-col">
                        {tabs.map((tab, index) => (
                             <li key={tab.name} className="w-full flex min-w-[160px]">
                                <div onClick={() => setActiveTab(index)} className={`w-full flex items-center gap-2 px-4 py-5 justify-center rounded-full sm:rounded-lg sm:justify-start sm:py-2 lg:shadow-lg cursor-pointer transition-all ${activeTab === index ? 'bg-gray-800 text-white' : 'bg-white text-black shadow-md'}`}>
                                    <MaterialIcon className="hidden sm:block">{tab.icon}</MaterialIcon>
                                    <span className="text-base text-balance xl:text-xl">{tab.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-center py-8 lg:w-1/2">
                    <div className="relative flex flex-col items-center justify-center gap-8 bg-gray-800 rounded-3xl w-full overflow-hidden p-4 sm:p-8 sm:h-[400px] lg:w-[660px]">
                        <img src={tabContent[activeTab].image} alt={tabContent[activeTab].title} className="w-fit" />
                    </div>
                </div>
                <div className="flex items-center lg:w-1/4 w-full">
                     <div className="xl:max-w-[390px]">
                        <h3 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h3>
                        <p className="font-light text-gray-600">{tabContent[activeTab].text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessInsightsSection;
