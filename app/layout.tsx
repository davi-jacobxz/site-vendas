import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Tracking from "@/components/Tracking";
import CookieConsent from "@/components/CookieConsent";

const geistSans=Geist({variable:"--font-geist-sans",subsets:["latin"]});
const geistMono=Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});
const SITE_URL="https://jacob-dev-sites.vercel.app";
const GA_ID="G-XPDWDYYDZF";
const ADS_ID=process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const consentScript="window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});";
const analyticsScript="window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config','"+GA_ID+"');";

export const metadata:Metadata={
 metadataBase:new URL(SITE_URL),
 title:"JACOB. | Sites profissionais para negócios",
 description:"Descubra em 1 minuto quanto pode custar o site do seu negócio. Projetos a partir de R$497.",
 keywords:["criação de sites","site profissional","landing page","site para pequenos negócios","Ribeirão Preto"],
 alternates:{canonical:"/"},
 robots:{index:true,follow:true},
 verification:{google:"Qm0xRLA1kJjQAVjDoViw8BTRM4_Tu5BcK125uFtznS0"},
 openGraph:{title:"JACOB. | Seu negócio precisa ser encontrado.",description:"Descubra em 1 minuto quanto pode custar o site do seu negócio.",url:SITE_URL,siteName:"JACOB.",locale:"pt_BR",type:"website"},
 twitter:{card:"summary_large_image",title:"JACOB. | Sites profissionais",description:"Descubra quanto pode custar o site do seu negócio."}
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="pt-BR" className={geistSans.variable+" "+geistMono.variable+" h-full antialiased"}>
  <body className="min-h-full bg-black">
   <Script id="google-consent-default" strategy="beforeInteractive">{consentScript}</Script>
   <Script src={"https://www.googletagmanager.com/gtag/js?id="+GA_ID} strategy="afterInteractive"/>
   <Script id="google-analytics" strategy="afterInteractive">{analyticsScript}{ADS_ID?"window.gtag('config','"+ADS_ID+"');":""}</Script>
   <Tracking/>{children}<CookieConsent/>
  </body>
 </html>;
}