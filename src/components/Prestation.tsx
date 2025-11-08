"use client";
import { motion } from "framer-motion";

export default function Prestations() {
  const services = [
    {
      title: "Maquillage Mariée",
      desc: "Un maquillage élégant, lumineux et intemporel pour sublimer votre journée unique.",
    },
    {
      title: "Maquillage Soirée",
      desc: "Un look sophistiqué et glamour pour briller lors de vos événements et soirées.",
    },
    {
      title: "Maquillage Shooting",
      desc: "Un maquillage professionnel adapté aux photos et caméras pour un rendu irréprochable.",
    },
  ];

  return (
    <section
      id="prestations"
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
        PRESTATIONS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group border-2 border-[#D4AF37] rounded-2xl p-8 
            text-center shadow-[0_0_20px_rgba(212,175,55,0.25)]
            hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] 
            hover:scale-[1.04] transition-all duration-300 cursor-default"
          >
            <h3
              className="text-2xl font-serif font-bold mb-4 
            text-[#fce7b0] drop-shadow-sm"
            >
              {service.title}
            </h3>
            <p className="text-[#f8e9cf] text-base leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="md:text-xl mt-12 bg-gradient-to-r from-[#D4AF37] to-[#fddf83] 
        text-black px-14 py-3 font-semibold rounded-full shadow-xl 
        hover:shadow-2xl transition"
      >
        Réserver
      </motion.a>
    </section>
  );
}
