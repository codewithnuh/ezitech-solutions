import Contact from "@/components/screens/contact/Contact";
import Hero from "@/components/shared/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero backgroundImage="/assets/about-page.jpg" />
      <Contact />
    </div>
  );
};

export default page;
