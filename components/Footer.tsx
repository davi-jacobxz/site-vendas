"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808] text-white">
      {/* CTA FINAL */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-orange-500/[0.06] px-6 py-16 text-center sm:px-10 lg:py-20"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
                Vamos começar?
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-7xl">
                Seu negócio merece uma presença{" "}
                <span className="text-orange-500">
                  profissional.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/45">
                Conte sua ideia, descubra as possibilidades e dê
                o próximo passo para colocar seu negócio na
                internet.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#orcamento"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-400"
                >
                  Começar meu projeto
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-4 font-semibold text-white/70 transition hover:border-white/20 hover:bg-white/[0.03] hover:text-white"
                >
                  Ver projetos
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RODAPÉ */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-bold tracking-tight">
              JACOB<span className="text-orange-500">.</span>
            </div>

            <p className="mt-2 text-sm text-white/35">
              Websites & Digital
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40">
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
              Processo
            </a>

            <a
              href="#faq"
              className="transition hover:text-white"
            >
              FAQ
            </a>

            <a
              href="#contato"
              className="transition hover:text-white"
            >
              Contato
            </a>
          </nav>

         <a
  href="https://instagram.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 items-center justify-center rounded-full border border-white/10 px-4 text-sm text-white/50 transition hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500"
>
  Instagram
</a>
        </div>

        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>
              © {new Date().getFullYear()} JACOB. Todos os direitos reservados.
            </p>

            <p>
              Websites & Digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}