// Range Journal reminder: close with useful field notes—location, route links, and one clear outward action rather than decorative filler.

import { Link } from "wouter";
import { siteContent } from "@/content";
import { BrandMark } from "@/components/Editorial";

export default function SiteFooter() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:gap-8">
          <div>
            <Link href="/" className="flex w-fit items-center gap-3">
              <BrandMark />
              <span className="text-[13px] font-bold uppercase tracking-[0.1em]">{siteContent.brand.name}</span>
            </Link>
            <p className="mt-5 max-w-[280px] text-sm leading-7 text-white/50">{siteContent.footer.description}</p>
          </div>

          <div>
            <p className="eyebrow mb-5 !text-white/40"><span className="eyebrow-dot !border-white/30" />Navigasi</p>
            <nav className="flex flex-col gap-3" aria-label="Navigasi footer">
              {siteContent.footer.links.map((item) => <Link key={item.href} href={item.href} className="w-fit text-sm text-white/65 transition-colors hover:text-[#C6F24C]">{item.label}</Link>)}
            </nav>
          </div>

          <div>
            <p className="eyebrow mb-5 !text-white/40"><span className="eyebrow-dot !border-white/30" />Komunitas</p>
            <nav className="flex flex-col gap-3" aria-label="Navigasi komunitas">
              {siteContent.footer.community.map((item) => <Link key={item.href} href={item.href} className="w-fit text-sm text-white/65 transition-colors hover:text-[#C6F24C]">{item.label}</Link>)}
            </nav>
          </div>

          <div>
            <p className="eyebrow mb-5 !text-white/40"><span className="eyebrow-dot !border-white/30" />Kontak</p>
            <div className="space-y-3 text-sm leading-6 text-white/65">
              <a href={`mailto:${siteContent.footer.contact.email}`} className="block w-fit transition-colors hover:text-[#C6F24C]">{siteContent.footer.contact.email}</a>
              <a href={`tel:${siteContent.footer.contact.phone.replace(/[^+\d]/g, "")}`} className="block w-fit transition-colors hover:text-[#C6F24C]">{siteContent.footer.contact.phone}</a>
              <p>{siteContent.footer.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-[11px] uppercase tracking-[0.08em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Gendewo Archery Wonosobo</span>
          <span>Wonosobo · Jawa Tengah</span>
        </div>
      </div>
    </footer>
  );
}
