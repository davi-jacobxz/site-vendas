"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions=[
 {question:"Quanto custa um site?",answer:"A Landing Page começa em R$497, a Página Profissional em R$697 e o Site Completo em R$897. Catálogo / Loja começa em R$1.497, variando conforme quantidade de produtos, pagamentos e integrações. A simulação mostra uma estimativa inicial e o valor final depende do escopo aprovado."},
 {question:"O que está incluso?",answer:"Cada pacote tem seu próprio escopo. Em geral, entram estrutura visual, desenvolvimento responsivo, WhatsApp, configurações básicas de SEO e publicação. Domínio, hospedagem, conteúdo fornecido do zero e funcionalidades fora do escopo são cobrados à parte quando aplicável."},
 {question:"Domínio e hospedagem estão inclusos?",answer:"Domínio e hospedagem não estão incluídos nos valores de entrada. O cliente pode contratar diretamente os serviços, e eu posso orientar a configuração e publicação. Os custos recorrentes são pagos pelo cliente ao provedor escolhido."},
 {question:"Qual é o prazo?",answer:"A referência é de 1–2 dias para Landing Page, 2–3 dias para Página Profissional e 3–5 dias para Site Completo, considerando recebimento dos materiais e escopo aprovado. Projetos maiores ou com integrações podem exigir mais tempo."},
 {question:"Quantas alterações posso pedir?",answer:"Estão incluídas até 2 rodadas de ajustes dentro do escopo contratado. Alterações adicionais ou novas funcionalidades podem ser cobradas separadamente e serão informadas antes da execução."},
 {question:"Como funciona o pagamento?",answer:"O padrão é 50% para iniciar o projeto e 50% antes da publicação. Se o projeto exigir outra condição, ela será informada e combinada na proposta antes do início."},
 {question:"O que preciso enviar?",answer:"Você deve enviar os materiais que quiser usar, como logo, fotos, textos, serviços/produtos, contatos, endereço, redes sociais e referências. Quanto mais completo o material, mais rápido o projeto avança."},
 {question:"Existe suporte depois da publicação?",answer:"Após a publicação, há 7 dias de suporte para correções relacionadas ao que foi entregue. O suporte é feito pelo WhatsApp. Novas páginas, funcionalidades ou alterações de escopo são orçadas separadamente."},
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
