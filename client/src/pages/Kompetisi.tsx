// Range Journal reminder: competition information is concise and useful—dates, format, status, and the confidence to take the next shot.

import { ArrowUpRight, CalendarDays, MapPinned } from "lucide-react";
import { siteContent } from "@/content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ActionButton, Eyebrow, PageIntro } from "@/components/Editorial";

export default function Kompetisi() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#111111]">
      <div className="page-topbar"><SiteHeader /></div>
      <main>
        <section className="page-hero page-hero-blue page-hero-competition"><div className="container grid gap-10 py-36 md:grid-cols-[1.1fr_.7fr] md:items-end md:py-44"><PageIntro kicker="Kompetisi / 04" title="Tenang di garis. Tajam di target." description="Competition round adalah tempat latihan mendapat konteks. Tidak harus sempurna—cukup hadir dan membaca bidikanmu sendiri." /><div className="max-w-[285px] justify-self-start text-sm leading-7 text-white/75 md:justify-self-end"><p>Ikuti agenda internal dan turnamen terbuka yang kami pilih untuk menjaga pengalaman tetap sehat.</p></div></div></section>

        <section className="section-space"><div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><Eyebrow index="02">Agenda 2025</Eyebrow><h2 className="jr-display section-heading mt-8 max-w-[330px]">Simpan tanggalnya. Jaga fokusnya.</h2><p className="body-copy mt-5 max-w-[300px]">Kalender bisa berubah mengikuti kondisi lapangan. Hubungi kami untuk detail terbaru sebelum berangkat.</p></div><div className="divide-y divide-black/10 border-y border-black/10">{siteContent.competitions.map((event, index)=><article key={event.title} className="grid gap-5 py-7 sm:grid-cols-[90px_1fr_auto] sm:items-center"><div className="flex items-center gap-3 sm:block"><span className="jr-display text-4xl leading-none">{event.month}</span><span className="font-mono text-[10px] text-black/35">0{index + 1}</span></div><div><h3 className="text-xl font-bold">{event.title}</h3><p className="mt-2 text-sm text-black/55">{event.detail}</p></div><span className={`w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[.08em] ${index === 1 ? "bg-[#C6F24C] text-black" : "border border-black/10 text-black/45"}`}>{event.status}</span></article>)}</div></div></section>

        <section className="bg-[#111111] py-20 text-white md:py-28"><div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><Eyebrow index="03" dark>Competition notes</Eyebrow><h2 className="jr-display mt-8 max-w-[500px] text-5xl leading-[.92] sm:text-7xl">Yang dibawa ke lapangan bukan hanya busur.</h2></div><div className="grid gap-5 sm:grid-cols-2"><div className="border-t border-white/15 pt-5"><CalendarDays size={20} className="text-[#C6F24C]"/><h3 className="mt-10 text-lg font-bold">Datang lebih awal</h3><p className="mt-3 text-sm leading-6 text-white/50">Gunakan waktu untuk warm up, cek alat, dan mengenali suasana.</p></div><div className="border-t border-white/15 pt-5"><MapPinned size={20} className="text-[#C6F24C]"/><h3 className="mt-10 text-lg font-bold">Kenali jarak</h3><p className="mt-3 text-sm leading-6 text-white/50">Baca target, arah angin, dan ritme range sebelum scoring dimulai.</p></div></div></div></section>

        <section className="section-space bg-[#C6F24C]"><div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><Eyebrow index="04"/><h2 className="jr-display mt-7 max-w-[560px] text-5xl leading-[.92] sm:text-7xl">Mau ikut round berikutnya?</h2></div><ActionButton variant="dark">Tanya agenda</ActionButton></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
