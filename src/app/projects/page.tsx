"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stack = [
  { label: "PHP / MVC / Twig", color: "from-emerald-500/20 to-emerald-500/5" },
  { label: "ASP.NET / EF Core", color: "from-sky-500/20 to-sky-500/5" },
  { label: "Blazor", color: "from-indigo-500/20 to-indigo-500/5" },
  { label: "Kotlin / Jetpack Compose", color: "from-lime-500/20 to-lime-500/5" },
  { label: "SQL / PostgreSQL", color: "from-cyan-500/20 to-cyan-500/5" },
];

const featuredSkills = [
  "Analyse d'un besoin client réel",
  "Architecture applicative complète",
  "Développement full stack web, API et mobile",
  "Base de données relationnelle",
  "Tests, refactorisation et qualité du code",
  "Organisation d'équipe en Scrum lite",
];

const academicProjects = [
  {
    title: "Projet Qawale",
    tag: "Application stratégique .NET MAUI",
    desc: "Adaptation numérique du jeu Qawale avec interface responsive, mode 2 joueurs, intelligence artificielle, règles officielles et sauvegarde des parties.",
    techs: [".NET MAUI", "C#", "IA", "UI responsive"],
  },
  {
    title: "Projet OCTAVE",
    tag: "Base de données et datavisualisation",
    desc: "Étude de marché pour une plateforme de streaming musical à partir de trois datasets, avec modélisation, alimentation PostgreSQL en Python / SQLAlchemy et recommandations appuyées sur des graphiques Matplotlib.",
    techs: ["PostgreSQL", "Python", "SQLAlchemy", "Matplotlib"],
    href: "/docs/octave-rapport.pdf",
    cta: "Ouvrir le rapport",
  },
  {
    title: "Algo Benchmark",
    tag: "Comparaison d'approches algorithmiques",
    desc: "Projet Python centré sur la mesure et la comparaison de tris et de recherches selon la taille des données, avec visualisation des performances et mise en perspective dans le cadre d'une SAE orientée algorithmique.",
    techs: ["Python", "Algorithmique", "Mesures", "Matplotlib"],
    href: "/docs/algo-benchmark-sujet.pdf",
    cta: "Voir le sujet",
  },
];

const personalProjects = [
  {
    title: "2048",
    tag: "Projet perso front-end",
    desc: "Reprise personnelle du jeu 2048 en HTML, CSS et JavaScript avec grille 4x4, score en temps réel, nouvelle partie, animations de fusion et contrôles clavier.",
    techs: ["HTML", "CSS", "JavaScript"],
    href: "/projects/2048/index.html",
    cta: "Jouer",
    kind: "2048" as const,
    status: "Jeu navigateur",
  },
  {
    title: "QuantEdge",
    tag: "Projet perso en conception",
    desc: "Plateforme pensée pour créer des stratégies de trading automatisées, les backtester sur des données passées, puis les lancer avec un bot qui opère 24h/24 et 7j/7, le tout suivi dans un dashboard clair comparé aux grands indices.",
    techs: ["Backtesting", "Dashboard", "Bots", "Algorithmes"],
    cta: "Concept produit",
    kind: "quantedge" as const,
    status: "Trading algorithmique",
  },
];

function PersonalProjectPreview({ kind }: { kind: "2048" | "quantedge" }) {
  if (kind === "2048") {
    const cells = [2, 4, 8, 16, 32, 64, "", 2, "", 4, 8, "", "", "", 2, 4];

    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] border border-white/[0.08] bg-[#0f0d0a] p-5">
        <div className="absolute right-4 top-4 rounded-full border border-amber-200/20 bg-amber-100/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-amber-100/80">
          Score 2480
        </div>
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-amber-100/65">
              Mini jeu
            </p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#f6f1e6]">2048</h3>
          </div>
          <div className="grid grid-cols-4 gap-2 rounded-[1.2rem] bg-[#b8aa98] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            {cells.map((value, index) => (
              <div
                key={`${value}-${index}`}
                className={`flex aspect-square items-center justify-center rounded-[0.9rem] text-lg font-bold ${
                  value === 2
                    ? "bg-[#eee4da] text-[#776e65]"
                    : value === 4
                      ? "bg-[#ede0c8] text-[#776e65]"
                      : value === 8
                        ? "bg-[#f2b179] text-white"
                        : value === 16
                          ? "bg-[#f59563] text-white"
                          : value === 32
                            ? "bg-[#f67c5f] text-white"
                            : value === 64
                              ? "bg-[#f65e3b] text-white"
                              : "bg-[rgba(238,228,218,0.35)] text-transparent"
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] border border-white/[0.08] bg-[#141311]">
      <Image
        src="/projects/quantedge-dashboard.png"
        alt="Capture du dashboard QuantEdge"
        fill
        sizes="(min-width: 1280px) 40vw, 100vw"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.0)_50%,rgba(2,6,23,0.28)_100%)]" />
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  tag: string;
  desc: string;
  techs: string[];
  href?: string;
  cta?: string;
};

function ProjectCard({ title, tag, desc, techs, href, cta }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl transition hover:border-white/[0.14] hover:bg-white/[0.05]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.08),transparent_55%)]" />
      <div className="relative">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-slate-500">
          {tag}
        </span>
        <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[0.65rem] font-medium text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
        {href && cta ? (
          <div className="mt-6">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-white/[0.2] hover:text-white"
            >
              {cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-indigo-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
            Portfolio
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Mes Projets
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
            Des projets menes en equipe et en autonomie, entre applications full stack, datavisualisation
            et prototypes personnels orientes produit.
          </p>
        </motion.div>

        <Link
          href="/projects/jardinageons"
          aria-label="Ouvrir le projet Jardinageons"
          className="group block"
        >
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.04] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_100px_-40px_rgba(59,130,246,0.3)] backdrop-blur-2xl transition duration-300 group-hover:-translate-y-1 group-hover:border-emerald-300/25 group-hover:shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_45px_120px_-40px_rgba(16,185,129,0.35)] md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.18),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.12),transparent_50%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-indigo-300">
                  Réalisation principale
                </span>
                <span className="rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Client réel · Full stack
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Jardinageons
              </h2>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-slate-300">
                Application de gestion de potager développée pour un client réel. Elle centralise le
                suivi des cultures, des graines, des récoltes et de l&apos;arrosage au sein d&apos;une
                architecture web, API et mobile cohérente.
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                Un projet d&apos;équipe mené en Scrum lite, avec coordination des briques techniques et
                prise en compte d&apos;un besoin métier concret.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {stack.map(({ label, color }) => (
                  <span
                    key={label}
                    className={`rounded-full border border-white/[0.10] bg-gradient-to-r ${color} px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />

              <div>
                <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-slate-500">
                  Compétences travaillées
                </p>
                <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {featuredSkills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-400">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200">
                Voir la page projet
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.article>
        </Link>

        <section className="mt-6">
          <div className="mb-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
              Projets académiques
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Applications, data et algorithmique
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {academicProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                tag={project.tag}
                desc={project.desc}
                techs={project.techs}
                href={project.href}
                cta={project.cta}
              />
            ))}
          </div>
        </section>

        <section className="mt-6">
          <div className="mb-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
              Projets perso
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Jeux et outils orientés produit
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              Une rubrique dédiée à mes projets personnels, entre expérimentation front-end,
              algorithmique et conception de produits plus ambitieux.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {personalProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-2xl"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.05),transparent_45%)]" />
                <div className="relative">
                  <PersonalProjectPreview kind={project.kind} />

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {project.tag}
                    </span>
                    <span className="rounded-full border border-emerald-300/15 bg-emerald-400/8 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[0.65rem] font-medium text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-white/[0.2] hover:text-white"
                      >
                        {project.cta}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
                        {project.cta}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
