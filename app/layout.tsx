import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { cx } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "./components/nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://joeduchnowski.com"),
  title: {
    default: "Joe Duchnowski",
    template: "%s | Joe Duchnowski",
  },
  description: "Developer, tinkerer, swings an axe well.",
  openGraph: {
    title: "Joe Duchnowski",
    description: "Developer, tinkerer, swings an axe well.",
    url: "https://joeduchnowski.com",
    siteName: "Joe Duchnowski",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Joe Duchnowski",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
