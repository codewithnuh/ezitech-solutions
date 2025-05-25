import React from "react";
import {
  Palette, // Creative Illustration
  Monitor, // Graphics Design (using monitor for general design)
  Layout, // UI/UX Design (using layout for UI/UX)
  Code, // Web Development
  Database, // Database Management
  Cloud, // Cloud Service
} from "lucide-react"; // Importing icons from lucide-react

// Mock content for services
const SERVICES_CONTENT = [
  {
    icon: Palette,
    title: "Creative Illustration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias",
  },
  {
    icon: Monitor,
    title: "Graphics Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias",
  },
  {
    icon: Cloud,
    title: "Cloud Service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-14"
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CONTENT.map((service, index) => {
            const IconComponent = service.icon; // Get the Lucide icon component

            return (
              <article
                key={index}
                className="group p-6 rounded-lg shadow-md bg-white text-gray-800
                           flex flex-col items-center text-center transition-all duration-300 ease-in-out
                           hover:bg-secondary hover:text-white"
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
        </div>
      </div>
    </section>
  );
};

export default Services;
