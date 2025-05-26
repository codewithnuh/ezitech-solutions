"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current pathname using usePathname

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-secondary shadow"
            : "bg-transparent backdrop-filter backdrop-blur-sm"
        }
        text-white`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex justify-between items-center"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex items-center"
            aria-label="Ezitech Solutions homepage"
          >
            <Image
              className="rounded-full"
              src={"/assets/logo.jpg"}
              width={50}
              height={50}
              alt="Ezitech Solutions logo"
              sizes="(max-width: 768px) 50px, 50px"
              priority
            />
            <span className="font-bold text-lg ml-2">Ezitech Solutions</span>
          </Link>

          <ul className="hidden sm:flex space-x-4" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="flex">
                <Link
                  href={link.href}
                  className="text-lg font-medium hover:text-primary-light transition-colors duration-200"
                  // Use pathname from usePathname for aria-current
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button className="hidden sm:block">Get Quote</Button>

          <Button
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={toggleMobileMenu}
            aria-label={
              isMobileMenuOpen
                ? "Close main navigation"
                : "Open main navigation"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <MenuIcon size={24} className="text-white" />
            )}
          </Button>
        </nav>

        {isMobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="absolute top-full left-0 right-0 bg-secondary shadow-lg py-4 sm:hidden animate-slide-down"
            role="dialog"
            aria-modal="true"
          >
            <ul className="flex flex-col space-y-4 px-4 pb-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-lg font-medium py-2 hover:text-primary-light transition-colors duration-200"
                    onClick={toggleMobileMenu}
                    // Use pathname from usePathname for aria-current
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Button className="w-full">Get Quote</Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
