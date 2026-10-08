import Link from "next/link";

import { BrandMark } from "@/components/brand";
import { brand, siteNav } from "@/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="site-container grid gap-10 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link
            href="/"
            aria-label="JAP Portfolio home"
            className="inline-flex text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <BrandMark aria-hidden="true" className="h-7" />
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            {brand.description}
          </p>
        </div>

        <div className="md:text-right">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              {siteNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-4 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} {brand.author}.
          </p>
        </div>
      </div>
    </footer>
  );
}
