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
        <div className="glass-surface pointer-events-auto flex min-h-[3.75rem] items-center justify-between rounded-2xl px-3 sm:px-4">
          <Link
            href="/"
            aria-label="JAP Portfolio home"
            className="inline-flex min-h-11 items-center px-2 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <BrandMark aria-hidden="true" className="h-6 sm:h-7" />
          </Link>

          <div className="flex items-center gap-3">
            <DesktopNavigation />

            <Link
              href="/contact"
              className="hidden min-h-10 items-center gap-3 rounded-xl border border-primary/45 bg-primary/10 px-4 text-sm font-medium text-foreground backdrop-blur-md transition-[background-color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/16 hover:shadow-[0_0_24px_color-mix(in_oklab,var(--primary)_18%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:inline-flex"
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
