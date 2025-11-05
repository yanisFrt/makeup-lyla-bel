"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function A6() {
  return (
    <div className="min-h-screen relative">
      <nav className="w-full absolute top-0 left-0 z-50 px-4 sm:px-7 md:py-2 py-5">
        <div className="flex items-center  md:justify-between justify-center  max-w-[90%] mx-auto">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-serif italic font-extrabold 
            bg-gradient-to-r from-[#d4af37] via-[#fce7b0] to-[#fbf0bb] 
            bg-clip-text text-transparent drop-shadow-lg"
          >
            B
          </h1>

          <ul className="hidden md:flex font-serif text-[#3b1f28] font-semibold items-center gap-6 lg:gap-10">
            <li className="hover:text-rose-800 cursor-pointer transition">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-rose-800 cursor-pointer transition">
              <a href="#about">Presentation</a>
            </li>
            <li className="hover:text-rose-800 cursor-pointer transition">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="hover:text-rose-800 cursor-pointer transition">
              Avis client
            </li>
            <li className="hover:text-rose-800 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex items-center justify-center h-screen md:pt-16 pt-0 px-4 sm:px-6">
        <div className="relative w-full max-w-[95%] h-[80vh] sm:h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl ">
          <Image
            src="/bridal2.png"
            alt="By Lyly Bel"
            fill
            className="object-cover"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r 
            from-[#2b0f14]/80 
            via-[#8b1f3f]/45 
            via-[#2b0f14]/5 
            to-transparent"
          />

          <div className="absolute inset-0 flex flex-col pb-20 sm:pb-32 items-center justify-end text-center text-white px-4 sm:px-12">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
              Un Style Raffiné & Luxueux
            </h1>
            <p className="mt-2 sm:mt-3 max-w-xs sm:max-w-3xl text-xs sm:text-sm md:text-xl text-white/90">
              Une beauté sublimée avec élégance
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-6 bg-gradient-to-r from-[#cba6a6] via-[#b58185] to-[#c88c8f] text-white font-semibold py-2 sm:py-3 px-6 sm:px-16 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-[#e3ca7d]/70 text-sm sm:text-base"
            >
              <a href="#services">Explorer</a>
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
}
