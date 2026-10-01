"use client";

import { useEffect,useState } from "react";
import Script from "next/script";

const META_ID=process.env.NEXT_PUBLIC_META_PIXEL_ID;
type Fbp=(command:"track",eventName:string,params?:Record<string,unknown>)=>void;

export default function Tracking(){
 const [allowed,setAllowed]=useState(false);
 useEffect(()=>{
  const sync=()=>setAllowed(localStorage.getItem("jacob_cookie_consent")==="accepted");
  sync();window.addEventListener("jacob:consent",sync);
  return()=>window.removeEventListener("jacob:consent",sync);
 },[]);
 useEffect(()=>{
  const keys=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid","gclid"];
  const params=new URLSearchParams(window.location.search);
  keys.forEach(key=>{const value=params.get(key);if(value)sessionStorage.setItem("jacob_"+key,value);});
 },[]);
 useEffect(()=>{
  if(!allowed)return;
  const handler=(event:Event)=>{
   const detail=(event as CustomEvent<{name:string;params:Record<string,unknown>}>).detail;
   const fbq=(window as typeof window & {fbq?:Fbp}).fbq;
   if(!fbq)return;
   const map:Record<string,string>={
    view_content:"ViewContent",
    simulador_iniciado:"ViewContent",
    generate_lead:"Lead",
    lead:"Lead",
    contact:"Contact",
    whatsapp_click:"Contact",
    whatsapp_iniciado:"Contact"
   };
   const metaEvent=map[detail.name];
   if(metaEvent)fbq("track",metaEvent,detail.params);
  };
  window.addEventListener("jacob:track",handler);
  return()=>window.removeEventListener("jacob:track",handler);
 },[allowed]);
 if(!META_ID||!allowed)return null;
 const script="!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','"+META_ID+"');fbq('track','PageView');";
 return <Script id="meta-pixel" strategy="afterInteractive">{script}</Script>;
}
