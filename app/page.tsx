"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Portfolio from "@/components/Portfolio";
import Simulator from "@/components/Simulator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Image from "next/image";

const WHATSAPP = "5516992445413";

type Gtag = (command: "event", eventName: string, params?: Record<string, unknown>) => void;

function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: Gtag }).gtag;
  gtag?.("event", name, params);
  window.dispatchEvent(new CustomEvent("jacob:track", { detail: { name, params } }));
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#inicio" aria-label="JACOB. início" className="text-2xl font-black tracking-tight">
            JACOB<span className="text-[#F76303]">.</span>
          </a>
          <a href="https://wa.me/5516992445413?text=Oi%2C%20vi%20seu%20site%20e%20quero%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F76303] px-5 py-2.5 text-sm font-black transition hover:bg-[#ff741c]">
            Falar no WhatsApp
            <MessageCircle size={16} />
          </a>
        </div>
      </nav>

      <section id="inicio" className="relative overflow-hidden px-5 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(247,99,3,0.18),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <span className="inline-flex rounded-full border border-[#F76303]/20 bg-[#F76303]/10 px-4 py-2 text-[11px] font-black uppercase tracking-[.18em] text-[#F76303]">
              JACOB. · Websites & Digital
            </span>
            <h1 className="mt-5 max-w-4xl text-[2.7rem] font-black leading-[.96] tracking-[-.05em] sm:text-6xl lg:text-7xl">
              Coloque seu negócio no Google e no celular do cliente.
              <span className="mt-3 block text-[#F76303]">Descubra quanto custa seu site.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:mt-7 sm:text-lg sm:leading-8">
              Responda algumas perguntas e receba uma estimativa inicial para o seu projeto, sem compromisso.
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row">
              <a href="https://wa.me/5516992445413?text=Oi%2C%20vi%20seu%20site%20e%20quero%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_iniciado", { location: "hero" })} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#F76303] px-7 py-4 text-base font-black text-black transition hover:bg-[#ff741c]">
                Falar no WhatsApp
                <MessageCircle size={19} />
              </a>
              <a href="#orcamento" onClick={() => track("simulador_iniciado", { location: "hero" })} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 text-base font-black text-white transition hover:border-[#F76303] hover:text-[#F76303]">
                Ver o orçamento
                <ArrowRight size={19} />
              </a>
            </div>
            <div className="mt-6 grid gap-2.5 text-sm text-white/60 sm:mt-8 sm:grid-cols-3">
              {["A partir de R$497", "Feito para celular", "Publicação do site"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={16} className="shrink-0 text-[#F76303]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .08 }} className="relative mx-auto hidden w-full max-w-lg sm:block">
            <div className="absolute -inset-8 rounded-full bg-[#F76303]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#0c0c0c]">
                <Image src="/jacob.png" alt="Jacob, da JACOB Websites & Digital" fill preload sizes="(max-width: 1024px) 90vw, 500px" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-24">
                  <p className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">JACOB.</p>
                  <p className="mt-1 text-lg font-black">Websites & Digital</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#080808] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">O problema</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.04em] sm:text-5xl">Seus clientes já estão procurando. O problema é o que encontram.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Você não aparece quando procuram", "Se alguém busca seu serviço no Google e só encontra redes sociais ou nada, você perde uma oportunidade de ser considerado."],
              ["Só o Instagram não resolve tudo", "Redes sociais ajudam, mas um site organiza seus serviços, informações e contato em um lugar que é seu."],
              ["O cliente precisa de um próximo passo", "Sem uma página clara, o visitante pode não saber o que você oferece ou como falar com você."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[.025] p-7">
                <div className="mb-5 h-2 w-12 rounded-full bg-[#F76303]" />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">A solução</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">Você explica o negócio. Eu cuido da parte digital.</h2>
            <p className="mt-5 text-lg leading-8 text-white/50">O projeto é pensado para mostrar o que você faz, facilitar a decisão do cliente e levar o contato até o WhatsApp.</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Layout pensado para celular","Apresentação clara dos seus serviços","Botões de contato pelo WhatsApp","Publicação do site","Configurações básicas de SEO","Ajustes conforme o escopo contratado"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.025] p-5">
                <Check size={19} className="mt-0.5 shrink-0 text-[#F76303]" />
                <span className="text-sm leading-6 text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Simulator />
      <Portfolio />

      <section className="border-t border-white/5 bg-[#080808] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#F76303]/10 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.03] p-2">
              <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                <Image src="/jacob.png" alt="Jacob, fundador da JACOB Websites & Digital" fill loading="lazy" sizes="(max-width: 1024px) 90vw, 420px" className="object-cover" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Quem sou eu</span>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Prazer, eu sou o Jacob.</h2>
            <p className="mt-4 text-sm font-bold text-white/50">Ribeirão Preto — SP, Brasil</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
              Sou o responsável pela criação e desenvolvimento dos projetos da JACOB. Minha experiência é prática em desenvolvimento de sites e landing pages para negócios, com foco em transformar uma necessidade comercial em uma presença digital clara, moderna e funcional.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-white/45">Especialidades: landing pages, sites institucionais, páginas para serviços, layouts responsivos, integração com WhatsApp, publicação na web e configurações básicas de SEO. Atendimento e processo de trabalho: começo entendendo o negócio e o objetivo do projeto, defino a estrutura, desenvolvo a interface, faço os ajustes combinados e publico o site. Diferenciais: atendimento direto comigo, projetos desenvolvidos sob medida, comunicação clara sobre escopo e etapas, e foco em uma experiência que funcione bem no celular. O portfólio desta página reúne projetos desenvolvidos para demonstrar o trabalho na prática.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Segurança na contratação</span>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Tudo alinhado antes de começar.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Escopo combinado", "Antes de começar, definimos o que será entregue para evitar surpresa."],
              ["Ajustes inclusos", "Cada projeto inclui até 2 rodadas de ajustes dentro do escopo combinado. Alterações ou funcionalidades novas, fora do escopo aprovado, são orçadas separadamente."],
              ["Suporte", "Após a publicação, há 7 dias de suporte para correções relacionadas ao que foi entregue. Novas páginas, funcionalidades ou alterações de escopo são orçadas separadamente."],
            ].map(([title, text]) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-white/45">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#080808] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Oferta</span>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Seu site profissional, completo e pronto para vender.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/45">Um site pensado para apresentar seu negócio, transmitir profissionalismo e facilitar o contato com seus clientes.</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-[#F76303]/30 bg-white/[.025] p-7 sm:p-9">
            <p className="text-sm font-black uppercase tracking-[.15em] text-[#F76303]">Site profissional completo</p>
            <p className="mt-4 text-4xl font-black sm:text-5xl">A partir de R$467</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-white/35">Prazo estimado: 2–5 dias*</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Site profissional e responsivo","Estrutura personalizada","WhatsApp","Páginas e seções necessárias","SEO básico","Publicação do site"].map((item) => (
                <div key={item} className="flex gap-2 text-sm text-white/65">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#F76303]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-white/35">
              <strong className="text-white/50">Não incluso:</strong> domínio e hospedagem são contratados e pagos à parte pelo cliente. Funcionalidades ou alterações fora do escopo combinado são orçadas separadamente.
            </div>
            <a href="#orcamento" className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#F76303] px-5 py-3 text-sm font-black text-black transition hover:bg-[#ff741c]">Quero meu site por R$467</a>
          </div>
          <p className="mt-5 text-center text-xs text-white/30">* Prazo de referência para projetos dentro do escopo combinado. Projetos maiores ou com integrações podem exigir mais tempo.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Como funciona</span>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Quatro etapas, sem complicação.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01","Simulação","Você responde as perguntas do projeto.","No mesmo dia"],
              ["02","Proposta","Analisamos as respostas e alinhamos o escopo.","No mesmo dia"],
              ["03","Desenvolvimento","Criamos, revisamos e ajustamos o site.","1–2 dias*"],
              ["04","Publicação","Colocamos o projeto no ar.","No mesmo dia"],
            ].map(([n, title, text, time]) => <div key={n} className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><span className="text-sm font-black text-[#F76303]">{n}</span><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-white/45">{text}</p><p className="mt-5 text-xs font-bold uppercase tracking-[.15em] text-white/30">{time}</p></div>)}
          </div>
          <p className="mt-6 text-xs text-white/30">* Referência para projetos dentro do escopo combinado. Projetos maiores ou com integrações podem exigir mais tempo.</p>
        </div>
      </section>

      <FAQ />

      <section className="relative overflow-hidden px-5 py-28 sm:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F76303]/10 blur-[130px]" />
        <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-[#F76303]/20 bg-[#0b0b0b] px-7 py-14 text-center sm:px-12 sm:py-20">
          <span className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Próximo passo</span>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black sm:text-5xl lg:text-6xl">Descubra quanto custa o site do seu negócio.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/50">Leva cerca de 1 minuto. Sem compromisso.</p>
          <a href="#orcamento" className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#F76303] px-8 py-4 font-black text-black transition hover:bg-[#ff741c]">Simular meu site grátis <ArrowRight size={19} /></a>
        </div>
      </section>

      <Footer />

      <a href="https://wa.me/5516992445413?text=Oi%2C%20vi%20seu%20site%20e%20quero%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_iniciado", { location: "floating" })} aria-label="Falar no WhatsApp" className="fixed bottom-20 right-4 z-40 hidden h-14 items-center gap-2 rounded-full bg-[#F76303] px-5 font-black text-black shadow-2xl sm:flex md:bottom-6">
        Falar no WhatsApp <MessageCircle size={18} />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 p-3 backdrop-blur-xl sm:hidden">
        <a href="https://wa.me/5516992445413?text=Oi%2C%20vi%20seu%20site%20e%20quero%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_iniciado", { location: "mobile_sticky" })} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F76303] px-5 py-3 text-sm font-black text-black">Falar no WhatsApp <MessageCircle size={17}/></a>
      </div>
    </main>
  );
}
