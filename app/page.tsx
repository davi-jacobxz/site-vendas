"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Simulator from "@/components/Simulator";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.04] bg-[#080808]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* LOGO */}
          <div className="text-xl font-bold tracking-tight">
            JACOB<span className="text-orange-500">.</span>
          </div>

          {/* MENU */}
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a
              href="#projetos"
              className="transition hover:text-white"
            >
              Projetos
            </a>

            <a
              href="#servicos"
              className="transition hover:text-white"
            >
              Serviços
            </a>

            <a
              href="#processo"
              className="transition hover:text-white"
            >
              Como funciona
            </a>
          </div>

          {/* CTA NAVBAR */}
          <a
            href="#orcamento"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-500 hover:text-white"
          >
            Solicitar orçamento
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:px-8 lg:pt-28">
        {/* GLOW CENTRAL */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/[0.08] blur-[160px]" />

        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/[0.04] blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* BADGE */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-4 py-2 text-sm text-orange-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />

              Sites profissionais para pequenos negócios
            </div>

            {/* TITULO */}
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Seu negócio merece
              <br />
              uma presença{" "}
              <span className="text-orange-500">
                profissional.
              </span>
            </h1>

            {/* DESCRIÇÃO */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
              Criamos sites modernos, rápidos e responsivos
              para apresentar sua empresa de forma profissional
              e facilitar o contato com novos clientes.
            </p>

            {/* PREÇO */}
            <div className="mt-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10">
                <Check
                  size={17}
                  className="text-orange-500"
                />
              </div>

              <div>
                <p className="text-sm text-white/40">
                  Projetos a partir de
                </p>

                <p className="text-xl font-semibold">
                  R$497
                </p>
              </div>
            </div>

            {/* BOTÕES */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#orcamento"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-400"
              >
                Criar meu site

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-4 font-semibold text-white/80 transition hover:border-white/25 hover:bg-white/[0.03] hover:text-white"
              >
                Ver projetos
              </a>
            </div>

            {/* BENEFÍCIOS */}
            <div className="mt-9 flex flex-col gap-3 text-sm text-white/45 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <span className="flex items-center gap-2">
                <Check
                  size={16}
                  className="text-orange-500"
                />
                Design profissional
              </span>

              <span className="flex items-center gap-2">
                <Check
                  size={16}
                  className="text-orange-500"
                />
                Responsivo
              </span>

              <span className="flex items-center gap-2">
                <Check
                  size={16}
                  className="text-orange-500"
                />
                WhatsApp
              </span>
            </div>
          </motion.div>

          {/* MOCKUP */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 35,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative"
          >
            <div className="relative mx-auto max-w-xl">
              {/* GLOW */}
              <div className="absolute -inset-10 rounded-full bg-orange-500/10 blur-3xl" />

              {/* BROWSER */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111] p-2 shadow-2xl shadow-black/50">
                <div className="rounded-[22px] border border-white/5 bg-[#181818] p-5 sm:p-6">
                  {/* BARRA DO NAVEGADOR */}
                  <div className="mb-6 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="h-3 w-3 rounded-full bg-white/10" />

                    <div className="ml-3 flex h-7 flex-1 items-center rounded-lg bg-white/[0.04] px-3">
                      <div className="h-2 w-32 rounded-full bg-white/[0.08]" />
                    </div>
                  </div>

                  {/* SITE SIMULADO */}
                  <div className="relative overflow-hidden rounded-2xl bg-[#0c0c0c] p-6 sm:p-8">
                    {/* BRILHO */}
                    <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

                    {/* NAV */}
                    <div className="relative mb-12 flex items-center justify-between">
                      <div className="h-5 w-20 rounded bg-white/10" />

                      <div className="h-8 w-24 rounded-full bg-orange-500/80" />
                    </div>

                    {/* HERO DO SITE */}
                    <div className="relative max-w-sm">
                      <div className="h-8 w-full rounded bg-white/10" />

                      <div className="mt-3 h-8 w-4/5 rounded bg-white/10" />

                      <div className="mt-5 h-3 w-full rounded bg-white/5" />

                      <div className="mt-2 h-3 w-3/4 rounded bg-white/5" />

                      <div className="mt-7 h-11 w-36 rounded-full bg-orange-500" />
                    </div>

                    {/* CARDS */}
                    <div className="mt-12 grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-xl border border-white/5 bg-white/[0.04]" />

                      <div className="h-20 rounded-xl border border-white/5 bg-white/[0.04]" />

                      <div className="h-20 rounded-xl border border-white/5 bg-white/[0.04]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD FLUTUANTE */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#151515]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-left-8"
              >
                <p className="text-xs text-white/40">
                  Seu próximo projeto
                </p>

                <p className="mt-1 font-semibold">
                  Começa aqui.
                </p>
              </motion.div>

              {/* CARD PREÇO */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                }}
                className="absolute -right-3 -top-4 rounded-2xl border border-orange-500/20 bg-[#121212]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-right-7"
              >
                <p className="text-xs text-white/40">
                  A partir de
                </p>

                <p className="mt-1 text-lg font-semibold text-orange-500">
                  R$497
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJETOS */}
      <Portfolio />

      {/* SERVIÇOS */}
      <Services />

      {/* SIMULADOR */}
      <Simulator />

      {/* FORMULÁRIO */}
      <LeadForm />

      {/* FAQ */}
      <FAQ />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}