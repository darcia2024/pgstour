"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { nav, primaryCta } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-8px 0px 0px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <div ref={sentinelRef} aria-hidden className="h-px w-full" />
    <header
      className={clsx(
        "sticky top-0 z-50 bg-paper/95 backdrop-blur-md transition-shadow duration-300",
        scrolled || open
          ? "border-b border-line shadow-[0_1px_20px_-8px_rgba(27,42,37,0.25)]"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo compact />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-3.5 py-2 text-sm transition-colors",
                isActive(item.href)
                  ? "text-brand"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={primaryCta.href} size="md">
            {primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-xl px-4 py-3 text-[15px]",
                  isActive(item.href)
                    ? "bg-sand text-brand"
                    : "text-ink-soft hover:bg-sand/60",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href={primaryCta.href} size="lg" className="mt-3 w-full">
              {primaryCta.label}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
    </>
  );
}
