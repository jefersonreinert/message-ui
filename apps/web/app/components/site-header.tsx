import { Avatar } from "@message-ui/components";
import Link from "next/link";
import { IconBell } from "./icons";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader({
  onHome = false,
  appHeader = false,
}: {
  onHome?: boolean;
  appHeader?: boolean;
}) {
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[#050506]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <MobileNav onHome={onHome} />
          <Link
            href="/"
            className={`items-center gap-2.5 ${appHeader ? "hidden md:flex" : "flex"}`}
          >
            <Logo />
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          <Link href="/dashboard" className="transition hover:text-white">
            Dashboard
          </Link>
          <a href={anchor("examples")} className="transition hover:text-white">
            Examples
          </a>
          <a href={anchor("get-started")} className="transition hover:text-white">
            Get started
          </a>
          <a
            href="https://github.com/pontusab/message-ui"
            className="transition hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </nav>

        {appHeader && (
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Notifications"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              <IconBell className="h-4 w-4" />
            </button>
            <Avatar fallback="Jeferson" size={32} style={{ borderRadius: 9999 }} />
          </div>
        )}
      </div>
    </header>
  );
}
