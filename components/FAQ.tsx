"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Quanto custa um site?",
    answer:
      "Os projetos começam a partir de R$497. O valor final depende da estrutura, quantidade de páginas, funcionalidades e necessidades específicas do projeto.",
  },
  {
    question: "O que está incluso no projeto?",
    answer:
      "O projeto pode incluir design personalizado, desenvolvimento, versão para celular, integração com WhatsApp, configurações básicas de SEO e publicação do site.",
  },
  {
    question: "Preciso ter um domínio?",
    answer:
      "Não. Se você ainda não tiver um domínio, podemos orientar você sobre o processo de registro e configuração.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. Os sites são desenvolvidos para se adaptar a diferentes tamanhos de tela, incluindo celulares, tablets e computadores.",
  },
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer:
      "O prazo depende do tamanho e da complexidade do projeto. Depois de entendermos o que você precisa, podemos definir um prazo para o seu caso.",
  },
  {
    question: "Posso pedir alterações no projeto?",
    answer:
      "Sim. O projeto é alinhado com você durante o desenvolvimento para que o resultado final esteja de acordo com a proposta definida.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "A forma de pagamento é combinada de acordo com o projeto e apresentada junto com a proposta.",
  },
  {
    question: "Como faço para começar?",
    answer:
      "Você pode começar pelo simulador acima. Depois, envie seus dados e entre em contato pelo WhatsApp para conversarmos sobre o projeto.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleQuestion(index: number) {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  }

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
          className="mb-14 max-w-3xl"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
            Dúvidas
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Tudo o que você precisa{" "}
            <span className="text-orange-500">
              saber.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Algumas respostas para as principais dúvidas antes
            de começar seu projeto.
          </p>
        </motion.div>

        <div className="space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-orange-500/25 bg-orange-500/[0.04]"
                    : "border-white/10 bg-white/[0.025]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-white sm:text-lg">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                      isOpen
                        ? "border-orange-500/30 bg-orange-500 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/50"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 sm:px-7">
                        <p className="max-w-3xl leading-7 text-white/45">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-orange-500/20 bg-orange-500/[0.06] p-7 sm:p-9"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xl font-semibold">
                Ainda ficou com alguma dúvida?
              </p>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Podemos conversar sobre o seu projeto e entender
                exatamente o que você precisa.
              </p>
            </div>

            <a
              href="#contato"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-400"
            >
              Falar sobre meu projeto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}