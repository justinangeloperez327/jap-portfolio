import Link from "next/link";

import { BrandMark } from "@/components/brand";

import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <header
      data-site-header
      className="layer-navigation pointer-events-none fixed inset-x-0 top-0 pt-[env(safe-area-inset-top)]"
    >
      <div className="site-container pt-3">
        <div className="pointer-events-auto flex min-h-[3.75rem] items-center justify-between border-b border-border/70 bg-background/90 px-3 backdrop-blur-lg sm:px-4">
          <Link
            href="/"
            aria-label="JAP Portfolio home"
            className="inline-flex min-h-11 items-center px-2 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <BrandMark aria-hidden="true" className="text-lg" />
          </Link>

          <div className="flex items-center gap-3">
            <DesktopNavigation />

            <Link
              href="/contact"
              className="hidden min-h-10 items-center gap-3 border border-border/80 bg-secondary/50 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:inline-flex"
            >
              Let&apos;s Connect
              <span aria-hidden="true" className="text-primary">
                ↗
              </span>
            </Link>

            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
