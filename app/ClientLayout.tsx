"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import Script from "next/script"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieBanner from "@/components/CookieBanner"
import TopSitesModal from "@/components/TopSitesModal"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="da">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-[#1B1B1B] via-[#2A1B3D] to-[#1B1B1B]">
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <TopSitesModal />
        </div>

        {/* Structured data for organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BedstBettingSite",
              url: "https://www.bedstbettingsite.com",
              logo: "https://www.bedstbettingsite.com/logo.png",
              description: "Danmarks mest pålidelige guide til betting sites og bookmakere.",
            }),
          }}
        />

        {/* Structured data for website */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BedstBettingSite",
              url: "https://www.bedstbettingsite.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.bedstbettingsite.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
