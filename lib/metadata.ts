import type { Metadata } from "next";

import { brand } from "@/data";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords: [...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      siteName: brand.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
