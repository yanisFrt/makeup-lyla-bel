"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GalleryWithReviews() {
  const [images, setImages] = useState<string[]>([]);
  const defaultImages = [
    "/makeup.jpg",
    "/makeup1.jpg",
    "/image1.png",
    "/makeuparti.jpg",
  ];
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/upload", { cache: "no-store" });
        const data = await res.json();

        //  Si data est un tableau et contient des images
        if (Array.isArray(data) && data.length > 0) {
          setImages(data.reverse());
        } else {
          setImages(defaultImages);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des images:", error);
        setImages(defaultImages);
      }
    };

    fetchImages();
  }, []);

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
      className="relative min-h-screen bg-[#5a011a] flex flex-col items-center justify-center text-center py-10 scroll-mt-20"
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

        <div className="grid w-full max-w-7xl px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {images.slice(0, 4).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group flex flex-col items-center w-full"
            >
              <div
                className="w-full aspect-[4/5] relative rounded-3xl overflow-hidden
              border-[3px] border-[#eac8d9] shadow-[0_8px_24px_rgba(212,175,55,0.2)]
              hover:shadow-[0_12px_40px_rgba(212,175,55,0.4)]
              transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A002E]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

        <div className="grid w-full max-w-6xl px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-6 md:p-8 min-h-[180px] flex flex-col
              shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.3)]
              transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 w-full"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#eac8d9] group-hover:ring-[#d4af37] transition-all duration-300">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-[#5A002E] ml-3 text-base md:text-lg">{review.name}</h4>
              </div>
              <p className="text-[#4b0030] text-sm md:text-base leading-relaxed flex-grow">
                {review.text}
              </p>
              <div className="flex gap-1 mt-4 text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
