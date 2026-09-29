import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://jacob-dev-sites.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "JACOB. | Criação de Sites Profissionais",
  description:
    "Criação de sites profissionais, modernos e responsivos para empresas e pequenos negócios. Projetos a partir de R$497. Atendimento em Ribeirão Preto e para todo o Brasil.",
  keywords: [
    "criação de sites",
    "criação de sites Ribeirão Preto",
    "desenvolvimento de sites",
    "desenvolvimento de sites Ribeirão Preto",
    "site profissional",
    "site para empresa",
    "site para pequenos negócios",
    "landing page",
    "sites responsivos",
    "JACOB",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Qm0xRLA1kJjQAVjDoViw8BTRM4_Tu5BcK125uFtznS0",
  },
  openGraph: {
    title: "JACOB. | Criação de Sites Profissionais",
    description:
      "Sites profissionais, modernos e responsivos para empresas e pequenos negócios. A partir de R$497.",
    url: SITE_URL,
    siteName: "JACOB.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XPDWDYYDZF"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', 'G-XPDWDYYDZF');
          `}
        </Script>
      </body>
    </html>
  );
}
