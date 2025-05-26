"use client";
import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/constants/content/testimonials"; // Adjust path as needed
import { FadeInWhenVisible, StaggeredReveal } from "@/components/shared/Motion"; // Import the reusable animation components

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-12 sm:py-16 lg:py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animate the heading */}
        <FadeInWhenVisible delay={0.1} yOffset={30}>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-14"
          >
            What People Say?
          </h2>
        </FadeInWhenVisible>

        {/* Animate the grid of testimonials with a staggered effect */}
        <StaggeredReveal className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 sm:gap-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div className="relative mb-10" key={index}>
              <article
                className="relative border h-60 px-6 bg-white border-gray-400 border-b-0 hover:bg-secondary group transition-all duration-500 ease-in-out p-8 pb-16 rounded-lg flex flex-col items-start text-left"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <p className="text-secondary group-hover:text-white text-base sm:text-lg leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
              </article>
              <div className="absolute p-2 rounded-md -bottom-10 w-[75%] left-10 flex bg-white ml-2 items-center">
                <Image
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={50}
                  height={50}
                  className="rounded-full h-full object-cover mr-4"
                  sizes="60px"
                />
                <div>
                  <h3 className="text-lg group-hover:text-white font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm group-hover:text-white text-gray-600">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggeredReveal>
      </div>
    </section>
  );
};

export default Testimonials;
