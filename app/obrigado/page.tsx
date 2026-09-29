"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

type Answers={business:string;website:string;deadline:string;name:string;otherBusiness?:string};

function track(name:string,params:Record<string,unknown>={}) {
  window.dispatchEvent(new CustomEvent("jacob:track",{detail:{name,params}}));
  const gtag=(window as typeof window & {gtag?: (command:"event",eventName:string,params?:Record<string,unknown>)=>void}).gtag;
  gtag?.("event",name,params);
}

function estimate(website:string){
  return website==="Landing page" ? "A partir de R$497" : "[PREENCHER faixa de preço]";
}

export default function Obrigado(){
 const [answers,setAnswers]=useState<Answers|null>(null);
 useEffect(()=>{
   try{
     const saved=JSON.parse(sessionStorage.getItem("jacob_simulador")||"null");
     setAnswers(saved);
   }catch{setAnswers(null);}
   track("lead",{lead_source:"simulador",page:"obrigado"});
   track("Lead",{lead_source:"simulador",page:"obrigado"});
 },[]);

 const business=answers?.business==="Outro"?answers.otherBusiness||"Outro":answers?.business||"[PREENCHER]";
 const website=answers?.website||"[PREENCHER]";
 const deadline=answers?.deadline||"[PREENCHER]";
 const name=answers?.name||"";
 const message="Olá! Sou "+name+". Quero falar sobre um site para meu negócio. Negócio: "+business+". Site: "+website+". Prazo: "+deadline+".";
 const whats="https://wa.me/5516992445413?text="+encodeURIComponent(message);

 return <main className="min-h-screen bg-black px-5 py-16 text-white sm:px-8">
  <div className="mx-auto flex min-h-[75vh] max-w-3xl items-center justify-center">
   <div className="w-full rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-7 text-center sm:p-12">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F76303]/15"><Check size={30} className="text-[#F76303]"/></div>
    <p className="mt-7 text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Simulação concluída</p>
    <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Obrigado{name ? ", "+name.split(" ")[0] : ""}.</h1>
    <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">Sua estimativa inicial é:</p>
    <div className="mt-6 rounded-3xl border border-[#F76303]/20 bg-[#F76303]/[.06] p-7">
      <p className="text-3xl font-black text-[#F76303]">{estimate(website)}</p>
      <p className="mt-2 text-sm leading-6 text-white/40">O valor final depende do escopo aprovado. Faixas dos demais projetos: [PREENCHER].</p>
    </div>
    <a href={whats} target="_blank" rel="noopener noreferrer" onClick={()=>track("contact",{location:"obrigado"})} className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 font-black text-white sm:w-auto">
      <MessageCircle size={19}/>Continuar no WhatsApp<ArrowRight size={18}/>
    </a>
    <p className="mt-4 text-xs leading-5 text-white/30">Mensagem preparada com nome, tipo de negócio, tipo de site e prazo.</p>
    <a href="/" className="mt-6 inline-flex min-h-11 items-center text-sm font-bold text-white/45 hover:text-white">Voltar ao início</a>
   </div>
  </div>
 </main>;
}
