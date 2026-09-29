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
      className="border-t border-white/5 bg-[#0b0b0b] px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/5 px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
            Faça seu orçamento
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Descubra quanto pode custar o seu site.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/50">
            Responda algumas perguntas rápidas e descubra o ponto de partida para o
  seu projeto.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/40">
            <Check size={17} className="text-orange-500" />
            Leva menos de 1 minuto
          </div>
        </motion.div>

        {/* CARD */}
        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
          {/* PROGRESSO */}
          {step <= totalSteps && (
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="font-medium text-white">
                    Etapa {step} de {totalSteps}
                  </span>

                  <p className="mt-1 text-white/35">
                    {step === 1 && "Sobre seu negócio"}
                    {step === 2 && "Sobre o seu site"}
                    {step === 3 && "Domínio"}
                    {step === 4 && "Integração"}
                  </p>
                </div>

                <span className="font-semibold text-orange-500">
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
                  <div className="mb-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <Store size={22} />
                    </div>

                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-orange-500">
                      Sobre seu negócio
                    </p>

                    <h3 className="text-2xl font-semibold sm:text-3xl">
                      Qual é o seu tipo de negócio?
                    </h3>

                    <p className="mt-2 text-white/40">
                      Vamos começar entendendo melhor o seu negócio.
                    </p>
                  </div>

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
                  <div className="mb-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <Sparkles size={22} />
                    </div>

                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-orange-500">
                      Sobre o seu site
                    </p>

                    <h3 className="text-2xl font-semibold sm:text-3xl">
                      Que tipo de site você precisa?
                    </h3>

                    <p className="mt-2 text-white/40">
                      Escolha a opção que mais se aproxima do que você imagina.
                    </p>
                  </div>

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
                  <div className="mb-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <Globe size={22} />
                    </div>

                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-orange-500">
                      Domínio
                    </p>

                    <h3 className="text-2xl font-semibold sm:text-3xl">
                      Você já possui um domínio?
                    </h3>

                    <p className="mt-2 text-white/40">
                      Exemplo: seunegocio.com.br
                    </p>
                  </div>

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
                  <div className="mb-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <MessageCircle size={22} />
                    </div>

                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-orange-500">
                      Integração
                    </p>

                    <h3 className="text-2xl font-semibold sm:text-3xl">
                      Precisa de integração com WhatsApp?
                    </h3>

                    <p className="mt-2 text-white/40">
                      Uma forma simples de facilitar o contato dos seus
                      clientes.
                    </p>
                  </div>

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

                  <h3 className="mt-4 text-5xl font-semibold tracking-tight">
                    A partir de R$497
                  </h3>

                  <p className="mx-auto mt-5 max-w-lg leading-7 text-white/50">
                    Essa é uma estimativa inicial. O valor final depende da
                    estrutura, funcionalidades e necessidades específicas do
                    seu negócio.
                  </p>

                  <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
                    <p className="mb-3 text-sm font-medium text-white/40">
                      Resumo do orçamento
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
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-400"
                  >
                    Quero receber uma proposta
                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* NAVEGAÇÃO */}
            {step <= totalSteps && (
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                <button
                  onClick={previousStep}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition hover:text-white disabled:pointer-events-none disabled:opacity-0"
                >
                  <ArrowLeft size={17} />
                  Voltar
                </button>

                <button
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
      </div>
    </section>
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
      className={`flex min-h-16 items-center justify-between rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-orange-500 bg-orange-500/10 text-white"
          : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:bg-white/[0.04]"
      }`}
    >
      <span className="font-medium">{label}</span>

      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full border ${
          selected
            ? "border-orange-500 bg-orange-500"
            : "border-white/15 bg-white/[0.02]"
        }`}
      >
        {selected && <Check size={14} />}
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

      <span className="text-right text-sm font-medium">{value}</span>
    </div>
  );
}