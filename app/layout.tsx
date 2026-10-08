import type { Metadata, Viewport } from "next";

import {
  PageTransition,
  SiteFooter,
  SiteHeader,
} from "@/components/layout";

import "./globals.css";

export const metadata: Metadata = {
  title: "JAP Portfolio",
  description: "Personal portfolio of Justin Angelo Perez.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070a12",
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
