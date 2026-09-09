"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, ArrowUpRight, CaretRight } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/Logo";
import { nav, primaryCta } from "@/lib/site";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: [0.32, 0.72, 0, 1] as const,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: [0.32, 0.72, 0, 1] as const,
    },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 28,
    },
  },
};

const footerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.18,
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

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

  // Kunci scroll body saat menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Tutup dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="absolute inset-x-0 top-0 z-30 w-full pt-4 sm:pt-6">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Logo tone={onLight ? "color" : "white"} />

        {/* Desktop Navigation */}
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

        {/* Desktop Primary CTA */}
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

        {/* Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className={clsx(
            "-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform active:scale-95 lg:hidden",
            onLight ? "text-ink hover:bg-ink/5" : "text-paper-2 hover:bg-paper-2/10",
          )}
        >
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Clean, Simple & Elegant Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu-overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 z-50 flex flex-col bg-[#0b1322] text-paper-2 lg:hidden overflow-hidden"
          >
            {/* Top Bar inside Menu */}
            <div className="relative z-10 mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 pt-3 sm:px-8">
              <Logo tone="white" size="sm" />

              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white transition-colors cursor-pointer"
              >
                <X size={22} weight="bold" />
              </motion.button>
            </div>

            {/* Clean & Simple Nav List (No Icons, No Descriptions, Pure Typographic Elegance) */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6 sm:px-8 flex flex-col justify-between">
              <motion.nav variants={listVariants} className="flex flex-col">
                {nav.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <motion.div variants={itemVariants} key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between border-b border-white/[0.08] py-4 sm:py-5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {active && (
                            <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                          )}
                          <span
                            className={clsx(
                              "font-display text-xl sm:text-2xl font-medium tracking-tight transition-colors",
                              active
                                ? "text-white font-semibold"
                                : "text-white/80 group-hover:text-white",
                            )}
                          >
                            {item.label}
                          </span>
                        </div>

                        <CaretRight
                          size={18}
                          weight="bold"
                          className={clsx(
                            "transition-transform duration-200",
                            active
                              ? "text-accent translate-x-0.5"
                              : "text-white/25 group-hover:text-white/70 group-hover:translate-x-1",
                          )}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Single Solid Color Button (1 Warna Saja) */}
              <motion.div variants={footerVariants} className="pt-8 pb-4">
                <Link
                  href={primaryCta.href}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-ink shadow-sm hover:bg-white/95 active:scale-[0.99] transition-all"
                >
                  <span>Konsultasi</span>
                  <ArrowUpRight size={17} weight="bold" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
