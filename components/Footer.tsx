"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1B1B1B] to-[#2A1B3D] py-16 px-4 border-t border-[#6C1EFF]/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 min-w-0 mb-4">
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
            <p className="text-gray-300 mb-6 max-w-md">
              Danmarks mest pålidelige guide til betting sites. Vi hjælper dig med at finde de bedste bonusser og odds.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#6C1EFF] transition-colors">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-[#6C1EFF] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-[#6C1EFF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Organizations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Organisationer</h4>
            <div className="grid grid-cols-1 gap-6 p-4">
              <a
                href="https://www.spillemyndigheden.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity bg-white rounded-lg p-2 flex items-center justify-center"
              >
                <img
                  src="/spillemyn.svg"
                  alt="Spillemyndigheden"
                  className="h-12"
                />
              </a>
              <a
                href="https://www.stopspillet.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity rounded-lg p-2 flex items-center justify-center"
              >
                <img src="/stopsillet.svg" alt="StopSpillet" className="h-12" />
              </a>
              <a
                href="https://www.rofus.nu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity rounded-lg p-2 flex items-center justify-center"
              >
                <img src="/rofus.png" alt="ROFUS" className="h-8" />
              </a>
              <a
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity bg-white rounded-lg p-2 flex items-center justify-center"
              >
                <img src="/gamble.webp" alt="GambleAware" className="h-8" />
              </a>
              <a
                href="https://www.gamcare.org.uk/"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity bg-white rounded-lg p-2 flex items-center justify-center"
              >
                <img src="/gamecare.svg" alt="GamCare" className="h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#6C1EFF]/30 pt-8">
          <p className="text-gray-400 text-sm text-center">
            Denne side er for personer over 18 år. Gambling kan være vanedannende. Spil ansvarligt.
          </p>
          <p className="text-gray-500 text-xs text-center mt-2">
            © 2025 BedstBettingSite.com. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  )
}
