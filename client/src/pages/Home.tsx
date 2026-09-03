// Range Journal reminder: the home page must feel like a field journal—large sky, decisive type, documentary image crops, and proof before promotion.

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { siteContent } from "@/content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ActionButton, CircleButton, Eyebrow, ImageCredit } from "@/components/Editorial";

const coachPhotos = [siteContent.assets.coach, siteContent.assets.community, siteContent.assets.action, siteContent.assets.advanced];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F7F2] text-[#111111]">
      <section className="hero-section">
        <SiteHeader />
        <div className="hero-cloud hero-cloud-one" />
        <div className="hero-cloud hero-cloud-two" />
        <div className="container relative z-1">
          <p className="hero-kicker">{siteContent.brand.descriptor} · {siteContent.brand.location}</p>
          <h1 className="jr-display hero-title">{siteContent.home.hero.title}</h1>
          <div className="hero-figure-wrap">
            <p className="hero-float hero-float-left hidden sm:block">{siteContent.home.hero.notes.left[0]}</p>
            <p className="hero-float hero-float-left-lower hidden lg:block">{siteContent.home.hero.notes.left[1]}</p>
            <div className="hero-figure">
              <img src={siteContent.assets.hero} alt="Pemanah Gendewo sedang membidik sasaran" />
              <div className="hero-figure-shine" />
              <ImageCredit>{siteContent.brand.location}</ImageCredit>
            </div>
            <p className="hero-float hero-float-right hidden sm:block">{siteContent.home.hero.notes.right[0]}</p>
            <p className="hero-float hero-float-right-lower hidden lg:block">{siteContent.home.hero.notes.right[1]}</p>
          </div>
        </div>

        <div className="container relative z-10 mt-auto">
          <div className="flex flex-col items-start justify-between gap-6 pb-10 pt-8 sm:flex-row sm:items-end sm:pb-14">
            <div className="flex flex-col items-start gap-4">
              <div className="max-w-[260px] rounded-[14px] bg-[#0A1E37]/45 px-[22px] py-[18px] text-white backdrop-blur-md">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/75">{siteContent.home.hero.caption.tag}</p>
                <p className="text-[16px] font-semibold leading-[1.35]">{siteContent.home.hero.caption.text}</p>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="flex items-center gap-2.5">
                  <button aria-label="Slide sebelumnya" className="circle-button circle-button-dark"><ChevronLeft size={16} /></button>
                  <button aria-label="Slide berikutnya" className="circle-button circle-button-dark"><ChevronRight size={16} /></button>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">01 / 03</span>
              </div>
            </div>
            <p className="hero-note hidden sm:block">{siteContent.home.hero.notes.right[2]}</p>
          </div>
        </div>
      </section>

      <main>
        <section id="tentang" className="section-space bg-[#F7F7F2]">
          <div className="container">
            <Eyebrow index="A">{siteContent.home.intro.label}</Eyebrow>
            <div className="mt-9 grid gap-9 lg:grid-cols-[.9fr_1.4fr] lg:gap-16">
              <h2 className="jr-display section-heading max-w-[380px]">{siteContent.home.intro.title}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {siteContent.home.intro.paragraphs.map((paragraph, index) => <p key={paragraph} className={`body-copy ${index === 2 ? "sm:col-span-2" : ""}`}>{paragraph}</p>)}
                <div className="sm:col-span-2"><ActionButton href={siteContent.externalUrl}>{siteContent.ctas.booking}</ActionButton></div>
              </div>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-[1.45fr_.7fr]">
              <div className="media-card media-card-large">
                <img src={siteContent.assets.community} alt="Sesi latihan bersama di range Gendewo" />
                <ImageCredit>01 / 03 · Saturday range</ImageCredit>
                <div className="media-card-overlay" />
                <div className="media-stats">
                  {siteContent.home.proof.map((item) => <div className="stat-chip" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
                </div>
                <CircleButton label="Mulai bersama Gendewo" />
              </div>
              <div className="flex flex-col gap-5">
                <div className="media-card gallery-secondary">
                  <img src={siteContent.assets.action} alt="Pemanah Gendewo membidik dari balik bahu" />
                </div>
                <div className="years-block flex-1">
                  <p className="jr-display num">{siteContent.home.years.number}</p>
                  <p className="lbl">{siteContent.home.years.label}</p>
                  <ul>
                    {siteContent.home.years.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="latihan-preview" className="section-space bg-white">
          <div className="container">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <Eyebrow index="B">{siteContent.home.practice.label}</Eyebrow>
                <h2 className="jr-display section-heading mt-8 max-w-[520px]">{siteContent.home.practice.title}</h2>
              </div>
              <div className="max-w-[310px] pb-1">
                <p className="body-copy mb-5">{siteContent.home.practice.description}</p>
                <Link href="/latihan" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[#111111] transition-colors hover:text-[#668A00]">{siteContent.ctas.schedule}<ArrowUpRight size={15} /></Link>
              </div>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {siteContent.home.practice.cards.map((card) => (
                <div key={card.title}>
                  <div className="media-card training-thumb">
                    <img src={siteContent.assets[card.assetKey]} alt={card.title} />
                    {"credit" in card && <ImageCredit>{card.credit}</ImageCredit>}
                  </div>
                  <p className="mt-3.5 text-[15px] font-bold">{card.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111111] py-[90px] text-white">
          <div className="container">
            <Eyebrow index="C" dark>Program</Eyebrow>
            <div className="mt-8 flex flex-col items-start justify-between gap-7 md:flex-row md:items-end">
              <h2 className="jr-display section-heading max-w-[560px]">Program latihan untuk semua level.</h2>
              <Link href="/program" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:text-[#C6F24C]">{siteContent.ctas.programs}<ArrowUpRight size={15} /></Link>
            </div>
            <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.programs.map((program) => (
                <div key={program.number} className="prog-tile">
                  <p className="prog-tile-num">{program.number}</p>
                  <h3 className="text-lg font-bold">{program.name}</h3>
                  <p className="prog-tile-muted mb-4 mt-2.5">{program.description}</p>
                  <p className="prog-tile-price">{program.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-[#F7F7F2]">
          <div className="container">
            <Eyebrow index="D">Pelatih</Eyebrow>
            <div className="mt-8 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <h2 className="jr-display section-heading max-w-[520px]">Kenalan dengan pelatih kami.</h2>
              <Link href="/pelatih" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[#111111] transition-colors hover:text-[#668A00]">{siteContent.ctas.coaches}<ArrowUpRight size={15} /></Link>
            </div>
            <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.coaches.map((coach, index) => (
                <div key={coach.name} className="coach-card">
                  <div className="coach-portrait">
                    <img src={coachPhotos[index]} alt={`Pelatih ${coach.name}`} />
                    {coach.badge && <span className="coach-badge">{coach.badge}</span>}
                  </div>
                  <h3 className="mt-4 text-base font-bold">{coach.name}</h3>
                  <p className="mt-1 text-xs text-black/50">{coach.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="manifesto-section">
          <div className="container relative z-10 grid min-h-[560px] items-end gap-10 py-20 lg:grid-cols-[.9fr_1.15fr] lg:py-24">
            <div>
              <Eyebrow index="E" dark>{siteContent.home.manifesto.label}</Eyebrow>
              <h2 className="jr-display manifesto-title mt-8 max-w-[630px]">{siteContent.home.manifesto.title}</h2>
            </div>
            <div className="max-w-[320px] justify-self-start lg:justify-self-end">
              <p className="mb-7 text-sm leading-7 text-white/60">{siteContent.home.manifesto.description}</p>
              <ActionButton variant="lime">{siteContent.ctas.programs}</ActionButton>
            </div>
          </div>
          <div className="arrow-line arrow-line-one" /><div className="arrow-line arrow-line-two" /><div className="arrow-line arrow-line-three" />
        </section>

        <section className="section-space bg-[#F7F7F2]">
          <div className="container">
            <div className="cta-panel">
              <h2 className="jr-display mx-auto max-w-[640px] text-5xl leading-[.92] sm:text-7xl">{siteContent.home.callout.title}</h2>
              <p className="mx-auto mt-6 max-w-[460px] text-sm leading-7 text-white/85">{siteContent.home.callout.description}</p>
              <div className="mt-8 flex justify-center"><ActionButton variant="white">{siteContent.ctas.primary}</ActionButton></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
