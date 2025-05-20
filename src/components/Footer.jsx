import React from 'react';
import { ArrowUpRightIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <img
              className="h-12 w-auto transform hover:scale-110 transition duration-300"
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="ACCR Logo"
            />
          </div>

          {/* Contact and Social Media Sections */}
          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Contact Section */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold uppercase mb-3 flex items-center">
                <MapPinIcon className="h-6 w-6 mr-2" />
                Contact Us
              </h4>
              <p className="text-sm mb-2 flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                12 Lumley Road, Freetown, Sierra Leone
              </p>
              <p className="text-sm mb-2 flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                +232 79 000 000
              </p>
              <p className="text-sm flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <a
                  href="mailto:theaccr.sl@gmail.com"
                  className="hover:underline hover:text-green-100 transition duration-300"
                >
                  theaccr.sl@gmail.com
                </a>
              </p>
            </div>

            {/* Social Media Section */}
            <div>
              <h4 className="text-lg font-semibold uppercase mb-3 flex items-center">
                <ArrowUpRightIcon className="h-6 w-6 mr-2" />
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', href: 'https://facebook.com/accr', icon: (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                    </svg>
                  )},
                  { name: 'Twitter', href: 'https://twitter.com/accr', icon: (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )},
                  { name: 'LinkedIn', href: 'https://linkedin.com/company/accr', icon: (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )},
                  { name: 'Instagram', href: 'https://instagram.com/accr', icon: (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.346.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.155 3.375 1.898 5.063 5.274 5.218 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.375-.155 5.063-1.898 5.218-5.274.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.155-3.375-1.898-5.063-5.274-5.218C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
                    </svg>
                  )},
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-100 transform hover:scale-125 transition duration-300"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-green-200 my-8" />
        <div className="text-center text-sm text-green-100">
          © {new Date().getFullYear()} Association of Carbon Conservation and Reforestation (ACCR). All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
