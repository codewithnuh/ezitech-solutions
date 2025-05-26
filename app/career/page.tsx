import Career from "@/components/screens/career/Career";
import Hero from "@/components/shared/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero backgroundImage="/assets/about-page.jpg" />
      <Career />
    </div>
  );
};

export default page;
