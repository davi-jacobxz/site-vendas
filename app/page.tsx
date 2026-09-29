"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Simulator from "@/components/Simulator";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5516992445413";

export default function Home() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site da JACOB. e quero solicitar um orçamento para criar um site para o meu negócio."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#inicio"
            className="text-2xl font-black tracking-tight text-white"
          >
            JACOB<span className="text-[#F76303]">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#portfolio"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Projetos
            </a>

            <a
              href="#servicos"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Serviços
            </a>

            <a
              href="#orcamento"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Orçamento
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F76303] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#ff6f18]"
            >
              <MessageCircle size={16} />
              Falar comigo
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#F76303] px-4 py-2.5 text-sm font-semibold text-white md:hidden"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-[90vh] items-center overflow-hidden pt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(247,99,3,0.14),transparent_35%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#F76303]" />
              Websites & Digital
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Seu negócio merece um{" "}
              <span className="text-[#F76303]">site profissional.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/60">
              Criamos sites modernos, responsivos e pensados para apresentar
              seu negócio de forma profissional na internet.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F76303] px-7 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-[#ff6f18]"
              >
                Quero meu site
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Ver projetos
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#F76303]" />
                Projetos a partir de R$497
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#F76303]" />
                Responsivo
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#F76303]" />
                Publicação inclusa
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-[#F76303]/10 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-3">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <span className="text-5xl font-black">
                    JACOB<span className="text-[#F76303]">.</span>
                  </span>

                  <span className="mt-3 text-sm uppercase tracking-[0.3em] text-white/40">
                    Websites & Digital
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <Portfolio />

      {/* SERVICES */}
      <Services />

      {/* CTA ANTES DO ORÇAMENTO */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center sm:p-12">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F76303]">
            Vamos conversar
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            Quer colocar seu negócio na internet?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Me conte o que você precisa e eu te explico como podemos criar seu
            projeto.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F76303] px-7 py-4 font-bold transition hover:scale-105 hover:bg-[#ff6f18]"
          >
            <MessageCircle size={19} />
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* ORÇAMENTO / SIMULADOR */}
      <Simulator />

      {/* FORMULÁRIO */}
      <LeadForm />

      {/* FAQ */}
      <FAQ />

      {/* CTA FINAL */}
      <section className="relative overflow-hidden px-6 py-28 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F76303]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#F76303]/20 bg-gradient-to-br from-[#F76303]/10 via-white/[0.04] to-white/[0.02] px-8 py-16 text-center shadow-2xl shadow-black/40 sm:px-12 sm:py-20">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F76303]">
            Seu próximo projeto começa aqui
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Seu negócio merece uma{" "}
            <span className="text-[#F76303]">presença profissional.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Crie seu site a partir de R$497 e comece a apresentar sua empresa
            de uma forma mais profissional.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-[#F76303] px-8 py-4 font-bold text-white shadow-lg shadow-[#F76303]/20 transition hover:scale-[1.03] hover:bg-[#ff6f18]"
          >
            Quero criar meu site
            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <p className="mt-5 text-sm text-white/40">
            Sem compromisso. Conte sua ideia e receba uma proposta.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}