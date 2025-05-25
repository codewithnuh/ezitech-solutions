import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT } from "@/constants/content/about";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="bg-secondary flex justify-center items-center py-7 sm:py-10 lg:py-14 order-2 md:order-1">
          <div className="px-4 sm:px-6 lg:px-8">
            <Image
              src="/assets/about.jpg"
              width={500}
              height={500}
              alt="A diverse team of professionals collaboratively working on a software development project, showing teamwork and innovation."
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex justify-center items-center py-8 sm:py-10 lg:py-14 order-1 md:order-2">
          <div className="container mx-auto text-left flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
            <h3
              id="about-heading"
              className="text-2xl sm:text-3xl font-semibold text-secondary mb-4 sm:mb-6 leading-tight"
            >
              {ABOUT_CONTENT.title}
            </h3>

            <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
              {ABOUT_CONTENT.paragraph.slice(0, 180)}
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
              {ABOUT_CONTENT.paragraph.slice(180)}
            </p>

            <Link href="/about-us" passHref>
              <Button className="w-full sm:w-auto px-6 py-3 text-lg font-medium">
                {ABOUT_CONTENT.cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
