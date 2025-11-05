"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About2() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b 
    from-rose-950 via-rose-900 to-rose-950
    flex items-center justify-center 
    px-8 md:px-24 py-12 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-[280px] h-[380px] md:w-[380px] md:h-[520px]
          border-2 border-[#D4AF37] rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.35)]
          overflow-hidden flex-shrink-0"
        >
          <Image
            src="/about.png"
            alt="À propos portrait"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative text-center lg:text-left"
        >
          <h2
            className="text-4xl md:text-5xl font-serif font-extrabold mb-6
            bg-gradient-to-r from-[#d4af37] via-[#fce7b0] to-[#fff7d1]
            bg-clip-text text-transparent drop-shadow-lg"
          >
            À PROPOS
          </h2>

          <p className="text-[#f8e9cf] text-lg md:text-xl leading-relaxed">
            Depuis toujours, je suis passionnée par l’art, l’esthétique et la
            transformation. Pour moi, le maquillage est une expérience qui
            révèle l’élégance, la confiance et l’unicité de chaque femme.
            <br />
            <br />
            J’accompagne chaque cliente avec douceur, écoute et un sens du
            détail inspiré par l’univers du luxe. Mon approche est artistique et
            raffinée : je crée des looks qui subliment naturellement, sans
            masquer.
            <br />
            <br />
            Mon objectif est que vous vous sentiez belle, confiante et
            rayonnante, tout en restant fidèle à votre essence.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="md:text-xl inline-block mt-8 bg-gradient-to-r from-[#D4AF37] to-[#fddf83]
            text-black px-12 py-3 font-semibold rounded-full shadow-xl
            hover:shadow-2xl transition"
          >
            En savoir plus
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
