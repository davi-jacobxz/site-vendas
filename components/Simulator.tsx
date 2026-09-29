"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const businesses = [
  "Restaurante",
  "Salão / Beleza",
  "Clínica",
  "Loja",
  "Profissional autônomo",
  "Outro",
];

const websites = [
  "Landing page",
  "Página profissional",
  "Site completo",
  "Catálogo / Loja",
];

const currents = [
  "Não tenho site",
  "Tenho, mas quero refazer",
  "Só tenho Instagram",
];

const deadlines = [
  "Agora",
  "Nos próximos 30 dias",
  "Só pesquisando",
];

const budgets = [
  "R$500 a R$1.000",
  "R$1.000 a R$2.000",
  "Acima de R$2.000",
  "Prefiro conversar antes",
];

const empty = {
  business: "",
  website: "",
  current: "",
  deadline: "",
  budget: "",
  name: "",
  whatsapp: "",
  email: "",
  notes: "",
  otherBusiness: "",
};

type Answers = typeof empty;

type Gtag = (
  command: "event",
  eventName: string,
  params?: Record<string, unknown>
) => void;

const track = (
  name: string,
  params: Record<string, unknown> = {}
) => {
  if (typeof window === "undefined") return;

  const gtag = (window as typeof window & { gtag?: Gtag }).gtag;

  if (gtag) {
    gtag("event", name, params);
  }

  window.dispatchEvent(
    new CustomEvent("jacob:track", {
      detail: { name, params },
    })
  );
};

const digits = (value: string) =>
  value.replace(/\D/g, "").slice(0, 11);

const mask = (value: string) => {
  const number = digits(value);

  if (number.length <= 2) {
    return number ? `(${number}` : "";
  }

  if (number.length <= 7) {
    return `(${number.slice(0, 2)}) ${number.slice(2)}`;
  }

  return `(${number.slice(0, 2)}) ${number.slice(
    2,
    7
  )}-${number.slice(7)}`;
};

function attribution(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);

  const output: Record<string, string> = {};

  [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "fbclid",
    "gclid",
  ].forEach((key) => {
    const value =
      params.get(key) ||
      sessionStorage.getItem(`jacob_${key}`);

    if (value) {
      output[key] = value;
      sessionStorage.setItem(`jacob_${key}`, value);
    }
  });

  output.landing_page = window.location.href;

  return output;
}

function getInitialAnswers(): Answers {
  if (typeof window === "undefined") {
    return empty;
  }

  const old = sessionStorage.getItem("jacob_simulador");

  if (!old) {
    return empty;
  }

  try {
    return {
      ...empty,
      ...JSON.parse(old),
    };
  } catch {
    return empty;
  }
}

export default function Simulator() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] =
    useState<Answers>(getInitialAnswers);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const total = 6;

  useEffect(() => {
    const element = document.getElementById("orcamento");

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track("view_content", {
            content_name: "simulador",
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "jacob_simulador",
      JSON.stringify(answers)
    );
  }, [answers]);

  const can =
    step === 1
      ? !!answers.business &&
        (answers.business !== "Outro" ||
          !!answers.otherBusiness.trim())
      : step === 2
        ? !!answers.website
        : step === 3
          ? !!answers.current
          : step === 4
            ? !!answers.deadline
            : step === 5
              ? !!answers.budget
              : !!answers.name.trim() &&
                digits(answers.whatsapp).length === 11;

  const update = (
    key: keyof Answers,
    value: string
  ) => {
    setAnswers((current) => ({
      ...current,
      [key]: value,
    }));
  };

  async function save(partial = false) {
    const score =
      answers.deadline === "Agora" &&
      [
        "R$1.000 a R$2.000",
        "Acima de R$2.000",
      ].includes(answers.budget)
        ? "alto"
        : answers.deadline === "Nos próximos 30 dias"
          ? "médio"
          : "baixo";

    const body = {
      nome: answers.name.trim(),
      whatsapp: digits(answers.whatsapp),
      email: answers.email.trim() || null,
      negocio:
        answers.business === "Outro"
          ? answers.otherBusiness.trim()
          : answers.business,
      site: answers.website,
      orcamento: answers.budget,
      prazo: answers.deadline,
      observacoes: answers.notes.trim() || null,
      score,
      partial,
      consent_lgpd: true,
      consent_at: new Date().toISOString(),
      honeypot,
      ...attribution(),
    };

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error ||
          "Não foi possível salvar seus dados."
      );
    }

    return data;
  }

  async function next() {
    if (!can) return;

    setError("");

    track(`simulador_etapa_${step}`, {
      step,
    });

    if (step === 1) {
      track("simulador_iniciado", {
        location: "simulador",
      });
    }

    if (step < 6) {
      setStep((current) => current + 1);
      return;
    }

    setLoading(true);

    try {
      await save(false);

      setSaved(true);

      track("generate_lead", {
        currency: "BRL",
        value: 497,
      });

      track("lead", {
        lead_source: "simulador",
      });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  async function partial() {
    if (
      answers.name.trim() &&
      digits(answers.whatsapp).length === 11 &&
      !saved
    ) {
      try {
        await save(true);
      } catch {
        // O salvamento parcial não deve bloquear o usuário.
      }
    }
  }

  const message =
    "Olá! Sou " +
    answers.name +
    ". Quero falar sobre um site para meu negócio. " +
    "Negócio: " +
    (answers.business === "Outro"
      ? answers.otherBusiness
      : answers.business) +
    ". Site: " +
    answers.website +
    ". Prazo: " +
    answers.deadline +
    ".";

  const whats =
    "https://wa.me/5516992445413?text=" +
    encodeURIComponent(message);

  return (
    <section
      id="orcamento"
      className="scroll-mt-16 border-y border-white/5 bg-[#070707] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">
              Simulador de projeto
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">
              Descubra em 1 minuto quanto pode custar seu site.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/45">
              Uma pergunta por vez. No final, você recebe uma
              estimativa inicial e decide se quer continuar no
              WhatsApp.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/55">
              <div className="flex gap-3">
                <Check
                  className="text-[#F76303]"
                  size={18}
                />
                Sem compromisso
              </div>

              <div className="flex gap-3">
                <Check
                  className="text-[#F76303]"
                  size={18}
                />
                Projetos a partir de R$497
              </div>

              <div className="flex gap-3">
                <Check
                  className="text-[#F76303]"
                  size={18}
                />
                Dados salvos antes do WhatsApp
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] shadow-2xl">
            {!saved && (
              <div className="border-b border-white/10 px-6 py-5">
                <div className="flex justify-between text-xs font-bold uppercase tracking-[.12em] text-white/35">
                  <span>
                    Etapa {step} de {total}
                  </span>

                  <span className="text-[#F76303]">
                    {Math.round((step / total) * 100)}%
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full bg-[#F76303]"
                    animate={{
                      width:
                        `${(step / total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            )}

            <div className="p-6 sm:p-10">
              {saved ? (
                <Success
                  answers={answers}
                  url={whats}
                />
              ) : (
                <>
                  <input
                    aria-hidden="true"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(event) =>
                      setHoneypot(event.target.value)
                    }
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    autoComplete="off"
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{
                        opacity: 0,
                        x: 18,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -18,
                      }}
                    >
                      {step === 1 && (
                        <Question
                          title="Qual é o seu tipo de negócio?"
                          sub="Isso ajuda a adaptar a estrutura do projeto."
                        >
                          <Options
                            values={businesses}
                            selected={answers.business}
                            onSelect={(value) =>
                              update("business", value)
                            }
                          />

                          {answers.business === "Outro" && (
                            <input
                              value={answers.otherBusiness}
                              onChange={(event) =>
                                update(
                                  "otherBusiness",
                                  event.target.value
                                )
                              }
                              placeholder="Qual é o seu negócio?"
                              className="mt-3 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-[#F76303]"
                            />
                          )}
                        </Question>
                      )}

                      {step === 2 && (
                        <Question
                          title="O que você precisa?"
                          sub="Escolha o formato mais próximo do que você imagina."
                        >
                          <Options
                            values={websites}
                            selected={answers.website}
                            onSelect={(value) =>
                              update("website", value)
                            }
                          />
                        </Question>
                      )}

                      {step === 3 && (
                        <Question
                          title="Como está hoje?"
                          sub="Sem julgamento. Queremos entender seu ponto de partida."
                        >
                          <Options
                            values={currents}
                            selected={answers.current}
                            onSelect={(value) =>
                              update("current", value)
                            }
                          />
                        </Question>
                      )}

                      {step === 4 && (
                        <Question
                          title="Quando você quer começar?"
                          sub="Isso ajuda a organizar o atendimento."
                        >
                          <Options
                            values={deadlines}
                            selected={answers.deadline}
                            onSelect={(value) =>
                              update("deadline", value)
                            }
                          />
                        </Question>
                      )}

                      {step === 5 && (
                        <Question
                          title="Quanto pretende investir?"
                          sub="Não é compromisso. É só para entender o nível de projeto que faz sentido."
                        >
                          <Options
                            values={budgets}
                            selected={answers.budget}
                            onSelect={(value) =>
                              update("budget", value)
                            }
                          />
                        </Question>
                      )}

                      {step === 6 && (
                        <Question
                          title="Onde posso falar com você?"
                          sub="WhatsApp é obrigatório. E-mail é opcional."
                        >
                          <div className="space-y-4">
                            <Field
                              label="Nome *"
                              value={answers.name}
                              onChange={(value) =>
                                update("name", value)
                              }
                              placeholder="Seu nome"
                              onBlur={partial}
                            />

                            <Field
                              label="WhatsApp *"
                              value={answers.whatsapp}
                              onChange={(value) =>
                                update(
                                  "whatsapp",
                                  mask(value)
                                )
                              }
                              placeholder="(16) 99999-9999"
                              onBlur={partial}
                            />

                            <Field
                              label="E-mail"
                              value={answers.email}
                              onChange={(value) =>
                                update("email", value)
                              }
                              placeholder="voce@empresa.com"
                            />

                            <div>
                              <label className="mb-2 block text-sm font-semibold text-white/70">
                                Conte rapidamente o que você
                                precisa
                              </label>

                              <textarea
                                value={answers.notes}
                                onChange={(event) =>
                                  update(
                                    "notes",
                                    event.target.value
                                  )
                                }
                                rows={4}
                                placeholder="Ex.: quero apresentar meus serviços e receber clientes pelo WhatsApp."
                                className="w-full resize-none rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-[#F76303]"
                              />
                            </div>

                            <label className="flex gap-3 text-xs leading-5 text-white/40">
                              <input
                                type="checkbox"
                                checked
                                readOnly
                                className="mt-1 accent-orange-500"
                              />

                              <span>
                                Ao enviar, você concorda com o
                                uso dos dados para contato sobre
                                o projeto, conforme nossa{" "}
                                <a
                                  href="/privacidade"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white underline"
                                >
                                  Política de Privacidade
                                </a>
                                .
                              </span>
                            </label>
                          </div>
                        </Question>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {error && (
                    <p className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <div className="mt-8 flex gap-3">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          setStep((current) => current - 1)
                        }
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 text-white/60"
                      >
                        <ArrowLeft size={18} />
                      </button>
                    )}

                    <button
                      type="button"
                      disabled={!can || loading}
                      onClick={next}
                      className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#F76303] font-black disabled:opacity-40"
                    >
                      {loading ? (
                        <>
                          <Loader2
                            className="animate-spin"
                            size={18}
                          />
                          Salvando...
                        </>
                      ) : step === 6 ? (
                        <>
                          Receber estimativa
                          <ArrowRight size={18} />
                        </>
                      ) : (
                        <>
                          Continuar
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 flex justify-center gap-2 text-center text-xs text-white/25">
                    <ShieldCheck size={14} />
                    Seus dados ficam registrados antes do WhatsApp.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Question({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-2xl font-black sm:text-3xl">
        {title}
      </h3>

      <p className="mt-2 text-sm text-white/40">
        {sub}
      </p>

      <div className="mt-7">
        {children}
      </div>
    </div>
  );
}

function Options({
  values,
  selected,
  onSelect,
}: {
  values: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {values.map((value) => (
        <button
          type="button"
          key={value}
          onClick={() => onSelect(value)}
          className={
            "min-h-14 rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition " +
            (selected === value
              ? "border-[#F76303] bg-[#F76303]/10 text-white"
              : "border-white/10 bg-black text-white/60 hover:border-white/25 hover:text-white")
          }
        >
          {value}
        </button>
      ))}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  onBlur,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onBlur?: () => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-white/70">
        {label}
      </label>

      <input
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none placeholder:text-white/20 focus:border-[#F76303]"
      />
    </div>
  );
}

function Success({
  answers,
  url,
}: {
  answers: Answers;
  url: string;
}) {
  const firstName =
    answers.name.trim().split(" ")[0] || "você";

  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F76303]/10 text-[#F76303]">
        <Check size={30} />
      </div>

      <p className="mt-6 text-xs font-black uppercase tracking-[.2em] text-[#F76303]">
        Simulação recebida
      </p>

      <h3 className="mt-3 text-3xl font-black sm:text-4xl">
        Pronto, {firstName}.
      </h3>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-white/45">
        Seu projeto parte de{" "}
        <strong className="text-white">
          R$497
        </strong>
        . O valor final depende do escopo e das
        funcionalidades.
      </p>

      <div className="mx-auto mt-7 max-w-md rounded-2xl border border-white/10 bg-black p-5 text-left text-sm">
        <div className="flex justify-between border-b border-white/5 pb-3">
          <span className="text-white/35">
            Negócio
          </span>

          <strong>
            {answers.business === "Outro"
              ? answers.otherBusiness
              : answers.business}
          </strong>
        </div>

        <div className="flex justify-between pt-3">
          <span className="text-white/35">
            Prazo
          </span>

          <strong>{answers.deadline}</strong>
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          track("contact", {
            method: "WhatsApp",
          })
        }
        className="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] font-black"
      >
        <MessageCircle size={19} />
        Continuar no WhatsApp
      </a>
    </div>
  );
}