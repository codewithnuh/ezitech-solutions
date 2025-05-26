"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Globe } from "lucide-react"; // Import necessary Lucide icons
import { FadeInWhenVisible, StaggeredReveal } from "@/components/shared/Motion"; // Import the reusable animation components

// Mock data for team members
const TEAM_MEMBERS = [
  {
    image: "/assets/team-member-1.jpg", // Original path restored
    alt: "Randy Vain, a man with short brown hair and a beard, wearing a light-colored shirt.",
    name: "Randy Vain",
    title: "Web Developer",
    contact: "randyvain@redlab.com",
    socialLinks: [
      {
        icon: Facebook,
        href: "https://facebook.com/randy",
        ariaLabel: "Randy Vain's Facebook profile",
      },
      {
        icon: Twitter,
        href: "https://twitter.com/randy",
        ariaLabel: "Randy Vain's Twitter profile",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/randy",
        ariaLabel: "Randy Vain's LinkedIn profile",
      },
    ],
  },
  {
    image: "/assets/team-member-2.jpg", // Original path restored
    alt: "Atap Hasly, a man with short dark hair and a friendly smile.",
    name: "Atap Hasly",
    title: "Digital Marketer",
    contact: "ataphasly@redlab.com",
    socialLinks: [
      {
        icon: Facebook,
        href: "https://facebook.com/atap",
        ariaLabel: "Atap Hasly's Facebook profile",
      },
      {
        icon: Twitter,
        href: "https://twitter.com/atap",
        ariaLabel: "Atap Hasly's Twitter profile",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/atap",
        ariaLabel: "Atap Hasly's LinkedIn profile",
      },
    ],
  },
  {
    image: "/assets/team-member-3.jpg", // Original path restored
    alt: "Lord Hasan, a man with short dark hair and a light beard, looking confidently.",
    name: "Lord Hasan",
    title: "Web Developer",
    contact: "lordhasan@redlab.com",
    socialLinks: [
      {
        icon: Facebook,
        href: "https://facebook.com/hasan",
        ariaLabel: "Lord Hasan's Facebook profile",
      },
      {
        icon: Twitter,
        href: "https://twitter.com/hasan",
        ariaLabel: "Lord Hasan's Twitter profile",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/hasan",
        ariaLabel: "Lord Hasan's LinkedIn profile",
      },
    ],
  },
  {
    image: "/assets/team-member-3.jpg", // Original path restored (assuming it's a placeholder for Marry Cess)
    alt: "Marry Cess, a woman with long red hair, looking directly at the camera.",
    name: "Marry Cess",
    title: "Web Designer",
    contact: "marrycess@redlab.com",
    socialLinks: [
      {
        icon: Facebook,
        href: "https://facebook.com/marry",
        ariaLabel: "Marry Cess's Facebook profile",
      },
      {
        icon: Twitter,
        href: "https://twitter.com/marry",
        ariaLabel: "Marry Cess's Twitter profile",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/marry",
        ariaLabel: "Marry Cess's LinkedIn profile",
      },
    ],
  },
  {
    image: "/assets/team-member-4.jpg", // Original path restored
    alt: "Julio Froster, a person with short dark hair and a serious expression, with blue lighting.",
    name: "Julio Froster",
    title: "Web Developer",
    contact: "juliofroster@redlab.com",
    socialLinks: [
      {
        icon: Facebook,
        href: "https://facebook.com/julio",
        ariaLabel: "Julio Froster's Facebook profile",
      },
      {
        icon: Twitter,
        href: "https://twitter.com/julio",
        ariaLabel: "Julio Froster's Twitter profile",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/julio",
        ariaLabel: "Julio Froster's LinkedIn profile",
      },
    ],
  },
  {
    image: "/assets/team-member-5.jpg", // Original path restored
    alt: "Jemmi Nitin, a woman with long dark hair, looking thoughtfully.",
    name: "Jemmi Nitin",
    title: "Web Developer",
    contact: "jemminitin@redlab.com",
    socialLinks: [
      {
        icon: Facebook,
        href: "https://facebook.com/jemmi",
        ariaLabel: "Jemmi Nitin's Facebook profile",
      },
      {
        icon: Twitter,
        href: "https://twitter.com/jemmi",
        ariaLabel: "Jemmi Nitin's Twitter profile",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/jemmi",
        ariaLabel: "Jemmi Nitin's LinkedIn profile",
      },
    ],
  },
];

const Team = () => {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animate the heading */}
        <FadeInWhenVisible delay={0.1} yOffset={30}>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-14"
          >
            Meet Our Team
          </h2>
        </FadeInWhenVisible>

        {/* Animate the grid of team member cards with a staggered effect */}
        <StaggeredReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <article
              key={index}
              className="group bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center
                         transition-all duration-300 ease-in-out
                         hover:bg-secondary hover:shadow-lg transform hover:-translate-y-1" // Micro-interaction: slight lift on hover
              aria-label={`Team member: ${member.name}, ${member.title}`}
            >
              <div className="relative w-36 h-36 mb-6">
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={150}
                  height={150}
                  className="rounded-full object-cover w-full h-full border-4 border-gray-300 group-hover:border-white transition-colors duration-300" // Circular image with border
                  sizes="(max-width: 768px) 120px, 150px"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300 text-sm mb-1">
                {member.title}
              </p>
              {member.contact && (
                <p className="text-gray-500 group-hover:text-blue-200 transition-colors duration-300 text-xs mb-4">
                  {/* Check if contact is an email or website */}
                  {member.contact.includes("@") ? (
                    <Link
                      href={`mailto:${member.contact}`}
                      className="hover:underline"
                    >
                      {member.contact}
                    </Link>
                  ) : (
                    <Link
                      href={`https://${member.contact}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {member.contact}
                    </Link>
                  )}
                </p>
              )}

              <div className="flex space-x-4 mt-auto">
                {/* mt-auto pushes social icons to bottom */}
                {member.socialLinks.map((social, socialIndex) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={socialIndex}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="text-gray-400 hover:text-secondary-light group-hover:text-white transition-colors duration-300 transform hover:scale-110" // Micro-interaction: scale on hover
                    >
                      <Icon size={24} />
                    </Link>
                  );
                })}
              </div>
            </article>
          ))}
        </StaggeredReveal>
      </div>
    </section>
  );
};

export default Team;
