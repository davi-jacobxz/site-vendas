"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Quanto custa para criar um site?",
    answer:
      "Os projetos começam a partir de R$497. O valor final depende da estrutura, funcionalidades e necessidades específicas de cada projeto.",
  },
  {
    question: "O que está incluso no projeto?",
    answer:
      "O projeto pode incluir estrutura personalizada, design profissional, responsividade para diferentes telas, integração com WhatsApp, configurações básicas de SEO e publicação do site.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. Os sites são desenvolvidos para funcionar em diferentes tamanhos de tela, incluindo celulares, tablets e computadores.",
  },
  {
    question: "Eu preciso ter um domínio?",
    answer:
      "Não necessariamente. Se você ainda não possui um domínio, podemos considerar essa necessidade durante o planejamento do projeto.",
  },
  {
    question: "Vocês colocam o site no ar?",
    answer:
      "Sim. A publicação faz parte do processo de desenvolvimento e configuramos o necessário para colocar o projeto no ar.",
  },
  {
    question: "Posso pedir alterações no projeto?",
    answer:
      "Sim. Os detalhes e ajustes do projeto são alinhados durante o desenvolvimento para que o resultado fique de acordo com a proposta definida.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Você pode começar pelo simulador, responder algumas perguntas sobre o seu projeto e depois enviar seus dados. A partir dessas informações, continuamos a conversa pelo WhatsApp.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="border-t border-white/5 bg-[#0b0b0b] px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Ainda ficou com{" "}
            <span className="text-orange-500">alguma dúvida?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Reunimos algumas das principais dúvidas antes de começar um projeto.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className={`overflow-hidden rounded-2xl border transition duration-300 ${
                  isOpen
                    ? "border-orange-500/30 bg-orange-500/[0.04]"
                    : "border-white/10 bg-white/[0.025] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold sm:text-lg">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                      isOpen
                        ? "rotate-180 border-orange-500/30 bg-orange-500 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/50"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/5 px-5 pb-5 pt-4 text-sm leading-7 text-white/45 sm:px-6">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-3xl border border-orange-500/20 bg-orange-500/[0.05] p-6 text-center sm:flex-row sm:text-left sm:p-8"
        >
          <div>
            <p className="text-xl font-semibold">
              Ainda tem uma dúvida?
            </p>

            <p className="mt-2 text-sm leading-6 text-white/40">
              Fale diretamente comigo e explique o que você precisa.
            </p>
          </div>

          <a
            href="#contato"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-400"
          >
            Falar sobre meu projeto
          </a>
        </motion.div>
      </div>
    </section>
  );
}