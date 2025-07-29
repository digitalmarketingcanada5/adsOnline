// START:HeroSection
// Hero Section Component
import React from 'react';
import MaterialIcon from './MaterialIcon';
const HeroSection = () => {
    const features = [
        { icon: 'layers_clear', title: 'No Contracts', description: 'We work month-to-month with all clients.' },
        { icon: 'account_balance_wallet', title: 'Flexible Budgets', description: 'Adjust your budget and generate leads when you need.' },
        { icon: 'money_off', title: 'Flat-rate Fee', description: 'Creating scalable pricing structures so you pay less.' },
        { icon: 'auto_awesome', title: 'Call Intelligence™', description: 'We show you what’s working and what’s not.' }
    ];

    return (
        <section className="hero-banner overflow-hidden relative bg-white">
            {/* Background Shape */}
            <div className="hidden lg:block w-full h-full absolute -top-20 lg:scale-[1.5] xl:scale-[1.8] z-0 left-1/2 -translate-x-1/2" style={{backgroundImage: 'url(https://cdn.searchkings.ca/img/home/bg-hero-circle-70a6436575.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover'}}></div>

            {/* Hero Top */}
            <div className="container px-4 sm:px-12 lg:px-16 pb-12 md:pb-20 mx-auto relative flex flex-col items-start xl:min-h-[550px]">
                <div className="relative z-10 flex flex-col justify-center w-full mx-auto h-full mt-0 mb-0 items-center pt-24 md:pt-40">
                    <div className="w-full lg:w-4/5 flex lg:justify-center flex-col">
                        <h1 className="mb-0 mt-0 pb-0 w-full mx-auto text-4xl tracking-tight md:text-5xl xl:text-6xl lg:text-center font-bold !leading-tight text-gray-800">
                            Helping you win with<br /> Google & Microsoft Ads
                        </h1>
                        <div className="pt-0 flex md:items-center lg:justify-center w-full flex-col md:flex-row gap-0 md:gap-4 mt-4">
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
                            <span className="text-base lg:text-xl font-light text-gray-600">
                                1,800+ Google Customer Reviews <span className="hidden md:inline">|</span> <br className="md:hidden" />Trusted by 5,000+ customers
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-4 lg:justify-center mt-6">
                            <a href="tel:+1-437-432-674" className="shrink-0 w-max block no-underline shadow-xl rounded-full overflow-hidden">
                                <div className="group md:text-lg text-base text-white font-bold bg-gradient-to-r from-red-600 to-red-500 h-full hover:from-black hover:to-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                                    <img src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg" width="24" height="24" alt="call Icon" className="invert group-hover:invert" />
                                    <span className="tracking-tight">Call Us</span>
                                </div>
                            </a>
                            <a href="#" className="shrink-0 w-max block no-underline shadow-xl rounded-full overflow-hidden border-2 border-black">
                                <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:bg-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                                    <img src="https://cdn.searchkings.ca/img/icons/forum-30619bb514.svg" width="24" height="24" alt="forum Icon" className="group-hover:invert" />
                                    <span className="tracking-tight">Chat with Us</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Bottom */}
            <div className="py-8 md:py-12 px-4 sm:px-12 lg:px-16">
                <div className="container mx-auto relative z-10 justify-center items-stretch flex flex-col bg-gray-50 rounded-2xl p-4 md:p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-gray-800">Why Choose AdsOnline?</h2>
                        <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto">We're committed to delivering transparent, flexible, and results-driven digital marketing solutions tailored to your business needs.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map(feature => (
                            <div key={feature.title} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <img 
                                        src="/images/star.png" 
                                        alt={feature.title} 
                                        className="w-12 h-12"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 font-light">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
// END:HeroSection
