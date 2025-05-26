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
  return (
    <section id="home">
      <div
        className="relative bg-cover bg-center min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center pt-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Optional: Add content inside */}
        <div className="text-center relative z-10 ">
          <h1 className="text-4xl sm:text-5xl text-white  font-bold">
            {pathname == "/about" ? "About Us" : "Home"}
          </h1>
          <div className="text-white mt-4">
            <Link href={"/"}>Home</Link> /
            <Link href={pathname}>
              {pathname === "/about" ? "About Us" : "Home"}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl text-white font-semibold leading-tight"
            >
              Looking for a First-Class PHP Developer?
            </h2>
            <Link href="/contact" passHref>
              <Button
                variant="secondary"
                className="text-white hover:bg-secondary-dark transition-colors duration-200"
              >
                Get A Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
