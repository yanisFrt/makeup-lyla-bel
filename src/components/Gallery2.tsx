"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Gallery2() {
  const images = ["makeup.jpg", "makeup2.jpg", "makeup1.jpg", "makeup.jpg"];

  return (
    <section
      id="gallery"
      className="relative min-h-screen bg-gradient-to-b 
      from-rose-950 via-rose-900 to-rose-950
      px-8 md:px-24 py-12 flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif font-extrabold mb-14 
        bg-gradient-to-r from-[#d4af37] via-[#fce7b0] to-[#fff7d1]
        bg-clip-text text-transparent drop-shadow-lg text-center"
      >
        GALERIE
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-xl border border-[#D4AF37]"
          >
            <Image
              src={`/${src}`}
              alt={`Gallery ${index + 1}`}
              width={500}
              height={650}
              className="object-cover w-full h-72 transition-all duration-500 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-rose-950/60 to-transparent 
            opacity-0 group-hover:opacity-80 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link href="/gallery">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="md:text-xl mt-12 bg-gradient-to-r from-[#D4AF37] to-[#fddf83] 
            text-black px-12 py-3 font-semibold rounded-full shadow-xl 
            hover:shadow-2xl transition"
          >
            Voir plus
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
