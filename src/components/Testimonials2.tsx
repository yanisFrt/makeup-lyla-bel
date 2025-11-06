"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Testimonials2() {
  const testimonials = [
    {
      text: "Un immense merci pour ce maquillage de mariée exceptionnel. Il était lumineux, élégant et a tenu parfaitement toute la journée malgré l’émotion et les larmes. Je me suis sentie plus belle que jamais, tout en restant moi-même.",
      name: "Sabrina L.",
      role: "Mariée 2024",
    },
    {
      text: "Je voulais un look glamour mais naturel pour une soirée importante, et le résultat était juste sublime. Les détails, le teint, les yeux… tout était parfaitement harmonieux. J’ai reçu tellement de compliments !",
      name: "Mélissa K.",
      role: "Soirée & Événement",
    },
    {
      text: "Professionnalisme, douceur et talent… Une expérience incroyable. Pour mon shooting, le maquillage était impeccable sur caméra et en lumière studio. Tu as su sublimer mes traits avec une finesse incroyable.",
      name: "Inès A.",
      role: "Shooting Photo Professionnel",
    },
  ];

  return (
    <section
      id="avis"
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
        AVIS CLIENTS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="border-2 border-[#D4AF37] rounded-2xl p-8 
            text-center shadow-[0_0_20px_rgba(212,175,55,0.25)]
            hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] 
            hover:scale-[1.04] transition-all duration-300 cursor-default"
          >
            <div className="flex justify-center mb-4 text-[#D4AF37]">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-xl" />
              ))}
            </div>

            <p className="text-rose-50 text-center italic mb-6 leading-relaxed">
              “{item.text}”
            </p>

            <h4 className="text-center font-semibold text-rose-100">
              {item.name}
            </h4>
            <p className="text-center text-rose-100 text-sm">{item.role}</p>
          </motion.div>
        ))}
      </div>
      <Link href="/avis">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="md:text-xl mt-12 bg-gradient-to-r from-[#D4AF37] to-[#fddf83] 
            text-black px-12 py-3 font-semibold rounded-full shadow-xl 
            hover:shadow-2xl transition"
        >
          Lire plus
        </motion.button>
      </Link>
    </section>
  );
}
