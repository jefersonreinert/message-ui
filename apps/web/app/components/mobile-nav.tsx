"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  IconBook,
  IconChat,
  IconChevronDown,
  IconGithub,
  IconGrid,
  IconMenu,
  IconRocket,
  IconX,
} from "./icons";
import { Logo } from "./logo";

export function MobileNav({ onHome = false }: { onHome?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const onDashboard = pathname?.startsWith("/dashboard") ?? false;
  const onLive = pathname === "/dashboard/live";

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center text-zinc-400 transition hover:text-white md:hidden"
      >
        <IconMenu />
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[60] md:hidden">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <div className="relative flex h-full w-[280px] flex-col border-r border-white/8 bg-[#050506] px-4 py-5">
              <div className="flex items-center justify-between px-1">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
                  <Logo />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-8 w-8 items-center justify-center text-zinc-500 transition hover:text-white"
                >
                  <IconX />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-1.5 text-[15px]">
                <div
                  className={`border px-2.5 py-2 transition ${
                    onDashboard ? "border-white/10 bg-white/5" : "border-transparent"
                  }`}
                >
                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 ${
                      onDashboard && !onLive
                        ? "font-medium text-white"
                        : "text-zinc-300 transition hover:text-white"
                    }`}
                  >
                    <IconGrid className="shrink-0" />
                    <span className="flex-1">Dashboard</span>
                    <IconChevronDown className={onDashboard ? "rotate-180" : ""} />
                  </Link>

                  {onDashboard && (
                    <div className="mt-1.5 ml-[9px] flex flex-col gap-1 border-l border-white/10 pl-4">
                      <Link
                        href="/dashboard/live"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2.5 py-1.5 text-sm ${
                          onLive
                            ? "font-medium text-white"
                            : "text-zinc-400 transition hover:text-white"
                        }`}
                      >
                        <IconChat className="h-4 w-4 shrink-0" />
                        Live conversation
                      </Link>
                    </div>
                  )}
                </div>

                <a
                  href={anchor("examples")}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-2.5 py-2 text-zinc-300 transition hover:text-white"
                >
                  <IconBook className="shrink-0" />
                  Examples
                </a>

                <a
                  href={anchor("get-started")}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-2.5 py-2 text-zinc-300 transition hover:text-white"
                >
                  <IconRocket className="shrink-0" />
                  Get started
                </a>

                <a
                  href="https://github.com/pontusab/message-ui"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center gap-3 px-2.5 py-2 text-zinc-300 transition hover:text-white"
                >
                  <IconGithub className="shrink-0" />
                  GitHub
                </a>
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
