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

  return (
    <section
      id="orcamento"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b0b0b] px-6 py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-4 py-2 text-sm font-medium uppercase tracking-[0.16em] text-orange-500">
            Simulador de projeto
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Monte seu projeto e descubra{" "}
            <span className="text-orange-500">por onde começar.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Responda algumas perguntas rápidas e veja uma estimativa inicial
            para o seu site.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/35">
            <Check size={16} className="text-orange-500" />
            Leva menos de 1 minuto
          </div>
        </motion.div>

        {/* CARD */}
        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-2xl shadow-black/30">
          {/* PROGRESSO */}
          {step <= totalSteps && (
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    Etapa {step} de {totalSteps}
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    Continue para montar seu projeto
                  </p>
                </div>

                <span className="text-sm font-semibold text-orange-500">
                  {Math.round((step / totalSteps) * 100)}%
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-orange-500"
                  animate={{
                    width: `${(step / totalSteps) * 100}%`,
                  }}
                  transition={{ duration: 0.4 }}
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
                  <StepHeader
                    icon={<Store size={22} />}
                    title="Qual é o seu tipo de negócio?"
                    description="Isso nos ajuda a entender melhor o projeto que você precisa."
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    {businessTypes.map((type) => (
                      <Option
                        key={type}
                        label={type}
                        selected={answers.business === type}
                        onClick={() => updateAnswer("business", type)}
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
                  <StepHeader
                    icon={<Sparkles size={22} />}
                    title="Que tipo de site você precisa?"
                    description="Escolha a opção que mais se aproxima do que você imagina."
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    {websiteTypes.map((type) => (
                      <Option
                        key={type}
                        label={type}
                        selected={answers.website === type}
                        onClick={() => updateAnswer("website", type)}
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
                  <StepHeader
                    icon={<Globe size={22} />}
                    title="Você já possui um domínio?"
                    description="Exemplo: seunegocio.com.br"
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Option
                      label="Sim, já tenho"
                      selected={answers.domain === "Sim, já tenho"}
                      onClick={() =>
                        updateAnswer("domain", "Sim, já tenho")
                      }
                    />

                    <Option
                      label="Não tenho ainda"
                      selected={answers.domain === "Não tenho ainda"}
                      onClick={() =>
                        updateAnswer("domain", "Não tenho ainda")
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
                  <StepHeader
                    icon={<MessageCircle size={22} />}
                    title="Precisa de integração com WhatsApp?"
                    description="Uma forma simples de facilitar o contato dos seus clientes."
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Option
                      label="Sim"
                      selected={answers.whatsapp === "Sim"}
                      onClick={() => updateAnswer("whatsapp", "Sim")}
                    />

                    <Option
                      label="Não"
                      selected={answers.whatsapp === "Não"}
                      onClick={() => updateAnswer("whatsapp", "Não")}
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
                    A partir de{" "}
                    <span className="text-orange-500">R$497</span>
                  </h3>

                  <p className="mx-auto mt-5 max-w-lg leading-7 text-white/50">
                    Esse é um valor inicial. O preço final depende da estrutura,
                    funcionalidades e necessidades específicas do seu projeto.
                  </p>

                  <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                      Resumo do projeto
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

                  <div className="mx-auto mt-8 max-w-md">
                    <button
                      type="button"
                      onClick={() => {
                        sessionStorage.setItem(
                          "orcamento",
                          JSON.stringify(answers)
                        );

                        document
                          .getElementById("contato")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-400"
                    >
                      Quero receber uma proposta
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                    <p className="mt-4 text-xs leading-5 text-white/30">
                      Seus dados do simulador serão usados para agilizar o
                      atendimento.
                    </p>
                  </div>
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
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {step === totalSteps ? "Ver estimativa" : "Continuar"}
                  <ArrowRight size={17} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* PREÇO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-2 text-center text-sm text-white/35"
        >
          <Check size={16} className="text-orange-500" />
          Projetos a partir de R$497, com orçamento definido conforme a
          necessidade do seu negócio.
        </motion.div>
      </div>
    </section>
  );
}

function StepHeader({
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
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
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
      className={`group flex min-h-16 items-center justify-between rounded-2xl border p-4 text-left transition duration-300 ${
        selected
          ? "border-orange-500 bg-orange-500/10 text-white shadow-[0_0_30px_rgba(249,115,22,0.08)]"
          : "border-white/10 bg-white/[0.02] text-white/70 hover:-translate-y-0.5 hover:border-orange-500/30 hover:bg-white/[0.04]"
      }`}
    >
      <span className="font-medium">{label}</span>

      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full border transition ${
          selected
            ? "border-orange-500 bg-orange-500 text-white"
            : "border-white/10 bg-white/[0.03] text-transparent"
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
      <span className="text-right text-sm font-medium text-white">
        {value}
      </span>
    </div>
  );
}