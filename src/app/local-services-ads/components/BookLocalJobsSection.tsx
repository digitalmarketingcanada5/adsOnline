import React from 'react';

const MaterialIcon = ({ children, className }: { children: string; className?: string }) => (
    <span className={`material-symbols-outlined ${className}`}>
        {children}
    </span>
);

const BookLocalJobsSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300">Book local jobs and grow your business</h2>
            <p className="text-black lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-200">Local Services Ads connect people who are looking for your services on Google with your Google-verified business profile. Your ads will show up for customers in your area, and you only pay if a customer contacts you directly through the ad.</p>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 px-12 mx-auto">
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="title !leading-tight text-black p-0 !mb-4 w-full sm:text-center text-left font-bold"> Show up first on Google search </p>
                <div className="w-full sm:w-[345px] lg:w-full">
                    <div className="rounded-full w-full bg-white flex items-stretch shadow-lg justify-between xl:h-[55px] overflow-hidden z-10">
                        <span className="flex items-center text-sm sm:text-base xl:text-xl pl-3 sm:pl-5 xl:pl-8 xl:pr-3">plumber near me</span>
                        <div className="flex items-center gap-4">
                            <MaterialIcon className="text-sm sm:text-base xl:text-xl">close</MaterialIcon>
                            <div className="bg-blue-600 text-white flex items-center py-1 sm:py-2 xl:py0 px-2 xl:px-3 h-full">
                                <MaterialIcon className="text-md xl:text-4xl">search</MaterialIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl shadow-lg border lg:shadow-none py-3 px-4 xl:py-5 xl:px-7 flex justify-between items-center z-10 !shadow-lg md:rounded-3xl rounded-xl !border-none">
                    <div>
                        <div className="text-blue-700 text-sm sm:text-lg xl:text-xl"> Mr. Rooter Detroit </div>
                        <div className="text-xs xl:text-xl flex items-center gap-1 lg:gap-2">
                            <span>4.9</span>
                            <span className="text-[#e37325] flex gap-[2px]">
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                            </span>
                            <span>(721)</span>
                        </div>
                        <div className="text-xs text-gray-500 my-2 xl:text-lg">Michigan<br/>Open 24/7</div>
                    </div>
                </div>
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="title !leading-tight text-black p-0 !mb-4 sm:text-center font-bold"> Get local customers looking for services </p>
                <img src="https://cdn.searchkings.ca/img/google-local-service/google-map-box-523fcfeddc.svg" alt="Google Map Box" className="!w-full md:rounded-3xl rounded-xl overflow-hidden" />
                <div className="bg-white rounded-3xl shadow-lg border lg:shadow-none py-3 px-4 xl:py-5 xl:px-7 flex justify-between items-center z-10 max-w-[345px] xl:max-h-[360px] bg-white -mt-16 !shadow-lg md:rounded-3xl rounded-xl !border-none">
                    <div>
                        <div className="text-blue-700 text-sm sm:text-lg xl:text-xl"> Local Heating &amp; Cooling </div>
                        <div className="text-xs xl:text-xl flex items-center gap-1 lg:gap-2">
                            <span className="w-[10px] h-[10px] md:w-[18px] md:h-[18px]"><img src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg" width="30" height="30" alt="Google Guaranteed checkmark" /></span>
                            <span>4.9</span>
                            <span className="text-[#e37325] flex gap-[2px]">
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                                <img src="/star.png" alt="star" className="w-3 h-3 lg:w-4 lg:h-4" />
                            </span>
                            <span>(327)</span>
                        </div>
                        <div className="text-2xs text-[#32B355] uppercase lg:text-sm"> Google Guaranteed </div>
                        <div className="text-xs text-gray-500 my-2 xl:text-lg">New York | Open 24/7</div>
                    </div>
                </div>
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center justify-center">
                <p className="title !leading-tight text-black p-0 !mb-4 w-full sm:text-center text-left font-bold"> Get high-quality leads and jobs </p>
                <img src="https://cdn.searchkings.ca/img/google-local-service/google-calander-7f64d4639c.svg" alt="Google Calendar" className="!w-full rounded-3xl overflow-hidden shadow-lg" />
            </div>
        </div>
    </section>
);

export default BookLocalJobsSection;
