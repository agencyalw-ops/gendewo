// Range Journal reminder: the header is a field instrument—compact, directional, and high-contrast with the lime mark as the only action color.

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { siteContent } from "@/content";
import { ActionButton, BrandMark } from "@/components/Editorial";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <header className={`absolute inset-x-0 top-0 z-50 transition-colors duration-200 ${isHome ? "text-white" : "text-[#111111]"}`}>
      <div className="container flex h-[88px] items-center justify-between">
        <Link href="/" className="group relative z-10 flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <BrandMark className="h-[30px] w-[30px] rounded-[8px] text-base transition-transform duration-200 group-hover:rotate-[-6deg]" />
          <span className="text-[14px] font-bold tracking-[0.06em]">{siteContent.brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-[30px] lg:flex" aria-label="Navigasi utama">
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[13.5px] font-medium transition-colors duration-200 ${location === item.href ? "text-current" : isHome ? "text-white/90 hover:text-white" : "text-[#111111]/65 hover:text-[#111111]"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ActionButton variant={isHome ? "white" : "dark"} href={siteContent.externalUrl}>{siteContent.ctas.booking}</ActionButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden ${isHome ? "border-white/20 bg-white/10 text-white" : "border-black/10 bg-black/5 text-[#111111]"}`}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={`fixed inset-0 z-0 bg-[#101010] px-6 pb-10 pt-28 transition-all duration-300 lg:hidden ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}>
        <div className="flex h-full flex-col justify-between">
          <nav className="flex flex-col gap-5" aria-label="Navigasi seluler">
            {siteContent.nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 text-white"
              >
                <span className="font-mono text-[11px] text-[#C6F24C]">0{index + 1}</span>
                <span className="jr-display text-4xl tracking-tight">{item.label}</span>
              </Link>
            ))}
          </nav>
          <a
            href={siteContent.externalUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-fit items-center gap-3 rounded-full bg-[#C6F24C] px-5 py-3 text-sm font-bold uppercase tracking-[0.04em] text-[#111111]"
          >
            {siteContent.ctas.booking}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}
