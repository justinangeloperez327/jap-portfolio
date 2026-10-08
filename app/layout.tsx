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
          className="fixed left-4 top-[max(1rem,env(safe-area-inset-top))] z-[90] -translate-y-32 border border-background/20 bg-foreground px-4 py-3 text-sm font-medium text-background shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>

        <SiteHeader />

        <PageTransition>
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
        </PageTransition>

        <SiteFooter />
      </body>
    </html>
  );
}
