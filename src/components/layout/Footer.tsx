import Link from "next/link";
import { navLinks } from "@/components/layout/Navbar";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-neutral-950/10 bg-neutral-950 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-20">
        <div>
          <p className="section-label text-cream/60">/ Contact</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s talk research, collaboration, and ideas.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/65">
            Trustworthy AI · Federated Learning · Continual Learning · Domain Generalization
          </p>
          <SocialLinks compact className="mt-8 [&_a]:border-white/10 [&_a]:bg-white/5 [&_a]:text-cream [&_a:hover]:border-vin-red [&_a:hover]:text-white" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-cream/50">Navigation</h3>
            <div className="mt-4 grid gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-semibold text-cream/70 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-cream/50">Affiliations</h3>
            <div className="mt-4 grid gap-2">
              {profile.affiliations.map((affiliation) => (
                <a
                  key={affiliation.name}
                  href={affiliation.href}
                  target="_blank"
                  rel="noreferrer"
                  className="max-w-64 text-sm font-semibold text-cream/70 transition hover:text-white"
                >
                  {affiliation.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-6 text-sm text-cream/55 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <span>© {new Date().getFullYear()} Thinh Nguyen (Lucaz).</span>
      </div>
    </footer>
  );
}
