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
 title:"JACOB. | Descubra quanto custa o site do seu negócio",
 description:"Simule em 1 minuto o projeto de site para seu negócio. JACOB. Websites & Digital.",
 keywords:["criação de sites","site profissional","landing page","site para pequenos negócios","Ribeirão Preto"],
 alternates:{canonical:"/"},
 robots:{index:true,follow:true},
 verification:{google:"Qm0xRLA1kJjQAVjDoViw8BTRM4_Tu5BcK125uFtznS0"},
 openGraph:{title:"JACOB. | Descubra quanto custa seu site",description:"Simule em 1 minuto o projeto de site para seu negócio.",url:SITE_URL,siteName:"JACOB. Websites & Digital",locale:"pt_BR",type:"website",images:[{url:"/og-image.svg",width:1200,height:630,alt:"JACOB. Websites & Digital"}]},
 twitter:{card:"summary_large_image",title:"JACOB. | Sites para pequenos negócios",description:"Descubra quanto custa o site do seu negócio em 1 minuto.",images:["/og-image.svg"]}
};

const schema={
 "@context":"https://schema.org",
 "@type":"ProfessionalService",
 name:"JACOB. Websites & Digital",
 url:SITE_URL,
 areaServed:"Brasil",
 address:{"@type":"PostalAddress",addressLocality:"Ribeirão Preto",addressRegion:"SP",addressCountry:"BR"},
 priceRange:"R$497+",
 sameAs:["https://www.instagram.com/dev.jacobxz/"]
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="pt-BR" className={geistSans.variable+" "+geistMono.variable+" h-full antialiased"}>
  <body className="min-h-full bg-black">
   <Script id="google-consent-default" strategy="beforeInteractive">{consentScript}</Script>
   <Script src={"https://www.googletagmanager.com/gtag/js?id="+GA_ID} strategy="afterInteractive"/>
   <Script id="google-analytics" strategy="afterInteractive">{analyticsScript}{ADS_ID?"window.gtag('config','"+ADS_ID+"');":""}</Script>
   <Tracking/>
   {children}
   <CookieConsent/>
   <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </body>
 </html>;
}
