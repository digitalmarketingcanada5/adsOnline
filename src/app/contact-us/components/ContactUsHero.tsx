'use client';

import React, { useState } from 'react';
import MaterialIcon from '../../../components/MaterialIcon';
import { sendContactEmail, ContactFormData } from '@/lib/actions/sendEmail';
import toast, { Toaster } from 'react-hot-toast';

const ContactUsHero: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companyWebsite: '',
    inquiryType: '',
    hearAboutUs: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Split full name into first and last name
    const nameParts = formData.firstName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const submissionData = {
      ...formData,
      firstName,
      lastName,
    };

    try {
      const result = await sendContactEmail(submissionData);
      
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          companyName: '',
          companyWebsite: '',
          inquiryType: '',
          hearAboutUs: '',
          message: '',
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <section className="relative w-full pt-[76px] bg-gradient-to-b from-red-600 to-red-500 text-white overflow-hidden">
    <div className="container px-12 xl:pb-0 pb-12 flex items-stretch justify-center relative z-[1] gap-8 py-8 mx-auto">
      <div className="flex flex-col lg:flex-row sm:gap-16">
        <div className="flex flex-col gap-8 w-full lg:w-1/2 pt-8 sm:pt-0 justify-center text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-snug">Contact Us</h1>
          <div>
            <p className="mb-4">We simplify lead generation so you can focus on growing your business. Our internet marketing experts are always available to assist you with any of your issues, needs or requests. Even if you're just looking for some friendly advice, please don't hesitate to contact us or give us a call.</p>
            <p>You are under no obligation to make a purchase and we keep your personal information private and confidential. <a href="/privacy-policy" className="underline">View our privacy policy.</a></p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-gray-50 w-full text-black">
            <p className="text-3xl font-bold md:mb-8">Get Started</p>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-x-4">
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">First & Last Name <span className="text-red-500">*</span></label><input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"/></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"/></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="yourmail@gmail.com" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"/></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label><input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Company Name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"/></div>
                <div className="mb-4 md:col-span-2"><label className="block text-sm font-medium text-gray-700">Company Website <span className="text-red-500">*</span></label><input type="url" name="companyWebsite" value={formData.companyWebsite} onChange={handleInputChange} placeholder="website.com" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"/></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Inquiry Type <span className="text-red-500">*</span></label><select name="inquiryType" value={formData.inquiryType} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"><option value="">Please Select</option><option value="Lead Generation">Lead Generation</option><option value="Digital Marketing">Digital Marketing</option><option value="SEO Services">SEO Services</option><option value="Web Development">Web Development</option><option value="Consultation">Consultation</option><option value="Other">Other</option></select></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">How Did You Hear About Us? <span className="text-red-500">*</span></label><select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"><option value="">Please Select</option><option value="Google Search">Google Search</option><option value="Social Media">Social Media</option><option value="Referral">Referral</option><option value="Advertisement">Advertisement</option><option value="Website">Website</option><option value="Other">Other</option></select></div>
                <div className="mb-4 md:col-span-2"><label className="block text-sm font-medium text-gray-700">Message</label><textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm h-24 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"></textarea></div>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-max block no-underline rounded-full bg-gradient-to-t from-red-600 to-red-500 disabled:opacity-50 disabled:cursor-not-allowed">
                <div className="group transition-all text-lg text-white font-bold px-7 py-3 flex items-center gap-2 rounded-full ease-in-out duration-300 shadow-xl hover:bg-black disabled:hover:bg-gradient-to-t disabled:hover:from-red-600 disabled:hover:to-red-500"> 
                  {isSubmitting ? 'Sending...' : 'Submit'} 
                  {!isSubmitting && <MaterialIcon className="relative -top-px">arrow_outward</MaterialIcon>}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Toaster position="top-right" />
  </section>
);
};

export default ContactUsHero;
