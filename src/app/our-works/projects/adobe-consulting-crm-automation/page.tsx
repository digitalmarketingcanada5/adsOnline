'use client';

import React, { useEffect, useRef } from 'react';

// Icon Components for the four-column section
const AutomationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-red-500">
    <path stroke="none" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path stroke="none" d="M9.5 8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm4.5 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
    <path stroke="none" d="M12 13.5c-1.5 0-2.8.9-3.4 2.2l1.2.8c.4-.8 1.2-1.3 2.2-1.3s1.8.5 2.2 1.3l1.2-.8c-.6-1.3-1.9-2.2-3.4-2.2z"/>
  </svg>
);

const CRMIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-red-500">
    <path stroke="none" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4H4zM3 8v6h3l2-6H3zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM21 9h-2.5l-.5 2h-.75l-1.5-6H9.25l1.5 6H10.5l.5-2H8.5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5z"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-red-500">
    <path stroke="none" d="M7 17l3-3 4 4 6.39-6.39a.996.996 0 0 1 1.41 0c.39.39.39 1.02 0 1.41L14.41 20.41a.996.996 0 0 1-1.41 0L10 17.41 7.41 20a.996.996 0 0 1-1.41 0c-.39-.39-.39-1.02 0-1.41L7 17zm12-10h-2v4h2V7zM9 13h2V7H9v6zm4 0h2V7h-2v6z"/>
  </svg>
);

const IntegrationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-red-500">
    <path stroke="none" d="M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5zm2 12h4v-2h-4v2zm0-4h4v-2h-4v2zm0-4h4V7h-4v2z"/>
  </svg>
);

// Main App component
export default function AdobeConsultingCRMAutomation() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play the video when component mounts
    const playVideo = () => {
      video.play().catch((error) => {
        console.log('Autoplay failed:', error);
      });
    };

    playVideo();
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      <main>
        {/* --- Hero Video Section --- */}
        <section className="relative h-[60vh] md:h-[80vh] text-white">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 z-[1]"></div>
          
          {/* Hero Content */}
          <div style={{ position: 'relative', zIndex: 20, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '16px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', color: '#ffffff', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)', marginBottom: '16px' }}>
              Adobe Consulting - CRM Automation
            </h1>
            <p style={{ marginTop: '16px', maxWidth: '512px', textAlign: 'center', fontSize: '1.25rem', textShadow: '0px 0px 2px rgba(0, 0, 0, 0.8)' }}>
              Transforming customer relationship management with intelligent automation, seamless integrations, and data-driven insights.
            </p>
            <div className="mt-8">
              <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-700 transition-colors shadow-lg">
                Discover Our Solution
              </button>
            </div>
          </div>
        </section>

        {/* --- Challenge & Solution Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">The Challenge</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our client faced significant challenges with their customer relationship management processes, including fragmented data across multiple systems, manual data entry leading to errors, and lack of real-time insights into customer interactions.</p>
                <p>The existing CRM system was outdated, siloed from other business applications, and required extensive manual intervention for lead nurturing and customer follow-ups. This resulted in missed opportunities, inconsistent customer experiences, and decreased team productivity.</p>
                <p>They needed a comprehensive solution that would unify their customer data, automate repetitive tasks, and provide actionable insights to drive business growth.</p>
              </div>
            </div>
            <div>
              <img src="https://placehold.co/600x400/DC2626/FFF?text=CRM+Challenge" alt="CRM Challenge" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* --- Our Solution Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://placehold.co/600x400/7C3AED/FFF?text=Adobe+Solution" alt="Adobe CRM Solution" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Our Adobe CRM Solution</h2>
              <div className="space-y-4 text-gray-700">
                <p>We implemented a comprehensive Adobe Experience Cloud solution, integrating Adobe Campaign, Adobe Analytics, and custom automation workflows to create a unified customer experience platform.</p>
                <p>Our solution included real-time data synchronization across all touchpoints, intelligent lead scoring and nurturing campaigns, automated email marketing sequences, and comprehensive analytics dashboards for performance tracking.</p>
                <p>The result was a 40% increase in lead conversion rates, 60% reduction in manual data entry, and improved customer satisfaction scores across all channels.</p>
              </div>
              <div className="mt-6">
                <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-md hover:bg-red-700 transition-colors">Learn More About Our Process</button>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Banner --- */}
        <section className="relative py-24 text-center text-white bg-gradient-to-r from-red-600 to-purple-600">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your CRM?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Let us help you automate your customer relationships and drive unprecedented growth.</p>
            <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors">
              Get Started Today!
            </button>
          </div>
        </section>

        {/* --- Key Features Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Key Features Delivered</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our Adobe CRM automation solution includes cutting-edge features designed to streamline your customer management processes.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="w-20 h-20 mx-auto mb-4">
                  <AutomationIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Intelligent Automation</h3>
                <p className="text-gray-600">Automated lead scoring, nurturing campaigns, and follow-up sequences that work 24/7 to convert prospects into customers.</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="w-20 h-20 mx-auto mb-4">
                  <CRMIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Unified Customer Data</h3>
                <p className="text-gray-600">Complete 360-degree customer profiles with real-time data synchronization across all touchpoints and channels.</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="w-20 h-20 mx-auto mb-4">
                  <AnalyticsIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600">Comprehensive reporting and analytics dashboards providing actionable insights for data-driven decision making.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Results Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Measurable Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our Adobe CRM automation solution delivered significant improvements across all key performance indicators.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold text-red-500 mb-2">40%</h3>
                <p className="text-lg text-gray-300">Increase in Lead Conversion Rate</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-red-500 mb-2">60%</h3>
                <p className="text-lg text-gray-300">Reduction in Manual Data Entry</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-red-500 mb-2">85%</h3>
                <p className="text-lg text-gray-300">Improvement in Response Time</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-red-500 mb-2">$2.5M</h3>
                <p className="text-lg text-gray-300">Additional Annual Revenue</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Technology Stack Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We leveraged cutting-edge Adobe technologies and integrations to deliver a comprehensive CRM automation solution.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">🎯</div>
                <h4 className="font-bold text-gray-800">Adobe Campaign</h4>
                <p className="text-sm text-gray-600 mt-2">Multi-channel campaign management</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">📊</div>
                <h4 className="font-bold text-gray-800">Adobe Analytics</h4>
                <p className="text-sm text-gray-600 mt-2">Real-time data insights</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">🔗</div>
                <h4 className="font-bold text-gray-800">API Integrations</h4>
                <p className="text-sm text-gray-600 mt-2">Seamless system connections</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">⚡</div>
                <h4 className="font-bold text-gray-800">Automation Workflows</h4>
                <p className="text-sm text-gray-600 mt-2">Intelligent process automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Testimonial Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl italic text-gray-800 mb-8">
              "The Adobe CRM automation solution transformed our entire customer relationship management process. We've seen unprecedented improvements in lead conversion, customer satisfaction, and team productivity. The AdsOnline team delivered beyond our expectations."
            </blockquote>
            <cite className="block text-xl text-red-600 not-italic">
              <span className="font-bold">Sarah Johnson</span>, VP of Marketing
            </cite>
            <p className="text-gray-600 mt-2">Fortune 500 Technology Company</p>
          </div>
        </section>

        {/* --- Four Column Benefits Section --- */}
        <section className="bg-red-50 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><AutomationIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Smart Automation</h3>
              <p className="text-gray-600">Intelligent workflows that adapt to customer behavior and automate complex marketing processes.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><CRMIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Complete CRM Integration</h3>
              <p className="text-gray-600">Seamless integration with existing systems and comprehensive customer data management.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><AnalyticsIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Actionable Insights</h3>
              <p className="text-gray-600">Real-time analytics and reporting that provide clear visibility into customer journey and ROI.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><IntegrationIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Scalable Architecture</h3>
              <p className="text-gray-600">Built to grow with your business and adapt to changing market requirements.</p>
            </div>
          </div>
        </section>

        {/* --- Implementation Process Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">A systematic approach to CRM automation that ensures success from strategy to deployment.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">1</div>
                <h3 className="text-xl font-bold mb-4">Discovery & Analysis</h3>
                <p className="text-gray-600">Comprehensive audit of existing systems, processes, and requirements to design the optimal solution.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">2</div>
                <h3 className="text-xl font-bold mb-4">Design & Development</h3>
                <p className="text-gray-600">Custom Adobe solution design with automated workflows, integrations, and user experience optimization.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">3</div>
                <h3 className="text-xl font-bold mb-4">Deployment & Training</h3>
                <p className="text-gray-600">Seamless implementation with comprehensive training and ongoing support to ensure success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-red-600 to-purple-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your CRM?</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your customer relationships with intelligent automation and data-driven insights. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your CRM Transformation
              </a>
              <a
                href="tel:+14374326746"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-red-600 transition-colors duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
