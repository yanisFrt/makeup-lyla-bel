"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {
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
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden 
              border-[3px] border-[#eac8d9] shadow-[0_0_15px_rgba(255,192,203,0.35)]
              hover:shadow-[0_0_30px_rgba(255,192,203,0.55)]
              transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Image ${i + 1}`}
              width={500}
              height={600}
              className="object-cover w-full h-80 transition-all duration-500 group-hover:scale-110"
            />

            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5a002ea6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-white font-medium tracking-wide">
                {src.alt}
              </p>
            </div> */}
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
