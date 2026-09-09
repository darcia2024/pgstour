"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Logo } from "@/components/Logo";
import { nav, primaryCta } from "@/lib/site";

/*
  Non-sticky nav overlaying the first section of every page.
  - Home ("/") opens on a bright sky hero -> dark text, colour logo.
  - Every other page opens on a dark hero -> white text, knockout logo.
*/
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onLight = pathname === "/";

  // Tutup menu mobile setiap kali rute berubah.
  // eslint-disable-next-line react-hooks/set-state-in-effect
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
    <header className="absolute inset-x-0 top-0 z-30 w-full pt-4 sm:pt-6">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Logo tone={onLight ? "color" : "white"} />

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all duration-150",
                onLight
                  ? isActive(item.href)
                    ? "bg-ink/10 text-ink"
                    : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                  : isActive(item.href)
                    ? "bg-paper-2/20 text-paper-2 shadow-xs"
                    : "text-paper-2/75 hover:bg-paper-2/10 hover:text-paper-2",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={primaryCta.href}
          className={clsx(
            "hidden items-center gap-1.5 rounded-full px-4.5 py-2 text-xs font-semibold transition-transform duration-200 hover:-translate-y-px hover:shadow-sm lg:inline-flex",
            onLight ? "bg-ink text-paper-2" : "bg-paper-2 text-ink",
          )}
        >
          {primaryCta.label}
          <ArrowUpRight size={14} weight="bold" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className={clsx(
            "-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            onLight ? "text-ink" : "text-paper-2",
          )}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 bg-ink-2 lg:hidden">
          <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 pt-3 sm:px-8">
            <Logo size="sm" />
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
