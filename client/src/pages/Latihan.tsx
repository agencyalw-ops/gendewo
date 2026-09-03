// Range Journal reminder: training content is practical and grounded—show cadence, method, and clear next steps with editorial spacing.

import { ArrowDownRight, Check, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { siteContent } from "@/content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ActionButton, Eyebrow, PageIntro } from "@/components/Editorial";

const schedule = [
  { day: "Senin", time: "16.30—18.00", focus: "Teknik & scoring", level: "Menengah" },
  { day: "Selasa", time: "16.00—17.30", focus: "Steady Draw", level: "Pemula" },
  { day: "Rabu", time: "16.30—18.00", focus: "Match Ready", level: "Atlet" },
  { day: "Kamis", time: "16.00—17.30", focus: "Steady Draw", level: "Pemula" },
  { day: "Sabtu", time: "08.00—10.00", focus: "Start Line", level: "Junior" },
];

export default function Latihan() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#111111]">
      <div className="page-topbar"><SiteHeader /></div>
      <main>
        <section className="page-hero page-hero-blue">
          <div className="container relative z-10 grid gap-10 py-36 md:grid-cols-[1.1fr_.7fr] md:items-end md:py-44">
            <PageIntro kicker="Latihan / 01" title="Ritme yang membuatmu konsisten." description="Latihan bukan tentang memaksa lebih keras. Ini tentang mengulang hal yang benar sampai tubuh mengenalinya." />
            <div className="max-w-[285px] justify-self-start text-sm leading-7 text-white/75 md:justify-self-end"><p>Range Gendewo dibuka untuk sesi rutin, private coaching, dan community round.</p><a href="#jadwal" className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.1em] text-white">Lihat jadwal <ArrowDownRight size={15} /></a></div>
          </div>
          <div className="page-hero-grain" />
        </section>

        <section id="jadwal" className="section-space">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.4fr]">
              <div><Eyebrow index="02">Jadwal minggu ini</Eyebrow><h2 className="jr-display section-heading mt-8 max-w-[320px]">Pilih waktu. Jaga jarak.</h2><p className="body-copy mt-5 max-w-[280px]">Datang 15 menit lebih awal untuk safety check dan persiapan perlengkapan.</p></div>
              <div className="divide-y divide-black/10 border-y border-black/10">
                {schedule.map((item, index) => <div key={item.day} className="group grid gap-3 py-5 transition-transform duration-200 hover:translate-x-2 sm:grid-cols-[.45fr_.7fr_1fr_.6fr] sm:items-center"><span className="font-mono text-[11px] text-black/35">0{index + 1}</span><strong className="text-sm">{item.day}</strong><span className="text-sm text-black/60">{item.time} <span className="mx-2 text-black/20">·</span> {item.focus}</span><span className="w-fit rounded-full border border-black/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[.08em] text-black/45">{item.level}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111111] py-20 text-white md:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
              <div><Eyebrow index="03" dark>Format latihan</Eyebrow><h2 className="jr-display mt-8 max-w-[360px] text-5xl leading-[.92] sm:text-6xl">Tiga babak. Satu arah.</h2></div>
              <div className="grid gap-7 sm:grid-cols-3">
                {[{ n: "01", t: "Set up", d: "Safety, pemanasan, dan target hari ini." }, { n: "02", t: "Draw", d: "Drill teknik, repetisi, dan koreksi kecil." }, { n: "03", t: "Release", d: "Scoring, refleksi, dan catatan progres." }].map((item) => <div key={item.n} className="border-t border-white/15 pt-5"><span className="font-mono text-[11px] text-[#C6F24C]">{item.n}</span><h3 className="mt-12 text-xl font-semibold">{item.t}</h3><p className="mt-3 text-sm leading-6 text-white/50">{item.d}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="container grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div><Eyebrow index="04">Yang perlu kamu bawa</Eyebrow><h2 className="jr-display section-heading mt-8 max-w-[450px]">Datang dengan rasa ingin tahu. Kami siapkan sisanya.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><div className="info-row"><ShieldCheck size={19} /><span>Safety briefing & perlengkapan dasar tersedia</span></div><div className="info-row"><Clock3 size={19} /><span>Durasi sesi 90—120 menit</span></div><div className="info-row"><MapPin size={19} /><span>Outdoor range, Wonosobo</span></div></div>
          </div>
          <div className="container mt-10"><ActionButton>{siteContent.ctas.booking}</ActionButton></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
