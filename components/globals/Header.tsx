"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuIcon, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

// Define TypeScript interfaces for navigation links
interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  isDropdown?: boolean;
  subLinks?: SubLink[];
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBgColor, setShowBgColor] = useState(false);
  const [isMobilePagesDropdownOpen, setIsMobilePagesDropdownOpen] =
    useState(false); // Separate state for mobile Pages dropdown
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowBgColor(!showBgColor);
    // When opening/closing the main mobile menu, also close the pages dropdown
    if (isMobilePagesDropdownOpen) {
      setIsMobilePagesDropdownOpen(false);
    }
  };

  const toggleMobilePagesDropdown = () => {
    setIsMobilePagesDropdownOpen(!isMobilePagesDropdownOpen);
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

  // Define the structure for NAV_LINKS including the new 'Pages' dropdown
  const baseNavLinks: NavLink[] = NAV_LINKS as NavLink[];

  const augmentedNavLinks: NavLink[] = [
    ...baseNavLinks.filter((link) => link.label !== "Pages"),
    {
      label: "Pages",
      href: "#",
      isDropdown: true,
      subLinks: [
        { label: "Blog", href: "/blog" },
        { label: "Career", href: "/career" },
      ],
    },
  ].sort((a, b) => {
    // Simple sort to ensure 'Pages' is typically towards the end or a desired position
    if (a.label === "Home") return -1;
    if (b.label === "Home") return 1;
    if (a.label === "Pages") return 1;
    if (b.label === "Pages") return -1;
    return 0;
  });

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

          {/* Desktop Navigation Menu with Tailwind CSS dropdown */}
          <ul className="hidden sm:flex space-x-4" role="menubar">
            {augmentedNavLinks.map((link) =>
              link.isDropdown ? (
                <li
                  key={link.label}
                  className="relative flex items-center group"
                  role="none"
                >
                  <Link // Changed from Button to Link for semantic correctness in navigation
                    href="#"
                    className="relative flex items-center text-lg font-[400] hover:text-primary transition-colors duration-200 focus:outline-none
                               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"
                    aria-expanded={isMobilePagesDropdownOpen}
                    aria-haspopup="menu"
                    aria-controls="pages-dropdown-menu"
                    id="pages-dropdown-trigger"
                    role="menuitem"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 group-hover:rotate-180`}
                      aria-hidden="true"
                    />
                  </Link>
                  <div
                    id="pages-dropdown-menu"
                    className="absolute top-full left-0 bg-secondary shadow-lg rounded-md p-2 min-w-[160px] mt-0
                                 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0"
                    role="menu"
                    aria-labelledby="pages-dropdown-trigger"
                  >
                    <ul className="flex flex-col space-y-1" role="none">
                      {link.subLinks?.map((subLink) => (
                        <li key={subLink.href} role="none">
                          <Link
                            href={subLink.href}
                            className="block px-3 py-2 text-white hover:bg-secondary-dark rounded-md transition-colors duration-200"
                            role="menuitem"
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.href} className="flex" role="none">
                  <Link
                    href={link.href}
                    className="relative text-lg font-[400] hover:text-primary transition-colors duration-200
                               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    aria-current={pathname === link.href ? "page" : undefined}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <Button className="hidden sm:block">Get Quote</Button>

          {/* Mobile Menu Toggle Button */}
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
              <X size={24} className="text-white" aria-hidden="true" />
            ) : (
              <MenuIcon size={24} className="text-white" aria-hidden="true" />
            )}
          </Button>
        </nav>

        {/* Mobile Nav Menu */}
        {/* Added max-h-0 and max-h-screen for animated slide down */}
        <div
          id="mobile-nav-menu"
          className={`absolute top-full left-0 right-0 ${
            isScrolled || showBgColor ? "bg-secondary" : ""
          } shadow-lg py-4 sm:hidden overflow-hidden
                      transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? "max-h-screen" : "max-h-0"
                      }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col space-y-4 px-4 pb-4" role="menu">
            {augmentedNavLinks.map((link) => (
              <li key={link.href} role="none">
                {link.isDropdown ? (
                  <>
                    <Button
                      className="flex items-center justify-between w-full text-left text-lg font-medium py-2 hover:text-primary transition-colors duration-200"
                      onClick={toggleMobilePagesDropdown}
                      aria-expanded={isMobilePagesDropdownOpen}
                      aria-haspopup="true"
                      aria-controls={`mobile-dropdown-${link.label.toLowerCase()}`}
                      id={`mobile-dropdown-trigger-${link.label.toLowerCase()}`}
                      role="menuitem"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          isMobilePagesDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      />
                    </Button>
                    {/* Mobile dropdown content, also animated */}
                    <ul
                      id={`mobile-dropdown-${link.label.toLowerCase()}`}
                      className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                        isMobilePagesDropdownOpen ? "max-h-screen" : "max-h-0"
                      }`}
                      role="group"
                      aria-labelledby={`mobile-dropdown-trigger-${link.label.toLowerCase()}`}
                    >
                      {link.subLinks?.map((subLink) => (
                        <li key={subLink.href} role="none">
                          <Link
                            href={subLink.href}
                            className="block text-base py-1 text-white hover:text-primary transition-colors duration-200"
                            onClick={toggleMobileMenu}
                            role="menuitem"
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-lg font-medium py-2 hover:text-primary transition-colors duration-200"
                    onClick={toggleMobileMenu}
                    aria-current={pathname === link.href ? "page" : undefined}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-4" role="none">
              <Button className="w-full" role="menuitem">
                Get Quote
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
