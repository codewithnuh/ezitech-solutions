import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react"; // Social icons

const FOOTER_LINKS = {
  aboutUs: [
    { label: "Latest News", href: "/news" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Service", href: "/services" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  contact: [
    { label: "+211234565523", icon: Phone, href: "tel:+211234565523" },
    { label: "info@redlab.com", icon: Mail, href: "mailto:info@redlab.com" },
  ],
  social: [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      ariaLabel: "Facebook profile",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      ariaLabel: "Twitter profile",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      ariaLabel: "Instagram profile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      ariaLabel: "LinkedIn profile",
    },
  ],
};

const Footer = () => {
  return (
    <footer
      className="bg-secondary text-white py-12 sm:py-16 lg:py-20"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer Navigation
      </h2>{" "}
      {/* Visually hidden heading for accessibility */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-start">
            <Link href="/" aria-label="Red Lab homepage">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/logo.jpg" // Assuming this is the RED LAB logo
                  alt="Ezitech Solutions logo"
                  width={50}
                  height={50}
                  className="rounded-full mr-2"
                />
                <span className="text-2xl font-bold">Ezitech Solutions</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Column 2: About Red Lab */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About RedLab</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.aboutUs.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Company</h3>
            <ul className="space-y-3">
              {/* Reusing aboutUs links for "Our Company" as per image content */}
              {FOOTER_LINKS.aboutUs.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              {FOOTER_LINKS.contact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center">
                    {Icon && (
                      <Icon
                        size={18}
                        className="mr-2 text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {FOOTER_LINKS.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security best practice for target="_blank"
                    aria-label={social.ariaLabel}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Icon size={24} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ezitech Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
