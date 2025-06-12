"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { getTopSite } from "@/data/bettingSites"

export default function HeroSection() {
  const topSite = getTopSite()

  const scrollToRating = () => {
    document.getElementById("top-betting-sites")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD700] rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left content - Always first on mobile */}
          <motion.div
            className="text-center lg:text-left w-full order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Danmarks mest{" "}
              <span className="bg-gradient-to-r from-[#6C1EFF] to-[#00C8FF] bg-clip-text text-transparent">
                spændende
              </span>{" "}
              betting sider samlet ét sted
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sammenlign bonusser, odds og brugervenlighed — vælg det perfekte sted at spille.
            </motion.p>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-[#6C1EFF]/20 border border-[#6C1EFF]/30 rounded-full px-4 py-1.5 flex items-center">
                <span className="text-[#FFD700] text-sm font-medium mr-2">
                  Opdateret {new Date().toLocaleDateString("da-DK", { month: "long", year: "numeric" })}
                </span>
                <span className="text-gray-300 text-xs">Vi opdaterer vores ratings hver måned</span>
              </div>
            </motion.div>

            <motion.button
              onClick={scrollToRating}
              className="bg-gradient-to-r from-[#6C1EFF] to-[#00C8FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-[#6C1EFF]/50 transition-all duration-300 mx-auto lg:mx-0 block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Udforsk top 5
            </motion.button>
          </motion.div>

          {/* Right illustration - Second on mobile */}
          <motion.div
            className="relative w-full order-2 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              {/* Top betting site card */}
              <motion.div
                className="w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={topSite.url} className="block">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B1B1B] via-[#2A1B3D] to-[#1B1B1B] border border-[#6C1EFF]/50 shadow-2xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Top badge */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-[#1B1B1B] font-bold text-sm sm:text-lg">#{topSite.position}</span>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
                        <img src={topSite.logo || "/placeholder.svg"} alt={topSite.name} className="h-8 sm:h-10 mb-2" />
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                            {topSite.name}
                          </h3>
                          <div className="flex items-center justify-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
                            ))}
                            <span className="ml-2 text-white text-sm font-semibold">{topSite.rating}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed text-center">
                        {topSite.slogan}
                      </p>

                      {/* Bonus section */}
                      <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-xl p-3 sm:p-4 mb-4 border border-[#6C1EFF]/30">
                        <div className="text-center">
                          <p className="text-[#FFD700] font-bold text-xs uppercase tracking-wide mb-1">
                            Eksklusiv Bonus
                          </p>
                          <p className="text-white font-bold text-lg sm:text-xl mb-1">{topSite.bonus}</p>
                          <p className="text-gray-300 text-xs">{topSite.bonusDetails}</p>
                        </div>
                      </div>

                      <div className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1B1B1B] py-3 rounded-xl font-bold text-sm sm:text-base hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                        {topSite.cta}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
                        Spil ansvarligt. 18+. T&C gælder.
                      </p>
                    </div>

                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#6C1EFF]/20 to-[#00C8FF]/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToRating}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  )
}
