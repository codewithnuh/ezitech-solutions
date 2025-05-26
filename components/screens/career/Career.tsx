import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming Button component is available

// Mock data for featured jobs
const FEATURED_JOBS = [
  {
    id: 1,
    title: "Web Project Manager - Team of PHP MySQL Developers",
    details:
      "MySQL Developer | London, United Kingdom | Full time | 19 Apr 2019",
    applyLink: "/careers/apply/web-project-manager",
  },
  {
    id: 2,
    title: "Web Project Manager - Team of PHP MySQL Developers",
    details:
      "MySQL Developer | London, United Kingdom | Full time | 19 Apr 2019",
    applyLink: "/careers/apply/web-project-manager-2",
  },
  {
    id: 3,
    title: "Web Project Manager - Team of PHP MySQL Developers",
    details:
      "MySQL Developer | London, United Kingdom | Full time | 19 Apr 2019",
    applyLink: "/careers/apply/web-project-manager-3",
  },
  {
    id: 4,
    title: "Web Project Manager - Team of PHP MySQL Developers",
    details:
      "MySQL Developer | London, United Kingdom | Full time | 19 Apr 2019",
    applyLink: "/careers/apply/web-project-manager-4",
  },
  {
    id: 5,
    title: "Web Project Manager - Team of PHP MySQL Developers",
    details:
      "MySQL Developer | London, United Kingdom | Full time | 19 Apr 2019",
    applyLink: "/careers/apply/web-project-manager-5",
  },
];

const Career = () => {
  return (
    <section
      id="career-opportunities"
      aria-labelledby="career-heading"
      className="py-12 sm:py-16 lg:py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="career-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-14"
        >
          Featured Jobs
        </h2>

        <div className="space-y-6">
          {FEATURED_JOBS.map((job) => (
            <article
              key={job.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between
                         bg-white rounded-lg shadow-sm p-6 border border-gray-200
                         transition-all duration-300 ease-in-out hover:shadow-md hover:border-gray-300"
              aria-labelledby={`job-title-${job.id}`}
            >
              <div className="flex-grow mb-4 md:mb-0">
                <h3
                  id={`job-title-${job.id}`}
                  className="text-xl font-semibold text-gray-800 mb-2"
                >
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm">{job.details}</p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <Link href={job.applyLink} passHref>
                  <Button
                    variant="default"
                    className="w-full md:w-auto  text-white transition-colors duration-300"
                    aria-label={`Apply for ${job.title}`}
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
