"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { bettingSites } from "@/data/bettingSites"
import Link from "next/link"

export default function TopBettingSites() {
  return (
    <section id="top-betting-sites" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Top 5 Betting Sites i Danmark</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Vores eksperter har testet og rangeret de bedste betting sites baseret på bonusser, odds og brugeroplevelse.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {bettingSites.map((site, index) => (
            <motion.div
              key={site.name}
              className="relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={site.url} className="block">
                <div
                  className={`bg-gradient-to-r from-[#1B1B1B] to-[#2A1B3D] rounded-2xl p-4 sm:p-6 border ${site.position === 1 ? "border-[#FFD700]/50 shadow-xl shadow-[#FFD700]/20" : "border-[#6C1EFF]/30"
                    } hover:border-[#6C1EFF] transition-all duration-300 hover:shadow-2xl hover:shadow-[#6C1EFF]/20`}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
                    {/* Position badge */}
                    <div className="flex-shrink-0 order-1 lg:order-1">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FFD700] to-[#6C1EFF] rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold text-white">
                        #{site.position}
                      </div>
                    </div>

                    {/* Logo and info */}
                    <div className="flex-grow text-center lg:text-left order-2 lg:order-2 min-w-0">
                      <img
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        className="h-8 sm:h-10 lg:h-12 mx-auto lg:mx-0 mb-2 sm:mb-3"
                      />
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{site.name}</h3>
                      <p className="text-gray-300 mb-2 sm:mb-3 text-sm sm:text-base px-2 lg:px-0">{site.slogan}</p>

                      {/* Rating */}
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 flex-wrap">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(site.rating) ? "text-[#FFD700] fill-current" : "text-gray-400"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-white font-semibold text-sm sm:text-base">{site.rating}</span>
                        <span className="text-gray-400 text-xs sm:text-sm">
                          ({site.reviews.toLocaleString()} anmeldelser)
                        </span>
                      </div>
                    </div>

                    {/* Bonus section */}
                    <div className="flex-shrink-0 text-center order-3 lg:order-3 w-full lg:w-auto">
                      <div className="bg-gradient-to-r from-[#6C1EFF] to-[#00C8FF] rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                        <p className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2">{site.bonus}</p>
                        <div className="bg-[#FFD700] text-[#1B1B1B] px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-white transition-colors w-full sm:w-auto text-center">
                          {site.cta}
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 max-w-xs mx-auto lg:mx-0 px-2 lg:px-0">{site.disclaimer}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
