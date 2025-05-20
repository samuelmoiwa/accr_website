import React, { useState } from 'react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about-us' },
  { name: 'What is Carbon Development?', href: '#what-is-carbon-development' },
  { name: 'Our Members', href: '#our-members' },
  { name: 'Contact Us', href: '#contact-us' },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-green-600 text-white fixed w-full z-20 top-0 shadow-lg" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center text-2xl font-bold hover:text-green-200 transition duration-300"
              aria-label="Go to home"
            >
              <img
                className="h-8 w-auto mr-2 transform hover:scale-110 transition duration-300"
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="ACCR Logo"
              />
              ACCR
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-green-100 ${
                  window.location.hash === item.href ? 'border-b-2 border-white font-bold' : ''
                } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0`}
                aria-current={window.location.hash === item.href ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-green-600 text-white transform transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center py-6 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`relative w-3/4 text-center py-3 text-base font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-green-100 ${
                  window.location.hash === item.href ? 'border-b-2 border-white font-bold' : ''
                } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0`}
                aria-current={window.location.hash === item.href ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
