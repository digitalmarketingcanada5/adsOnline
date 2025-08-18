"use client";
import { useState } from 'react';

const BetterDataSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        "Intelligent Marketing",
        "Convert More Calls",
        "Understand Your Customers",
        "Learn How You Can Improve"
    ];
    const tabContents = [
        {
            title: "We train Google to get you better calls",
            description: "Call Intelligence™ helps you make the most of every call by identifying what your most profitable calls look like, and training Google to give you more. By knowing what your best calls look like and when you're losing potential customers, your team can turn more calls into wins.",
            image: "https://cdn.searchkings.ca/img/call-intelligence/intelligence-marketing-afeebdc0af.svg"
        },
        {
            title: "Turn lost leads into wins",
            description: "Every call is a chance to grow your business. Maybe a call wasn't answered, someone thought the price was too high, or you were fully booked. With Call Intelligence, we show you where you might be losing out so that your team can get those lost leads back, change how they answer the phone, and lock in more business from every call.",
            image: "https://cdn.searchkings.ca/img/call-intelligence/convert-d15ca2962f.svg"
        },
        {
            title: "See what's working and what's not",
            description: "Call Intelligence™ can show your best and worst performing calls by region, campaign type, and more. Knowing what calls are most likely to bring in money can help you beat your competition and make the most of your marketing dollars.",
            image: "https://cdn.searchkings.ca/img/call-intelligence/understand-6114c7db6a.svg"
        },
        {
            title: "See how you're performing against your competitors",
            description: "How does your booking rate compare to industry benchmarks and past performance? Call Intelligence™ analyzes your call data and presents performance trends to help you clearly understand and identify opportunities for improvement.",
            image: "https://cdn.searchkings.ca/img/call-intelligence/learn-d1a300a6fc.svg"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container flex flex-col items-center gap-4 mx-auto px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Better Data, Better Campaign Performance</h2>
            </div>
            <div className="container mx-auto px-12 mt-8">
                <div className="flex border-b border-black overflow-x-auto no-scrollbar lg:justify-center">
                    {tabs.map((tab, index) => (
                        <button key={tab} onClick={() => setActiveTab(index)} className={`shrink-0 px-6 py-3 lg:text-xl font-medium border-b-4 transition-all ${activeTab === index ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300'}`}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="pt-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col gap-4 justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-gray-800">{tabContents[activeTab].title}</h3>
                            <p className="font-normal text-gray-600">{tabContents[activeTab].description}</p>
                        </div>
                        <div className="text-center">
                            <img src={tabContents[activeTab].image} alt={tabContents[activeTab].title} className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BetterDataSection;
