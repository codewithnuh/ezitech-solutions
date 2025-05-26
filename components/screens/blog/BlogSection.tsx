"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// Mock data for blog posts
const BLOG_POSTS = [
  {
    id: 1,
    imageSrc: "https://placehold.co/600x400/E0E0E0/333333?text=Blog+Post+1",
    alt: "Two people collaborating on a computer in an office setting.",
    author: "John Doe",
    date: "06 Jul, 2019",
    title: "Elements List That You Can Use In This Template",
    excerpt:
      "Heading Heading 2 Heading Heading 4 Heading Heading 6 Emphasis Emphasis, aka Italics, with asterisks or underscores....",
    link: "/blog/post-1",
  },
  {
    id: 2,
    imageSrc: "https://placehold.co/600x400/D0D0D0/333333?text=Blog+Post+2",
    alt: "A man and a woman discussing something while looking at a smartphone.",
    author: "John Doe",
    date: "06 Jul, 2019",
    title: "Faced With Data Deluge, Astronomers Turn to Automation",
    excerpt:
      "The standard Lorem ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    link: "/blog/post-2",
  },
  {
    id: 3,
    imageSrc: "https://placehold.co/600x400/C0C0C0/333333?text=Blog+Post+3",
    alt: "A woman in a light blue shirt looking at the camera in an office.",
    author: "Mark Dinn",
    date: "06 Jul, 2019",
    title: "Smart Cities: Cybernetics and Biopolitics",
    excerpt:
      "The standard Lorem ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    link: "/blog/post-3",
  },
  {
    id: 4,
    imageSrc: "https://placehold.co/600x400/B0B0B0/333333?text=Blog+Post+4",
    alt: "Two men collaborating and discussing in front of a monitor.",
    author: "Mark Dinn",
    date: "06 Jul, 2019",
    title: "Smart Cities: Cybernetics and Biopolitics",
    excerpt:
      "The standard Lorem ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    link: "/blog/post-4",
  },
  {
    id: 5,
    imageSrc: "https://placehold.co/600x400/A0A0A0/333333?text=Blog+Post+5",
    alt: "A person typing on a laptop with a cup of coffee nearby.",
    author: "Jane Smith",
    date: "10 Aug, 2019",
    title: "The Future of Web Development in 2024",
    excerpt:
      "A deep dive into the upcoming trends and technologies shaping the web development landscape...",
    link: "/blog/post-5",
  },
  {
    id: 6,
    imageSrc: "https://placehold.co/600x400/909090/333333?text=Blog+Post+6",
    alt: "Hands holding a tablet displaying data visualizations.",
    author: "David Lee",
    date: "15 Sep, 2019",
    title: "Understanding Big Data: A Beginner's Guide",
    excerpt:
      "An introduction to the concepts of big data, its importance, and how it's revolutionizing industries...",
    link: "/blog/post-6",
  },
];

// Mock data for sidebar
const CATEGORIES = [
  "Autocamion system",
  "Database management",
  "Elements",
  "Technology",
  "Web development",
];

const TAGS = ["Artice", "Automation", "Database", "Elements", "Tech", "Web"];

const LATEST_ARTICLES = [
  {
    id: 101,
    imageSrc: "https://placehold.co/80x60/E0E0E0/333333?text=Thumb1",
    alt: "Thumbnail for Elements List article",
    title: "Elements List That You Can Use In This Template",
    date: "06 Jul, 2019",
    link: "/blog/post-1",
  },
  {
    id: 102,
    imageSrc: "https://placehold.co/80x60/D0D0D0/333333?text=Thumb2",
    alt: "Thumbnail for Faced With Data Deluge article",
    title: "Faced With Data Deluge, Astronomers Turn to Automation",
    date: "06 Jul, 2019",
    link: "/blog/post-2",
  },
  {
    id: 103,
    imageSrc: "https://placehold.co/80x60/C0C0C0/333333?text=Thumb3",
    alt: "Thumbnail for Smart Cities article",
    title: "Smart Cities: Cybernetics and Biopolitics",
    date: "06 Jul, 2019",
    link: "/blog/post-3",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Number of posts per page

  // Calculate posts to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BLOG_POSTS.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(BLOG_POSTS.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the blog section when page changes for better UX
    document
      .getElementById("blog-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="blog-section"
      aria-labelledby="blog-heading"
      className="py-12 sm:py-16 lg:py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="blog-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-14"
        >
          Our Blog
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Blog Content Area */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
                  aria-labelledby={`post-title-${post.id}`}
                >
                  <Link
                    href={post.link}
                    aria-label={`Read more about ${post.title}`}
                  >
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={post.imageSrc}
                        alt={post.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      By {post.author} on {post.date}
                    </p>
                    <h3
                      id={`post-title-${post.id}`}
                      className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300"
                    >
                      <Link href={post.link} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link href={post.link} passHref>
                      <Button
                        variant="default"
                        className=" text-white transition-colors duration-300"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-12" aria-label="Blog post navigation">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageChange(currentPage - 1);
                      }}
                      aria-disabled={currentPage === 1}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          aria-label={`Go to page ${page}`}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages)
                          handlePageChange(currentPage + 1);
                      }}
                      aria-disabled={currentPage === totalPages}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </nav>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {CATEGORIES.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog/category/${category
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                      className="block text-gray-600 hover:text-primary transition-colors duration-200"
                      aria-label={`View posts in ${category} category`}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s/g, "-")}`}
                    className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full
                               hover:bg-primary hover:text-white transition-colors duration-200"
                    aria-label={`View posts tagged with ${tag}`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Latest Articles */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Latest Article
              </h3>
              <ul className="space-y-4">
                {LATEST_ARTICLES.map((article) => (
                  <li key={article.id}>
                    <Link
                      href={article.link}
                      className="flex items-center group"
                    >
                      <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-md mr-4">
                        <Image
                          src={article.imageSrc}
                          alt={article.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="80px"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Blog;
