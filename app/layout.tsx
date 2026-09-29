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

export const metadata: Metadata = {
  title: "JACOB. | Websites & Digital",
  description:
    "Sites profissionais, modernos e responsivos para pequenos negócios. Projetos a partir de R$497.",
  keywords: [
    "criação de sites",
    "site profissional",
    "desenvolvimento de sites",
    "sites para empresas",
    "landing page",
    "websites",
    "JACOB",
  ],
  verification: {
    google: "Qm0xRLA1kJjQAVjDoViw8BTRM4_Tu5BcK125uFtznS0",
  },
  openGraph: {
    title: "JACOB. | Websites & Digital",
    description:
      "Sites profissionais, modernos e responsivos para pequenos negócios.",
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