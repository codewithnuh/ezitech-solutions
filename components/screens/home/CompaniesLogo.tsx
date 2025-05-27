"use client";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Import the official Autoplay plugin
import Autoplay from "embla-carousel-autoplay";

// Mock data for company logos
const COMPANY_LOGOS = [
  {
    name: "Airbnb",
    logo: "/assets/clients-logo-1.png",
    alt: "Airbnb logo",
  },
  {
    name: "Hugo",
    logo: "/assets/clients-logo-2.png",
    alt: "Hugo logo",
  },
  {
    name: "NGINX",
    logo: "/assets/clients-logo-3.png",
    alt: "NGINX logo",
  },
  {
    name: "Google",
    logo: "/assets/clients-logo-4.png",
    alt: "Google logo",
  },
  {
    name: "Microsoft",
    logo: "/assets/clients-logo-5.png",
    alt: "Microsoft logo",
  },
];

// Extend the logos array to create a seamless infinite scroll effect
const EXTENDED_COMPANY_LOGOS = [
  ...COMPANY_LOGOS,
  ...COMPANY_LOGOS,
  ...COMPANY_LOGOS,
  ...COMPANY_LOGOS,
  ...COMPANY_LOGOS,
];

const CompaniesLogo = () => {
  // Initialize the Autoplay plugin with desired options
  // stopOnMouseEnter: true will pause autoplay on hover
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false }) // Autoplay every 2 seconds, pause on hover, resume after interaction
  );

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="py-12 sm:py-16 lg:py-20  bg-gray-100"
    >
      <div className="container px-4 mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2
            id="partners-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-10 sm:mb-14"
          >
            We work with
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            // Pass the plugin instance to the Carousel's plugins prop
            plugins={[autoplayPlugin.current]}
            className="w-full max-w-6xl"
          >
            <CarouselContent className="-ml-4">
              {EXTENDED_COMPANY_LOGOS.map((company, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-1 flex items-center justify-center">
                    <div className="group flex-shrink-0">
                      <Image
                        src={company.logo}
                        alt={company.alt}
                        width={120}
                        height={60}
                        className="grayscale group-hover:grayscale-0 transition-all duration-300 object-contain"
                        sizes="(max-width: 768px) 100px, (max-width: 1200px) 120px, 120px"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation buttons, hidden on very small screens if desired */}
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CompaniesLogo;
