import type { Metadata, Viewport } from "next";

import {
  PageTransition,
  SiteFooter,
  SiteHeader,
} from "@/components/layout";
import { JsonLd } from "@/components/seo";
import { brand } from "@/data";
import { getPublicLinks } from "@/lib/public-links";
import { getAbsoluteUrl, getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const publicLinks = getPublicLinks()
  .map((link) => link.href)
  .filter((href): href is string => Boolean(href))
  .filter((href) => !href.startsWith("mailto:"));

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
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
  keywords: [
    "Justin Angelo Perez",
    "software engineer",
    "framework developer",
    "Rust",
    "C++",
    "Next.js",
    "full-stack development",
    "developer tooling",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: brand.title,
    description: brand.description,
    siteName: brand.name,
    url: "/",
    locale: "en_US",
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
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: brand.author,
      url: getAbsoluteUrl("/"),
      jobTitle: "Software Engineer",
      sameAs: publicLinks,
      knowsAbout: [
        "Software Engineering",
        "Framework Design",
        "Rust",
        "C++",
        "Full-Stack Development",
        "Developer Tooling",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: brand.name,
      url: getAbsoluteUrl("/"),
      description: brand.description,
      author: {
        "@type": "Person",
        name: brand.author,
      },
    },
  ];

  return (
    <html lang="en" className="dark">
      <body>
        <JsonLd data={structuredData} />

        <a
          href="#main-content"
          className="fixed left-4 top-[max(1rem,env(safe-area-inset-top))] z-[90] -translate-y-32 border border-background/20 bg-foreground px-4 py-3 text-sm font-medium text-background shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>

        <SiteHeader />

        <PageTransition>
          <div>{children}</div>
        </PageTransition>

        <SiteFooter />
      </body>
    </html>
  );
}
