import React from 'react';

const RightShoppersSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300 pb-2">Reach the right shoppers with the right products</h2>
            <p className="lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-gray-200">Sell products to the shoppers who matter most–the ones looking for what you offer, <br className="hidden xl:block" /> whether they're at home, on the go, or in-store.</p>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 px-12 mx-auto">
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Show off your inventory with photos and more </p>
                <img src="https://cdn.searchkings.ca/img/ecommerce/inventory-b465bd3c4c.webp" alt="Inventory" className="rounded-xl md:rounded-3xl shadow-lg" />
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Sell products and services across digital platforms </p>
                <img src="https://cdn.searchkings.ca/img/ecommerce/product-e684529306.webp" alt="Product" className="rounded-xl md:rounded-3xl shadow-lg" />
            </div>
            <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
                <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Make your product info available to shoppers </p>
                <img src="https://cdn.searchkings.ca/img/ecommerce/product-details-9d94200fc9.webp" alt="Product Details" className="rounded-xl md:rounded-3xl shadow-lg" />
            </div>
        </div>
    </section>
);

export default RightShoppersSection;
