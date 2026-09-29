import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const rate = new Map<string,{count:number;reset:number}>();

export async function POST(request:NextRequest){
 try{
  const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
  const now=Date.now(), current=rate.get(ip);
  if(!current||current.reset<now) rate.set(ip,{count:1,reset:now+3600000});
  else if(current.count>=8) return NextResponse.json({error:"Muitas tentativas. Tente novamente mais tarde."},{status:429});
  else current.count++;
  const body=await request.json();
  if(body.honeypot)return NextResponse.json({ok:true});
  if(body.partial){
   const nome=String(body.nome||"").trim(),whatsapp=String(body.whatsapp||"").replace(/\D/g,"");
   if(!nome||!/^[0-9]{11}$/.test(whatsapp))return NextResponse.json({ok:true});
   const {error}=await supabase.from("lead_partials").insert({nome,whatsapp,utm_source:body.utm_source||null,utm_medium:body.utm_medium||null,utm_campaign:body.utm_campaign||null,utm_content:body.utm_content||null,utm_term:body.utm_term||null,fbclid:body.fbclid||null,gclid:body.gclid||null,landing_page:body.landing_page||null});
   if(error)console.error("[LEAD_PARTIAL]",error);
   return NextResponse.json({ok:true});
  }
  const nome=String(body.nome||"").trim(),whatsapp=String(body.whatsapp||"").replace(/\D/g,"");
  if(!nome||!/^\d{11}$/.test(whatsapp))return NextResponse.json({error:"Nome e WhatsApp válidos são obrigatórios."},{status:400});
  const {error}=await supabase.from("leads").insert({
   nome,whatsapp,email:body.email||null,negocio:body.negocio||"Não informado",site:body.site||"Não informado",
   orcamento:body.orcamento||null,prazo:body.prazo||null,observacoes:body.observacoes||null,score:body.score||"baixo",
   utm_source:body.utm_source||null,utm_medium:body.utm_medium||null,utm_campaign:body.utm_campaign||null,
   utm_content:body.utm_content||null,utm_term:body.utm_term||null,fbclid:body.fbclid||null,gclid:body.gclid||null,
   landing_page:body.landing_page||null,consent_lgpd:Boolean(body.consent_lgpd),consent_at:body.consent_at||null,honeypot:body.honeypot||null
  });
  if(error){console.error("[LEADS]",error);return NextResponse.json({error:"Não foi possível registrar seus dados."},{status:500})}
  return NextResponse.json({ok:true});
 }catch(error){console.error("[LEADS]",error);return NextResponse.json({error:"Erro inesperado. Tente novamente."},{status:500})}
}
