"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [dadosSimulador] = useState(() => {
    if (typeof window === "undefined") {
      return {
        business: "",
        website: "",
        domain: "",
        whatsapp: "",
      };
    }

    const dados = sessionStorage.getItem("orcamento");

    if (!dados) {
      return {
        business: "",
        website: "",
        domain: "",
        whatsapp: "",
      };
    }

    try {
      return JSON.parse(dados);
    } catch {
      return {
        business: "",
        website: "",
        domain: "",
        whatsapp: "",
      };
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

    if (!nome || !whatsapp || !negocio || !site) {
      alert("Preencha os campos obrigatórios.");
      return;
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

    window.open(url, "_blank");
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-white/5 bg-[#080808] px-6 py-28 text-white lg:px-8"
    >
      {/* EFEITO DE FUNDO */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-4 py-2 text-sm text-orange-400">
            <MessageCircle size={16} />
            Vamos conversar
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Seu próximo site pode{" "}
            <span className="text-orange-500">
              começar aqui.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Envie algumas informações sobre o seu projeto.
            Depois disso, você será direcionado para o WhatsApp
            para continuarmos a conversa.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* LADO ESQUERDO */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
              <Sparkles size={21} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              O que acontece depois?
            </h3>

            <div className="mt-7 space-y-6">
              <InfoStep
                number="01"
                title="Você envia seus dados"
                description="Preencha as informações básicas sobre o projeto."
              />

              <InfoStep
                number="02"
                title="Abrimos a conversa"
                description="Os dados serão enviados para o nosso WhatsApp."
              />

              <InfoStep
                number="03"
                title="Entendemos sua necessidade"
                description="Conversamos sobre estrutura, visual e funcionalidades."
              />

              <InfoStep
                number="04"
                title="Receba sua proposta"
                description="Com as informações do projeto, definimos a proposta adequada."
              />
            </div>

            <div className="mt-8 rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-5">
              <div className="flex items-start gap-3">
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-orange-500"
                />

                <div>
                  <p className="font-semibold">
                    Projetos a partir de R$497
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    O valor final é definido de acordo com a
                    estrutura e as necessidades do projeto.
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-orange-500">
                Seus dados
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Conte um pouco sobre seu projeto.
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Os campos com * são obrigatórios.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* NOME */}
              <Field
                label="Seu nome *"
                value={nome}
                onChange={setNome}
                placeholder="Como podemos te chamar?"
              />

              {/* WHATSAPP */}
              <Field
                label="Seu WhatsApp *"
                value={whatsapp}
                onChange={setWhatsapp}
                placeholder="(16) 99999-9999"
              />

              {/* NEGÓCIO */}
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Tipo de negócio *
                </label>

                <select
                  value={negocio}
                  onChange={(event) =>
                    setNegocio(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3.5 text-white outline-none transition focus:border-orange-500"
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
                  <option value="Loja">Loja</option>
                  <option value="Profissional autônomo">
                    Profissional autônomo
                  </option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* SITE */}
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Tipo de site *
                </label>

                <select
                  value={site}
                  onChange={(event) =>
                    setSite(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3.5 text-white outline-none transition focus:border-orange-500"
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
                  <option value="Catálogo">
                    Catálogo
                  </option>
                </select>
              </div>

              {/* ORÇAMENTO */}
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Faixa de orçamento
                </label>

                <select
                  value={orcamento}
                  onChange={(event) =>
                    setOrcamento(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3.5 text-white outline-none transition focus:border-orange-500"
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
                <label className="mb-2 block text-sm text-white/70">
                  Observações
                </label>

                <input
                  type="text"
                  value={observacoes}
                  onChange={(event) =>
                    setObservacoes(event.target.value)
                  }
                  placeholder="Ex.: preciso de catálogo, agenda..."
                  className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3.5 text-white outline-none placeholder:text-white/20 transition focus:border-orange-500"
                />
              </div>
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-400"
            >
              Enviar e continuar no WhatsApp
              <Send
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/30">
              <MessageCircle size={14} />
              Você será direcionado para o WhatsApp
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/70">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3.5 text-white outline-none placeholder:text-white/20 transition focus:border-orange-500"
      />
    </div>
  );
}

function InfoStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-xs font-semibold text-orange-500">
        {number}
      </div>

      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-sm leading-6 text-white/40">
          {description}
        </p>
      </div>
    </div>
  );
}