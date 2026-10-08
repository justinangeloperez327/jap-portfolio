import type { Metadata } from "next";

import { ContactPage } from "@/components/sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Justin Angelo Perez about software engineering, framework development, full-stack applications, developer tooling, and technical collaboration.",
  path: "/contact",
  keywords: [
    "contact Justin Angelo Perez",
    "software engineering",
    "technical collaboration",
  ],
});

export default function ContactRoute() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="bg-background text-foreground outline-none"
    >
      <ContactPage />
    </main>
  );
}
