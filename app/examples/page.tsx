"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/data";
import { Syne, Playfair_Display, Outfit, Manrope } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function ExamplesPage() {
  return (
    <div className="-mx-4">
      {/* Page Header */}
      <div className="text-center py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Project Section Designs
        </h1>
        <p className="text-gray-500 text-lg">
          Scroll through 4 approaches. Pick the one that fits your vision.
        </p>
      </div>

      <DesignLabel number={1} title="Bento Grid" subtitle="Syne font, glassmorphic cards, asymmetric grid, dot-pattern background" />
      <BentoGridDesign />

      <DesignLabel number={2} title="Cinematic Full-Width" subtitle="Playfair Display serif, dark theme, full-bleed imagery, numbered entries" />
      <CinematicDesign />

      <DesignLabel number={3} title="Minimal Card Grid" subtitle="Outfit font, clean 2-column grid, Swiss-design inspired, hover lift" />
      <MinimalGridDesign />

      <DesignLabel number={4} title="Editorial Spotlight" subtitle="Manrope font, single-project focus, carousel navigation, warm palette" />
      <EditorialDesign />

      <div className="h-32" />
    </div>
  );
}

/* ─── Section Label ───────────────────────────────────────────────── */

function DesignLabel({ number, title, subtitle }: { number: number; title: string; subtitle: string }) {
  return (
    <div className="border-t-2 border-gray-200 pt-12 pb-6 px-6 max-w-6xl mx-auto">
      <div className="flex items-baseline gap-5">
        <span className="text-7xl font-black text-gray-200 select-none leading-none">
          {String(number).padStart(2, "0")}
        </span>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-gray-400 mt-1 text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Design 1: Bento Grid ────────────────────────────────────────── */

const cardAccents = [
  { gradient: "from-violet-500/10 via-fuchsia-500/5 to-transparent", border: "group-hover:border-violet-300/50", glow: "group-hover:shadow-violet-200/30", accent: "bg-violet-500", tagBg: "bg-violet-50 text-violet-600", linkColor: "hover:text-violet-600 hover:decoration-violet-400" },
  { gradient: "from-rose-500/10 via-pink-500/5 to-transparent", border: "group-hover:border-rose-300/50", glow: "group-hover:shadow-rose-200/30", accent: "bg-rose-500", tagBg: "bg-rose-50 text-rose-600", linkColor: "hover:text-rose-600 hover:decoration-rose-400" },
  { gradient: "from-emerald-500/10 via-teal-500/5 to-transparent", border: "group-hover:border-emerald-300/50", glow: "group-hover:shadow-emerald-200/30", accent: "bg-emerald-500", tagBg: "bg-emerald-50 text-emerald-700", linkColor: "hover:text-emerald-600 hover:decoration-emerald-400" },
  { gradient: "from-amber-500/10 via-orange-500/5 to-transparent", border: "group-hover:border-amber-300/50", glow: "group-hover:shadow-amber-200/30", accent: "bg-amber-500", tagBg: "bg-amber-50 text-amber-700", linkColor: "hover:text-amber-600 hover:decoration-amber-400" },
  { gradient: "from-cyan-500/10 via-sky-500/5 to-transparent", border: "group-hover:border-cyan-300/50", glow: "group-hover:shadow-cyan-200/30", accent: "bg-cyan-500", tagBg: "bg-cyan-50 text-cyan-700", linkColor: "hover:text-cyan-600 hover:decoration-cyan-400" },
  { gradient: "from-red-500/10 via-orange-500/5 to-transparent", border: "group-hover:border-red-300/50", glow: "group-hover:shadow-red-200/30", accent: "bg-red-500", tagBg: "bg-red-50 text-red-600", linkColor: "hover:text-red-600 hover:decoration-red-400" },
  { gradient: "from-blue-500/10 via-indigo-500/5 to-transparent", border: "group-hover:border-blue-300/50", glow: "group-hover:shadow-blue-200/30", accent: "bg-blue-500", tagBg: "bg-blue-50 text-blue-600", linkColor: "hover:text-blue-600 hover:decoration-blue-400" },
];

function BentoCard({
  project,
  className,
  titleSize = "text-lg",
  accentIndex = 0,
  delay = 0,
}: {
  project: (typeof projectsData)[number];
  className?: string;
  titleSize?: string;
  accentIndex?: number;
  delay?: number;
}) {
  const accent = cardAccents[accentIndex % cardAccents.length];

  return (
    <motion.div
      className={`group ${className || ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/60 ${accent.border} hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.12)] ${accent.glow} transition-all duration-500 h-full flex flex-col`}>
        {/* Gradient accent background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100`} />
        {/* Top accent line */}
        <div className={`h-[2px] ${accent.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative p-6 flex flex-col flex-1">
          <h3 className={`${outfit.className} ${titleSize} font-bold text-gray-900 leading-tight tracking-tight`}>
            {project.title}
          </h3>
          <div className={`${outfit.className} text-gray-500 mt-2.5 text-sm leading-relaxed space-y-2`}>
            {project.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-auto pt-5 space-y-3">
            {project.links && project.links.length > 0 && (
              <div className="flex gap-4">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className={`${outfit.className} text-sm font-semibold text-gray-900 ${accent.linkColor} transition-colors underline underline-offset-4 decoration-gray-300`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`${outfit.className} text-[10px] font-medium px-2 py-0.5 rounded-full ${accent.tagBg} transition-colors duration-300`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BentoGridDesign() {
  const projects = projectsData;

  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "#f5f0ea" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #c4b5a3 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <p className={`${manrope.className} text-sm font-medium tracking-[0.2em] uppercase text-gray-400 mb-3`}>
          Portfolio
        </p>
        <h2 className={`${manrope.className} text-5xl font-extrabold text-gray-900 tracking-tight`}>
          Selected Work
        </h2>
        <div className="w-16 h-[3px] bg-gray-900 mt-4 rounded-full mb-14" />

        {/*
          3×3 bento grid (7 projects):
          ┌──────────────────┐ ┌────────┐
          │  Studio (wide)   │ │Unboxed │
          └──────────────────┘ └────────┘
          ┌────────┐ ┌────────┐ ┌────────┐
          │  ISSS   │ │AI Wolf │ │  Kube  │
          │ (tall)  │ ├────────┤ ├────────┤
          │         │ │ Advers │ │ Ether  │
          └────────┘ └────────┘ └────────┘
        */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto auto",
          }}
        >
          {/* Row 1, Cols 1-2: Studio Cuvee Glow (featured) */}
          <div style={{ gridColumn: "1 / 3", gridRow: "1" }}>
            <BentoCard
              project={projects[0]}
              titleSize="text-xl"
              accentIndex={0}
              delay={0}
            />
          </div>

          {/* Row 1, Col 3: Unboxed */}
          <div style={{ gridColumn: "3", gridRow: "1" }}>
            <BentoCard project={projects[1]} accentIndex={1} delay={0.1} />
          </div>

          {/* Rows 2-3, Col 1: ISSS608 (tall) */}
          <div style={{ gridColumn: "1", gridRow: "2 / 4" }}>
            <BentoCard
              project={projects[2]}
              className="h-full"
              accentIndex={2}
              delay={0.15}
            />
          </div>

          {/* Row 2, Col 2: AI Werewolf */}
          <div style={{ gridColumn: "2", gridRow: "2" }}>
            <BentoCard project={projects[3]} accentIndex={3} delay={0.2} />
          </div>

          {/* Row 2, Col 3: Kube */}
          <div style={{ gridColumn: "3", gridRow: "2" }}>
            <BentoCard project={projects[4]} accentIndex={4} delay={0.25} />
          </div>

          {/* Row 3, Col 2: Adversarial AI */}
          <div style={{ gridColumn: "2", gridRow: "3" }}>
            <BentoCard project={projects[5]} accentIndex={5} delay={0.3} />
          </div>

          {/* Row 3, Col 3: EtherShield */}
          <div style={{ gridColumn: "3", gridRow: "3" }}>
            <BentoCard project={projects[6]} accentIndex={6} delay={0.35} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Design 2: Cinematic Full-Width ──────────────────────────────── */

function CinematicDesign() {
  const projects = projectsData;

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-20">
          <p className="text-white/30 text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className={`${playfair.className} text-6xl md:text-7xl text-white italic font-normal`}>
            Selected Work
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="group">
                {/* Image */}
                {project.imageUrl && (
                <div className="relative aspect-[2.2/1] rounded-lg overflow-hidden mb-10">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                )}

                {/* Info */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
                  <div>
                    <span className="text-white/20 font-mono text-xs tracking-widest">
                      0{index + 1}
                    </span>
                    <h3 className={`${playfair.className} text-3xl md:text-4xl text-white mt-2 font-normal`}>
                      {project.title}
                    </h3>
                    <p className="text-white/50 mt-4 max-w-md text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {project.links && (
                      <div className="flex gap-6 mt-5">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            className="text-sm text-white/70 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/70 transition-colors duration-300"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-white/25 text-xs space-y-1">
                      {project.tags.map((tag, i) => (
                        <div key={i}>{tag}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < projects.length - 1 && (
                <div className="border-t border-white/[0.06] mt-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Design 3: Minimal Card Grid ─────────────────────────────────── */

function MinimalGridDesign() {
  const projects = projectsData;

  return (
    <section className="py-20 px-6" style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`${outfit.className} text-5xl font-semibold text-gray-900 tracking-tight`}>
          Selected Work<span className="text-[#007cf0]">.</span>
        </h2>
        <p className={`${outfit.className} text-gray-400 mt-2 mb-14 text-lg`}>
          Things I&apos;ve built and shipped
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="rounded-2xl overflow-hidden bg-gray-50 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] transition-all duration-500">
                {project.imageUrl && (
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                )}
                <div className="p-7">
                  <h3 className={`${outfit.className} text-lg font-semibold text-gray-900`}>
                    {project.title}
                  </h3>
                  <p className={`${outfit.className} text-gray-500 mt-2.5 text-sm leading-relaxed`}>
                    {project.description}
                  </p>
                  {project.links && (
                    <div className="flex gap-4 mt-4">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          className={`${outfit.className} text-sm font-semibold text-gray-900 hover:text-[#007cf0] transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-[#007cf0]`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  <div className={`${outfit.className} mt-5 text-xs text-gray-400 tracking-wide`}>
                    {project.tags.join(" \u00b7 ")}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Design 4: Editorial Spotlight ───────────────────────────────── */

function EditorialDesign() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = projectsData;
  const project = projects[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="py-20 px-6" style={{ background: "#f5f0ea" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header with navigation */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className={`${manrope.className} text-sm font-medium tracking-[0.2em] uppercase text-gray-400 mb-3`}>
              Portfolio
            </p>
            <h2 className={`${manrope.className} text-5xl font-extrabold text-gray-900 tracking-tight`}>
              Selected Work
            </h2>
            <div className="w-16 h-[3px] bg-gray-900 mt-4 rounded-full" />
          </div>
          <div className="flex items-center gap-5">
            <span className={`${manrope.className} text-sm text-gray-400 tabular-nums`}>
              {String(activeIndex + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(projects.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 text-gray-600 text-lg"
              >
                &larr;
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 text-gray-600 text-lg"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Active project */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {/* Image */}
            {project.imageUrl && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            )}

            {/* Content */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8">
              <div className="max-w-lg">
                <h3 className={`${manrope.className} text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight`}>
                  {project.title}
                </h3>
                <p className={`${manrope.className} text-gray-600 mt-4 leading-relaxed`}>
                  {project.description}
                </p>
                {project.links && (
                  <div className="flex gap-3 mt-6">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className={`${manrope.className} text-sm font-bold text-gray-900 px-6 py-2.5 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300`}
                      >
                        {link.label}&nbsp;&rarr;
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2 sm:max-w-[220px] sm:justify-end">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`${manrope.className} px-3.5 py-1.5 text-xs font-semibold bg-white/70 text-gray-600 rounded-full border border-gray-200`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex gap-2.5 mt-12">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-400 ${
                i === activeIndex
                  ? "bg-gray-900 w-10"
                  : "bg-gray-300 hover:bg-gray-400 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
