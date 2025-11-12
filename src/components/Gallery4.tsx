"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GalleryWithReviews() {
  const images = ["makeup.jpg", "makeup1.jpg", "image1.png", "makeuparti.jpg"];
  const reviews = [
    {
      name: "Sophie L.",
      avatar: "/logoM.png",
      text: "Une expérience incroyable ! Mon maquillage était parfait et j’ai adoré l’écoute et le professionnalisme.",
    },
    {
      name: "Clara M.",
      avatar: "/logoM.png",
      text: "Le maquillage de soirée était sublime. J’ai reçu tellement de compliments !",
    },
    {
      name: "Élodie R.",
      avatar: "/logoM.png",
      text: "Je recommande vivement, le résultat est naturel et élégant, exactement ce que je souhaitais.",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative min-h-screen bg-[#5a011a] flex flex-col items-center justify-center text-center py-10"
    >
      <div className="w-full mx-auto flex flex-col items-center justify-center gap-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mb-2 block"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-pink-50">
            GALERIE
          </h2>
          <span className="w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mt-2 block"></span>
        </motion.div>

        <div className="grid w-10/12 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className="w-60 h-52 relative rounded-2xl overflow-hidden 
              border-[3px] border-[#eac8d9] shadow-[0_0_15px_rgba(255,192,203,0.35)]
              hover:shadow-[0_0_30px_rgba(255,192,203,0.55)]
              transition-all duration-300"
              >
                <Image
                  src={`/${src}`}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/gallery"
            className="inline-block text-lg text-white font-semibold px-8 py-2 rounded-full border border-[#fddf83] hover:bg-[#fddf83]/20 transition"
          >
            Voir toute la galerie
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mb-2 block"></span>
          <h2 className="text-xl md:text-2xl font-bold text-[#fbe3ef] mb-2">
            AVIS CLIENTS
          </h2>
          <span className="w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#c9a063] to-transparent block"></span>
        </motion.div>

        <div className="grid w-2/3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-5 shadow-[0_4px_12px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
            >
              <div className="flex items-center mb-3">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover mr-3"
                />
                <h4 className="font-semibold text-[#5A002E]">{review.name}</h4>
              </div>
              <p className="text-[#4b0030] text-sm leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
