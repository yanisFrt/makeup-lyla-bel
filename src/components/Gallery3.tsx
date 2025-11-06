"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery3() {
  const images = ["makeup.jpg", "makeup1.jpg", "makeup2.jpg"];

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 sm:px-8 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#3b1f28] tracking-wide mb-4 md:mb-6">
          Galerie
        </h2>
        <div className="mx-auto w-20 sm:w-24 h-1 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e3ca7d] to-[#ffe27b]" />
        <p className="text-[#5e4650] mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Découvrez quelques-unes de nos réalisations : des looks élégants,
          lumineux et intemporels, conçus pour sublimer chaque moment unique.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 md:mb-12">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl bg-white border border-[#ecd8b6] shadow-[0_6px_14px_rgba(59,31,40,0.06)] hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="p-0.5 sm:p-0.5 bg-gradient-to-r from-[#d4af37] via-[#e3ca7d] to-[#ffe27b] rounded-2xl">
                <div className="rounded-xl overflow-hidden bg-white">
                  <Image
                    src={`/${src}`}
                    alt={`Maquillage ${i + 1}`}
                    width={600}
                    height={800}
                    className="object-cover w-full h-64 sm:h-72 md:h-80 hover:opacity-90 transition-opacity duration-300"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-[#cba6a6] via-[#b58185] to-[#c88c8f] text-white font-semibold py-2.5 sm:py-3 px-8 sm:px-10 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-[#e3ca7d]/70 text-sm sm:text-base">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
