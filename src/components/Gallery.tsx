"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = ["/makeup1.jpg", "/makeup2.jpg", "/photomakeup.png"];

  return (
    <section
      id="gallery"
      className="relative min-h-[80vh] px-8 md:px-20 text-white overflow-hidden md:py-32 py-12"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/90 via-rose-950/85 to-rose-950/90 backdrop-blur-3xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="md:text-4xl text-3xl font-extrabold bg-gradient-to-r 
            from-[#d4af37] via-[#fce7b0] to-[#fff7d1]
            bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,.3)]"
          >
            Mon Travail
          </h2>
          <p className="text-gray-300 mt-4 md:w-6/12 mx-auto">
            Un aperçu de looks réalisés avec précision, élégance et une touche
            de luxe.
          </p>
        </motion.div>

        <div className="flex justify-center gap-10 flex-wrap mb-12">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/60 cursor-pointer 
              w-[250px] h-[330px] md:w-[280px] md:h-[360px]"
            >
              <Image
                src={src}
                alt={`gallery-${index}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/gallery"
            className="bg-gradient-to-r from-[#D4AF37] to-[#fcd96d] text-black px-14 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
          >
            Voir plus
          </a>
        </div>
      </div>
    </section>
  );
}
