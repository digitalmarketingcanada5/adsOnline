const IntelligentMarketingSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <div className="grid lg:grid-cols-2 bg-gray-50 lg:shadow-lg rounded-3xl overflow-hidden">
                <div className="h-full flex flex-col p-8 lg:p-12 justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Intelligent marketing</h2>
                    <p className="lg:pr-8 text-gray-600 my-4">Stay ahead of the competition. By evaluating, summarizing, and scoring phone call conversions, Call Intelligence<sup>™</sup> offers valuable insights into campaign performance that have the potential to provide both time and cost savings.</p>
                    <a href="/services/call-intelligence" className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden">
                        <div className="group md:text-lg text-base text-white font-bold bg-gradient-to-t from-red-600 to-red-500 h-full hover:from-black hover:to-black px-7 py-3 flex items-center gap-2">
                            <span className="tracking-tight">Learn More</span>
                            <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="invert group-hover:invert relative" />
                        </div>
                    </a>
                </div>
                <div className="h-full bg-gradient-to-b from-red-600 to-red-500 flex justify-end items-center">
                   <img alt="Phone" src="https://cdn.searchkings.ca/img/call-intelligence/ci-image-mobile-018e38cb19.webp" className="w-[440px] mt-8" />
                </div>
            </div>
        </div>
    </section>
);

export default IntelligentMarketingSection;
