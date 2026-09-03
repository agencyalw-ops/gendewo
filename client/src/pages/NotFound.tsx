// Range Journal reminder: even an error state should stay calm, useful, and give the reader a clear route back to the range.

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { siteContent } from "@/content";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <SiteHeader />
      <main className="container flex min-h-screen flex-col justify-center py-32">
        <p className="eyebrow eyebrow-dark"><span className="eyebrow-index">404</span><span className="eyebrow-dot" />Target tidak ditemukan</p>
        <h1 className="jr-display mt-8 max-w-[700px] text-[clamp(5rem,15vw,12rem)] leading-[.8]">Tarik napas.<br />Coba lagi.</h1>
        <div className="mt-10 flex flex-wrap gap-3"><Link href="/" className="btn btn-lime"><ArrowLeft size={15} />Kembali ke beranda</Link><a href={siteContent.externalUrl} target="_blank" rel="noreferrer" className="btn border border-white/20 text-white">Hubungi Gendewo <span className="btn-icon"><ArrowUpRight size={15} /></span></a></div>
      </main>
    </div>
  );
}
