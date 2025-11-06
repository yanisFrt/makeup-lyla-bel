"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About3() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-16 px-4 sm:px-6 md:px-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#3b1f28] tracking-wide mb-4 sm:mb-6">
          À propos
        </h2>
        <div className="mx-auto w-20 sm:w-24 h-1 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e3ca7d] to-[#ffe27b]" />
      </motion.div>

      <div className="max-w-5xl w-full flex flex-wrap lg:justify-between  justify-center gap-6 mx-auto  items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-[220px] h-[300px] sm:w-[280px] sm:h-[380px] md:w-[380px] md:h-[520px] rounded-2xl border border-[#e3ca7d] shadow-[0_0_20px_rgba(212,175,55,0.25)] overflow-hidden mx-auto md:mx-0"
        >
          <Image
            src="/about.png"
            alt="À propos portrait"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left lg:w-1/2 w-full"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#3b1f28] mb-3 sm:mb-4 lg:text-start text-center">
            La beauté, une passion et un art
          </h3>

          <p className="text-[#5e4650] lg:text-start text-center text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            Chez <span className="text-[#b88a44] font-semibold">LYLA BEL</span>,
            chaque maquillage est une expérience sur mesure. Notre mission est
            de révéler votre éclat naturel à travers un maquillage élégant,
            raffiné et intemporel.
          </p>

          <p className="text-[#5e4650] lg:text-start text-center text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            Du soin de la peau à la mise en beauté finale, nous créons une
            atmosphère douce et professionnelle pour faire de votre moment
            beauté un instant de bien-être unique.
          </p>
          <div className="flex lg:justify-start justify-center">
            <button className="bg-gradient-to-r from-[#cba6a6] via-[#b58185] to-[#c88c8f] text-white font-semibold py-2 px-6 sm:px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              En savoir plus
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
