import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/globals/Header";
import localFont from "next/font/local";
import Footer from "@/components/globals/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
    },
  ],
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} antialiased`}>
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
