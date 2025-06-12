import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "BedstBettingSite - Danmarks bedste guide til betting sites",
  description:
    "Find de bedste betting sites i Danmark med eksklusive bonusser, høje odds og pålidelige anmeldelser. Sammenlign bookmakere og find den perfekte betting side til dig.",
  keywords:
    "betting sites, danske bookmakere, betting bonusser, odds sammenligning, sportsbetting, online betting, betting guide",
  authors: [{ name: "BedstBettingSite" }],
  creator: "BedstBettingSite",
  publisher: "BedstBettingSite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://www.bedstbettingsite.com/",
    title: "BedstBettingSite - Danmarks bedste guide til betting sites",
    description: "Find de bedste betting sites i Danmark med eksklusive bonusser, høje odds og pålidelige anmeldelser.",
    siteName: "BedstBettingSite",
  },
  twitter: {
    card: "summary_large_image",
    title: "BedstBettingSite - Danmarks bedste guide til betting sites",
    description: "Find de bedste betting sites i Danmark med eksklusive bonusser, høje odds og pålidelige anmeldelser.",
  },
  alternates: {
    canonical: "https://www.bedstbettingsite.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
