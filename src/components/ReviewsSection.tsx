// START:ReviewsSection
// Reviews Section
import React from 'react';
import MaterialIcon from './MaterialIcon';
const ReviewsSection = () => {
    const reviews = [
        {
            logo: 'https://cdn.searchkings.ca/img/testimonials/buttons-5213bbb896.svg',
            quote: "I have been working with AdsOnline for over 5 years now and am happy with our results. Being able to quantify the return on investment is key. Their services are flexible to our changing needs and our account manager is attentive. Thanks for the g...",
            name: "Renee Taylor",
            company: "Button's Heating & Air Conditioning"
        },
        {
            logo: 'https://cdn.searchkings.ca/img/testimonials/c&cplumbing-218c342892.webp',
            quote: "Since we have signed up two months ago, we have received more service calls. The quality of the leads is great, and we have recently decided to invest more money into this service and leave other advertising platforms. The customer service is awesom...",
            name: "Carlos Calmell",
            company: "C&C Plumbing"
        },
        {
            logo: 'https://cdn.searchkings.ca/img/testimonials/coastal-2eee55d2e4.svg',
            quote: "Since we joined the AdsOnline team our revenue has increased 70%. Best business decision we ever made. Their personal attention and advice made all the difference. Yaz, is our account manager and is always available to answer questions and give a...",
            name: "Joseph Dittmar",
            company: "Coastal Climate Experts LLC"
        },
        {
            logo: 'https://cdn.searchkings.ca/img/testimonials/adaptive-ae6c6295f8.webp',
            quote: "Working with AdsOnline has been a dream. AdsOnline breaks down my monthly spend with in depth reports and meetings monthly to go over how to most effectively capture leads and with their help our spend has led to conversions to actual clients.",
            name: "Ian Sutherland",
            company: "Adaptive Technical Inc."
        },
    ];

    const extendedReviews = [...reviews, ...reviews];

    return (
        <section className="py-16 bg-white overflow-hidden">
             <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .scrolling-container:hover .scrolling-track {
                    animation-play-state: paused;
                }
                `}
            </style>
            <div className="container mx-auto flex items-center flex-col">
                <div className="text-center px-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted by 5,000+ customers</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        At AdsOnline, we take pride in the relationships we have with our customers.
                        <br className="hidden sm:block" />
                        We treat every customer like our first.
                    </p>
                </div>

                <div className="w-full scrolling-container">
                    <div className="flex scrolling-track" style={{ animation: 'scroll 60s linear infinite' }}>
                        {extendedReviews.map((review, index) => (
                            <div
                                key={index}
                                className="relative w-[320px] sm:w-[450px] lg:w-[550px] mx-4 shrink-0 flex flex-col text-left gap-3 rounded-2xl p-8 bg-gray-400 text-gray-800"
                            >
                                <img src="https://cdn.searchkings.ca/img/testimonials/format_quote-92edec28f4.svg" className="absolute -top-5 left-5 w-16" alt="Quote"/>
                                    {/* <div className="h-[60px] flex items-center mt-4">
                                        <img src={review.logo} className="logo max-h-[50px] max-w-[150px] object-contain" alt={`${review.company} Logo `} />
                                    </div> */}
                                <p className="font-light text-base sm:text-lg flex-grow text-gray-200">
                                    {review.quote}
                                </p>
                                <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <img 
                                        key={i} 
                                        src="/images/star.png" 
                                        alt="star" 
                                        className="w-6 h-6"
                                    />
                                ))}
                            </div>
                                <div>
                                    <p className="font-semibold text-sm sm:text-base">{review.name}</p>
                                    <p className="font-light text-xs sm:text-base text-gray-300">{review.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <a href="#" className="shrink-0 w-max block mt-12 no-underline shadow-xl rounded-full overflow-hidden mx-auto bg-gray-800">
                    <div className="group md:text-lg text-base text-white font-bold h-full hover:bg-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                        <img src="https://cdn.searchkings.ca/img/icons/task_alt-07875e2f17.svg" width="24" height="24" alt="Google Icon" className="invert"/>
                        <span className="tracking-tight">Our Google Reviews</span>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default ReviewsSection;
// END:ReviewsSection
