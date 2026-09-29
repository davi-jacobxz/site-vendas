import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const rate = new Map<string,{count:number;reset:number}>();
const validPhone=/^\d{11}$/;

export async function POST(request:NextRequest){
  try{
    const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
    const now=Date.now();
    const current=rate.get(ip);
    if(!current||current.reset<now) rate.set(ip,{count:1,reset:now+3600000});
    else if(current.count>=8) return NextResponse.json({error:"Muitas tentativas. Tente novamente mais tarde."},{status:429});
    else current.count++;

    const body=await request.json();
    if(body.honeypot) return NextResponse.json({ok:true});

    const nome=String(body.nome||"").trim();
    const whatsapp=String(body.whatsapp||"").replace(/\D/g,"");

    if(!nome||!validPhone.test(whatsapp)){
      return NextResponse.json({error:"Nome e WhatsApp válidos são obrigatórios."},{status:400});
    }

    if(body.partial){
      const {error}=await supabase.from("lead_partials").insert({
        nome,whatsapp,email:body.email||null,
        negocio:body.negocio||null,site:body.site||null,
        situacao_atual:body.situacao_atual||null,prazo:body.prazo||null,
        orcamento:body.orcamento||null,observacoes:body.observacoes||null,
        score:body.score||"baixo",utm_source:body.utm_source||null,
        utm_medium:body.utm_medium||null,utm_campaign:body.utm_campaign||null,
        utm_content:body.utm_content||null,utm_term:body.utm_term||null,
        fbclid:body.fbclid||null,gclid:body.gclid||null,
        landing_page:body.landing_page||null
      });
      if(error) console.error("[LEAD_PARTIAL]",error);
      return NextResponse.json({ok:true});
    }

    if(body.consent_lgpd!==true){
      return NextResponse.json({error:"Você precisa aceitar a Política de Privacidade para continuar."},{status:400});
    }

    const {error}=await supabase.from("leads").insert({
      nome,whatsapp,email:body.email||null,
      negocio:body.negocio||"Não informado",site:body.site||"Não informado",
      situacao_atual:body.situacao_atual||null,
      orcamento:body.orcamento||null,prazo:body.prazo||null,
      observacoes:body.observacoes||null,score:body.score||"baixo",
      estimativa:body.estimativa||null,
      utm_source:body.utm_source||null,utm_medium:body.utm_medium||null,
      utm_campaign:body.utm_campaign||null,utm_content:body.utm_content||null,
      utm_term:body.utm_term||null,fbclid:body.fbclid||null,gclid:body.gclid||null,
      landing_page:body.landing_page||null,consent_lgpd:true,
      consent_at:body.consent_at||new Date().toISOString(),
      consent_version:body.consent_version||"2026-09",honeypot:null
    });

    if(error){
      console.error("[LEADS]",error);
      return NextResponse.json({error:"Não foi possível registrar seus dados."},{status:500});
    }

    return NextResponse.json({ok:true});
  }catch(error){
    console.error("[LEADS]",error);
    return NextResponse.json({error:"Erro inesperado. Tente novamente."},{status:500});
  }
}
