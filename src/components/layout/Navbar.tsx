import Link from "next/link";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileMenu, type NavLink } from "@/components/layout/MobileMenu";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-950/10 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vin-red"
          aria-label="Home"
        >
          <span className="grid size-11 place-items-center rounded-full bg-neutral-950 font-serif text-xl italic text-cream transition group-hover:bg-vin-red">
            L
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-neutral-950">{profile.nickname}</span>
            <span className="block text-xs font-medium text-neutral-500">{profile.name}</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-neutral-600 transition hover:bg-white hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vin-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contact" variant="dark" className="min-h-10 px-4 py-2" showArrow={false}>
            Contact
          </ButtonLink>
        </div>
        <MobileMenu links={navLinks} />
      </div>
    </header>
  );
}
