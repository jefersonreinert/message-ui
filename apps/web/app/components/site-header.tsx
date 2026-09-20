import Link from "next/link";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader({ onHome = false }: { onHome?: boolean }) {
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[#050506]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <MobileNav onHome={onHome} />
          <Link href="/" className="flex items-center gap-2.5">
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
      </div>
    </header>
  );
}
