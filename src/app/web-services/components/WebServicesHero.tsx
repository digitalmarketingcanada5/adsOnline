"use client";

import React from 'react';

const WebServicesHero = () => (
    <section className="relative w-full pt-[76px] bg-[#063649] text-white overflow-hidden">
        <div className="container px-12 xl:pb-0 pb-12 flex items-stretch justify-center min-h-[430px] sm:min-h-[340px] xl:min-h-[600px] relative z-[1] gap-8 py-8 mx-auto">
            <div className="w-full xl:w-1/2 flex flex-col justify-center items-start text-left gap-4 xl:pl-24">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold xl:max-w-3xl">Web Services</h1>
                <p className="w-full md:w-[80%] xl:w-full font-light xl:my-6">Getting customers to your website is only the first part. Effective website design combined with modern, fast-loading performance will convert visitors into customers.</p>
                <div className="flex flex-col gap-x-4 sm:flex-row">
                    <a href="/contact-us" className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden">
                        <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:from-black hover:to-black hover:bg-black/90 px-7 py-3 flex items-center gap-2">
                            <span className="tracking-tight">Get Started</span>
                            <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="group-hover:invert relative" />
                        </div>
                    </a>
                    <a href="tel:+1-437-432-674" className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden border-2 border-white">
                        <div className="group md:text-lg text-base text-white font-bold h-full hover:bg-white hover:text-black px-7 py-3 flex items-center gap-2">
                            <img src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg" width="24" height="24" alt="call Icon" className="invert group-hover:invert-0 relative" />
                            <span className="tracking-tight">Call Us</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="hidden lg:flex xl:w-[60%] items-end justify-center xl:justify-end overflow-hidden mr-24 -mb-16">
                <img src="https://cdn.searchkings.ca/img/web/web-hero-phone-077b975c4f.webp" alt="Web Services phone image" className="rounded-t-3xl shadow-3xl max-w-[580px]" />
            </div>
        </div>
    </section>
);

export default WebServicesHero;
