"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight, Download } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

const contacts = [
  {
    href: "mailto:etienne.veau@etu.uca.fr",
    label: "Écrire un email",
    sublabel: "etienne.veau@etu.uca.fr",
    icon: Mail,
    primary: true,
  },
  {
    href: "https://www.linkedin.com/in/etienne-veau-092883258",
    label: "LinkedIn",
    sublabel: "Etienne Veau",
    icon: Linkedin,
    primary: false,
  },
  {
    href: "https://github.com/veau-etienne",
    label: "GitHub",
    sublabel: "veau-etienne",
    icon: Github,
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pt-24 pb-20">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
            Restons en contact
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Me contacter
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-slate-400">
            Actuellement stagiaire chez CGI, intégré à une équipe au centre de recherche Michelin de
            Ladoux, et à la recherche d&apos;une alternance pour septembre 2026.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="flex flex-col gap-3">
          {contacts.map(({ href, label, sublabel, icon: Icon, primary }, i) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.08 }}
              className={`group relative flex items-center gap-5 overflow-hidden rounded-2xl border px-7 py-5 transition-all hover:-translate-y-0.5 ${
                primary
                  ? "border-white/[0.16] bg-white/[0.07] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_60px_-24px_rgba(59,130,246,0.35)] backdrop-blur-2xl hover:border-white/[0.24] hover:bg-white/[0.10]"
                  : "border-white/[0.08] bg-white/[0.03] backdrop-blur-xl hover:border-white/[0.14] hover:bg-white/[0.06]"
              }`}
            >
              {primary && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_0%_50%,rgba(59,130,246,0.12),transparent_55%)]" />
              )}
              {primary && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
              )}

              <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                primary ? "border-white/[0.15] bg-white/[0.08]" : "border-white/[0.08] bg-white/[0.04]"
              }`}>
                <Icon className={`h-5 w-5 ${primary ? "text-slate-200" : "text-slate-400"} transition group-hover:text-white`} />
              </div>

              <div className="relative min-w-0 flex-1">
                <p className={`text-sm font-semibold ${primary ? "text-white" : "text-slate-300"}`}>
                  {label}
                </p>
                <p className="truncate text-xs text-slate-500">{sublabel}</p>
              </div>

              <ArrowUpRight className="relative h-4 w-4 shrink-0 text-slate-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-300" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.34 }}
          className="mt-4 flex flex-col gap-4 rounded-2xl border border-white/[0.10] bg-white/[0.04] px-7 py-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-sm font-semibold text-white">Mon CV</p>
            <p className="mt-1 text-sm text-slate-400">
              Version PDF de mon parcours, de mes experiences et de mes projets.
            </p>
          </div>

          <a
            href={withBasePath("/cv.pdf")}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-slate-950 transition hover:-translate-y-0.5"
          >
            <Download className="h-3.5 w-3.5" />
            Telecharger
          </a>
        </motion.div>

        {/* Bottom status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          <p className="text-xs text-slate-500">
            Stagiaire chez CGI · Michelin Ladoux · Recherche alternance septembre 2026
          </p>
        </motion.div>
      </div>
    </main>
  );
}
