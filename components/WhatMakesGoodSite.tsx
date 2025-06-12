"use client"

import { motion } from "framer-motion"
import { TrendingUp, Smartphone, Shield } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Konkurrencedygtige odds",
    description: "De bedste betting sites tilbyder høje odds og gode marginer for at maksimere dine gevinster.",
  },
  {
    icon: Smartphone,
    title: "Mobilvenligt interface",
    description: "En responsiv og brugervenlig mobilapp eller mobilside er essentiel for moderne betting.",
  },
  {
    icon: Shield,
    title: "Sikkerhed & licens",
    description: "Licenseret af Spillemyndigheden og med stærke sikkerhedsforanstaltninger for at beskytte dine data.",
  },
]

export default function WhatMakesGoodSite() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#1B1B1B] to-[#2A1B3D]">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hvad gør en god betting side?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vi evaluerer betting sites baseret på disse vigtige kriterier
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-[#6C1EFF] to-[#00C8FF] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
