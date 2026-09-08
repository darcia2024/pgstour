"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Logo } from "@/components/Logo";
import { nav, primaryCta } from "@/lib/site";

/*
  Non-sticky nav that overlays the dark hero at the top of every page.
  White on dark. Sticky was dropped so the rounded card can safely clip
  its content; the floating WhatsApp button is the persistent CTA.
*/
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo tone="light" compact />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm transition-colors",
                isActive(item.href)
                  ? "text-paper-2"
                  : "text-paper-2/65 hover:text-paper-2",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={primaryCta.href}
          className="hidden items-center gap-1.5 rounded-full bg-paper-2 px-4 py-2 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-px lg:inline-flex"
        >
          {primaryCta.label}
          <ArrowUpRight size={15} weight="bold" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-paper-2 lg:hidden"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 bg-ink-2 lg:hidden">
          <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
            <Logo tone="light" compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-paper-2"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 pt-6 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-paper-2/10 py-4 text-2xl font-medium text-paper-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={primaryCta.href}
              className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-paper-2 px-5 py-3.5 text-base font-medium text-ink"
            >
              {primaryCta.label}
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
