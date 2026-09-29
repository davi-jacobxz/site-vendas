"use client";

import { useEffect } from "react";
import Script from "next/script";

const META_ID=process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Tracking(){
 useEffect(()=>{const keys=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid","gclid"];const p=new URLSearchParams(window.location.search);keys.forEach(k=>{const v=p.get(k);if(v)sessionStorage.setItem("jacob_"+k,v)})},[]);
 if(!META_ID)return null;
 const script="!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','"+META_ID+"');fbq('track','PageView');";
 return <Script id="meta-pixel" strategy="afterInteractive">{script}</Script>;
}