// Range Journal reminder: coach profiles should feel like credible field notes—specific role, specialty, and a human image crop.

import { ArrowUpRight, Crosshair, HeartHandshake, Ruler } from "lucide-react";
import { siteContent } from "@/content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ActionButton, Eyebrow, ImageCredit, PageIntro } from "@/components/Editorial";

export default function Pelatih() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#111111]">
      <div className="page-topbar"><SiteHeader /></div>
      <main>
        <section className="page-hero page-hero-dark"><div className="container grid gap-10 py-36 md:grid-cols-[1fr_.7fr] md:items-end md:py-44"><PageIntro kicker="Pelatih / 03" title="Tenang saat memberi arah." description="Pelatih kami hadir untuk melihat detail yang sering terlewat dan membuat proses terasa lebih ringan." dark /><div className="max-w-[285px] justify-self-start text-sm leading-7 text-white/60 md:justify-self-end"><p>Keahlian boleh berbeda. Cara mendampingi tetap sama: jelas, sabar, dan hadir.</p></div></div><div className="page-hero-line" /></section>

        <section className="section-space"><div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><Eyebrow index="02">Orang di balik progres</Eyebrow><h2 className="jr-display section-heading mt-8 max-w-[320px]">Koreksi kecil. Kepercayaan besar.</h2><p className="body-copy mt-5 max-w-[300px]">Kami membangun suasana latihan yang membuat kamu berani bertanya, mencoba lagi, dan tahu kapan harus menarik napas.</p></div><div className="grid gap-x-5 gap-y-10 sm:grid-cols-2">{siteContent.coaches.map((coach, index) => <article key={coach.name} className="coach-card"><div className="coach-portrait"><img src={index === 0 ? siteContent.assets.coach : index === 1 ? siteContent.assets.community : siteContent.assets.detail} alt={`Pelatih ${coach.name}`} /><ImageCredit>0{index + 1} / coach file</ImageCredit>{coach.badge && <span className="coach-badge">{coach.badge}</span>}</div><div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="text-base font-bold">{coach.name}</h3><p className="mt-1 text-xs text-black/50">{coach.role}</p><p className="mt-3 text-[11px] font-bold uppercase tracking-[.1em] text-black/35">{coach.note}</p></div><ArrowUpRight size={17} className="mt-1 text-black/35" /></div></article>)}</div></div></section>

        <section className="bg-white py-20 md:py-28"><div className="container"><Eyebrow index="03">Prinsip pendampingan</Eyebrow><div className="mt-12 grid gap-8 md:grid-cols-3">{[{icon:Crosshair,title:"Lihat detail",body:"Bukan hanya skor akhir. Kami membaca posisi kaki, anchor, napas, dan ritme pelepasan."},{icon:HeartHandshake,title:"Jaga suasana",body:"Range yang aman membuat pemanah lebih berani mencoba hal baru dan bertumbuh bersama."},{icon:Ruler,title:"Ukur progres",body:"Setiap sesi ditutup dengan catatan sederhana agar perubahan tidak terasa samar."}].map((item)=><div key={item.title} className="border-t border-black/10 pt-5"><item.icon size={22} strokeWidth={1.5}/><h3 className="mt-12 text-xl font-bold">{item.title}</h3><p className="mt-3 max-w-[270px] text-sm leading-7 text-black/55">{item.body}</p></div>)}</div></div></section>

        <section className="section-space bg-[#C6F24C]"><div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><Eyebrow index="04"/><h2 className="jr-display mt-7 max-w-[550px] text-5xl leading-[.92] sm:text-7xl">Bawa pertanyaanmu ke range.</h2></div><ActionButton variant="dark">Kenalan dengan coach</ActionButton></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
