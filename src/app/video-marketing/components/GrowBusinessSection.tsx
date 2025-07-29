import React from 'react';

const GrowBusinessSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300">Grow your business with video ads</h2>
            <p className="lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-gray-200">Present your brand and speak to viewers at the moment they're ready and willing to pay attention, <br className="hidden xl:block" /> across every stage of their consumer journey.</p>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 px-12 mx-auto">
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Reach your customers and find new ones </p>
                <img src="https://cdn.searchkings.ca/img/youtube/card-1-4e75e22075.webp" alt="Reach Customers" className="rounded-xl md:rounded-3xl shadow-lg" />
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Promote your content in places of discovery </p>
                <img src="https://cdn.searchkings.ca/img/youtube/card-2-897d665512.webp" alt="Promote Content" className="rounded-xl md:rounded-3xl shadow-lg" />
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Strategically turn viewers into customers </p>
                <img src="https://cdn.searchkings.ca/img/youtube/card-3-db90eef83b.webp" alt="Turn Viewers into Customers" className="rounded-xl md:rounded-3xl shadow-lg" />
            </div>
        </div>
    </section>
);

export default GrowBusinessSection;
