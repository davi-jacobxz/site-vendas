"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Globe,
  MessageCircle,
  Store,
  Sparkles,
} from "lucide-react";

const businessTypes = [
  "Restaurante",
  "Salão / Beleza",
  "Clínica",
  "Loja",
  "Profissional autônomo",
  "Outro",
];

const websiteTypes = [
  "Landing page",
  "Página profissional",
  "Site completo",
  "Catálogo de produtos/serviços",
];

export default function Simulator() {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState({
    business: "",
    website: "",
    domain: "",
    whatsapp: "",
  });

  const totalSteps = 4;

  const updateAnswer = (key: string, value: string) => {
    setAnswers((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep((current) => current + 1);
    } else {
      setStep(5);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  };

  const canContinue = () => {
    if (step === 1) return answers.business !== "";
    if (step === 2) return answers.website !== "";
    if (step === 3) return answers.domain !== "";
    if (step === 4) return answers.whatsapp !== "";

    return true;
  };

  const progress = (step / totalSteps) * 100;

  return (
    <section
      id="orcamento"
      className="border-t border-white/5 bg-[#0b0b0b] px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-4 py-2 text-sm font-medium uppercase tracking-[0.15em] text-orange-500">
            Simulador de projeto
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Descubra como pode ser o seu{" "}
            <span className="text-orange-500">site.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Responda algumas perguntas rápidas para receber uma estimativa
            inicial do seu projeto.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/35">
            <span className="flex items-center gap-2">
              <Check size={15} className="text-orange-500" />
              Rápido
            </span>

            <span className="flex items-center gap-2">
              <Check size={15} className="text-orange-500" />
              Sem compromisso
            </span>

            <span className="flex items-center gap-2">
              <Check size={15} className="text-orange-500" />
              A partir de R$497
            </span>
          </div>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-2xl shadow-black/20"
        >
          {/* PROGRESSO */}
          {step <= totalSteps && (
            <div className="border-b border-white/10 px-6 py-5 sm:px-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/70">
                    Etapa {step} de {totalSteps}
                  </p>

                  <p className="mt-1 text-xs text-white/30">
                    Leva menos de 1 minuto
                  </p>
                </div>

                <span className="text-sm font-semibold text-orange-500">
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-orange-500"
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          )}

          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {/* ETAPA 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <QuestionHeader
                    icon={<Store size={22} />}
                    title="Qual é o seu tipo de negócio?"
                    description="Escolha a opção que mais combina com sua empresa."
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    {businessTypes.map((type) => (
                      <Option
                        key={type}
                        label={type}
                        selected={answers.business === type}
                        onClick={() =>
                          updateAnswer("business", type)
                        }
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ETAPA 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <QuestionHeader
                    icon={<Sparkles size={22} />}
                    title="Que tipo de site você precisa?"
                    description="Escolha a estrutura mais próxima do que você imagina."
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    {websiteTypes.map((type) => (
                      <Option
                        key={type}
                        label={type}
                        selected={answers.website === type}
                        onClick={() =>
                          updateAnswer("website", type)
                        }
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ETAPA 3 */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <QuestionHeader
                    icon={<Globe size={22} />}
                    title="Você já possui um domínio?"
                    description="Por exemplo: seunegocio.com.br"
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Option
                      label="Sim, já tenho"
                      selected={
                        answers.domain === "Sim, já tenho"
                      }
                      onClick={() =>
                        updateAnswer(
                          "domain",
                          "Sim, já tenho"
                        )
                      }
                    />

                    <Option
                      label="Não tenho ainda"
                      selected={
                        answers.domain ===
                        "Não tenho ainda"
                      }
                      onClick={() =>
                        updateAnswer(
                          "domain",
                          "Não tenho ainda"
                        )
                      }
                    />
                  </div>
                </motion.div>
              )}

              {/* ETAPA 4 */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <QuestionHeader
                    icon={<MessageCircle size={22} />}
                    title="Precisa de integração com WhatsApp?"
                    description="Facilite o contato dos seus clientes diretamente pelo site."
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Option
                      label="Sim"
                      selected={answers.whatsapp === "Sim"}
                      onClick={() =>
                        updateAnswer("whatsapp", "Sim")
                      }
                    />

                    <Option
                      label="Não"
                      selected={answers.whatsapp === "Não"}
                      onClick={() =>
                        updateAnswer("whatsapp", "Não")
                      }
                    />
                  </div>
                </motion.div>
              )}

              {/* RESULTADO */}
              {step === 5 && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                    <Check size={28} />
                  </div>

                  <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
                    Estimativa inicial
                  </p>

                  <h3 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
                    A partir de R$497
                  </h3>

                  <p className="mx-auto mt-5 max-w-lg leading-7 text-white/50">
                    O valor final depende da estrutura,
                    funcionalidades e necessidades específicas
                    do seu negócio.
                  </p>

                  {/* RESUMO */}
                  <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                      Seu projeto
                    </p>

                    <Summary
                      label="Negócio"
                      value={answers.business}
                    />

                    <Summary
                      label="Tipo de site"
                      value={answers.website}
                    />

                    <Summary
                      label="Domínio"
                      value={answers.domain}
                    />

                    <Summary
                      label="WhatsApp"
                      value={answers.whatsapp}
                    />
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => {
                      sessionStorage.setItem(
                        "orcamento",
                        JSON.stringify(answers)
                      );

                      document
                        .getElementById("contato")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-400 sm:w-auto"
                  >
                    Quero receber uma proposta
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="mt-4 text-xs text-white/25">
                    Você poderá conversar diretamente pelo WhatsApp.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* NAVEGAÇÃO */}
            {step <= totalSteps && (
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                <button
                  type="button"
                  onClick={previousStep}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition hover:text-white disabled:pointer-events-none disabled:opacity-0"
                >
                  <ArrowLeft size={17} />
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canContinue()}
                  className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {step === totalSteps
                    ? "Ver estimativa"
                    : "Continuar"}

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuestionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h3>

      <p className="mt-2 text-white/40">{description}</p>
    </div>
  );
}

function Option({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-16 items-center justify-between rounded-2xl border p-4 text-left transition duration-200 ${
        selected
          ? "border-orange-500 bg-orange-500/10 text-white"
          : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:bg-white/[0.04]"
      }`}
    >
      <span className="font-medium">{label}</span>

      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
          selected
            ? "border-orange-500 bg-orange-500 text-white"
            : "border-white/10 bg-white/[0.03] text-transparent group-hover:border-white/20"
        }`}
      >
        <Check size={14} />
      </span>
    </button>
  );
}

function Summary({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 py-3 last:border-0">
      <span className="text-sm text-white/40">{label}</span>

      <span className="max-w-[60%] text-right text-sm font-medium">
        {value}
      </span>
    </div>
  );
}