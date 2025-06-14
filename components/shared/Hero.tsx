"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  const pathname = usePathname();

  // Function to get the display name for the current path
  const getPageDisplayName = (path: string) => {
    switch (path) {
      case "/about":
        return "About Us";
      case "/portfolio":
        return "Portfolio";
      case "/blog":
        return "Blog"; // Added for completeness, assuming you might have a services page
      case "/contact":
        return "Contact Us"; // Added for completeness
      case "/career":
        return "career"; // Added for completeness
      case "/gallery":
        return "Gallery"; // Added for completeness
      case "/portfolio/database-management":
        return "Database-management"; // Added for completeness
      default:
        return "Home";
    }
  };

  const currentDisplayName = getPageDisplayName(pathname);

  return (
    <section id="home">
      <div
        className="relative bg-cover bg-center min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center pt-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Content inside */}
        <div className="text-center relative z-10 ">
          <h1 className="text-4xl sm:text-5xl text-white font-bold">
            {currentDisplayName}
          </h1>
          <div className="text-white mt-4 text-lg">
            {" "}
            {/* Increased text size for breadcrumb */}
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            {pathname !== "/" && ( // Only show current page link if not on home
              <Link href={pathname} className="hover:underline">
                {currentDisplayName}
              </Link>
            )}
            {pathname === "/" && ( // If on home, just show Home
              <span>{currentDisplayName}</span>
            )}
          </div>
        </div>
      </div>

      <div
        className={`bg-primary py-6 sm:py-8 ${
          pathname == "/portfolio/database-management" ? "hidden" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl text-white font-semibold leading-tight"
            >
              Looking for a First-Class PHP Developer?
            </h2>
            <Button variant="secondary" asChild className="text-white ">
              <Link href="/contact">Get A Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
