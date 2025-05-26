import { FadeInWhenVisible } from "@/components/shared/Motion";
import { Button } from "@/components/ui/button"; // Assuming this is your custom button component
import { HERO_CONTENT } from "@/constants/content/hero"; // Assuming this holds your title, subtitle, etc.
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-[url('/assets/banner.jpg')] bg-cover bg-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center pt-10" //
    >
      <div className="absolute inset-0 bg-black/60"></div>{" "}
      <div className="relative z-10 container mx-auto px-4 py-20 space-y-5 text-center">
        {" "}
        <FadeInWhenVisible
          children={
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white capitalize font-bold">
              {" "}
              {HERO_CONTENT.title}
            </h1>
          }
          delay={0}
          duration={1.2}
          yOffset={0}
        />
        <FadeInWhenVisible
          children={
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              {" "}
              {HERO_CONTENT.subTitle}
            </p>
          }
          delay={0.4}
          duration={1.2}
          yOffset={0}
        />
        <div className="flex items-center justify-center pt-4">
          {" "}
          <FadeInWhenVisible
            children={
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg text-lg transition duration-300">
                {HERO_CONTENT.cta}
              </Button>
            }
            delay={0.6}
            duration={1.2}
            yOffset={0}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
