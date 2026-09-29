"use client";

import { useEffect,useState } from "react";

type Gtag=(command:"consent",action:"update",params:Record<string,string>)=>void;

function consent(granted:boolean){
 if(typeof window==="undefined")return;
 const gtag=(window as typeof window & {gtag?:Gtag}).gtag;
 gtag?.("consent","update",{analytics_storage:granted?"granted":"denied",ad_storage:granted?"granted":"denied",ad_user_data:granted?"granted":"denied",ad_personalization:granted?"granted":"denied"});
}
export default function CookieConsent(){
 const [show,setShow]=useState(false);
 useEffect(()=>{
  const saved=localStorage.getItem("jacob_cookie_consent");
  if(saved)consent(saved==="accepted");else setShow(true);
 },[]);
 if(!show)return null;
 const choose=(value:"accepted"|"rejected")=>{
  localStorage.setItem("jacob_cookie_consent",value);
  consent(value==="accepted");
  window.dispatchEvent(new Event("jacob:consent"));
  setShow(false);
 };
 return <div className="fixed inset-x-3 bottom-3 z-[60] rounded-2xl border border-white/10 bg-[#101010]/95 p-4 shadow-2xl backdrop-blur-xl sm:left-5 sm:right-5 sm:mx-auto sm:max-w-xl"><p className="text-sm leading-6 text-white/60">Usamos cookies e tecnologias semelhantes para medir o desempenho do site e melhorar campanhas. Você pode aceitar ou recusar.</p><div className="mt-3 flex gap-2"><button type="button" onClick={()=>choose("accepted")} className="min-h-11 rounded-xl bg-[#F76303] px-4 py-2.5 text-sm font-bold">Aceitar</button><button type="button" onClick={()=>choose("rejected")} className="min-h-11 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-white/60">Recusar</button></div></div>;
}
