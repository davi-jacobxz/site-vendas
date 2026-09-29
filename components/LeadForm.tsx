"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

type DadosSimulador = {
  negocio?: string;
  site?: string;
  dominio?: string;
  whatsapp?: string;
};

function pegarDadosSimulador(): DadosSimulador | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const dados = sessionStorage.getItem("orcamento");

    if (!dados) {
      return null;
    }

    return JSON.parse(dados);
  } catch (error) {
    console.error(
      "Erro ao recuperar orçamento:",
      error
    );

    return null;
  }
}

export default function LeadForm() {
  const dadosSimulador = pegarDadosSimulador();

  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [negocio, setNegocio] = useState(
    dadosSimulador?.negocio || ""
  );

  const [site, setSite] = useState(
    dadosSimulador?.site || ""
  );

  const [orcamento, setOrcamento] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  async function enviarWhatsApp(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!nome || !whatsapp || !negocio || !site) {
      alert("Preencha os campos obrigatórios.");
      return;
    }

    setEnviando(true);
    setSucesso(false);

    const dominio = dadosSimulador?.dominio || "";

    const integracaoWhatsapp =
      dadosSimulador?.whatsapp || "";

    try {
      const { error } = await supabase
        .from("leads")
        .insert({
          nome,
          whatsapp,
          negocio,
          site,
          orcamento: orcamento || null,
          observacoes: observacoes || null,
          dominio: dominio || null,
          integracao_whatsapp:
            integracaoWhatsapp || null,
        });

      if (error) {
        console.error(
          "Erro ao salvar lead:",
          error
        );

        alert(
          "Não foi possível enviar seus dados agora. Tente novamente."
        );

        setEnviando(false);
        return;
      }

      setSucesso(true);

      const mensagem = `
Olá! Quero solicitar um orçamento para um site.

*Nome:* ${nome}
*WhatsApp:* ${whatsapp}
*Negócio:* ${negocio}
*Tipo de site:* ${site}
*Orçamento:* ${orcamento || "Não informado"}

*Domínio:* ${dominio || "Não informado"}
*WhatsApp no site:* ${
        integracaoWhatsapp || "Não informado"
      }

*Observações:*
${observacoes || "Nenhuma"}

Enviado através do site JACOB.
      `.trim();

      const numero = "5516992445413";

      const url =
        `https://wa.me/${numero}?text=` +
        encodeURIComponent(mensagem);

      window.location.href = url;
    } catch (error) {
      console.error(
        "Erro inesperado:",
        error
      );

      alert(
        "Ocorreu um erro ao enviar seus dados. Tente novamente."
      );

      setEnviando(false);
    }
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-24 lg:px-8"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/[0.06] blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-4 py-2 text-sm text-orange-300">
            <Sparkles size={15} />

            Vamos tirar seu projeto do papel
          </div>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Seu próximo site
            <span className="text-orange-500">
              {" "}
              começa aqui.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/50">
            Conte um pouco sobre o seu negócio e o
            que você precisa. Salvamos seus dados e
            depois abrimos o WhatsApp para
            continuarmos a conversa.
          </p>

          <div className="mt-10 space-y-5">
            <InfoStep
              number="01"
              title="Você envia seus dados"
              description="Preencha o formulário com as informações do seu projeto."
            />

            <InfoStep
              number="02"
              title="Nós analisamos"
              description="Entendemos a estrutura que seu negócio precisa."
            />

            <InfoStep
              number="03"
              title="Continuamos pelo WhatsApp"
              description="Conversamos sobre o projeto e os próximos passos."
            />
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/40">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10">
              <MessageCircle
                size={17}
                className="text-orange-500"
              />
            </div>

            Seus dados são enviados com segurança.
          </div>
        </motion.div>

        {/* FORM */}

        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="rounded-[28px] border border-white/10 bg-[#111] p-5 shadow-2xl shadow-black/30 sm:p-8"
        >
          <div className="mb-8">
            <p className="text-sm font-medium text-orange-500">
              Solicitar orçamento
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              Fale sobre o seu projeto
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/40">
              Quanto mais informações você enviar,
              melhor conseguiremos entender sua
              necessidade.
            </p>
          </div>

          <form
            onSubmit={enviarWhatsApp}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Seu nome *"
                value={nome}
                onChange={setNome}
                placeholder="Ex.: João Silva"
              />

              <Field
                label="WhatsApp *"
                value={whatsapp}
                onChange={setWhatsapp}
                placeholder="(16) 99999-9999"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Seu negócio *"
                value={negocio}
                onChange={setNegocio}
                placeholder="Ex.: Barbearia"
              />

              <Field
                label="Tipo de site *"
                value={site}
                onChange={setSite}
                placeholder="Ex.: Site institucional"
              />
            </div>

            <Field
              label="Orçamento disponível"
              value={orcamento}
              onChange={setOrcamento}
              placeholder="Ex.: A partir de R$497"
            />

            <div>
              <label className="mb-2 block text-sm text-white/60">
                Conte mais sobre o projeto
              </label>

              <textarea
                value={observacoes}
                onChange={(event) =>
                  setObservacoes(
                    event.target.value
                  )
                }
                placeholder="Ex.: Quero apresentar meus serviços, colocar botão do WhatsApp e uma galeria de fotos..."
                rows={5}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-orange-500/50 focus:bg-white/[0.05]"
              />
            </div>

            {sucesso && (
              <div className="flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/[0.06] px-4 py-3 text-sm text-green-400">
                <Check size={18} />

                Dados salvos! Abrindo o WhatsApp...
              </div>
            )}

            <button
              type="submit"
              disabled={enviando}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {enviando ? (
                "Salvando..."
              ) : (
                <>
                  Enviar e continuar no WhatsApp

                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            <p className="text-center text-xs leading-5 text-white/25">
              Ao enviar, seus dados serão utilizados
              para entrarmos em contato sobre o seu
              projeto.
            </p>
          </form>
        </motion.div>
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
      <label className="mb-2 block text-sm text-white/60">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-orange-500/50 focus:bg-white/[0.05]"
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
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/[0.06] text-sm font-semibold text-orange-500">
        {number}
      </div>

      <div>
        <h4 className="font-medium text-white">
          {title}
        </h4>

        <p className="mt-1 text-sm leading-6 text-white/40">
          {description}
        </p>
      </div>
    </div>
  );
}