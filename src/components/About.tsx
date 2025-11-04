"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen md:py-32 py-12 px-8 md:px-12 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/90 via-rose-950/85 to-rose-950/90 backdrop-blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/makeuparti.jpg"
            alt="À propos"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2b001ac7] via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2
            className="md:text-4xl text-2xl md:text-start text-center font-extrabold mb-6 bg-gradient-to-r 
            from-[#d4af37] via-[#fce7b0] to-[#fff7d1]
            bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,.3)]"
          >
            À propos de moi
          </h2>

          <p className="text-gray-100 md:text-start text-center leading-relaxed md:text-lg mb-5">
            Depuis toujours, je suis passionnée par l’art, l’esthétique et la
            transformation. Pour moi, le maquillage n’est pas seulement une mise
            en beauté, mais une expérience qui révèle l’élégance, la confiance
            et l’unicité de chaque femme.
          </p>

          <p className="text-gray-100 md:text-start text-center leading-relaxed md:text-lg mb-5">
            J’accompagne chaque cliente avec douceur, écoute et un sens du
            détail inspiré par l’univers du luxe. Mon approche est à la fois
            artistique et raffinée : je crée des looks qui subliment
            naturellement, sans masquer.
          </p>

          <p className="text-gray-100 md:text-start text-center leading-relaxed md:text-lg">
            Mon but est simple : que vous vous sentiez belle, confiante et
            rayonnante, tout en restant fidèle à votre essence.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 font-medium md:text-start text-center italic text-[#fcd96d]"
          >
            Votre maquilleuse, LYLA BEL
          </motion.p>

          <a
            href="#contact"
            className="inline-block mt-10 bg-gradient-to-r from-[#D4AF37] to-[#fcd96d] text-black md:w-fit w-full text-center px-8 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
          >
            En savoir plus
          </a>
        </motion.div>
      </div>
    </section>
  );
}
