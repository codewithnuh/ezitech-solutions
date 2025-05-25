"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState } from "react"; // Import useState for managing mobile menu state
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react"; // Import X icon for closing menu

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 bg-secondary shadow text-white relative z-50">
      {" "}
      {/* Add relative and z-index for mobile menu positioning */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Add horizontal padding for smaller screens */}
        <nav
          className="flex justify-between items-center"
          aria-label="Main navigation"
        >
          {" "}
          {/* Add aria-label for screen readers */}
          {/* --- Logo --- */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Ezitech Solutions homepage"
          >
            {" "}
            {/* Wrap logo in Link, add aria-label */}
            <Image
              className="rounded-full"
              src={"/assets/logo.jpg"}
              width={50}
              height={50}
              alt="Ezitech Solutions logo" // More descriptive alt text for SEO and accessibility
              sizes="(max-width: 768px) 50px, 50px" // Optimize image sizes for responsiveness
              priority // Prioritize loading for LCP
            />
            <span className="sr-only">Ezitech Solutions</span>{" "}
            {/* Visually hidden text for screen readers */}
          </Link>
          {/* --- Nav Links (Desktop) --- */}
          <ul className="hidden sm:flex space-x-4" role="list">
            {" "}
            {/* Add role="list" for semantic correctness */}
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="flex">
                {" "}
                {/* Use link.href as key, add flex for consistent vertical alignment */}
                <Link
                  href={link.href}
                  className="text-lg font-medium hover:text-primary-light transition-colors duration-200" // Add hover effects for better UX
                  aria-current={
                    typeof window !== "undefined" &&
                    window.location.pathname === link.href
                      ? "page"
                      : undefined
                  } // Indicate current page
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* --- CTA (Desktop) --- */}
          <Button className="hidden sm:block">Get Quote</Button>
          {/* --- Mobile Menu Toggle Button --- */}
          <Button
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={toggleMobileMenu}
            aria-label={
              isMobileMenuOpen
                ? "Close main navigation"
                : "Open main navigation"
            } // Dynamic aria-label
            aria-expanded={isMobileMenuOpen} // Indicate expanded state
            aria-controls="mobile-nav-menu" // Link to the mobile nav menu
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-white" /> // 'X' icon when menu is open
            ) : (
              <MenuIcon size={24} className="text-white" /> // Hamburger icon when menu is closed
            )}
          </Button>
        </nav>
        {/* --- Mobile Nav Menu --- */}
        {isMobileMenuOpen && (
          <div
            id="mobile-nav-menu" // ID for aria-controls
            className="absolute top-full left-0 right-0 bg-secondary shadow-lg py-4 sm:hidden animate-slide-down" // Animation class
            role="dialog" // Indicate a dialog role for the menu
            aria-modal="true" // Indicate it's a modal dialog
          >
            <ul className="flex flex-col space-y-4 px-4 pb-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-lg font-medium py-2 hover:text-primary-light transition-colors duration-200"
                    onClick={toggleMobileMenu} // Close menu on link click
                    aria-current={
                      typeof window !== "undefined" &&
                      window.location.pathname === link.href
                        ? "page"
                        : undefined
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Button className="w-full">Get Quote</Button>{" "}
                {/* Full width button for mobile */}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
