import WorkDetails from "@/components/screens/portfolio/WorkDetails";
import Hero from "@/components/shared/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero backgroundImage="/assets/about-page.jpg" />
      <WorkDetails />
    </div>
  );
};

export default page;
