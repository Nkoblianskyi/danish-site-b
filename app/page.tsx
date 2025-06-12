import HeroSection from "@/components/HeroSection"
import TopBettingSites from "@/components/TopBettingSites"
import WhatMakesGoodSite from "@/components/WhatMakesGoodSite"
import BonusTypes from "@/components/BonusTypes"
import CompareSites from "@/components/CompareSites"
import BettingInfo from "@/components/BettingInfo"
import AboutSportsSection from "@/components/AboutSportsSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TopBettingSites />
      <AboutSportsSection />
      <WhatMakesGoodSite />
      <BonusTypes />
      <BettingInfo />
    </>
  )
}
