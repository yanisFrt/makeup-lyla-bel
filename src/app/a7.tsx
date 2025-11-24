"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function A7() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 -z-10 "
      >
        <Image
          src="/bridal.png"
          alt="Background"
          fill
          priority
          className="object-cover object-[20%_0%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r 
          from-rose-950
          via-rose-950/45 
          via-[#2b0f14]/5 
          to-transparent"
        />
      </motion.div>

      <div className="h-full flex items-center justify-center text-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif md:text-8xl text-5xl mb-6 bg-gradient-to-r from-[#cdb154] via-[#fce7b0] to-[#fde87c] bg-clip-text text-transparent drop-shadow-lg">
            LYLA BEL
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 bg-gradient-to-r from-[#e6ca6e] via-[#fce7b0] to-[#fff7d1] bg-clip-text text-transparent drop-shadow-lg">
            Makeup Artist
          </h2>
          <motion.a
            href="#about-prestations"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#fddf83] text-black px-14 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all group"
          >
            <span className="relative z-10">Découvrir</span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about-prestations"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[#fce7b0] hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            <span className="text-sm font-light">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
