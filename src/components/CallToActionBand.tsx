"use client";

import React from "react";
import { useChatBot } from "@/contexts/ChatBotContext";

const CallToActionBand = () => {
  const { openModal } = useChatBot();

  return (
    <section className="py-8 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
              Ready to grow your business?
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Get started with a free consultation today
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 lg:justify-center mt-6">
              <a
                href="tel:+1-437-432-6746"
                className="shrink-0 w-max block no-underline shadow-xl rounded-full overflow-hidden"
              >
                <div className="group md:text-lg text-base text-white font-bold bg-gradient-to-r from-red-600 to-red-500 h-full hover:from-black hover:to-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                  <img
                    src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg"
                    width="24"
                    height="24"
                    alt="call Icon"
                    className="invert group-hover:invert"
                  />
                  <span className="tracking-tight">Call Us</span>
                </div>
              </a>
              <button
                onClick={openModal}
                className="shrink-0 w-max block no-underline shadow-xl rounded-full overflow-hidden border-2 border-black"
              >
                <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:bg-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                  <img
                    src="https://cdn.searchkings.ca/img/icons/forum-30619bb514.svg"
                    width="24"
                    height="24"
                    alt="forum Icon"
                    className="group-hover:invert"
                  />
                  <span className="tracking-tight">Chat with Us</span>
                </div>
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBand;
