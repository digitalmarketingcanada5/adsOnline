// START:AboutSection
// About Section
"use client";
import React from 'react';
import Image from 'next/image';
const AboutSection = () => (
    <section className="w-full bg-no-repeat xl:bg-hero-about xl:bg-contain bg-center px-4 sm:px-12 py-16">
        <div className="container mx-auto flex flex-col justify-center items-stretch rounded-3xl overflow-hidden shadow-2xl lg:flex-row bg-red-600">
            <div className="block relative mx-0 min-h-[500px] w-full lg:w-3/5 rounded-3xl overflow-hidden">
                <Image
                    src="/home_about_image.png"
                    alt="About AdsOnline"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                />
            </div>
            <div className="flex flex-col items-start justify-center text-left w-full lg:w-2/5 shrink-0">
                <div className="p-8 md:p-12 text-white">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 lg:mb-8">
                        Connecting you to <span className="block">your customers</span>
                    </h2>
                    <p className="mb-4 lg:mb-8 text-lg">
                        We focus on lead generation campaigns for small and mid-size businesses.
                    </p>
                    <p className="mb-8 text-base">
                        Our goal is to help clients plan, build, and execute their digital advertising campaigns using the best of human expertise and our award-winning AI technology, Call Intelligence<sup>™</sup>.
                    </p>
                    <a href="/about-us/" className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden">
                        <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:bg-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                            <span className="tracking-tight">About Us</span>
                            <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="group-hover:invert"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
// END:AboutSection
