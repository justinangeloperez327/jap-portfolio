import Link from "next/link";

import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <header className="layer-navigation pointer-events-none fixed inset-x-0 top-0">
      <div className="site-container flex h-[var(--header-height)] items-center justify-between">
        <Link
          href="/"
          aria-label="JAP Portfolio home"
          className="pointer-events-auto text-lg font-semibold tracking-[-0.05em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          JAP
        </Link>

        <div className="pointer-events-auto">
          <DesktopNavigation />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
