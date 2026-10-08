import type { Metadata, Viewport } from "next";

import {
  PageTransition,
  SiteFooter,
  SiteHeader,
} from "@/components/layout";
import { brand } from "@/data";

import "./globals.css";

export const metadata: Metadata = {
  applicationName: brand.name,
  title: {
    default: `${brand.title} | ${brand.shortName}`,
    template: `%s | ${brand.shortName}`,
  },
  description: brand.description,
  authors: [{ name: brand.author }],
  creator: brand.author,
  publisher: brand.author,
  category: "technology",
  openGraph: {
    type: "website",
    title: brand.title,
    description: brand.description,
    siteName: brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: brand.title,
    description: brand.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: brand.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[80] -translate-y-24 bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>

        <SiteHeader />

        <PageTransition>
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
        </PageTransition>

        <SiteFooter />
      </body>
    </html>
  );
}
