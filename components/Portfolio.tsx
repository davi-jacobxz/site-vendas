"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Clara Alcântara",
    category: "Studio de Unhas",
    description:
      "Presença digital sofisticada para um negócio de beleza, com foco em serviços, apresentação visual e contato.",
    url: "https://clara-alcantara.vercel.app",
    accent: "from-pink-500/30 to-purple-500/10",
  },
  {
    title: "Dra. Natalia Dario",
    category: "Clínica Odontológica",
    description:
      "Site institucional desenvolvido para apresentar serviços, autoridade profissional e facilitar o contato.",
    url: "https://dra-natalia-dario-beta.vercel.app",
    accent: "from-cyan-500/30 to-blue-500/10",
  },
  {
    title: "Iron Forge",
    category: "Academia / Fitness",
    description:
      "Experiência visual forte para uma marca fitness, com identidade marcante e apresentação dos serviços.",
    url: "https://iron-forge-dusky.vercel.app",
    accent: "from-red-500/30 to-orange-500/10",
  },
  {
    title: "Bar do Renato",
    category: "Bar / Restaurante",
    description:
      "Site desenvolvido para apresentar o ambiente, a experiência do estabelecimento e facilitar o contato.",
    url: "https://bar-do-renato.vercel.app",
    accent: "from-yellow-500/20 to-orange-500/10",
  },
  {
    title: "LGA Studio",
    category: "Impressão 3D",
    description:
      "Landing page moderna para uma empresa de impressão 3D, com foco em produto, identidade e conversão.",
    url: "https://lga-studio-landing.vercel.app",
    accent: "from-orange-500/30 to-yellow-500/10",
  },
];

export default function Portfolio() {
  return (
    <section
      id="projetos"
      className="relative overflow-hidden border-t border-white/5 bg-[#080808] px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
            Portfólio
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Projetos que colocamos{" "}
            <span className="text-orange-500">
              no ar.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Conheça alguns dos sites que desenvolvemos para
            diferentes tipos de negócios, cada um com uma
            proposta visual e estrutura pensadas para o
            projeto.
          </p>
        </motion.div>

        {/* PROJETOS */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-orange-500/30"
            >
              {/* PREVIEW */}
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Browser */}
                <div className="absolute left-[7%] right-[7%] top-[8%] h-[84%] overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-2xl transition duration-700 group-hover:scale-[1.025]">
                  {/* Browser header */}
                  <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />

                    <div className="ml-3 h-3 flex-1 rounded-full bg-white/5" />
                  </div>

                  {/* Preview */}
                  <iframe
                    src={project.url}
                    title={`Preview do projeto ${project.title}`}
                    className="h-[calc(100%-32px)] w-full bg-white"
                    loading="lazy"
                  />
                </div>

                {/* Number */}
                <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-white/60 backdrop-blur-md">
                  0{index + 1}
                </div>
              </div>

              {/* INFORMAÇÕES */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-orange-500">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir projeto ${project.title}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-orange-500 group-hover:bg-orange-500"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="mt-4 max-w-xl leading-7 text-white/50">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-orange-500"
                >
                  Ver projeto
                  <ExternalLink size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-xl font-semibold">
              Quer um projeto assim para o seu negócio?
            </p>

            <p className="mt-2 text-sm text-white/40">
              Conte sua ideia e veja as possibilidades para
              o seu site.
            </p>
          </div>

          <a
            href="#orcamento"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-400"
          >
            Começar meu projeto
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}