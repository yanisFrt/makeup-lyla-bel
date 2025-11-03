"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./navbar";

export default function A2() {
  return (
    <main className="relative text-white h-screen overflow-hidden bg-[#2b0f14]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/photomakeup.png"
          alt="Hero background"
          fill
          className="object-cover object-left"
        />

        {/* LUXURY MULTI-LAYER GRADIENT BLEND */}
        <div
          className="absolute inset-0 bg-gradient-to-r 
          from-[#2b0f14]/80 
          via-[#8b1f3f]/45 
          via-[#2b0f14]/5 
          to-transparent"
        />

        <div
          className="absolute inset-0 bg-gradient-to-br 
          from-transparent 
          via-transparent 
          to-[#d4af37]/10 
          mix-blend-overlay"
        />

        {/* Dark vignette on edges for premium effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#00000040_100%)]" />
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <section className="relative z-20 flex h-full items-center md:px-20 px-12">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1
            className="md:text-6xl text-3xl font-extrabold leading-tight mb-6 bg-gradient-to-r 
            from-[#d4af37] via-[#fce7b0] to-[#fff7d1] 
            bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,.3)]"
          >
            Un Style Raffiné & Luxueux
          </h1>

          <p className="text-lg text-white mb-8 leading-relaxed italic md:w-10/12 w-full">
            Une beauté sublimée avec élégance, finesse et un savoir-faire
            inspiré par l’univers du prestige et du glamour.
          </p>

          <button
            className="px-9 py-3 md:w-fit w-full rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#d4af37] via-[#e3ca7d] to-[#ffe27b] 
            shadow-lg shadow-[#d4af37]/30 hover:scale-105 transition duration-300"
          >
            Réserver maintenant
          </button>
        </motion.div>
      </section>
    </main>
  );
}
