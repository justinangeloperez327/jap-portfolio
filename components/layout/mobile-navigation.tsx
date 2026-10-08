"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteNav } from "@/data";
import { cn } from "@/lib/utils";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "relative z-[70] grid size-11 place-items-center border border-border bg-background/60",
          "backdrop-blur-md transition-colors hover:bg-surface-raised",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="relative block h-4 w-5">
          <span
            className={cn(
              "absolute left-0 top-1 h-px w-5 bg-current transition-transform duration-200",
              open && "translate-y-1 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute bottom-1 left-0 h-px w-5 bg-current transition-transform duration-200",
              open && "-translate-y-1 -rotate-45",
            )}
          />
        </span>
      </button>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-[65] bg-background/96 backdrop-blur-xl transition-[opacity,visibility] duration-200",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav
          aria-label="Mobile navigation"
          className="site-container flex min-h-svh items-center py-28"
        >
          <ul className="w-full">
            {siteNav.map((item, index) => {
              const active = isActiveRoute(pathname, item.href);

              return (
                <li key={item.href} className="border-b border-border">
                  <Link
                    href={item.href}
                    tabIndex={open ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className="group flex items-center justify-between py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span
                      className={cn(
                        "text-display font-medium transition-colors",
                        active
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "font-mono text-xs tracking-[0.18em]",
                        active ? "text-primary" : "text-muted-foreground/50",
                      )}
                    >
                      {String(index).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
