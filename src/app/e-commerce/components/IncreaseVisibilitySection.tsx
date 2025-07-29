import React from 'react';

const IncreaseVisibilitySection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300">Increase the visibility of your products and services</h2>
            <p className="text-black lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-200">Give online shoppers a strong sense of what you're selling before they click your ad and connect.</p>
            <div className="grid md:grid-cols-2 gap-8 xl:gap-14">
                <div className="h-full">
                    <div className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-[#01594d] !py-0 h-full">
                        <div className="w-full h-full flex justify-center items-center mx-auto">
                            <img src="https://cdn.searchkings.ca/img/ecommerce/ecomm-phone-51a59d3e74.webp" alt="Phone" className="shadow-3xl mt-8 !mb-0 w-[300px]" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center h-full">
                    <ul className="w-full px-0 text-gray-200 text-xl my-0 py-0 space-y-4">
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg" width="24" height="24" alt="bullet" /> Better qualified leads </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg" width="24" height="24" alt="bullet" /> Boost traffic to your website </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg" width="24" height="24" alt="bullet" /> Promote your products locally </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg" width="24" height="24" alt="bullet" /> Increase conversion rates from returning visitors and abandoned carts </li>
                        <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg" width="24" height="24" alt="bullet" /> Generate more online sales </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default IncreaseVisibilitySection;
