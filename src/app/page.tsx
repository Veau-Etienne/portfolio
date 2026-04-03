"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

const heroBadges = [
  { label: "Web & Mobile" },
  { label: "Stagiaire chez CGI" },
  { label: "Alternance Sept. 2026" },
];

const skills = [
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const navCards = [
  { href: "/projects", label: "Projets", sublabel: "Applications web, mobile et full stack" },
  { href: "/exp", label: "Expériences", sublabel: "Parcours, industrie et stage actuel" },
  { href: "/contact", label: "Contact", sublabel: "Échangeons autour d'un projet" },
];

const socials = [
  { href: "https://github.com/veau-etienne", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/etienne-veau-092883258", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:etienne.veau@etu.uca.fr", label: "Email", icon: Mail },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 pt-28 pb-20">

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-white/[0.04] p-8 shadow-[0_40px_120px_-60px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl md:p-12"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.13),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(147,51,234,0.16),transparent_55%)]" />

        <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-300">
                Etienne Veau
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
              Développeur{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                web et mobile
              </span>{" "}
              orienté vers des applications utiles, solides et soignées.
            </h1>

            <p className="max-w-xl text-[0.95rem] leading-relaxed text-slate-400">
              Étudiant en 2ᵉ année de B.U.T. Informatique à l&apos;IUT d&apos;Aubière, je développe des
              projets complets en web, mobile et data. Je suis actuellement stagiaire chez CGI,
              intégré à une équipe au centre de recherche Michelin de Ladoux, et je recherche une
              alternance à partir de septembre 2026.
            </p>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {[
                { year: "2023", label: "BUT Informatique — IUT d'Aubière", active: false },
                { year: "2026", label: "Stagiaire CGI · Michelin Ladoux", active: true },
                { year: "Sept. 2026", label: "Alternance recherchée", active: false, future: true },
              ].map(({ year, label, active, future }, i, arr) => (
                <div key={year} className="flex items-stretch gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`h-2.5 w-2.5 shrink-0 rounded-full border ${
                      active
                        ? "border-emerald-400 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"
                        : future
                          ? "border-slate-600 bg-transparent"
                          : "border-slate-500 bg-slate-700"
                    }`} />
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-slate-600 to-transparent my-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.25em] ${active ? "text-emerald-400" : "text-slate-600"}`}>
                      {year}
                    </p>
                    <p className={`text-sm ${active ? "font-semibold text-slate-200" : future ? "text-slate-600" : "text-slate-400"}`}>
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-300"
                >
                  <span className="h-1 w-1 rounded-full bg-sky-400/80" />
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-slate-900 shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(148,163,184,0.5)]"
              >
                Voir mes projets
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.05] px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:border-white/[0.25] hover:text-white"
              >
                Me contacter
              </Link>
              <a
                href={withBasePath("/cv.pdf")}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-slate-400 transition hover:border-white/[0.2] hover:text-slate-200"
              >
                <Download className="h-3.5 w-3.5" />
                CV
              </a>
            </div>
          </div>

          {/* Right — portrait card */}
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.10] bg-white/[0.04] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl md:p-4">
            <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.18),transparent_55%)]" />
            <div className="relative flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-white/[0.10] bg-slate-950">
                <Image
                  src={withBasePath("/profile/etienne-home.png")}
                  alt="Portrait d'Etienne Veau"
                  fill
                  priority
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.05)_45%,rgba(2,6,23,0.7)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-2xl border border-white/[0.12] bg-black/20 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-sky-200/80">
                      Etienne Veau
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Développeur web & mobile
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      CGI x Michelin Ladoux
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-white/[0.08] bg-black/15 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Situation actuelle
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-slate-200">
                    Stagiaire chez CGI
                  </p>
                  <p className="text-sm text-slate-400">
                    Équipe intégrée à Ladoux — centre de recherche Michelin
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-emerald-300/80">
                    Recherche alternance • septembre 2026
                  </p>
                </div>

                <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Contact
                  </p>
                  <a
                    href="mailto:etienne.veau@etu.uca.fr"
                    className="mt-1.5 block truncate text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    etienne.veau@etu.uca.fr
                  </a>
                  <a
                    href="tel:+33674983800"
                    className="mt-0.5 block text-sm text-slate-400 transition hover:text-slate-200"
                  >
                    06 74 98 38 00
                  </a>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  {socials.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                      aria-label={label}
                      className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.05] transition hover:border-white/[0.2] hover:bg-white/[0.10]"
                    >
                      <Icon className="h-4 w-4 text-slate-400 transition group-hover:text-slate-100" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── Compétences ──────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl md:p-10"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_10%_50%,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="relative">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Compétences techniques
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Stack maîtrisée autour du développement applicatif, de la data et des fondations système.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="group flex flex-col items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-2.5 py-3 backdrop-blur-sm transition hover:border-white/[0.16] hover:bg-white/[0.08]"
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={30}
                  height={30}
                  className="h-7.5 w-7.5 object-contain transition group-hover:scale-110"
                />
                <span className="text-[0.66rem] font-semibold text-slate-400 transition group-hover:text-slate-200">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── Navigation cards ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="grid gap-3 md:grid-cols-3"
      >
        {navCards.map(({ href, label, sublabel }, i) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
          >
            <Link
              href={href}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.06]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.14),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col gap-2">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-200">
                  {label}
                </p>
                <p className="text-sm text-slate-500">{sublabel}</p>
              </div>
              <ArrowRight className="relative mt-6 h-4 w-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-sky-400" />
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
