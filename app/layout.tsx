import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/globals/Header";
import { Oswald, Roboto } from "next/font/google";
import Footer from "@/components/globals/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "highlight.js/styles/rainbow.css"; // Ensure this path is correct and the file exists

const oswald = Oswald({
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-oswald",
  subsets: ["cyrillic"],
});
const roboto = Roboto({
  weight: ["200", "300", "400"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ezitech Solutions - We build solutions that solve your problems",
    template: "%s | Ezitech Solutions", // Dynamic title for different pages
  },
  description:
    "Ezitech Solutions specializes in building innovative web solutions, offering services in web development, digital marketing, design, and more. Solving your problems with cutting-edge technology.",

  // Open Graph tags for Facebook, WhatsApp, LinkedIn, etc.
  openGraph: {
    title: "Ezitech Solutions - Innovative Web Solutions",
    description:
      "We build solutions that solve your problems. Specializing in web development, digital marketing, and design.",
    url: "https://ezitech-solutions.vercel.app/", // Replace with your actual site URL
    siteName: "Ezitech Solutions",
    images: [
      {
        url: "https://ezitech-solutions.vercel.app/og-image.webp", // Replace with your actual OG image URL (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Ezitech Solutions - Building innovative web solutions",
      },
      {
        url: "https://ezitech-solutions.vercel.app/og-image.jpg", // Optional: another image for variety
        width: 800,
        height: 600,
        alt: "Ezitech Solutions company logo and services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image", // Can be 'summary', 'summary_large_image', 'app', or 'player'
    site: "@EzitechSolutions", // Replace with your Twitter handle
    creator: "@YourTwitterHandle", // Replace with the creator's Twitter handle if different
    title: "Ezitech Solutions - Your Partner in Digital Innovation",
    description:
      "Expert web development, digital marketing, and design services to solve your business challenges.",
    images: ["https://ezitech-solutions.vercel.app/og-image.webp"], // Replace with your Twitter card image URL (e.g., 1200x675px)
  },

  // Favicons and other icons
  icons: {
    icon: "/favicon.ico", // Path to your favicon
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Canonical URL (optional, but good for SEO if you have multiple URLs for the same content)
  alternates: {
    canonical: "https://ezitech-solutions.vercel.app", // Replace with your actual canonical URL
  },

  // Robots meta tag to control crawling and indexing
  robots: {
    index: true,
    follow: true,
    nocache: true, // Instructs search engines not to cache this page
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  // Keywords (optional, but can help with very specific searches)
  keywords: [
    "web development",
    "digital marketing",
    "SEO",
    "React",
    "Next.js",
    "UI/UX design",
    "custom software",
    "IT solutions",
    "Ezitech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} ${roboto.variable} antialiased`}>
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
