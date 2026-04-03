"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Globe,
  Leaf,
  Server,
  Smartphone,
} from "lucide-react";

const badges = ["Projet d'équipe", "Client réel", "Scrum lite", "Web + API + Mobile"];

const stack = [
  "PHP",
  "Twig",
  "ASP.NET Core",
  "Entity Framework",
  "PostgreSQL",
  "Kotlin",
  "Jetpack Compose",
  "Retrofit",
  "Room",
];

const stats = [
  {
    value: "3",
    label: "Briques produit",
    detail: "web, API et application Android autour du même domaine métier",
  },
  {
    value: "6",
    label: "Ressources REST",
    detail: "garden, vegetable, seed, harvest, grow et advice côté API",
  },
  {
    value: "5",
    label: "Onglets mobile",
    detail: "accueil, potager, inventaire, historique et fiches légumes",
  },
  {
    value: "6",
    label: "Membres équipe",
    detail: "organisation en équipe de 6 avec priorisation des besoins et coordination des briques",
  },
];

const gallery = [
  {
    kicker: "Maquette",
    title: "Accueil Jardinageons",
    description:
      "Vue d'ensemble du produit avec aperçu du jardin, conseils mensuels et rappels d'arrosage.",
    src: "/projects/jardinageons/accueil.svg",
    alt: "Maquette d'accueil Jardinageons",
    className: "lg:col-span-7",
    imageClassName: "object-contain bg-[#07110c] p-5",
  },
  {
    kicker: "Maquette",
    title: "Plan du potager",
    description:
      "Visualisation du plan de culture avec textures, parcelles et repartition des legumes.",
    src: "/projects/jardinageons/potager.svg",
    alt: "Maquette du plan de potager Jardinageons",
    className: "lg:col-span-5",
    imageClassName: "object-contain bg-[#07110c] p-5",
  },
  {
    kicker: "Web",
    title: "Dashboard",
    description:
      "Page d'accueil avec conseils du mois, rappel d'arrosage et apercu du jardin selectionne.",
    src: "/projects/jardinageons/web-accueil-dashboard.png",
    alt: "Capture du tableau de bord web Jardinageons",
    className: "lg:col-span-6",
    imageClassName: "object-cover object-top",
  },
  {
    kicker: "Web",
    title: "Editeur de potager",
    description:
      "Canevas interactif pour dessiner les parcelles, changer les textures et positionner les legumes.",
    src: "/projects/jardinageons/web-plan-potager.png",
    alt: "Capture de l'editeur de potager Jardinageons",
    className: "lg:col-span-6",
    imageClassName: "object-cover object-top",
  },
  {
    kicker: "Web",
    title: "Stock de graines",
    description:
      "Catalogue relie au legume associe, avec quantite, date de peremption et operations de gestion.",
    src: "/projects/jardinageons/web-stock-graines.png",
    alt: "Capture de la gestion du stock de graines Jardinageons",
    className: "lg:col-span-6",
    imageClassName: "object-cover object-top",
  },
  {
    kicker: "Web",
    title: "Fiches legumes",
    description:
      "Base de connaissance avec periodes de semis, recolte, germination et description de culture.",
    src: "/projects/jardinageons/web-fiches-legumes.png",
    alt: "Capture des fiches legumes Jardinageons",
    className: "lg:col-span-6",
    imageClassName: "object-cover object-top",
  },
  {
    kicker: "Mobile",
    title: "Inventaire et fiches",
    description:
      "Vue mobile de l'inventaire de graines et du catalogue des legumes, avec recherche, synthese et acces rapide aux fiches.",
    src: "/projects/jardinageons/mobile-inventaire-fiches.png",
    alt: "Captures mobiles Jardinageons avec inventaire et fiches legumes",
    className: "lg:col-span-6",
    imageClassName: "object-contain bg-[#0b110d] p-4",
  },
  {
    kicker: "Mobile",
    title: "Meteo et statistiques",
    description:
      "Ecrans mobiles dedies au contexte du jardin avec meteo en direct, rappels d'arrosage et statistiques de repartition des graines.",
    src: "/projects/jardinageons/mobile-meteo-stats.png",
    alt: "Captures mobiles Jardinageons avec meteo et statistiques",
    className: "lg:col-span-6",
    imageClassName: "object-contain bg-[#0b110d] p-4",
  },
];

const pillars = [
  {
    title: "Surface web",
    summary:
      "Une interface PHP structurée en MVC avec des vues Twig dédiées au tableau de bord, au plan du jardin, au stock de graines et aux fiches légumes.",
    techs: ["PHP", "Twig", "MVC", "Canvas"],
    points: [
      "gestion de plusieurs jardins et sélection du jardin courant",
      "édition du plan avec textures, formes, gomme, undo/redo et sauvegarde",
      "catalogue de graines, historique des récoltes et fiches de culture",
    ],
    icon: Globe,
  },
  {
    title: "API centrale",
    summary:
      "Une API ASP.NET Core qui expose le domaine métier, connecte PostgreSQL via Npgsql et documente les routes avec OpenAPI.",
    techs: ["ASP.NET Core", "EF Core", "PostgreSQL", "JWT"],
    points: [
      "controllers dédiés aux ressources Garden, Vegetable, Seed, Harvest, Grow et Advice",
      "Identity API endpoints, sécurisation par bearer token et configuration Swagger/OpenAPI",
      "tests de controllers et de repositories pour fiabiliser la couche métier",
    ],
    icon: Server,
  },
  {
    title: "Application mobile",
    summary:
      "Une déclinaison Android en Kotlin et Jetpack Compose, avec navigation par barre basse, synchronisation réseau et stockage local.",
    techs: ["Kotlin", "Compose", "Retrofit", "Room"],
    points: [
      "parcours login/register reliés à l'API et gestion des access/refresh tokens",
      "WorkManager pour la synchro périodique et le rappel d'arrosage",
      "écrans Accueil, Potager, Inventaire, Historique et Fiches légumes",
    ],
    icon: Smartphone,
  },
];

const featureGroups = [
  {
    title: "Fonctionnalités principales",
    items: [
      "conseils mensuels et rappels d'arrosage sur le dashboard",
      "plan de potager interactif avec parcelles et légumes déplaçables",
      "catalogue de graines avec quantités, descriptions et dates utiles",
      "fiches légumes avec périodes de semis, récolte et germination",
    ],
  },
  {
    title: "Gestion de projet",
    items: [
      "recueil des besoins du client et traduction en fonctionnalités utiles",
      "organisation en équipe de 6 avec répartition claire entre web, API et mobile",
      "cadence de travail de type Scrum lite avec points réguliers et priorisation",
      "ajustements du produit à partir des retours pour garder un ensemble cohérent",
    ],
  },
  {
    title: "Compétences mobilisées",
    items: [
      "conception full stack autour d'un même modèle de données",
      "structuration d'une API et d'une base relationnelle",
      "développement mobile Android avec synchronisation réseau",
      "travail d'équipe, organisation et cohérence entre plusieurs briques",
    ],
  },
  {
    title: "Ce que ce projet montre",
    items: [
      "ma capacité à travailler sur un projet complet, du web au mobile",
      "une attention portée à l'usage, à la qualité et à la clarté technique",
      "un projet mené pour un besoin concret avec plusieurs technologies",
      "une approche produit autant que technique",
    ],
  },
];

const motionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function JardinageonsProjectPage() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[540px] w-[540px] rounded-full bg-emerald-500/12 blur-[140px]" />
        <div className="absolute bottom-0 left-1/5 h-[420px] w-[420px] rounded-full bg-lime-500/8 blur-[120px]" />
        <div className="absolute top-1/3 left-0 h-[320px] w-[320px] rounded-full bg-amber-400/7 blur-[110px]" />
      </div>

      <div className="relative z-10 space-y-5">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-white/[0.04] p-8 shadow-[0_0_0_1px_rgba(16,185,129,0.05),0_45px_120px_-55px_rgba(16,185,129,0.45)] backdrop-blur-2xl md:p-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.18),transparent_42%),radial-gradient(circle_at_100%_0%,rgba(250,204,21,0.12),transparent_36%),radial-gradient(circle_at_50%_100%,rgba(132,204,22,0.10),transparent_40%)]" />

          <div className="relative">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:border-white/[0.16] hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour aux projets
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-emerald-300/20 bg-emerald-400/8 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-emerald-200"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
                  Projet principal
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Jardinageons
                </h1>
                <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-slate-300">
                  Jardinageons est une plateforme de gestion de potager pensée pour centraliser le
                  suivi des jardins, des légumes, du stock de graines, des récoltes et des rappels
                  d&apos;arrosage.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                  Réalisé en équipe de 6 pour un client réel, ce projet m&apos;a permis de travailler
                  sur une architecture complète avec une interface web, une API .NET et une
                  application mobile Android, tout en participant à l&apos;organisation du travail et
                  à la prise en compte des besoins métier.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#galerie"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-slate-950 transition hover:-translate-y-0.5"
                  >
                    Voir les visuels
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.04] px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:border-white/[0.2] hover:text-white"
                  >
                    En parler
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/[0.10] bg-black/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  >
                    <p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-200">{stat.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{stat.detail}</p>
                  </div>
                ))}

                <div className="sm:col-span-2 rounded-[1.5rem] border border-emerald-300/15 bg-emerald-400/6 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.25rem] border border-white/[0.10] bg-white/90">
                      <Image
                        src="/projects/jardinageons/mobile-app-icon.png"
                        alt="Icone mobile Jardinageons"
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                        Application mobile
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        Une application Android en Kotlin / Jetpack Compose, connectée à l&apos;API,
                        avec navigation, persistance locale et logique de synchronisation.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...motionProps}
          id="galerie"
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-2xl md:p-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.10),transparent_35%)]" />

          <div className="relative">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
                  Aperçus
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                  Écrans du projet
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                Une sélection d&apos;écrans web et mobile pour présenter l&apos;interface, les usages et
                l&apos;univers visuel de Jardinageons.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-12">
              {gallery.map((item, index) => (
                <motion.figure
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                  className={`group overflow-hidden rounded-[1.65rem] border border-white/[0.08] bg-[#040a08]/90 ${item.className}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className={`transition duration-500 group-hover:scale-[1.02] ${item.imageClassName}`}
                    />
                  </div>
                  <figcaption className="border-t border-white/[0.08] p-5">
                    <p className="text-[0.63rem] font-semibold uppercase tracking-[0.28em] text-emerald-300/75">
                      {item.kicker}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...motionProps} className="grid gap-4 lg:grid-cols-3">
          {pillars.map(({ title, summary, techs, points, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_15%_0%,rgba(16,185,129,0.10),transparent_45%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-white">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{summary}</p>

                <ul className="mt-5 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.section>

        <motion.section {...motionProps} className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-[1.9rem] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.08),transparent_35%)]" />
            <div className="relative">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-slate-500">
                Points cles
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Ce que j&apos;en retiens
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {featureGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[1.45rem] border border-white/[0.08] bg-black/15 p-5"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                          <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[1.9rem] border border-emerald-300/14 bg-emerald-400/6 p-8 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] bg-[radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.18),transparent_35%)]" />
            <div className="relative">
              <div className="rounded-[1.45rem] border border-white/[0.10] bg-black/15 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                  Gestion de projet
                </p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">
                  Une organisation simple, mais structurée
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Le projet a avancé avec une logique de Scrum lite : découpage du travail,
                  priorisation des sujets utiles pour le client, points réguliers dans l&apos;équipe et
                  ajustements progressifs entre les briques web, API et mobile.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Equipe de 6",
                    "Besoins client",
                    "Priorisation",
                    "Iterations courtes",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.08] text-emerald-100">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                    Architecture
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">
                    Une architecture full stack coherente
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                Jardinageons m&apos;a permis de travailler sur un projet transverse, avec un même domaine
                métier décliné dans une interface web, une API .NET et une application mobile.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "web en MVC et Twig pour les parcours de gestion",
                  "API REST alimentée par Entity Framework et PostgreSQL",
                  "application mobile Compose avec Room, Retrofit et synchronisation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/[0.08] bg-black/15 px-4 py-3 text-sm leading-relaxed text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-white/[0.2] hover:text-white"
                >
                  Revenir aux projets
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-slate-950 transition hover:-translate-y-0.5"
                >
                  Contact
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        </motion.section>
      </div>
    </main>
  );
}
