// Range Journal reminder: membership should feel like an open invitation into a real community, with concrete access details instead of generic promises.

import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { siteContent } from "@/content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ActionButton, Eyebrow, PageIntro } from "@/components/Editorial";

export default function Membership() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#111111]">
      <div className="page-topbar"><SiteHeader /></div>
      <main>
        <section className="page-hero page-hero-lime"><div className="container grid gap-10 py-36 md:grid-cols-[1.1fr_.7fr] md:items-end md:py-44"><PageIntro kicker="Keanggotaan / 05" title="Satu komunitas, banyak jarak untuk tumbuh." description={siteContent.membership.description} /><div className="max-w-[285px] justify-self-start text-sm leading-7 text-black/65 md:justify-self-end"><p>Keanggotaan terbuka untuk pemanah baru, keluarga, dan atlet yang ingin menjaga ritme.</p><div className="mt-5"><ActionButton variant="dark">{siteContent.ctas.membership}</ActionButton></div></div></div></section>

        <section className="section-space"><div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><Eyebrow index="02">Yang kamu dapat</Eyebrow><h2 className="jr-display section-heading mt-8 max-w-[360px]">Kamu tidak latihan sendirian.</h2></div><div className="grid gap-3">{siteContent.membership.benefits.map((benefit, index)=><div key={benefit} className="flex items-center justify-between border-t border-black/10 py-5"><div className="flex items-center gap-4"><span className="font-mono text-[11px] text-black/35">0{index+1}</span><span className="text-base font-semibold">{benefit}</span></div><Check size={18} className="text-[#7FA900]" /></div>)}</div></div></section>

        <section className="bg-white py-20 md:py-28"><div className="container grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><Eyebrow index="03">Untuk siapa</Eyebrow><h2 className="jr-display mt-8 max-w-[560px] text-5xl leading-[.92] sm:text-7xl">Untuk yang mau hadir, bukan hanya mencoba.</h2></div><div className="rounded-[24px] bg-[#111111] p-7 text-white sm:p-9"><Sparkles size={22} className="text-[#C6F24C]"/><p className="mt-12 text-xl font-semibold leading-8">Pemula yang ingin dibimbing. Pemanah yang ingin konsisten. Keluarga yang ingin punya aktivitas bersama.</p><div className="mt-8 border-t border-white/15 pt-4 text-[11px] font-bold uppercase tracking-[.09em] text-white/45">Tidak perlu pengalaman sebelumnya</div></div></div></section>

        <section className="section-space bg-[#C6F24C]"><div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><Eyebrow index="04"/><h2 className="jr-display mt-7 max-w-[560px] text-5xl leading-[.92] sm:text-7xl">Siapkan langkah pertama.</h2></div><ActionButton variant="dark">Tanya keanggotaan</ActionButton></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
