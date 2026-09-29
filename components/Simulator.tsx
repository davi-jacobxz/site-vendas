"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2, MessageCircle, ShieldCheck } from "lucide-react";

const businesses = ["Restaurante","Salão / Beleza","Clínica","Loja","Profissional autônomo","Outro"];
const websites = ["Landing page","Página profissional","Site completo","Catálogo / Loja"];
const currents = ["Não tenho","Tenho mas quero refazer","Só tenho Instagram"];
const deadlines = ["Agora","Nos próximos 30 dias","Só pesquisando"];
const budgets = ["R$500 a R$1.000","R$1.000 a R$2.000","Acima de R$2.000","Prefiro conversar antes"];

const empty = { business:"", website:"", current:"", deadline:"", budget:"", name:"", whatsapp:"", email:"", notes:"", otherBusiness:"", consent:false };
type Answers = typeof empty;
type Gtag = (command:"event", eventName:string, params?:Record<string,unknown>)=>void;

function track(name:string, params:Record<string,unknown>={}) {
  if(typeof window==="undefined") return;
  const gtag=(window as typeof window & {gtag?:Gtag}).gtag;
  gtag?.("event", name, params);
  window.dispatchEvent(new CustomEvent("jacob:track",{detail:{name,params}}));
}
const digits=(value:string)=>value.replace(/\D/g,"").slice(0,11);
const mask=(value:string)=>{const n=digits(value);if(n.length<=2)return n?"("+n:"";if(n.length<=7)return "("+n.slice(0,2)+") "+n.slice(2);return "("+n.slice(0,2)+") "+n.slice(2,7)+"-"+n.slice(7);};

function attribution():Record<string,string>{
  if(typeof window==="undefined") return {};
  const params=new URLSearchParams(window.location.search);
  const output:Record<string,string>={};
  ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid","gclid"].forEach(key=>{
    const value=params.get(key)||sessionStorage.getItem("jacob_"+key);
    if(value){output[key]=value;sessionStorage.setItem("jacob_"+key,value);}
  });
  output.landing_page=window.location.href;
  return output;
}
function getInitialAnswers():Answers{
  if(typeof window==="undefined") return empty;
  try{return {...empty,...JSON.parse(sessionStorage.getItem("jacob_simulador")||"{}")};}catch{return empty;}
}
function getScore(a:Answers){
  if(a.deadline==="Agora" && ["R$1.000 a R$2.000","Acima de R$2.000"].includes(a.budget)) return "alto";
  if(a.deadline==="Nos próximos 30 dias") return "médio";
  return "baixo";
}
function estimate(a:Answers){
  if(a.website==="Landing page") return "A partir de R$497";
  return "[PREENCHER faixa de preço]";
}

export default function Simulator(){
  const [step,setStep]=useState(1);
  const [answers,setAnswers]=useState<Answers>(getInitialAnswers);
  const [loading,setLoading]=useState(false);
  const [saved,setSaved]=useState(false);
  const [error,setError]=useState("");
  const [honeypot,setHoneypot]=useState("");
  const total=6;

  useEffect(()=>{sessionStorage.setItem("jacob_simulador",JSON.stringify(answers));},[answers]);
  useEffect(()=>{
    const element=document.getElementById("orcamento");
    if(!element)return;
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){track("view_content",{content_name:"simulador"});observer.disconnect();}
    },{threshold:.25});
    observer.observe(element);
    return()=>observer.disconnect();
  },[]);

  const can=step===1?!!answers.business&&(answers.business!=="Outro"||!!answers.otherBusiness.trim()):
    step===2?!!answers.website:
    step===3?!!answers.current:
    step===4?!!answers.deadline:
    step===5?!!answers.budget:
    !!answers.name.trim()&&digits(answers.whatsapp).length===11&&answers.consent;

  const update=(key:keyof Answers,value:string|boolean)=>setAnswers(current=>({...current,[key]:value}));

  async function save(partial=false){
    const body={
      nome:answers.name.trim(),
      whatsapp:digits(answers.whatsapp),
      email:answers.email.trim()||null,
      negocio:answers.business==="Outro"?answers.otherBusiness.trim():answers.business,
      site:answers.website,
      situacao_atual:answers.current,
      prazo:answers.deadline,
      orcamento:answers.budget,
      observacoes:answers.notes.trim()||null,
      score:getScore(answers),
      estimativa:estimate(answers),
      consent_lgpd:answers.consent,
      consent_at:answers.consent?new Date().toISOString():null,
      consent_version:"2026-09",
      partial,
      honeypot,
      ...attribution()
    };
    const response=await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
    const data=await response.json();
    if(!response.ok)throw new Error(data.error||"Não foi possível salvar seus dados.");
    return data;
  }

  async function next(){
    if(!can)return;
    setError("");
    track("simulador_etapa_"+step,{step});
    if(step===1)track("simulador_iniciado",{location:"simulador"});
    if(step<6){setStep(current=>current+1);return;}
    setLoading(true);
    try{
      await save(false);
      setSaved(true);
      track("generate_lead",{currency:"BRL",value:497});
      track("lead",{lead_source:"simulador"});
    }catch(error){
      setError(error instanceof Error?error.message:"Não foi possível enviar. Tente novamente.");
    }finally{setLoading(false);}
  }

  async function partial(){
    if(answers.name.trim()&&digits(answers.whatsapp).length===11&&!saved){try{await save(true);}catch{}}
  }

  const business=answers.business==="Outro"?answers.otherBusiness:answers.business;
  const message="Olá! Sou "+answers.name+". Quero falar sobre um site para meu negócio. Negócio: "+business+". Site: "+answers.website+". Prazo: "+answers.deadline+".";
  const whats="https://wa.me/5516992445413?text="+encodeURIComponent(message);

  return (
    <section id="orcamento" className="scroll-mt-20 border-y border-white/5 bg-[#070707] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Simulador de projeto</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">Descubra em 1 minuto quanto custa o site do seu negócio.</h2>
            <p className="mt-5 text-lg leading-8 text-white/45">Uma pergunta por tela. No final, você recebe uma estimativa inicial, e seus dados são registrados antes do WhatsApp.</p>
            <div className="mt-8 space-y-3 text-sm text-white/55">
              {["Sem compromisso","A partir de R$497","Dados salvos antes do WhatsApp"].map(item=><div key={item} className="flex gap-3"><Check size={18} className="text-[#F76303]"/>{item}</div>)}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] shadow-2xl">
            {!saved&&<div className="border-b border-white/10 px-6 py-5"><div className="flex justify-between text-xs font-black uppercase tracking-[.12em] text-white/35"><span>Etapa {step} de {total}</span><span className="text-[#F76303]">{Math.round(step/total*100)}%</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5"><motion.div className="h-full bg-[#F76303]" animate={{width:(step/total*100)+"%"}}/></div></div>}
            <div className="p-6 sm:p-10">
              {saved?<Success answers={answers} estimate={estimate(answers)} url={whats}/>:<>
                <input aria-hidden="true" tabIndex={-1} value={honeypot} onChange={event=>setHoneypot(event.target.value)} className="absolute -left-[9999px] h-0 w-0 opacity-0" autoComplete="off"/>
                <AnimatePresence mode="wait">
                  <motion.div key={step} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-18}}>
                    {step===1&&<Question title="Qual é o seu tipo de negócio?" sub="Escolha a opção mais próxima."><Options values={businesses} selected={answers.business} onSelect={value=>update("business",value)}/>{answers.business==="Outro"&&<input value={answers.otherBusiness} onChange={event=>update("otherBusiness",event.target.value)} placeholder="Qual é o seu negócio?" className="mt-3 min-h-12 w-full rounded-2xl border border-white/10 bg-black px-5 outline-none focus:border-[#F76303]"/>}</Question>}
                    {step===2&&<Question title="O que você precisa?" sub="Escolha o formato mais próximo do seu objetivo."><Options values={websites} selected={answers.website} onSelect={value=>update("website",value)}/></Question>}
                    {step===3&&<Question title="Você já tem site?" sub="Isso ajuda a entender seu ponto de partida."><Options values={currents} selected={answers.current} onSelect={value=>update("current",value)}/></Question>}
                    {step===4&&<Question title="Quando quer começar?" sub="Essa resposta ajuda a priorizar o atendimento."><Options values={deadlines} selected={answers.deadline} onSelect={value=>update("deadline",value)}/></Question>}
                    {step===5&&<Question title="Quanto pretende investir?" sub="Não é compromisso. Serve para entender qual projeto faz sentido."><Options values={budgets} selected={answers.budget} onSelect={value=>update("budget",value)}/></Question>}
                    {step===6&&<Question title="Onde posso falar com você?" sub="Nome e WhatsApp são obrigatórios. E-mail e mensagem são opcionais.">
                      <div className="space-y-4">
                        <Field label="Nome *" value={answers.name} onChange={value=>update("name",value)} placeholder="Seu nome" onBlur={partial}/>
                        <Field label="WhatsApp *" value={answers.whatsapp} onChange={value=>update("whatsapp",mask(value))} placeholder="(16) 99999-9999" onBlur={partial}/>
                        <Field label="E-mail (opcional)" value={answers.email} onChange={value=>update("email",value)} placeholder="voce@empresa.com" type="email"/>
                        <div><label className="mb-2 block text-sm font-semibold text-white/70">Conte rapidamente o que você precisa (opcional)</label><textarea value={answers.notes} onChange={event=>update("notes",event.target.value)} rows={4} className="w-full resize-none rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-[#F76303]" placeholder="Ex.: quero apresentar meus serviços e receber clientes pelo WhatsApp."/></div>
                        <label className="flex cursor-pointer gap-3 text-xs leading-5 text-white/45"><input type="checkbox" checked={answers.consent} onChange={event=>update("consent",event.target.checked)} className="mt-1 h-4 w-4 accent-orange-500"/><span>Concordo com o uso dos meus dados para contato sobre o projeto, conforme a <a href="/privacidade" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline">Política de Privacidade</a>. *</span></label>
                      </div>
                    </Question>}
                  </motion.div>
                </AnimatePresence>

                {error&&<p className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300" role="alert">{error}</p>}
                <div className="mt-8 flex gap-3">
                  {step>1&&<button type="button" onClick={()=>setStep(current=>current-1)} className="flex min-h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 text-white/60"><ArrowLeft size={18}/></button>}
                  <button type="button" disabled={!can||loading} onClick={next} className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#F76303] font-black transition hover:bg-[#ff741c] disabled:cursor-not-allowed disabled:opacity-40">
                    {loading?<><Loader2 className="animate-spin" size={18}/>Salvando...</>:step===6?<>Receber estimativa<ArrowRight size={18}/></>:<>Continuar<ArrowRight size={18}/></>}
                  </button>
                </div>
                {step===6&&<p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-white/30"><ShieldCheck size={15}/> Seus dados são enviados com proteção anti-spam.</p>}
              </>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Question({title,sub,children}:{title:string;sub:string;children:ReactNode}){return <div><h3 className="text-2xl font-black sm:text-3xl">{title}</h3><p className="mt-2 text-sm leading-6 text-white/40">{sub}</p><div className="mt-7">{children}</div></div>;}
function Options({values,selected,onSelect}:{values:string[];selected:string;onSelect:(value:string)=>void}){return <div className="grid gap-3">{values.map(value=><button key={value} type="button" onClick={()=>onSelect(value)} className={"flex min-h-14 w-full items-center justify-between rounded-2xl border px-5 text-left text-sm font-bold transition "+(selected===value?"border-[#F76303] bg-[#F76303]/10 text-white":"border-white/10 bg-black text-white/65 hover:border-white/20")}><span>{value}</span>{selected===value&&<Check size={18} className="text-[#F76303]"/>}</button>)}</div>;}
function Field({label,value,onChange,placeholder,onBlur,type="text"}:{label:string;value:string;onChange:(value:string)=>void;placeholder:string;onBlur?:()=>void;type?:string}){return <div><label className="mb-2 block text-sm font-semibold text-white/70">{label}</label><input type={type} value={value} onChange={event=>onChange(event.target.value)} onBlur={onBlur} placeholder={placeholder} className="min-h-12 w-full rounded-2xl border border-white/10 bg-black px-5 outline-none placeholder:text-white/20 focus:border-[#F76303] focus:ring-1 focus:ring-[#F76303]/20"/></div>;}
function Success({answers,estimate,url}:{answers:Answers;estimate:string;url:string}){
 const business=answers.business==="Outro"?answers.otherBusiness:answers.business;
 return <div className="text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F76303]/15"><Check className="text-[#F76303]" size={28}/></div><p className="mt-6 text-xs font-black uppercase tracking-[.2em] text-[#F76303]">Simulação concluída</p><h3 className="mt-3 text-3xl font-black">Obrigado, {answers.name.split(" ")[0]||"tudo certo"}.</h3><p className="mx-auto mt-4 max-w-xl leading-7 text-white/50">Sua estimativa inicial é:</p><div className="mt-5 rounded-3xl border border-[#F76303]/20 bg-[#F76303]/[.06] p-7"><p className="text-3xl font-black text-[#F76303]">{estimate}</p><p className="mt-2 text-sm text-white/40">Faixas finais conforme escopo: [PREENCHER].</p></div><a href={url} target="_blank" rel="noopener noreferrer" onClick={()=>track("contact",{location:"simulador_sucesso"})} className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 font-black text-white sm:w-auto"><MessageCircle size={19}/>Continuar no WhatsApp</a><p className="mt-4 text-xs leading-5 text-white/30">Mensagem preparada com: {business} · {answers.website} · {answers.deadline}.</p></div>;
}
