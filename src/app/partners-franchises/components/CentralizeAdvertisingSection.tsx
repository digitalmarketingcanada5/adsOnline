import React from 'react';

const CentralizeAdvertisingSection: React.FC = () => (
  <section className="py-16">
    <div className="container px-12 mx-auto">
      <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-300">Centralize your advertising</h2>
      <p className="text-black lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-200">We simplify your digital marketing while keeping local expertise and goals in mind. This means you get high-performing campaigns tailored to your specific needs, freeing up your valuable time to focus on what matters most—running your business.</p>
      <div className="grid md:grid-cols-2 gap-8 xl:gap-14">
        <div className="h-full">
          <div className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-gradient-to-b from-red-600 to-red-500 !py-0 h-full">
            <div className="w-full h-full flex justify-end items-center mx-auto">
              <img src="https://cdn.searchkings.ca/img/partners-franchises/franchise-phone-811b8033dc.webp" alt="Phone" className="w-full !mb-0" />
            </div>
          </div>
        </div>
        <div className="flex items-center h-full">
          <ul className="w-full px-0 text-gray-200 text-xl my-0 py-0 space-y-4">
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Customized advertising strategies </li>
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Precise targeting and outreach </li>
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Effortless integration of advertising campaigns </li>
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Informed decision-making for advertising investments with analytics </li>
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Enhance brand visibility across multiple platforms and touchpoints </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CentralizeAdvertisingSection;
