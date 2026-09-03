// Range Journal reminder: program cards must read like a field guide—clear audience, clear outcome, and no inflated claims.

import { ArrowUpRight, Check } from "lucide-react";
import { siteContent } from "@/content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ActionButton, Eyebrow, PageIntro } from "@/components/Editorial";

export default function Program() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#111111]">
      <div className="page-topbar"><SiteHeader /></div>
      <main>
        <section className="page-hero page-hero-lime">
          <div className="container grid gap-10 py-36 md:grid-cols-[1.15fr_.7fr] md:items-end md:py-44">
            <PageIntro kicker="Program / 02" title="Pilih jalur yang terasa tepat." description="Setiap program punya jarak, ritme, dan ukuran progresnya sendiri. Mulai dari yang paling dekat dengan kebutuhanmu." />
            <div className="max-w-[285px] justify-self-start text-sm leading-7 text-black/65 md:justify-self-end"><p>Belum yakin mulai dari mana? Ceritakan targetmu, kami bantu menemukan lane yang pas.</p><div className="mt-5"><ActionButton variant="dark">Tanya program</ActionButton></div></div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="grid gap-5 md:grid-cols-2">
              {siteContent.programs.map((program, index) => <article key={program.number} className={`program-card ${index === 2 ? "program-card-dark" : ""}`}><div className="flex items-start justify-between"><span className="font-mono text-[11px] text-[#C6F24C]">{program.number}</span><ArrowUpRight size={18} className="opacity-45 transition-transform duration-200 group-hover:rotate-45" /></div><div className="mt-20"><p className="mb-3 text-[10px] font-bold uppercase tracking-[.11em] opacity-50">{program.audience}</p><h2 className="jr-display text-4xl leading-none">{program.name}</h2><p className="mt-4 max-w-[360px] text-sm leading-7 opacity-65">{program.description}</p><div className="mt-7 border-t border-current/15 pt-4 text-[11px] font-bold uppercase tracking-[.09em] opacity-55">{program.schedule}</div></div></article>)}
            </div>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="container grid gap-12 lg:grid-cols-[.75fr_1.2fr] lg:items-start lg:gap-24"><div><Eyebrow index="03">Rangka progres</Eyebrow><h2 className="jr-display section-heading mt-8 max-w-[360px]">Perubahan kecil, dibaca jelas.</h2></div><div className="grid gap-8 sm:grid-cols-3">{[{n:"01", t:"Pahami", d:"Kenali posisi, napas, dan perlengkapanmu."},{n:"02", t:"Ulangi", d:"Bangun konsistensi lewat repetisi yang sadar."},{n:"03", t:"Uji", d:"Bawa progres ke scoring dan competition round."}].map((item)=><div key={item.n} className="border-t border-black/10 pt-5"><span className="font-mono text-[11px] text-black/35">{item.n}</span><h3 className="mt-14 text-xl font-semibold">{item.t}</h3><p className="mt-3 text-sm leading-6 text-black/55">{item.d}</p></div>)}</div></div>
        </section>

        <section className="section-space bg-[#C6F24C]"><div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><Eyebrow index="04" /><h2 className="jr-display mt-7 max-w-[620px] text-5xl leading-[.92] sm:text-7xl">Punya target yang ingin dituju?</h2></div><ActionButton variant="dark">{siteContent.ctas.membership}</ActionButton></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
