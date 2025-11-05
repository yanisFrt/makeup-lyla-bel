"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials3() {
  const testimonials = [
    {
      name: "Camille D.",
      text: "Un maquillage absolument parfait pour mon mariage ! Léger, lumineux et qui a tenu toute la journée. Merci pour ta douceur et ton professionnalisme.",
      image: "/logoM.png",
    },
    {
      name: "Sophie L.",
      text: "J’ai adoré mon expérience ! Le résultat était naturel mais sophistiqué, exactement ce que je voulais. Je me suis sentie sublime.",
      image: "/logoM.png",
    },
    {
      name: "Laura M.",
      text: "Une artiste incroyable ! Elle met tout de suite à l’aise et comprend nos envies. Le rendu photo était juste magnifique.",
      image: "/logoM.png",
    },
  ];

  return (
    <section id="avis" className="py-20 md:py-28 px-6 md:px-20 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#3b1f28] tracking-wide mb-4 sm:mb-6">
          Avis Clients
        </h2>
        <div className="mx-auto w-28 h-1 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e3ca7d] to-[#ffe27b]" />
        <p className="text-[#5e4650] mt-6 max-w-2xl mx-auto text-base leading-relaxed">
          Découvrez les témoignages de nos clientes ravies, qui ont vécu une
          expérience beauté unique et personnalisée.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white border-2 border-[#ecd8b6] rounded-2xl shadow-[0_10px_18px_rgba(59,31,40,0.08)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-[#e3ca7d]">
              <Image
                src={t.image}
                alt={t.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-[#5e4650] text-sm md:text-base leading-relaxed italic mb-6">
              “{t.text}”
            </p>
            <h4 className="text-[#3b1f28] font-medium text-lg">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
