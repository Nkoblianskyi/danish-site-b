"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CompareSites() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B]">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sammenlign bookmakerne</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Se en detaljeret sammenligning af alle betting sites side om side
          </p>

          <motion.button
            className="bg-gradient-to-r from-[#6C1EFF] to-[#00C8FF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#6C1EFF]/50 transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Se fuld sammenligning
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
