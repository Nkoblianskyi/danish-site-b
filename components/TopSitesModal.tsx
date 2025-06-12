"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Star } from "lucide-react"
import { getTop3Sites } from "@/data/bettingSites"

export default function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topSites = getTop3Sites()

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("modal-seen")
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("modal-seen", "true")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          <motion.div
            className="relative bg-gradient-to-br from-[#1B1B1B] to-[#2A1B3D] rounded-2xl border border-[#6C1EFF]/50 shadow-2xl w-full max-w-[95vw] sm:max-w-6xl my-2 sm:my-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-3 -right-3 w-10 h-10 bg-[#1B1B1B] rounded-full flex items-center justify-center text-white border border-[#6C1EFF]/50 hover:bg-[#2A1B3D] transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-3 xs:p-4 sm:p-6 md:p-8">
              <div className="text-center mb-4 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                  🏆 Danmarks Top 3 Betting Sites
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">Klik på en site for at få din bonus</p>
              </div>

              {/* Desktop: 3 cards in a row */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {topSites.map((site, index) => (
                  <motion.a
                    key={site.name}
                    href={site.url}
                    className="block group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="bg-gradient-to-br from-[#2A1B3D] to-[#1B1B1B] rounded-xl border border-[#6C1EFF]/30 p-6 h-full flex flex-col hover:border-[#6C1EFF] transition-all duration-300 hover:shadow-xl hover:shadow-[#6C1EFF]/20 relative overflow-hidden">
                      {/* Position badge */}
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                          <span className="text-[#1B1B1B] font-bold text-sm">#{site.position}</span>
                        </div>
                      </div>

                      {/* Logo */}
                      <div className="text-center mb-4">
                        <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-12 mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-white">{site.name}</h3>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(site.rating) ? "text-[#FFD700] fill-current" : "text-gray-400"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-white font-semibold text-sm">{site.rating}</span>
                        <span className="text-gray-400 text-xs">({site.reviews.toLocaleString()})</span>
                      </div>

                      {/* Bonus */}
                      <div className="bg-gradient-to-r from-[#6C1EFF]/20 to-[#00C8FF]/20 rounded-lg p-4 mb-4 border border-[#6C1EFF]/30 flex-grow flex flex-col justify-center">
                        <div className="text-center">
                          <p className="text-[#FFD700] font-bold text-xs uppercase tracking-wide mb-1">
                            Eksklusiv Bonus
                          </p>
                          <p className="text-white font-bold text-lg mb-1">{site.bonus}</p>
                          <p className="text-gray-300 text-sm">{site.bonusDetails}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <button className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1B1B1B] py-3 rounded-lg font-bold text-sm hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                        {site.cta}
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6C1EFF]/10 to-[#00C8FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Mobile: Stacked cards */}
              <div className="md:hidden space-y-2 sm:space-y-4">
                {topSites.map((site, index) => (
                  <motion.a
                    key={site.name}
                    href={site.url}
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-br from-[#2A1B3D] to-[#1B1B1B] rounded-xl border border-[#6C1EFF]/30 p-2 xs:p-3 sm:p-4 hover:border-[#6C1EFF] transition-all duration-300">
                      <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
                        {/* Position */}
                        <div className="w-8 h-8 xs:w-10 xs:h-10 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[#1B1B1B] font-bold text-sm">#{site.position}</span>
                        </div>

                        {/* Logo and info */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-8" />
                            <h3 className="text-lg font-bold text-white">{site.name}</h3>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(site.rating) ? "text-[#FFD700] fill-current" : "text-gray-400"
                                    }`}
                                />
                              ))}
                            </div>
                            <span className="text-white font-semibold text-xs">{site.rating}</span>
                          </div>

                          {/* Bonus */}
                          <div className="bg-gradient-to-r from-[#6C1EFF]/20 to-[#00C8FF]/20 rounded-lg p-2 xs:p-3 border border-[#6C1EFF]/30">
                            <p className="text-[#FFD700] font-bold text-xs uppercase tracking-wide">Bonus</p>
                            <p className="text-white font-bold text-sm">{site.bonus}</p>
                            <p className="text-gray-300 text-xs">{site.bonusDetails}</p>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex-shrink-0">
                          <button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1B1B1B] px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-lg font-bold text-xs xs:text-sm flex items-center gap-1">
                            Få Bonus
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="text-center mt-3 sm:mt-6">
                <p className="text-xs text-gray-400">Spil ansvarligt. 18+. T&C gælder.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
