const ReachPeopleSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-800">Reach the right people with search ads</h2>
            <p className="lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-gray-600">Boost your visibility and generate leads from potential customers in your area.</p>
        </div>
        <div className="container grid grid-cols-1 gap-8 px-12 mx-auto lg:grid-cols-3 lg:gap-16">
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black font-bold text-center"> Reach people searching for your business </p>
                <img src="https://cdn.searchkings.ca/img/ads-management/search-1-8bfa1cc5b3.svg" alt="Search Bars" className="rounded-full shadow-lg" />
                <img src="https://cdn.searchkings.ca/img/ads-management/search-2-e23420b4f4.svg" alt="Search Bars" className="rounded-full shadow-lg" />
                <img src="https://cdn.searchkings.ca/img/ads-management/search-3-e3b089e69a.svg" alt="Search Bars" className="rounded-full shadow-lg" />
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black font-bold text-center"> Achieve your performance goals </p>
                <div className="relative">
                    <img src="https://cdn.searchkings.ca/img/ads-management/graph-1-789ed76194.svg" alt="performance graph" className="rounded-3xl shadow-xl" />
                    <img src="https://cdn.searchkings.ca/img/ads-management/graph-2-e5b43c8365.svg" alt="performance result" className="rounded-2xl shadow-xl absolute -bottom-10 right-0" />
                </div>
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black font-bold text-center"> Highlight your products and services </p>
                <img src="https://cdn.searchkings.ca/img/ads-management/results-1-f683275b4a.svg" alt="Google search bar" className="rounded-3xl shadow-lg" />
                <img src="https://cdn.searchkings.ca/img/ads-management/results-2-1fa12a6f4b.svg" alt="Google search result" className="rounded-xl shadow-lg" />
            </div>
        </div>
    </section>
);

export default ReachPeopleSection;
