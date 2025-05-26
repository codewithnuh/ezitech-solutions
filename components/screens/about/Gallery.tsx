import React from "react";
import Image from "next/image";

// Mock data for gallery images with a 'span' property to control height
const GALLERY_IMAGES = [
  {
    src: "/assets/gallery-img-1.jpg", // Taller image for span 2
    alt: "People kayaking on a serene lake surrounded by mountains",
    title: "Mountain Lake Adventure",
    description: "Explore the tranquility of nature on a kayaking journey.",
    span: 2, // This item will span 2 rows
  },
  {
    src: "/assets/gallery-img-2.jpg",
    alt: "A tall, elegant spire reaching towards the sky",
    title: "Architectural Marvel",
    description: "Discover the intricate details of historical architecture.",
    span: 1,
  },
  {
    src: "/assets/gallery-img-3.jpg",
    alt: "A person standing in front of a vibrant Ferris wheel at night",
    title: "Night Carnival Lights",
    description:
      "Experience the magic and excitement of a bustling night carnival.",
    span: 1,
  },
  {
    src: "/assets/gallery-img-5.jpg", // Taller image for span 2 (moved up for better flow)
    alt: "Stacked, ornate structures with intricate carvings",
    title: "Ancient Wisdom",
    description: "Journey through time with ancient and mysterious structures.",
    span: 2,
  },
  {
    src: "/assets/gallery-img-4.jpg", // Normal image (moved for better flow)
    alt: "A person looking out at a city skyline from a boat",
    title: "Cityscape Horizon",
    description: "Witness urban beauty from a unique waterfront perspective.",
    span: 1,
  },
  {
    src: "/assets/gallery-img-6.jpg",
    alt: "A person playing with a red ball in a misty forest",
    title: "Forest Play",
    description: "Find joy and wonder in the heart of a mystical forest.",
    span: 1,
  },
  {
    src: "/assets/gallery-img-7.jpg",
    alt: "A group of hikers admiring a vast blue lake from a rocky outcrop",
    title: "Panoramic Lake View",
    description: "Breathtaking vistas and unforgettable hiking trails.",
    span: 1, // Changed to span 1 for more variety in the layout
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="gallery-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-10 sm:mb-14"
        >
          Our Featured Gallery
        </h2>

        {/* Adjusted auto-rows to allow for more flexible height variations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {GALLERY_IMAGES.map((item, index) => (
            <figure
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer group
                          ${item.span === 2 ? "row-span-2" : "row-span-1"}`} // Dynamically apply row-span
              aria-label={item.title}
            >
              <Image
                src={item.src}
                alt={item.alt}
                // Intrinsic width/height for Next.js optimization. object-cover ensures it fills the space.
                width={600}
                height={item.span === 2 ? 800 : 400} // Adjust intrinsic height based on span for Next.js
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                loading="lazy"
              />

              {/* Overlay content */}
              <figcaption
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 text-white
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base">{item.description}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
