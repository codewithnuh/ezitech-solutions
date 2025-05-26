import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for the works section
const WORKS_CONTENT = [
  {
    logoSrc: "/assets/portfolio-1.png", // Placeholder for Samsung logo
    logoAlt: "Samsung logo",
    title: "Cloud Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkHref: "/works/cloud-service",
  },
  {
    logoSrc: "/assets/portfolio-2.png", // Placeholder for BADU logo
    logoAlt: "BADU logo",
    title: "Database Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkHref: "/works/database-management",
  },
  {
    logoSrc: "/assets/portfolio-3.png", // Placeholder for PixTeller logo
    logoAlt: "PixTeller logo",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkHref: "/works/logo-design",
  },
  {
    logoSrc: "/assets/portfolio-4.png", // Placeholder for Intel logo
    logoAlt: "Intel logo",
    title: "Photoshop Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkHref: "/works/photoshop-design",
  },
  {
    logoSrc: "/assets/portfolio-5.png", // Placeholder for Skype logo
    logoAlt: "Skype logo",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkHref: "/works/web-development",
  },
  {
    logoSrc: "/assets/portfolio-6.png", // Placeholder for Workday logo
    logoAlt: "Workday logo",
    title: "Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkHref: "/works/web-hosting",
  },
];

const Works = () => {
  return (
    <section
      id="our-works"
      aria-labelledby="our-works-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="our-works-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-14"
        >
          Our Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKS_CONTENT.map((work, index) => (
            <article
              key={index}
              className="group bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center
                         transition-all duration-300 ease-in-out
                         hover:bg-secondary hover:shadow-lg transform hover:-translate-y-1" // Micro-interaction: slight lift on hover
              aria-labelledby={`work-title-${index}`}
            >
              <div className="relative w-full h-24 flex items-center justify-center mb-6">
                <Image
                  src={work.logoSrc}
                  alt={work.logoAlt}
                  width={150} // Adjust based on actual logo sizes
                  height={75} // Adjust based on actual logo sizes
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300" // Grayscale on default, color on hover
                  sizes="(max-width: 768px) 100px, 150px"
                  loading="lazy"
                />
              </div>

              <h3
                id={`work-title-${index}`}
                className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 mb-2"
              >
                {work.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed mb-6">
                {work.description}
              </p>

              <Link href={work.linkHref} passHref className="mt-auto">
                {" "}
                {/* mt-auto pushes button to bottom */}
                <Button
                  variant="default"
                  className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-300"
                >
                  Know More
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
