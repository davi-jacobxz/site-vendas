"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [dadosSimulador] = useState(() => {
    const dadosPadrao = {
      business: "",
      website: "",
      domain: "",
      whatsapp: "",
    };

    if (typeof window === "undefined") {
      return dadosPadrao;
    }

    const dados = sessionStorage.getItem("orcamento");

    if (!dados) {
      return dadosPadrao;
    }

    try {
      return JSON.parse(dados);
    } catch {
      return dadosPadrao;
    }
  });

  const [negocio, setNegocio] = useState(
    dadosSimulador.business || ""
  );

  const [site, setSite] = useState(
    dadosSimulador.website || ""
  );

  const [orcamento, setOrcamento] = useState("");
  const [observacoes, setObservacoes] = useState("");

  function enviarWhatsApp(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!nome.trim() || !whatsapp.trim() || !negocio || !site) {
      alert("Preencha os campos obrigatórios.");
      return;
    }

    // Registra o lead no Google Analytics.
    // Usamos dois nomes: "generate_lead" (evento recomendado pelo GA4)
    // e "lead_form_submit" (evento específico do nosso formulário).
    if (typeof window !== "undefined") {
      const gtag = (
        window as typeof window & {
          gtag?: (...args: unknown[]) => void;
        }
      ).gtag;

      gtag?.("event", "generate_lead", {
        currency: "BRL",
        value: 497,
        lead_source: "site",
      });

      gtag?.("event", "lead_form_submit", {
        event_category: "lead",
        event_label: "Formulário de orçamento",
      });
    }

    const dominio =
      dadosSimulador.domain || "Não informado";

    const whatsappSite =
      dadosSimulador.whatsapp || "Não informado";

    const mensagem = `Olá! Quero solicitar um orçamento para um site.

*DADOS DO CLIENTE*

Nome: ${nome}

WhatsApp: ${whatsapp}

*PROJETO*

Tipo de negócio: ${negocio}

Tipo de site: ${site}

*INFORMAÇÕES DO SIMULADOR*

Domínio: ${dominio}

Integração com WhatsApp: ${whatsappSite}

*ORÇAMENTO*

Faixa de orçamento: ${
      orcamento || "Ainda não definido"
    }

*OBSERVAÇÕES*

${observacoes || "Nenhuma"}

Gostaria de receber uma proposta.`;

    const numero = "5516992445413";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensagem
    )}`;

    // Evento específico para o encaminhamento ao WhatsApp
    if (typeof window !== "undefined" && "gtag" in window) {
      (
        window as typeof window & {
          gtag?: (...args: unknown[]) => void;
        }
      ).gtag?.("event", "whatsapp_click", {
        event_category: "lead",
        event_label: "WhatsApp - Formulário",
      });
    }

    window.open(url, "_blank");
  }

  return (
    <section
      id="contato"
      className="border-t border-white/5 bg-[#080808] px-6 py-28 text-white lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            <MessageCircle size={16} />
            Último passo
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Vamos transformar sua ideia em um{" "}
            <span className="text-orange-500">
              site profissional.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Preencha seus dados e envie as informações para
            receber uma proposta personalizada para o seu projeto.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LADO ESQUERDO */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8"
          >
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-orange-500">
              Seu projeto
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Tudo pronto para começar.
            </h3>

            <p className="mt-3 leading-7 text-white/40">
              As informações que você respondeu no simulador
              já foram carregadas. Agora só precisamos dos
              seus dados para continuar.
            </p>

            <div className="mt-8 space-y-4">
              <InfoItem
                label="Tipo de negócio"
                value={
                  negocio || "Ainda não informado"
                }
              />

              <InfoItem
                label="Tipo de site"
                value={
                  site || "Ainda não informado"
                }
              />

              <InfoItem
                label="Domínio"
                value={
                  dadosSimulador.domain ||
                  "Ainda não informado"
                }
              />

              <InfoItem
                label="WhatsApp no site"
                value={
                  dadosSimulador.whatsapp ||
                  "Ainda não informado"
                }
              />
            </div>

            <div className="mt-8 rounded-2xl border border-orange-500/15 bg-orange-500/[0.06] p-5">
              <div className="flex items-start gap-3">
                <Check
                  size={19}
                  className="mt-0.5 shrink-0 text-orange-500"
                />

                <div>
                  <p className="font-semibold">
                    Projetos a partir de R$497
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    O valor final depende da estrutura e das
                    funcionalidades necessárias para o projeto.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORMULÁRIO */}
          <motion.form
            onSubmit={enviarWhatsApp}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* NOME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Seu nome *
                </label>

                <input
                  type="text"
                  value={nome}
                  onChange={(event) =>
                    setNome(event.target.value)
                  }
                  placeholder="Como podemos te chamar?"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                />
              </div>

              {/* WHATSAPP */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Seu WhatsApp *
                </label>

                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(event) =>
                    setWhatsapp(event.target.value)
                  }
                  placeholder="(16) 99999-9999"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                />
              </div>

              {/* NEGÓCIO */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Tipo de negócio *
                </label>

                <select
                  value={negocio}
                  onChange={(event) =>
                    setNegocio(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                >
                  <option value="">Selecione</option>

                  <option value="Restaurante">
                    Restaurante
                  </option>

                  <option value="Salão / Beleza">
                    Salão / Beleza
                  </option>

                  <option value="Clínica">
                    Clínica
                  </option>

                  <option value="Loja">
                    Loja
                  </option>

                  <option value="Profissional autônomo">
                    Profissional autônomo
                  </option>

                  <option value="Outro">
                    Outro
                  </option>
                </select>
              </div>

              {/* SITE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Tipo de site *
                </label>

                <select
                  value={site}
                  onChange={(event) =>
                    setSite(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                >
                  <option value="">Selecione</option>

                  <option value="Landing page">
                    Landing page
                  </option>

                  <option value="Página profissional">
                    Página profissional
                  </option>

                  <option value="Site completo">
                    Site completo
                  </option>

                  <option value="Catálogo de produtos/serviços">
                    Catálogo
                  </option>
                </select>
              </div>

              {/* ORÇAMENTO */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Faixa de orçamento
                </label>

                <select
                  value={orcamento}
                  onChange={(event) =>
                    setOrcamento(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                >
                  <option value="">
                    Ainda não sei
                  </option>

                  <option value="Até R$500">
                    Até R$500
                  </option>

                  <option value="R$500 a R$1.000">
                    R$500 a R$1.000
                  </option>

                  <option value="R$1.000 a R$2.000">
                    R$1.000 a R$2.000
                  </option>

                  <option value="Acima de R$2.000">
                    Acima de R$2.000
                  </option>
                </select>
              </div>

              {/* OBSERVAÇÕES */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  O que você precisa?
                </label>

                <input
                  type="text"
                  value={observacoes}
                  onChange={(event) =>
                    setObservacoes(event.target.value)
                  }
                  placeholder="Conte um pouco sobre o projeto"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                />
              </div>
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-400"
            >
              Enviar e continuar no WhatsApp

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {/* SEGURANÇA */}
            <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-white/25">
              <ShieldCheck size={15} />

              <span>
                Seus dados serão usados apenas para entrar
                em contato sobre o projeto.
              </span>
            </div>

            <p className="mt-3 text-center text-xs text-white/20">
              Ao continuar, você será direcionado para o WhatsApp.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
      <span className="text-sm text-white/35">
        {label}
      </span>

      <span className="max-w-[60%] text-right text-sm font-medium text-white/70">
        {value}
      </span>
    </div>
  );
}