"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInWhenVisible } from "@/components/shared/Motion";

interface SplitSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraph: string;
  ctaText?: string;
  ctaLink?: string;
  reverse?: boolean;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  paragraph,
  ctaText,
  ctaLink,
  reverse = false,
}) => {
  // Define the background style using linear-gradient for a perfect 50/50 split
  // The colors are swapped based on the 'reverse' prop
  const imageSideBackgroundStyle = {
    background: reverse
      ? "linear-gradient(to right, white 60%, var(--secondary) 70%)" // White on left, secondary on right
      : "linear-gradient(to right, var(--secondary) 70%, white 60%)", // Secondary on left, white on right
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
      {/* Image Side */}
      <div
        className={`relative flex items-center py-7 sm:py-10 lg:py-14
          ${reverse ? "order-2 md:order-2" : "order-1 md:order-1"}
          `}
        style={imageSideBackgroundStyle}
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 flex w-full
          ${
            reverse ? "justify-end" : "justify-start"
          } // Align content within the container
        `}
        >
          <FadeInWhenVisible delay={0.2} yOffset={50}>
            <Image
              src={imageSrc}
              width={500}
              height={500}
              alt={imageAlt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg shadow-lg max-w-[80%] md:max-w-[600px]" // Constrain image size
            />
          </FadeInWhenVisible>
        </div>
      </div>

      {/* Content Side */}
      <div
        className={`flex justify-center items-center py-8 sm:py-10 lg:py-14 ${
          reverse ? "order-1 md:order-1" : "order-2 md:order-2"
        }`}
      >
        {/* This div already correctly uses container mx-auto px-4 sm:px-6 lg:px-8 */}
        <div className="container mx-auto text-left flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible delay={0.3} yOffset={30}>
            <h3 className="text-2xl sm:text-3xl font-[400] text-secondary mb-4 sm:mb-6 leading-tight">
              {title}
            </h3>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4} yOffset={30}>
            <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
              {paragraph.slice(0, 180)}
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.5} yOffset={30}>
            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
              {paragraph.slice(180)}
            </p>
          </FadeInWhenVisible>

          {ctaLink || ctaText ? (
            <FadeInWhenVisible delay={0.6} yOffset={30}>
              <Link href={ctaLink as string} passHref>
                <Button className="w-full sm:w-auto px-6 py-3 text-lg font-medium">
                  {ctaText}
                </Button>
              </Link>
            </FadeInWhenVisible>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SplitSection;
