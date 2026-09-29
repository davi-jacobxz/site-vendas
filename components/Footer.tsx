"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 px-6 py-12 sm:px-10 lg:px-14">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
                Vamos começar?
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Seu negócio merece uma presença profissional.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
                Conte sua ideia, explique o que você precisa e vamos transformar
                isso em um site profissional para o seu negócio.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="#orcamento"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-semibold text-black transition hover:bg-orange-400"
              >
                Começar meu projeto
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#portfolio"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 px-6 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
              >
                Ver projetos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-8 lg:px-12">
          {/* Topo */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div>
              <a
                href="#"
                className="inline-block text-2xl font-bold tracking-tight text-white"
              >
                JACOB<span className="text-orange-500">.</span>
              </a>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                Websites profissionais para pequenos negócios que querem
                construir uma presença forte na internet.
              </p>
            </div>

            {/* Navegação */}
            <nav className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm sm:grid-cols-3">
              <a
                href="#portfolio"
                className="text-white/50 transition hover:text-white"
              >
                Projetos
              </a>

              <a
                href="#servicos"
                className="text-white/50 transition hover:text-white"
              >
                Serviços
              </a>

              <a
                href="#processo"
                className="text-white/50 transition hover:text-white"
              >
                Processo
              </a>

              <a
                href="#orcamento"
                className="text-white/50 transition hover:text-white"
              >
                Orçamento
              </a>

              <a
                href="#faq"
                className="text-white/50 transition hover:text-white"
              >
                FAQ
              </a>

              <a
                href="#contato"
                className="text-white/50 transition hover:text-white"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Instagram */}
          <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/30">
              Acompanhe a JACOB nas redes.
            </p>

            <a
              href="https://www.instagram.com/dev.jacobxz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da JACOB"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/10 px-5 text-sm text-white/50 transition hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500"
            >
              {/* Ícone Instagram */}
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line
                  x1="17.5"
                  x2="17.51"
                  y1="6.5"
                  y2="6.5"
                />
              </svg>

              @dev.jacobxz
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} JACOB. Websites & Digital.</p>

            <p>Feito para negócios que querem crescer na internet.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}