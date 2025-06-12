"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [timeOfDay, setTimeOfDay] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const updateTimeOfDay = () => {
      const hour = new Date().getHours()
      if (hour >= 6 && hour < 18) {
        setTimeOfDay("☀️ Godmorgen!")
      } else {
        setTimeOfDay("🌙 Godaften!")
      }
    }

    window.addEventListener("scroll", handleScroll)
    updateTimeOfDay()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#6C1EFF]/90 to-[#00C8FF]/90 backdrop-blur-md"
          : "bg-gradient-to-r from-[#6C1EFF]/70 to-[#00C8FF]/70"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 min-w-0">
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#FFD700] to-[#6C1EFF] rounded-lg flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="/logo.png" alt="BedstBettingSite" width={32} height={32} />
            </motion.div>
            <span className="text-white ">
              BedstBettingSite
            </span>
          </Link>

          {/* Spillemyndigheden Badge */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="https://www.spillemyndigheden.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r bg-white text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/spillemyn.svg"
                alt="Spillemyndigheden"
                className="w-24 h-8 rounded-sm"
              />
            </motion.a> 
          </div>

          {/* Right side badges */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <motion.div
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-1.5 sm:px-2 lg:px-3 py-1 lg:py-1.5 rounded text-xs font-semibold shadow-lg flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Image src="/flag.png" alt="Licens" width={16} height={16} />
              <span className="hidden md:inline text-xs">Licenseret</span>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-1.5 sm:px-2 lg:px-3 py-1 lg:py-1.5 rounded text-xs font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              18+
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
