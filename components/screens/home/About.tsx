import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT } from "@/constants/content/about";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SplitSection from "@/components/shared/SplitSection";

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

      <SplitSection
        imageSrc="/assets/about.jpg"
        imageAlt="Team collaborating on a software project"
        title={ABOUT_CONTENT.title}
        paragraph={ABOUT_CONTENT.paragraph}
        ctaText={ABOUT_CONTENT.cta}
        ctaLink="/about-us"
      />
    </section>
  );
};

export default About;
