"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions=[
 {question:"Quanto custa um site?",answer:"O valor público de entrada é a partir de R$497 para uma Landing Page. Valores de Página Profissional, Site Completo e Catálogo/Loja precisam ser definidos conforme o escopo real: [PREENCHER]."},
 {question:"O que está incluso?",answer:"O escopo pode incluir estrutura visual, desenvolvimento responsivo, integração com WhatsApp, configurações básicas de SEO e publicação. O que exatamente entra em cada pacote deve seguir a proposta aprovada: [PREENCHER]."},
 {question:"Domínio e hospedagem estão inclusos?",answer:"Domínio e hospedagem podem ter custos recorrentes. Quem registra/paga esses serviços, quais provedores serão usados e os custos anuais precisam ser definidos: [PREENCHER]."},
 {question:"Quanto tempo demora?",answer:"O prazo varia conforme o projeto e o envio dos materiais. Os prazos estimados por etapa precisam ser definidos: [PREENCHER]."},
 {question:"Quantas alterações posso pedir?",answer:"A quantidade de rodadas de ajustes deve ser definida no escopo de cada pacote: [PREENCHER]."},
 {question:"Como funciona o pagamento?",answer:"A forma e o momento do pagamento precisam ser definidos na proposta comercial: [PREENCHER]."},
 {question:"O que preciso enviar?",answer:"Normalmente são úteis logo, textos, fotos, informações dos serviços, contatos, endereço, redes sociais e referências visuais. O checklist final do projeto deve ser definido: [PREENCHER]."},
 {question:"Você dá suporte depois da publicação?",answer:"As condições, período e limites do suporte pós-publicação precisam ser definidos: [PREENCHER]."},
];

export default function FAQ(){
 const [open,setOpen]=useState<number|null>(null);
 return <section id="faq" className="border-t border-white/5 bg-[#0b0b0b] px-5 py-24 sm:px-8">
  <div className="mx-auto max-w-5xl">
   <span className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Dúvidas</span>
   <h2 className="mt-4 text-4xl font-black sm:text-5xl">Antes de começar, saiba como funciona.</h2>
   <div className="mt-10 space-y-3">
    {questions.map((item,index)=>{
     const isOpen=open===index;
     return <motion.div key={item.question} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.025]">
      <button type="button" aria-expanded={isOpen} onClick={()=>setOpen(isOpen?null:index)} className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-7">
       <span className="font-bold">{item.question}</span>
       <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10"><ChevronDown size={18} className={isOpen?"rotate-180":""}/></span>
      </button>
      <AnimatePresence initial={false}>{isOpen&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}><p className="px-5 pb-6 leading-7 text-white/45 sm:px-7">{item.answer}</p></motion.div>}</AnimatePresence>
     </motion.div>
    })}
   </div>
   <div className="mt-10 rounded-3xl border border-[#F76303]/20 bg-[#F76303]/[.06] p-7 text-center">
    <p className="font-black">Ainda ficou com alguma dúvida?</p>
    <p className="mt-2 text-sm text-white/40">Faça a simulação e converse comigo sem compromisso.</p>
    <a href="#orcamento" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#F76303] px-6 py-3 font-black">Simular meu site</a>
   </div>
  </div>
 </section>;
}
