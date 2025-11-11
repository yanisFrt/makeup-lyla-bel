"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { CiCalendar } from "react-icons/ci";

export default function Dashboard() {
  const images = ["makeup.jpg", "image1.png", "logoM.png", "makeup.jpg"];

  return (
    <div>
      <h1 className="hidden md:flex md:text-3xl text-xl font-bold mb-6">
        Bienvenue sur ton tableau de bord
      </h1>

      <div className="h-3/5 flex flex-col space-y-4 md:mt-0 mt-7">
        <div className="flex w-full text-lg justify-between items-center mb-3 gap-2">
          <p>Nouvelle réservation</p>
          <a href="">Voir tout</a>
        </div>
        {[1, 2].map((r) => (
          <div
            key={r}
            className="w-full p-5 rounded-2xl overflow-hidden 
                    border border-[#d4af37] shadow-[0_0_15px_rgba(255,192,203,0.35)]
                    hover:shadow-[0_0_30px_rgba(255,192,203,0.55)]
                    transition-all duration-300 flex items-start gap-4 text-[#f8e6d2]"
          >
            <div className="shrink-0 p-2 mt-4 bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/40">
              <CiCalendar className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="font-medium">Maquillage soirée</p>
                <p>Statut : En attente</p>
                <p>12/11/2025 à 9h00</p>
              </div>
              <a href="">Voir les détails</a>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-6">
        <div className="flex w-full text-lg text-[#f8e6d2] justify-between items-center mb-3 gap-2">
          <p>Galerie</p>
          <a href="">Voir plus</a>
        </div>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
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
      </div>
    </div>
  );
}
