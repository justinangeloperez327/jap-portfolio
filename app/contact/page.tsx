import type { Metadata } from "next";

import { ContactPage } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Justin Angelo Perez about software engineering, framework development, full-stack applications, developer tooling, and technical collaboration.",
};

export default function ContactRoute() {
  return (
    <main className="bg-background text-foreground">
      <ContactPage />
    </main>
  );
}
