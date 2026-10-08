"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteNav } from "@/data";
import { isActiveRoute } from "@/lib/routes";
import { cn } from "@/lib/utils";

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const closeAndReturnFocus = useCallback(() => {
    setOpen(false);

    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;

    const getFocusableElements = () =>
      dialog
        ? Array.from(
            dialog.querySelectorAll<HTMLElement>(
              focusableSelector,
            ),
          ).filter(
            (element) =>
              !element.hasAttribute("disabled") &&
              element.getAttribute("aria-hidden") !== "true",
          )
        : [];

    requestAnimationFrame(() => {
      getFocusableElements()[0]?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAndReturnFocus();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusableElements[0];
      const last =
        focusableElements[focusableElements.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, closeAndReturnFocus]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
        tabIndex={open ? -1 : 0}
        className={cn(
          "relative z-[70] grid size-12 place-items-center border border-border bg-background/60",
          "backdrop-blur-md transition-colors hover:bg-surface-raised",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          open && "invisible pointer-events-none",
        )}
      >
        <span className="sr-only">Open menu</span>
        <span aria-hidden="true" className="relative block h-4 w-5">
          <span className="absolute left-0 top-1 h-px w-5 bg-current" />
          <span className="absolute bottom-1 left-0 h-px w-5 bg-current" />
        </span>
      </button>

      <div
        ref={dialogRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "fixed inset-0 z-[65] overflow-y-auto bg-background/96 backdrop-blur-xl transition-[opacity,visibility] duration-200",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="site-container flex min-h-[var(--header-height)] items-center justify-end pt-[env(safe-area-inset-top)]">
          <button
            type="button"
            aria-label="Close navigation menu"
            tabIndex={open ? 0 : -1}
            onClick={closeAndReturnFocus}
            className="grid size-12 place-items-center border border-border bg-background/60 backdrop-blur-md transition-colors hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="sr-only">Close menu</span>
            <span
              aria-hidden="true"
              className="relative block h-4 w-5"
            >
              <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="site-container flex min-h-[calc(100svh-var(--header-height)-env(safe-area-inset-top))] items-start pb-[max(2rem,env(safe-area-inset-bottom))] pt-8 sm:items-center sm:py-16"
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
                    onClick={() => setOpen(false)}
                    className="group flex min-h-16 items-center justify-between gap-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-h-20 sm:py-6"
                  >
                    <span
                      className={cn(
                        "text-[clamp(2rem,10vw,3.5rem)] font-medium leading-none tracking-[-0.04em] transition-colors sm:text-display",
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
                        "shrink-0 font-mono text-xs tracking-[0.18em]",
                        active
                          ? "text-primary"
                          : "text-muted-foreground/50",
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
