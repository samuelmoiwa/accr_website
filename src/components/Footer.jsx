import React from 'react';
import {
  ArrowUpRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import logo from '../images/logo.jpeg';

function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-blue-950 to-green-950 text-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="ACCR Logo"
            className="h-16 w-auto mb-4 hover:scale-110 transition duration-300"
          />
          <p className="text-sm text-white/90 leading-relaxed">
            The Association of Carbon Conservation and Reforestation (ACCR) is Sierra Leone’s voice for private sector climate action.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              12 Lumley Road, Freetown, Sierra Leone
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              +232 79 000 000
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              <a
                href="mailto:theaccr.sl@gmail.com"
                className="hover:underline hover:text-green-100"
              >
                theaccr.sl@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <ArrowUpRightIcon className="h-5 w-5" />
            Follow Us
          </h4>
          <div className="flex gap-4">
            {[
              {
                name: 'Facebook',
                href: 'https://facebook.com/accr',
                icon: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                  </svg>
                ),
              },
              {
                name: 'Twitter',
                href: 'https://twitter.com/accr',
                icon: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                name: 'LinkedIn',
                href: 'https://linkedin.com/company/accr',
                icon: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                ),
              },
              {
                name: 'Instagram',
                href: 'https://instagram.com/accr',
                icon: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.346.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.155 3.375 1.898 5.063 5.274 5.218 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.375-.155 5.063-1.898 5.218-5.274.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.155-3.375-1.898-5.063-5.274-5.218C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-100 transition transform hover:scale-125"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-green-200 mt-12 mb-6" />

      <div className="text-center text-sm text-white/70">
        © {new Date().getFullYear()} Association of Carbon Conservation and Reforestation (ACCR). All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
