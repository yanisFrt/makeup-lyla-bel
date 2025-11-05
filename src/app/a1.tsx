"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./navbar";

export default function A1() {
  return (
    <main className="relative text-white h-screen overflow-hidden bg-[#2b001a]">
      <div className="absolute inset-0">
        <Image
          src="/makeup.jpg"
          alt="Hero bg"
          fill
          className="object-cover object-left"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r
            md:from-[#2b001a]/90 from-[#2b001a]
            md:via-[#5a093f]/65 
            md:via-[#b72c7f]/35
            md:via-[#d99a5c]/15
            to-transparent"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-rose-950" />

      <Navbar />

      <section className="relative z-20 flex h-full items-center justify-between md:px-20 px-12">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-xl"
        >
          <h1
            className="md:text-6xl text-4xl font-extrabold leading-tight mb-6 bg-gradient-to-r 
            from-[#d4af37] via-[#fce7b0] to-[#fff7d1]
            bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,.3)]"
          >
            Un Style Raffiné & Luxueux
          </h1>

          <p className="text-lg font-sans mb-8 md:w-10/12 w-full">
            Une beauté sublimée avec élégance, finesse et un savoir-faire
            inspiré par l’univers du prestige et du glamour.
          </p>

          <a
            href="#services"
            className="bg-gradient-to-r from-[#D4AF37] to-[#fcd96d] text-black px-7 py-3 md:w-fit w-full font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
          >
            Explorer
          </a>
        </motion.div>
      </section>
    </main>
  );
}
