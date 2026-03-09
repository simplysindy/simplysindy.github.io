"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Outfit, Manrope } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

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
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
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

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const projects = projectsData;

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 w-full py-20 px-6 relative overflow-hidden"
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
        │  Studio (wide)   │ │Yanscape│
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

        {/* Row 1, Col 3: Yanscape */}
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
