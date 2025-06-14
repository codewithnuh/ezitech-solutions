import Gallery from "@/components/screens/about/Gallery";
import Team from "@/components/screens/about/Team";
import Work from "@/components/screens/home/CompaniesLogo";
import Hero from "@/components/shared/Hero";
import { FadeInWhenVisible } from "@/components/shared/Motion";
import SplitSection from "@/components/shared/SplitSection";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About",
  description: "We build solutions that solve your problems",
};
const page = () => {
  return (
    <main>
      <Hero backgroundImage="/assets/about-page.jpg" />
      <SplitSection
        imageSrc="/assets/about2.jpg"
        title="Company overview."
        imageAlt="a person working on a board"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  mollit sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <FadeInWhenVisible>
        <Gallery />
      </FadeInWhenVisible>
      <Team />
      <Work />
    </main>
  );
};

export default page;
