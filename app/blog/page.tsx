import Blog from "@/components/screens/blog/BlogSection";
import Hero from "@/components/shared/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero backgroundImage="/assets/about.jpg" />
      <Blog />
    </div>
  );
};

export default page;
