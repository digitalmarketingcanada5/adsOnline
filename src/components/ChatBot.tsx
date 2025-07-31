"use client";

import React from "react";
import MaterialIcon from "@/components/MaterialIcon";
import ContactForm from "@/components/ContactForm";
import { Toaster } from "react-hot-toast";
import { useChatBot } from "@/contexts/ChatBotContext";

const ChatBot: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useChatBot();

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 bg-gradient-to-t from-red-600 to-red-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 group"
      >
        <div className="flex items-center gap-2">
          <MaterialIcon>chat</MaterialIcon>
          <span className="hidden md:inline font-medium">Text Our Experts</span>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Need help? Text us.</h3>
                  <p className="text-sm opacity-90">
                    Enter your contact info, and our team will text you back as soon as possible.
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <MaterialIcon>close</MaterialIcon>
                </button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-6">
              <ContactForm isModal={true} onClose={closeModal} />
            </div>
          </div>
        </div>
      )}
      
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            fontSize: '16px',
            fontWeight: '500',
            padding: '16px 20px',
            minWidth: '350px',
          },
          success: {
            style: {
              backgroundColor: '#10B981',
              color: 'white',
            },
            duration: 5000,
          },
          error: {
            style: {
              backgroundColor: '#EF4444',
              color: 'white',
            },
            duration: 5000,
          },
        }}
      />
    </>
  );
};

export default ChatBot;
