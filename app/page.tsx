"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import Portfolio from "@/components/Portfolio";
import Simulator from "@/components/Simulator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const WA="5516992445413";
const wa=(text:string)=>`https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const track=(name:string,params:Record<string,unknown>={})=>{
  if(typeof window==="undefined")return;
  (window as typeof window & {gtag?:Function}).gtag?.("event",name,params);window.dispatchEvent(new CustomEvent("jacob:track",{detail:{name,params}}));
};

const pains=[
  ["01","Só o Instagram não resolve tudo.","Seu cliente precisa encontrar informações claras, serviços e uma forma direta de contato."],
  ["02","Seu negócio parece menor do que é.","Uma apresentação desorganizada pode fazer o visitante desistir antes de falar com você."],
  ["03","Você perde contatos no caminho.","Um site bem estruturado cria um ponto central para receber quem já demonstrou interesse."]
];

const packages=[
  ["Landing Page","A partir de R$497",["Página focada em uma oferta","Responsiva","WhatsApp","Publicação"]],
  ["Página Profissional","Sob proposta",["Estrutura para negócio","Seções personalizadas","WhatsApp","SEO básico","Publicação"]],
  ["Site Completo","Sob proposta",["Estrutura completa","Mais páginas e funcionalidades","Integrações conforme necessidade","SEO básico","Publicação"]]
];

export default function Home(){
 const whatsapp=wa("Olá! Vim pelo site da JACOB. Quero falar sobre um site para o meu negócio.");
 const schema={"@context":"https://schema.org","@type":"ProfessionalService","name":"JACOB. Websites & Digital","url":"https://jacob-dev-sites.vercel.app","areaServed":"BR","address":{"@type":"PostalAddress","addressLocality":"Ribeirão Preto","addressRegion":"SP","addressCountry":"BR"}};
 return <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/85 backdrop-blur-xl"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"><a href="#inicio" className="text-xl font-black tracking-[-.04em]">JACOB<span className="text-[#F76303]">.</span></a><a href="#orcamento" onClick={()=>track("simulador_cta_click")} className="rounded-full bg-[#F76303] px-5 py-2.5 text-sm font-bold transition hover:scale-105">Simular meu site</a></div></header>

  <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"><div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#F76303]/10 blur-[150px]"/><div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
   <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F76303]/25 bg-[#F76303]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-orange-300"><span className="h-2 w-2 rounded-full bg-[#F76303]"/>JACOB. Websites & Digital</div>
    <h1 className="max-w-4xl text-5xl font-black leading-[.9] tracking-[-.055em] sm:text-6xl lg:text-8xl">Seu negócio precisa ser <span className="text-[#F76303]">encontrado.</span></h1>
    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">Um site profissional para mostrar o que você faz, passar confiança no celular do cliente e transformar visitas em contatos.</p>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#orcamento" onClick={()=>track("simulador_cta_click",{location:"hero"})} className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#F76303] px-7 font-black transition hover:-translate-y-0.5">Simular meu site grátis <ArrowRight size={19}/></a><a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={()=>track("whatsapp_click",{location:"hero"})} className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-7 font-bold text-white/80 transition hover:bg-white/5 hover:text-white"><MessageCircle size={18}/>Falar no WhatsApp</a></div>
    <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">{["A partir de R$497","Feito para celular","Publicação inclusa"].map(x=><div key={x} className="rounded-2xl border border-white/10 bg-white/[.035] p-4 text-center text-xs font-semibold text-white/60 sm:text-sm">{x}</div>)}</div>
   </motion.div>
   <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.1}} className="relative"><div className="absolute -inset-8 rounded-[3rem] bg-[#F76303]/10 blur-3xl"/><div className="relative rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-3 shadow-2xl"><div className="rounded-[1.4rem] border border-white/10 bg-black p-6 sm:p-8"><div className="flex justify-between border-b border-white/10 pb-5"><span className="text-sm font-bold text-white/50">SIMULADOR DE PROJETO</span><span className="rounded-full bg-[#F76303]/10 px-3 py-1 text-xs font-bold text-orange-300">1 minuto</span></div><p className="mt-10 text-sm font-bold text-[#F76303]">COMECE AGORA</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Descubra quanto pode custar o site do seu negócio.</h2><p className="mt-4 leading-7 text-white/45">Responda algumas perguntas e receba uma estimativa inicial.</p><a href="#orcamento" className="mt-8 flex h-14 items-center justify-center gap-2 rounded-2xl bg-white font-black text-black">Começar simulação <ArrowRight size={18}/></a><div className="mt-5 flex justify-center gap-2 text-xs text-white/30"><ShieldCheck size={14}/>Sem compromisso</div></div></div></motion.div>
  </div></section>

  <section className="border-y border-white/5 bg-[#090909] px-5 py-20 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">O problema</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.04em] sm:text-5xl">Se o cliente procura você e não encontra um lugar confiável, você perde a chance.</h2><div className="mt-12 grid gap-4 md:grid-cols-3">{pains.map(([n,t,d])=><div key={n} className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><span className="text-sm font-black text-[#F76303]">{n}</span><h3 className="mt-8 text-xl font-bold">{t}</h3><p className="mt-3 leading-7 text-white/45">{d}</p></div>)}</div></div></section>

  <section className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">O que você recebe</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.04em] sm:text-5xl">Não vendemos código. Vendemos uma solução para o seu negócio.</h2><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Design personalizado","Experiência para celular","Integração com WhatsApp","Estrutura pensada para conversão","SEO básico","Publicação do site"].map(x=><div key={x} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.025] p-5"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F76303]/10 text-[#F76303]"><Check size={17}/></span><span className="font-semibold">{x}</span></div>)}</div></div></section>

  <Simulator/><Portfolio/>

  <section className="border-y border-white/5 bg-[#090909] px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div className="mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[.08] to-[#F76303]/10"><span className="text-7xl font-black">D<span className="text-[#F76303]">.</span></span></div><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Quem está por trás</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">Davi, fundador da JACOB.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">Eu desenvolvo sites para pequenos negócios que precisam de uma apresentação profissional na internet, sem transformar o projeto em uma complicação técnica.</p><p className="mt-4 max-w-2xl leading-7 text-white/40">O objetivo é simples: entender seu negócio, montar uma estrutura clara e colocar o projeto no ar.</p><div className="mt-8 flex flex-wrap gap-3"><span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">Atendimento direto</span><span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">Ribeirão Preto / Brasil</span></div></div></div></section>

  <section className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Planos</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">Escolha a estrutura. A proposta final vem depois.</h2><p className="mt-5 max-w-2xl leading-7 text-white/45">O único preço público definido hoje é o ponto de entrada: projetos a partir de R$497. Os demais valores dependem do escopo.</p><div className="mt-12 grid gap-4 lg:grid-cols-3">{packages.map(([title,price,items])=><div key={title} className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><h3 className="text-2xl font-black">{title}</h3><p className="mt-5 text-2xl font-black text-[#F76303]">{price}</p><ul className="mt-7 space-y-3">{(items as string[]).map(i=><li key={i} className="flex gap-3 text-sm text-white/60"><Check size={17} className="shrink-0 text-[#F76303]"/>{i}</li>)}</ul><a href="#orcamento" className="mt-8 flex h-12 items-center justify-center rounded-xl border border-white/10 font-bold hover:border-[#F76303]/40 hover:bg-[#F76303]/10">Simular meu projeto</a></div>)}</div></div></section>

  <section className="border-y border-white/5 bg-[#090909] px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Como funciona</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">Sem enrolação.</h2><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[["01","Você conta o que precisa"],["02","Definimos a estrutura"],["03","Eu desenvolvo o projeto"],["04","Publicamos e ajustamos"]].map(([n,t])=><div key={n} className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><span className="text-sm font-black text-[#F76303]">{n}</span><h3 className="mt-8 text-xl font-bold">{t}</h3></div>)}</div></div></section>

  <FAQ/>

  <section className="relative overflow-hidden px-5 py-28 sm:px-8"><div className="relative mx-auto max-w-5xl rounded-[2.5rem] border border-[#F76303]/20 bg-[#0c0c0c] p-8 text-center sm:p-14"><Zap className="mx-auto text-[#F76303]" size={28}/><h2 className="mt-6 text-4xl font-black sm:text-6xl">Pare de adiar o site.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/45">Descubra em 1 minuto o que você precisa e dê o próximo passo.</p><a href="#orcamento" onClick={()=>track("simulador_cta_click",{location:"final"})} className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#F76303] px-8 font-black">Simular meu site grátis <ArrowRight size={19}/></a></div></section>

  <Footer/>
  <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={()=>track("whatsapp_click",{location:"floating"})} aria-label="Falar no WhatsApp" className="fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl sm:hidden"><MessageCircle size={24}/></a>
 <a href="#orcamento" className="fixed inset-x-0 bottom-0 z-30 flex h-14 items-center justify-center bg-[#F76303] text-sm font-black text-white sm:hidden">Simular meu site grátis</a>\n </main>;
}