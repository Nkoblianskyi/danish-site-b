"use client"

import { motion } from "framer-motion"
import { Gift, Zap, TrendingUp, RotateCcw, Award } from "lucide-react"

const bonusTypes = [
  {
    icon: Gift,
    title: "Velkomstbonus",
    description: "Få ekstra penge når du tilmelder dig og laver din første indbetaling.",
  },
  {
    icon: Zap,
    title: "Free Bet",
    description: "Gratis væddemål uden risiko - perfekt til at teste nye markeder.",
  },
  {
    icon: TrendingUp,
    title: "Odds Boost",
    description: "Forbedrede odds på udvalgte kampe og markeder.",
  },
  {
    icon: RotateCcw,
    title: "Cashback",
    description: "Få en del af dine tab tilbage som kontanter eller bonus.",
  },
  {
    icon: Award,
    title: "Loyalty Program",
    description: "Optjen point og belønninger jo mere du spiller.",
  },
]

export default function BonusTypes() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Typer af bonusser</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Forstå de forskellige bonustyper og find den der passer bedst til din spillestil
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusTypes.map((bonus, index) => (
            <motion.div
              key={bonus.title}
              className="bg-gradient-to-br from-[#1B1B1B] to-[#2A1B3D] rounded-xl p-6 border border-[#6C1EFF]/30 hover:border-[#6C1EFF] transition-all duration-300 hover:shadow-xl hover:shadow-[#6C1EFF]/20 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#6C1EFF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 15 }}
              >
                <bonus.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{bonus.title}</h3>
              <p className="text-gray-300 leading-relaxed">{bonus.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
