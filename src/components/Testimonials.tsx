"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sophie L.",
      message:
        "Un maquillage absolument parfait ! J'ai adoré l'attention aux détails et l'élégance du résultat.",
      rating: 5,
    },
    {
      name: "Clara M.",
      message:
        "Professionnelle et douce, elle a su révéler le meilleur de moi-même. Je recommande vivement !",
      rating: 5,
    },
    {
      name: "Isabelle T.",
      message:
        "Une expérience luxueuse et raffinée. Je me suis sentie magnifique du début à la fin.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen md:py-24 py-12 px-8 md:px-20 text-white"
    >
      {/* BACKGROUND GLASS PRUNE */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/90 via-rose-950/85 to-pink-950/95 backdrop-blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="md:text-4xl text-3xl font-extrabold bg-gradient-to-r 
            from-[#d4af37] via-[#fce7b0] to-[#fff7d1]
            bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,.3)]"
          >
            Ce que disent mes clientes
          </h2>
          <p className="text-gray-100 md:text-lg mt-4 md:w-6/12 mx-auto">
            Des avis sincères et authentiques de femmes ayant vécu l'expérience
            de mes prestations.
          </p>
        </motion.div>

        {/* REVIEW CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-[#D4AF37] mr-1" />
                ))}
              </div>
              {/* Message */}
              <p className="text-gray-200 mb-6">{review.message}</p>
              {/* Name */}
              <p className="font-semibold text-[#fcd96d]">{review.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center w-full mt-12">
          <a
            href="/testimonials"
            className="bg-gradient-to-r from-[#D4AF37] to-[#fcd96d] text-black px-14 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
          >
            Lire plus
          </a>
        </div>
      </div>
    </section>
  );
}
