import React from 'react';

const WhyVideoAdvertisingSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300">Why use video advertising?</h2>
            <p className="text-black lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-200">Capture your audience's attention effectively throughout their consumer journey by showcasing your brand in video advertisements, ensuring meaningful engagement during the decision-making process.</p>
            <div className="grid md:grid-cols-2 gap-8 xl:gap-14">
                <div className="h-full">
                    <div className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-gradient-to-b from-red-600 to-red-500 !py-0 h-full">
                        <div className="w-full h-full flex justify-center items-center mx-auto">
                            <img src="https://cdn.searchkings.ca/img/youtube/yt-phone-e8fc473328.webp" alt="Phone" className="mt-8 !mb-0 w-[344px]" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center h-full">
                    <ul className="w-full px-0 text-gray-200 text-xl my-0 py-0 space-y-4">
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Showcase your latest content and get more views </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Grow your brand awareness </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Boost consideration of your products or services </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Create social engagement </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Tell your story through sequential videos </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default WhyVideoAdvertisingSection;
