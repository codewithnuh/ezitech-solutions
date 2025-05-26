"use client";
import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT } from "@/constants/content/about";
import React from "react";
import Link from "next/link";
import SplitSection from "@/components/shared/SplitSection";
import { StaggeredReveal, FadeInWhenVisible } from "@/components/shared/Motion"; // Import the reusable animation component

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
      {/* CTA Section with FadeInWhenVisible animation */}
      <FadeInWhenVisible delay={0.1} yOffset={30}>
        <div className="bg-primary py-6 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl text-white font-semibold leading-tight"
              >
                Looking for a First-Class PHP Developer?
              </h2>
              <Button variant="secondary" asChild className="text-white">
                <Link href="/contact">Get A Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Split Section with FadeInWhenVisible animation */}
      {/* A slight delay is added to make it appear after the CTA section */}
      <FadeInWhenVisible delay={0.3} yOffset={30}>
        <SplitSection
          imageSrc="/assets/about.jpg"
          imageAlt="Team collaborating on a software project"
          title={ABOUT_CONTENT.title}
          paragraph={ABOUT_CONTENT.paragraph}
          ctaText={ABOUT_CONTENT.cta}
          ctaLink="/about-us"
        />
      </FadeInWhenVisible>
    </section>
  );
};

export default About;
