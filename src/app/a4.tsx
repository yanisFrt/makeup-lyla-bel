"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./navbar";

export default function A4() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/photomakeup.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-l md:from-pink-900/80 from-pink-900/90 to-black/30" />
      </motion.div>

      <div className="h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className=" font-serif md:text-8xl  mb-6 bg-gradient-to-r from-[#cdb154] via-[#fce7b0] to-[#fde87c] bg-clip-text text-transparent drop-shadow-lg">
            LYLA BEL
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            La beauté est un art. Découvrez l’expérience d’un style raffiné,
            lumineux, et luxueux comme jamais auparavant.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-[#D4AF37] to-[#FFE28A] text-black px-10 py-3 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-transform"
          >
            Explorer
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
