import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { Toaster } from "@/components/ui/sonner";
import SmoothScrolling from "@/components/global/SmoothScrolling";
import { Analytics } from "@vercel/analytics/next"



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Radhey Mugdal | Software Engineer",
    template: "%s | Radhey Mugdal"
  },
  description: "Portfolio of Radhey Mugdal, a Software Engineer specializing in modern web development. Explore my projects, blog posts, and get in touch for collaborations.",
  keywords: ["Radhey Mugdal", "Software Engineer", "Web Developer", "Full Stack Developer", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Radhey Mugdal" }],
  creator: "Radhey Mugdal",
  metadataBase: new URL("https://radheymugdal.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://radheymugdal.com",
    title: "Radhey Mugdal | Software Engineer",
    description: "Portfolio of Radhey Mugdal, a Software Engineer specializing in modern web development. Explore my projects, blog posts, and get in touch for collaborations.",
    siteName: "Radhey Mugdal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhey Mugdal | Software Engineer",
    description: "Portfolio of Radhey Mugdal, a Software Engineer specializing in modern web development. Explore my projects, blog posts, and get in touch for collaborations.",
    creator: "@radheymugdal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  appleWebApp: {
    title: "RadheyMugdal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={` relative ${inter.variable} ${inter.className}`}>
          <Analytics/>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            <SmoothScrolling>
              {children}
              <Footer />
            </SmoothScrolling>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
