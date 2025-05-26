import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/globals/Header";
import localFont from "next/font/local";
import { Oswald } from "next/font/google";
import Footer from "@/components/globals/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const oswald = Oswald({
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-oswald",
  subsets: ["cyrillic"],
});
export const metadata: Metadata = {
  title: "Ezitech Solutions",
  description: "We build solutions that solve your problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} antialiased`}>
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
