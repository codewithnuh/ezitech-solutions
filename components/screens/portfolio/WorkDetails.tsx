"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react"; // Using CheckCircle for completed tasks
import { Button } from "@/components/ui/button";
import { FadeInWhenVisible, StaggeredReveal } from "@/components/shared/Motion"; // Import animation components

// Mock data for the work details page
const WORK_DETAILS_CONTENT = {
  logo: "/assets/badu-logo.png", // Placeholder for the BADU 1891 logo
  logoAlt: "BADU 1891 Logo",
  mainDescription: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  completedTasks: [
    "Lorem atque on culpa qui oficio",
    "Dok incididunt ut labor",
    "Consectetur auteurs dolor",
    "Labons alqap",
    "Desantcut bes",
    "Lorem diequip ex ea cdpa qui officia",
    "Dokr tempor incedunt ut labon",
    "Consectetur aut a dour",
  ],
  additionalDescription: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  sidebarCtaTitle: "Want To Create Project Like This?",
  sidebarCtaText:
    "Lorem ipsum dolor voluptatus promtum dolomque facilisi Vat mass invenors moges offerts unde tenetur molesties",
};

const WorkDetails = () => {
  return (
    <section
      id="work-details"
      aria-labelledby="work-details-heading"
      className="py-12 sm:py-16 lg:py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 id="work-details-heading" className="sr-only">
          Work Details
        </h1>{" "}
        {/* Screen reader only heading */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 lg:p-8">
            {/* Logo and Initial Description */}
            <div className="flex items-start mb-8">
              <FadeInWhenVisible delay={0.1} yOffset={30}>
                <Image
                  src={WORK_DETAILS_CONTENT.logo}
                  alt={WORK_DETAILS_CONTENT.logoAlt}
                  width={80}
                  height={80}
                  className="rounded-full mr-6 flex-shrink-0"
                  sizes="80px"
                  priority
                />
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2} yOffset={30}>
                <p className="text-gray-700 text-base leading-relaxed">
                  {WORK_DETAILS_CONTENT.mainDescription.split("\n\n")[0]}{" "}
                  {/* First paragraph */}
                </p>
              </FadeInWhenVisible>
            </div>

            {/* Remaining main description paragraphs */}
            {WORK_DETAILS_CONTENT.mainDescription
              .split("\n\n")
              .slice(1)
              .map((paragraph, idx) => (
                <FadeInWhenVisible
                  key={idx}
                  delay={0.3 + idx * 0.1}
                  yOffset={30}
                >
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {paragraph}
                  </p>
                </FadeInWhenVisible>
              ))}

            {/* Completed Task Section */}
            <FadeInWhenVisible delay={0.5} yOffset={30}>
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Completed Task
              </h3>
            </FadeInWhenVisible>
            <StaggeredReveal className="space-y-3">
              {WORK_DETAILS_CONTENT.completedTasks.map((task, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle
                    size={20}
                    className="text-primary mr-3 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-base">{task}</span>
                </div>
              ))}
            </StaggeredReveal>

            {/* Additional Description */}
            {WORK_DETAILS_CONTENT.additionalDescription
              .split("\n\n")
              .map((paragraph, idx) => (
                <FadeInWhenVisible
                  key={idx}
                  delay={0.6 + idx * 0.1}
                  yOffset={30}
                >
                  <p className="text-gray-700 text-base leading-relaxed mt-4">
                    {paragraph}
                  </p>
                </FadeInWhenVisible>
              ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <FadeInWhenVisible delay={0.7} yOffset={30}>
              <div className="bg-secondary text-white rounded-lg shadow-md p-6 lg:p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {WORK_DETAILS_CONTENT.sidebarCtaTitle}
                </h3>
                <p className="text-gray-300 text-base mb-6">
                  {WORK_DETAILS_CONTENT.sidebarCtaText}
                </p>
                <Link href="/contact" passHref>
                  <Button
                    variant="default"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </FadeInWhenVisible>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WorkDetails;
