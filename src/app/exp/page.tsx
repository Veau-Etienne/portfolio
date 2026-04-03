"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
    BriefcaseBusiness,
    ChevronDown,
    Factory,
    Plug,
    Store,
    Utensils,
    Hammer,
    Wrench,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

type MediaItem = {
    label: string;
    videoSrc?: string;
    imageSrc?: string;
    posterSrc?: string;
};

type Exp = {
    company: string;
    location?: string;
    period: string;
    roles: { title: string; bullets: string[] }[];
    tags: string[];
    icon: ReactNode;
    media?: MediaItem[];
    mediaAspect?: "landscape" | "portrait";
    highlight?: {
        eyebrow: string;
        title: string;
        lines: string[];
    };
};

const items: Exp[] = [
    {
        company: "CGI",
        location: "Ladoux — centre de recherche Michelin",
        period: "Depuis avril 2026",
        icon: <BriefcaseBusiness className="h-5 w-5" />,
        roles: [
            {
                title: "Stagiaire",
                bullets: [
                    "Stage en cours chez CGI.",
                    "Intégré à une équipe au centre de recherche Michelin de Ladoux.",
                    "Immersion dans le fonctionnement quotidien d'une équipe en environnement professionnel.",
                ],
            },
        ],
        tags: ["CGI", "Michelin", "Ladoux", "Équipe"],
        highlight: {
            eyebrow: "Expérience actuelle",
            title: "Stagiaire chez CGI",
            lines: [
                "Équipe intégrée au centre de recherche Michelin de Ladoux.",
                "Expérience terrain dans un cadre professionnel concret.",
                "Travail en équipe, montée en contexte et immersion projet.",
            ],
        },
    },
    {
        company: "JELD-WEN Fenêtres et Portes",
        location: "Ussel (19)",
        period: "Avr. 2023 — Août 2024",
        icon: <Factory className="h-5 w-5" />,
        roles: [
            { title: "Agent de fabrication (3x8)", bullets: ["Montage de portes et petites menuiseries."] },
            { title: "Aide-menuisier", bullets: ["Déplacement 4 semaines — Cité administrative de Toulouse."] },
            { title: "Agent de maintenance industriel", bullets: ["Entretien chaudières et machines (déligneuses, presses, emballeuses, empileuses)."] },
            { title: "Conducteur de ligne", bullets: ["Anticipation, autonomie, optimisation des délais et des objectifs."] },
        ],
        tags: ["Production", "Maintenance", "Qualité", "Sécurité"],
        media: [{ label: "Aperçu", videoSrc: "/media/jeldwen.mp4" }],
        mediaAspect: "portrait",
    },
    {
        company: "Scierie des Gardes",
        period: "2 mois",
        icon: <Hammer className="h-5 w-5" />,
        roles: [
            { title: "Agent de maintenance", bullets: ["Aide à l’installation de machines.", "Maintenance courante (ex. changement de chaîne)."] },
        ],
        tags: ["Maintenance", "Installation", "Organisation"],
        media: [
            { label: "Clip 1", videoSrc: "/media/scierie-1.mp4" },
            { label: "Clip 2", videoSrc: "/media/scierie-2.mp4" },
        ],
    },
    {
        company: "C. TAZE",
        location: "Bort-les-Orgues (19)",
        period: "Juin — Juil. 2022",
        icon: <Plug className="h-5 w-5" />,
        roles: [
            { title: "Agent électricien", bullets: ["Installation et maintenance électrique.", "Éclairage intérieur et extérieur en zone industrielle."] },
        ],
        tags: ["Électricité", "Chantier", "Fiabilité"],
        media: [{ label: "Aperçu", videoSrc: "/media/ctaze.mp4" }],
        mediaAspect: "portrait",
    },
    {
        company: "E.Leclerc",
        location: "Ussel (19)",
        period: "Déc. 2021, Déc. 2022, Juil. — Août 2022",
        icon: <Store className="h-5 w-5" />,
        roles: [
            { title: "Employé de grande surface", bullets: ["Gestion rayons, réassort, stocks.", "Accueil et conseil client.", "Tenue de caisse."] },
        ],
        tags: ["Relation client", "Rigueur", "Polyvalence"],
        media: [{ label: "Aperçu", imageSrc: "/media/leclerc.jpg" }],
    },
    {
        company: "McDonald’s",
        location: "Ussel (19)",
        period: "2018 — 2019",
        icon: <Utensils className="h-5 w-5" />,
        roles: [
            { title: "Équipier", bullets: ["Prise de commandes et service.", "Formation des nouveaux.", "Hygiène et procédures."] },
        ],
        tags: ["Service", "Équipe", "Procédures"],
        media: [{ label: "Aperçu", imageSrc: "/media/mcd.jpg" }],
    },
];

function Section({
    data,
    idx,
    isActive,
    isLast,
    onNext,
}: {
    data: Exp;
    idx: number;
    isActive: boolean;
    isLast: boolean;
    onNext: () => void;
}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const inView = useInView(sectionRef, { amount: 0.6 });
    const mediaItems = data.media ?? [];
    const hasMedia = mediaItems.length > 0;
    const singleMediaIsPortrait = data.mediaAspect === "portrait" && mediaItems.length === 1;

    useEffect(() => {
        videoRefs.current.forEach((video) => {
            if (!video) return;

            if (isActive) {
                const playPromise = video.play();
                if (playPromise && typeof playPromise.then === "function") {
                    playPromise.catch(() => {
                        // Autoplay peut être bloqué par le navigateur.
                    });
                }
                return;
            }

            video.pause();
            video.currentTime = 0;
        });
    }, [isActive, mediaItems.length]);

    return (
        <section
            ref={sectionRef}
            className="snap-start relative h-screen w-full overflow-hidden"
            aria-label={`Expérience ${idx + 1}: ${data.company}`}
        >
            <motion.div
                aria-hidden
                initial={{ opacity: 0.14, scale: 0.9 }}
                animate={inView ? { opacity: 0.3, scale: 1 } : { opacity: 0.1, scale: 0.92 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_120deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.05)_45%,rgba(148,163,184,0.03)_85%,rgba(255,255,255,0.24)_100%)] mix-blend-screen blur-[120px] md:block"
            />
            <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="relative grid w-full max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2">
                    {/* Média */}
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-3xl border border-white/[0.16] bg-slate-950/60 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl"
                    >
                        {hasMedia ? (
                            mediaItems.length > 1 ? (
                                <div className="grid grid-cols-2 gap-2">
                                    {mediaItems.map((media, mediaIdx) => (
                                        <div
                                            key={media.videoSrc ?? media.imageSrc ?? `${data.company}-${mediaIdx}`}
                                            className="relative aspect-[9/16] overflow-hidden rounded-xl bg-slate-950"
                                        >
                                            {media.videoSrc ? (
                                                <video
                                                    ref={(el) => {
                                                        videoRefs.current[mediaIdx] = el;
                                                    }}
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                    src={media.videoSrc}
                                                    poster={media.posterSrc}
                                                    playsInline
                                                    muted
                                                    loop
                                                />
                                            ) : media.imageSrc ? (
                                                <Image
                                                    src={media.imageSrc}
                                                    alt={`${data.company} ${media.label}`}
                                                    fill
                                                    sizes="(min-width: 768px) 24vw, 48vw"
                                                    className="object-cover"
                                                />
                                            ) : null}
                                            <div
                                                className="pointer-events-none absolute inset-0"
                                                style={{
                                                    background:
                                                        "radial-gradient(55% 35% at 30% 5%, rgba(255,255,255,0.22), transparent 70%)",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                            <div
                                className={`relative overflow-hidden rounded-xl bg-slate-950 ${
                                    singleMediaIsPortrait
                                        ? "mx-auto aspect-[9/16] w-full max-w-[22rem]"
                                        : "aspect-[16/10] w-full"
                                }`}
                            >
                                {mediaItems[0].videoSrc ? (
                                    <video
                                        key={mediaItems[0].videoSrc}
                                        ref={(el) => {
                                            videoRefs.current[0] = el;
                                        }}
                                        className="absolute inset-0 h-full w-full object-cover"
                                        src={mediaItems[0].videoSrc}
                                        poster={mediaItems[0].posterSrc}
                                        playsInline
                                        muted
                                        loop
                                    />
                                ) : mediaItems[0].imageSrc ? (
                                    <Image
                                        src={mediaItems[0].imageSrc}
                                        alt={`${data.company} ${mediaItems[0].label}`}
                                        fill
                                        sizes="(min-width: 768px) 42vw, 100vw"
                                        className="object-cover"
                                    />
                                ) : null}
                                <div
                                    className="pointer-events-none absolute inset-0"
                                    style={{
                                        background:
                                        "radial-gradient(60% 45% at 30% 5%, rgba(255,255,255,0.26), transparent 65%)",
                                    }}
                                />
                            </div>
                            )
                        ) : (
                            <div className="relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-xl bg-[linear-gradient(145deg,rgba(59,130,246,0.18),rgba(15,23,42,0.94)_45%,rgba(16,185,129,0.18))] p-6">
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_80%_85%,rgba(16,185,129,0.16),transparent_30%)]" />
                                <div className="relative">
                                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-200/85">
                                        {data.highlight?.eyebrow ?? "Expérience"}
                                    </p>
                                    <h3 className="mt-3 max-w-xs text-3xl font-bold tracking-tight text-white">
                                        {data.highlight?.title ?? data.company}
                                    </h3>
                                </div>
                                <div className="relative space-y-3">
                                    {(data.highlight?.lines ?? []).map((line) => (
                                        <div
                                            key={line}
                                            className="rounded-2xl border border-white/[0.16] bg-white/[0.12] px-4 py-3 text-sm leading-relaxed text-slate-100 backdrop-blur-md"
                                        >
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Contenu */}
                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
                        className="relative overflow-hidden rounded-3xl border border-white/[0.18] bg-slate-950/62 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl"
                    >
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.16] px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur-xl">
                            {data.icon}
                            <span>{data.period}</span>
                        </div>
                        <h2 className="text-xl font-semibold text-sky-300 drop-shadow-sm">
                            {data.company}
                            {data.location ? (
                                <span className="ml-2 text-sm font-normal text-slate-400">
                                    • {data.location}
                                </span>
                            ) : null}
                        </h2>
                        <div className="mt-4 space-y-3 text-sm text-slate-300">
                            {data.roles.map((r) => (
                                <div key={r.title}>
                                    <div className="mb-1 inline-flex items-center gap-2 font-medium">
                                        <Wrench className="h-4 w-4 opacity-70" />
                                        {r.title}
                                    </div>
                                    <ul className="ml-1 mt-1 list-disc space-y-1 pl-4">
                                        {r.bullets.map((b) => (
                                            <li key={b} className="leading-relaxed">
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {data.tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-white/[0.16] bg-white/[0.14] px-2.5 py-1 text-xs font-medium text-slate-200 backdrop-blur-md"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Flèche “scroll down” */}
            {!isLast && (
                <button
                    onClick={onNext}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/[0.14] bg-white/[0.08] p-2.5 text-slate-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl focus:outline-none transition hover:bg-white/[0.14] hover:text-white"
                    aria-label="Aller à l'expérience suivante"
                >
                    <motion.span
                        initial={{ y: 0, opacity: 0.9 }}
                        animate={{ y: [0, 6, 0], opacity: [0.9, 1, 0.9] }}
                        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                        className="inline-flex"
                    >
                        <ChevronDown className="h-5 w-5" />
                    </motion.span>
                </button>
            )}

        </section>
    );
}

export default function ExperiencesSnapPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    const scrollToIndex = useCallback((index: number) => {
        const container = containerRef.current;
        if (!container) return;

        const bounded = Math.max(0, Math.min(index, items.length - 1));
        const y = container.clientHeight * bounded;
        container.scrollTo({ top: y, behavior: "smooth" });
    }, []);

    const onNext = useCallback(() => {
        scrollToIndex(active + 1);
    }, [active, scrollToIndex]);

    const onPrev = useCallback(() => {
        scrollToIndex(active - 1);
    }, [active, scrollToIndex]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let frame = 0;

        const syncActiveSection = () => {
            const el = containerRef.current;
            if (!el) return;
            const rawIndex = Math.round(el.scrollTop / el.clientHeight);
            const boundedIndex = Math.min(items.length - 1, Math.max(0, rawIndex));
            setActive((prev) => (prev === boundedIndex ? prev : boundedIndex));
        };

        const handleScroll = () => {
            cancelAnimationFrame(frame);
            frame = window.requestAnimationFrame(syncActiveSection);
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        syncActiveSection();

        return () => {
            container.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            if (event.defaultPrevented) return;

            if (event.key === "ArrowDown" || event.key === "PageDown") {
                event.preventDefault();
                onNext();
            }

            if (event.key === "ArrowUp" || event.key === "PageUp") {
                event.preventDefault();
                onPrev();
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    }, [onNext, onPrev]);

    useEffect(() => {
        const handleResize = () => {
            scrollToIndex(active);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [active, scrollToIndex]);

    const progress = useMemo(() => {
        if (items.length <= 1) return 0;
        const ratio = active / (items.length - 1);
        return Math.min(Math.max(ratio, 0), 1);
    }, [active]);

    return (
        <main className="relative min-h-screen overflow-hidden bg-transparent text-slate-900 dark:text-slate-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_68%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(191,219,254,0.1)_0%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0)_100%)] mix-blend-screen" />
            <div
                ref={containerRef}
                className="relative h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory"
            >
                {items.map((item, idx) => (
                    <Section
                        key={item.company}
                        data={item}
                        idx={idx}
                        isActive={idx === active}
                        isLast={idx === items.length - 1}
                        onNext={onNext}
                    />
                ))}
            </div>
            <div className="pointer-events-none absolute right-6 top-1/2 hidden h-48 w-px -translate-y-1/2 overflow-hidden rounded-full bg-white/15 md:block">
                <div
                    className="w-full bg-white/70 transition-all"
                    style={{ height: `${progress * 100}%` }}
                />
            </div>
            <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 md:flex">
                {items.map((item, idx) => (
                    <span
                        key={`${item.company}-${idx}`}
                        className={`h-2.5 w-2.5 rounded-full border border-white/40 transition ${
                            idx === active ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.45)]" : "bg-transparent"
                        }`}
                    />
                ))}
            </div>
        </main>
    );
}
