// START:Header
// Header Component
"use client";
import React from 'react';
import Icon from './Icon';
import Image from 'next/image'; // Ensure you have the correct import for Image
const Header = () => {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = React.useState<NodeJS.Timeout | null>(null);

  const navItems = [
    {
      name: 'About Us',
      href: '#',
      dropdown: [
        // { name: 'Achievements', href: '/achievements' },
        // { name: 'Testimonials', href: '#' },
        // { name: 'Join Our Team', href: '/join-our-team' },
        { name: 'About Us', href: '/about-us' },
      ],
    },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Ads Management', href: '/ad-management' },
        { name: 'Call Intelligence®', href: '/call-intelligence' },
        { name: 'Local Services Ads', href: '/local-services-ads' },
        { name: 'eCommerce', href: '/e-commerce' },
        { name: 'Video Marketing', href: '/video-marketing' },
        { name: 'Web Services', href: '/web-services/' },
      ],
    },
    {
      name: 'Solutions',
      href: '#',
      dropdown: [
        { name: 'Partners & Franchises', href: '/partners-franchises' },
        { name: 'Web Hosting & Maintenance', href: '/web-hosting-maintenance' },
      ],
    },
    // { name: 'Case Studies', href: '#' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  interface DropdownItem {
    name: string;
    href: string;
  }

  interface NavItem {
    name: string;
    href: string;
    dropdown?: DropdownItem[];
  }

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
    setCloseTimeout(timeout);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8">
      <div className="container mx-auto bg-white rounded-xl shadow-lg flex justify-between items-center p-3">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="block">
            <Image
              src="/logo.png"
              alt="AdsOnline Logo"
              width={160}
              height={80}
              className="object-cover"
            />
          </a>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.href} className="flex items-center text-gray-700 font-medium hover:text-red-600">
                {item.name}
                {item.dropdown && (
                  <Icon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                )}
              </a>
              {item.dropdown && openDropdown === item.name && (
                <div 
                  className="absolute top-full w-56 bg-white rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button className="bg-gradient-to-b from-yellow-400 to-amber-500 text-black font-semibold py-3 px-5 rounded-lg text-sm">
            $500 in Google Ads Credit
          </button>
          <button className="bg-red-600 text-white font-semibold py-3 px-5 rounded-lg text-sm flex items-center">
             <img src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg" width="24" height="24" alt="call Icon" className="invert group-hover:invert" />
            +1 (437) 432-674
          </button>
        </div>
         <button className="lg:hidden">
          <Icon path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
// END:Header
