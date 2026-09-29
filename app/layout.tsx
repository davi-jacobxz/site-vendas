import type { Metadata } from "next";
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
      </body>
    </html>
  );
}