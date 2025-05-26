"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-4p">
      {/* Image Side */}
      <div
        className={`bg-secondary relative ${
          reverse ? "order-2 md:order-2" : "order-1 md:order-1"
        }`}
      >
        <div className="h-full w-28 bg-white absolute left-126" />
        <div className="container relative z-10 px-4 mx-auto flex justify-center items-center py-7 sm:py-10 lg:py-14">
          <div className="px-4 sm:px-6 lg:px-8">
            <Image
              src={imageSrc}
              width={500}
              height={500}
              alt={imageAlt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div
        className={`flex justify-center items-center py-8 sm:py-10 lg:py-14 ${
          reverse ? "order-1 md:order-1" : "order-2 md:order-2"
        }`}
      >
        <div className="container mx-auto text-left flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4 sm:mb-6 leading-tight">
            {title}
          </h3>

          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            {paragraph.slice(0, 180)}
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            {paragraph.slice(180)}
          </p>
          {ctaLink || ctaText ? (
            <Link href={ctaLink as string} passHref>
              <Button className="w-full sm:w-auto px-6 py-3 text-lg font-medium">
                {ctaText}
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SplitSection;
