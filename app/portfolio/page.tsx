import CompaniesLogo from "@/components/screens/home/CompaniesLogo";
import Works from "@/components/screens/portfolio/Works";
import Hero from "@/components/shared/Hero";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero backgroundImage="/assets/portfolio-page.jpg" />
      <Works />
      <CompaniesLogo />
    </main>
  );
};

export default page;
