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

      <div className="h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-serif italic md:text-7xl font-extrabold md:mb-6 mb-14 bg-gradient-to-r from-[#d4af37] via-[#fce7b0] to-[#fff7d1] bg-clip-text text-transparent drop-shadow-lg">
            B
          </h1>
          <h1 className=" font-serif md:text-8xl text-2xl mb-6 bg-gradient-to-r from-[#cdb154] via-[#fce7b0] to-[#fde87c] bg-clip-text text-transparent drop-shadow-lg">
            LYLA BEL
          </h1>
          <h1 className="text-4xl font-serif   mb-6 bg-gradient-to-r from-[#e6ca6e] via-[#fce7b0] to-[#fff7d1] bg-clip-text text-transparent drop-shadow-lg">
            Makeup Artist
          </h1>
          {/* <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-[#D4AF37] to-[#fddf83] text-black px-14 py-3 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-transform"
          >
            <a href="#about">Découvrir</a>
          </motion.button> */}
        </motion.div>
      </div>
    </main>
  );
}
