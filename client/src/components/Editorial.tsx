// Range Journal reminder: shared primitives keep the editorial system consistent—outlined indices, lime action dots, and utility-first copy.

import { ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "wouter";
import { siteContent } from "@/content";

export function BrandMark({ className = "h-9 w-9 rounded-[10px] text-base" }: { className?: string }) {
  return (
    <span className={`jr-display flex items-center justify-center bg-[#C6F24C] text-[#111111] ${className}`}>
      {siteContent.brand.shortName.charAt(0)}
    </span>
  );
}

export function Eyebrow({ index, children, dark = false }: { index?: string; children?: ReactNode; dark?: boolean }) {
  return (
    <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
      {index && <span className="eyebrow-index">{index}</span>}
      <span className="eyebrow-dot" />
      <span>{children}</span>
    </div>
  );
}

export function ActionButton({ children, href = siteContent.externalUrl, variant = "dark", external = true }: { children: ReactNode; href?: string; variant?: "dark" | "lime" | "white"; external?: boolean }) {
  const className = `btn btn-${variant}`;
  const content = <>{children}<span className="btn-icon">{external ? <ArrowUpRight size={15} /> : <ArrowRight size={15} />}</span></>;
  return external ? <a className={className} href={href} target="_blank" rel="noreferrer">{content}</a> : <Link className={className} href={href}>{content}</Link>;
}

export function CircleButton({ label = "Lihat lebih", href = siteContent.externalUrl, dark = false }: { label?: string; href?: string; dark?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={`circle-button ${dark ? "circle-button-dark" : ""}`}>
      <MoveUpRight size={17} strokeWidth={1.8} />
    </a>
  );
}

export function PageIntro({ kicker, title, description, dark = false }: { kicker: string; title: string; description?: string; dark?: boolean }) {
  return (
    <div className={`page-intro ${dark ? "page-intro-dark" : ""}`}>
      <Eyebrow index="/" dark={dark}>{kicker}</Eyebrow>
      <h1 className="jr-display page-title">{title}</h1>
      {description && <p className="page-lede">{description}</p>}
    </div>
  );
}

export function ImageCredit({ children }: { children: ReactNode }) {
  return <span className="image-credit">{children}</span>;
}
