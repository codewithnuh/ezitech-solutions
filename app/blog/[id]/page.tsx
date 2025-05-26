"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Dynamically import ReactMarkdown to ensure it's only rendered on the client side
import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm"; // For GitHub Flavored Markdown
import rehypeHighlight from "rehype-highlight"; // For code highlighting
// Changed to 'default.css' to troubleshoot the 'Module not found' error.
// If this resolves the issue, you can try other themes or re-verify 'github-dark.css' availability.
// A default theme for highlight.js. Consider moving this to a global CSS file or your layout.tsx for better performance.

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

// Mock data for a single blog post
const MOCK_BLOG_POST = {
  id: 1,
  title: "Faced With Data Deluge, Astronomers Turn to Automation",
  imageSrc: "https://placehold.co/1000x500/E0E0E0/333333?text=Blog+Post+Image",
  alt: "Two astronomers collaborating on a complex data problem.",
  author: "John Doe",
  date: "06 Jul, 2019",
  contentMarkdown: `
# Faced With Data Deluge, Astronomers Turn to Automation

By John Doe on 06 Jul, 2019

![Blog Post Image](https://placehold.co/1000x500/E0E0E0/333333?text=Blog+Post+Image)

The standard Lorem Ipsum passage, used since the 1500s, is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## The Challenge of Big Data in Astronomy

Modern astronomical surveys generate petabytes of data, far exceeding the capacity of human analysis. This "data deluge" necessitates innovative solutions, primarily in automation and artificial intelligence.

**Key areas of focus include:**

* **Automated galaxy classification:** Using machine learning to categorize millions of galaxies.
* **Exoplanet detection:** Algorithms sifting through vast amounts of stellar light curves.
* **Gravitational wave signal processing:** Identifying faint signals from cosmic events.

### Code Example: Python for Data Processing

Here's a simple Python example demonstrating a hypothetical data processing task:

\`\`\`python
import numpy as np
import pandas as pd

def process_astronomical_data(data_path: str) -> pd.DataFrame:
    """
    Loads and processes astronomical data from a CSV file.

    Args:
        data_path (str): Path to the CSV file containing astronomical data.

    Returns:
        pd.DataFrame: Processed data with a new 'normalized_flux' column.
    """
    try:
        df = pd.read_csv(data_path)
        # Example processing: normalize flux values
        if 'flux' in df.columns:
            df['normalized_flux'] = (df['flux'] - df['flux'].min()) / (df['flux'].max() - df['flux'].min())
        else:
            print("Warning: 'flux' column not found. Skipping normalization.")
        return df
    except FileNotFoundError:
        print(f"Error: File not found at {data_path}")
        return pd.DataFrame()
    except Exception as e:
        print(f"An error occurred during data processing: {e}")
        return pd.DataFrame()

if __name__ == "__main__":
    # Simulate some data
    dummy_data = {
        'star_id': range(10),
        'flux': np.random.rand(10) * 100 + 50,
        'temperature': np.random.rand(10) * 1000 + 3000
    }
    dummy_df = pd.DataFrame(dummy_data)
    dummy_df.to_csv('dummy_astro_data.csv', index=False)

    processed_df = process_astronomical_data('dummy_astro_data.csv')
    print("Processed Data Head:")
    print(processed_df.head())
\`\`\`

## Future Outlook

The integration of advanced automation and AI is not just accelerating discovery but also enabling astronomers to tackle problems previously deemed intractable. This synergy between human intellect and computational power promises a new era of astronomical breakthroughs.

### A Quick List of Discoveries Made Possible by Automation:

* Discovery of thousands of exoplanets.
* Mapping of dark matter distribution.
* Cataloging of millions of quasars.

| Feature         | Traditional Method | Automated Method     |
| :-------------- | :----------------- | :------------------- |
| **Speed** | Slow               | Extremely Fast       |
| **Volume** | Limited            | Petabytes/Exabytes   |
| **Accuracy** | Human-prone        | High (with training) |
| **Scalability** | Low                | High                 |

This is a **bold statement** and also an *italic one*.
`,
};

// Mock data for sidebar (re-using from Blog component)
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

const BlogPostContent = () => {
  return (
    <section
      id="blog-post-section"
      aria-labelledby="blog-post-heading"
      className="py-12 sm:py-16 lg:py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 id="blog-post-heading" className="sr-only">
          {MOCK_BLOG_POST.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Blog Post Content Area */}
          <article className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {MOCK_BLOG_POST.title}
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              By {MOCK_BLOG_POST.author} on {MOCK_BLOG_POST.date}
            </p>

            <div className="relative w-full h-64 sm:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={MOCK_BLOG_POST.imageSrc}
                alt={MOCK_BLOG_POST.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 600px"
                priority // Load main image with high priority
              />
            </div>

            {/* Markdown content rendering */}
            <div className="prose prose-lg max-w-none text-gray-800">
              {/* Render ReactMarkdown only if it's loaded */}
              {ReactMarkdown && (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {MOCK_BLOG_POST.contentMarkdown}
                </ReactMarkdown>
              )}
            </div>
          </article>

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

export default BlogPostContent;
