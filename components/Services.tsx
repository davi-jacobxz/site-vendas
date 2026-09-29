"use client";

import { motion } from "framer-motion";

import {
  Globe,
  Smartphone,
  MessageCircle,
  Search,
  Rocket,
  Palette,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites institucionais",
    description:
      "Uma presença profissional para apresentar sua empresa, serviços, informações e formas de contato.",
  },
  {
    icon: Palette,
    title: "Landing pages",
    description:
      "Páginas focadas em uma oferta, serviço ou campanha, com uma estrutura pensada para gerar ação.",
  },
  {
    icon: Smartphone,
    title: "Sites responsivos",
    description:
      "Seu site adaptado para celular, tablet e computador, mantendo uma boa experiência em diferentes telas.",
  },
  {
    icon: MessageCircle,
    title: "Integração com WhatsApp",
    description:
      "Facilite o contato dos seus clientes com botões e chamadas para ação diretamente no site.",
  },
  {
    icon: Search,
    title: "SEO básico",
    description:
      "Configurações fundamentais para ajudar seu site a ser encontrado pelos mecanismos de busca.",
  },
  {
    icon: Rocket,
    title: "Publicação",
    description:
      "Colocamos o projeto no ar e cuidamos da configuração necessária para a publicação.",
  },
];

const steps = [
  {
    number: "01",
    title: "Você conta sua ideia",
    description:
      "Entendemos seu negócio, seus objetivos e o tipo de presença digital que você precisa.",
  },
  {
    number: "02",
    title: "Definimos o projeto",
    description:
      "Organizamos a estrutura e definimos uma proposta de acordo com as necessidades do seu negócio.",
  },
  {
    number: "03",
    title: "Desenvolvemos",
    description:
      "Criamos seu site com design profissional, responsividade e uma experiência pensada para seus visitantes.",
  },
  {
    number: "04",
    title: "Publicamos",
    description:
      "Depois dos ajustes finais, colocamos seu novo site no ar.",
  },
];

export default function Services() {
  return (
    <>
      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="border-t border-white/5 bg-[#080808] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* CABEÇALHO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
              O que fazemos
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Tudo o que você precisa para ter um site{" "}
              <span className="text-orange-500">
                profissional.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
              Do design à publicação, cuidamos da parte
              técnica para você ter uma presença digital
              moderna e preparada para seus clientes.
            </p>
          </motion.div>

          {/* SERVIÇOS */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.04]"
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/0 blur-3xl transition duration-500 group-hover:bg-orange-500/10" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-orange-500 transition duration-300 group-hover:border-orange-500/30 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-white/45">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* DESTAQUE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col gap-5 rounded-3xl border border-orange-500/20 bg-orange-500/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                <Check
                  size={19}
                  className="text-orange-500"
                />
              </div>

              <div>
                <p className="font-semibold">
                  Projetos a partir de R$497
                </p>

                <p className="mt-1 text-sm leading-6 text-white/40">
                  O valor final depende da estrutura e das
                  funcionalidades do projeto.
                </p>
              </div>
            </div>

            <a
              href="#orcamento"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-400"
            >
              Simular meu projeto
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROCESSO */}
      <section
        id="processo"
        className="border-t border-white/5 bg-[#0b0b0b] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* CABEÇALHO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
              Como funciona
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Do primeiro contato ao site{" "}
              <span className="text-orange-500">
                publicado.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
              Um processo simples e direto para você não
              precisar se preocupar com a parte técnica.
            </p>
          </motion.div>

          {/* ETAPAS */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-orange-500">
                    {step.number}
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-white/15 transition group-hover:text-orange-500"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-white/45">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA FINAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-white/40">
              Já sabe o que precisa?
            </p>

            <a
              href="#orcamento"
              className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-orange-500"
            >
              Comece seu orçamento
              <ArrowRight size={19} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}