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
      <div className="site-container flex h-[var(--header-height)] items-center justify-between">
        <Link
          href="/"
          aria-label="JAP Portfolio home"
          className="pointer-events-auto inline-flex text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <BrandMark aria-hidden="true" className="h-6 sm:h-7" />
        </Link>

        <div className="pointer-events-auto">
          <DesktopNavigation />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
