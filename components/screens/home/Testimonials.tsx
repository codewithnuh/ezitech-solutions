import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/constants/content/testimonials"; // Adjust path as needed

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-12 sm:py-16 lg:py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-14"
        >
          What People Say?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={index}
              className="relative bg-white p-6 pb-16 rounded-lg shadow-md flex flex-col items-start text-left
                         before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                         before:w-0 before:h-0 before:border-l-[15px] before:border-r-[15px] before:border-t-[15px]
                         before:border-l-transparent before:border-r-transparent before:border-t-white before:translate-y-[15px]"
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div className="absolute bottom-6 left-6 flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={60}
                  height={60}
                  className="rounded-full h-full object-cover mr-4"
                  sizes="60px"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
