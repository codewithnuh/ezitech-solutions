"use client";
import React from "react";
import { SERVICES_CONTENT } from "@/constants/content/services";
import { FadeInWhenVisible, StaggeredReveal } from "@/components/shared/Motion"; // Import the reusable animation components

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animate the heading */}
        <FadeInWhenVisible delay={0.1} yOffset={30}>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-14"
          >
            Our Services
          </h2>
        </FadeInWhenVisible>

        {/* Animate the grid of service cards with a staggered effect */}
        <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CONTENT.map((service, index) => {
            const IconComponent = service.icon; // Get the Lucide icon component

            return (
              <article
                key={index}
                className="group p-6 rounded-lg shadow-md border border-gray-300 bg-white text-gray-800
                           flex flex-col items-center text-center transition-all duration-300 ease-in-out
                           hover:bg-secondary hover:text-white transform hover:-translate-y-1" // Added transform for micro-interaction
                aria-labelledby={`service-title-${index}`}
              >
                <div className="mb-4 p-3 rounded-full bg-red-500 group-hover:bg-white transition-colors duration-300">
                  <IconComponent
                    size={48}
                    className="text-white group-hover:text-red-500 transition-colors duration-300"
                  />
                </div>
                <h3
                  id={`service-title-${index}`}
                  className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </article>
            );
          })}
        </StaggeredReveal>
      </div>
    </section>
  );
};

export default Services;
