import type { Metadata, Viewport } from "next";

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
      <body>{children}</body>
    </html>
  );
}
