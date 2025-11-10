"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/bridal.png", alt: "Maquillage de mariée" },
  { src: "/bridal2.png", alt: "Maquillage glamour" },
  { src: "/image1.png", alt: "Soft glam nude" },
  { src: "/makeup.jpg", alt: "Maquillage soirée" },
  { src: "/makeup2.jpg", alt: "Shooting beauté" },
  { src: "/makeuparti.jpg", alt: "Maquillage naturel" },
];

export default function Gallery() {
  return (
    <section className="min-h-screen bg-[#5a011a] text-[#f8e6d2] py-16 px-8 md:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <span className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mx-auto mb-3 block"></span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-pink-50 tracking-wide drop-shadow">
          Galerie
        </h1>
        <span className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mx-auto mt-3 block"></span>
        <p className="mt-4 max-w-2xl mx-auto md:text-lg opacity-80">
          Découvrez un aperçu de mes réalisations : mariées, shooting, glam,
          soft glam, naturel…
        </p>
      </motion.div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden 
              border-[3px] border-[#eac8d9] shadow-[0_0_15px_rgba(255,192,203,0.35)]
              hover:shadow-[0_0_30px_rgba(255,192,203,0.55)]
              transition-all duration-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={600}
              className="object-cover w-full h-80 transition-all duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5a002ea6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-white font-medium tracking-wide">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <a
          href="/contact"
          className="inline-block px-12 py-3 md:text-lg font-medium tracking-wide rounded-2xl text-white border border-[#fddf83] hover:bg-[#fddf83]/20  shadow-[0_4px_18px_rgba(130,0,60,0.45)] border border-[#e8cfae]/60 transition-all duration-300 hover:scale-105"
        >
          Réserver une prestation
        </a>
      </div>
    </section>
  );
}
