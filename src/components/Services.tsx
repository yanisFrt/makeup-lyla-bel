"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaCrown,
  FaStar,
  FaSpa,
  FaHeart,
  FaCamera,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function Services() {
  const tabs = ["Bridal", "Special Occasion", "Makeup Lessons"] as const;
  const [activeTab, setActiveTab] = useState<"Bridal" | "Special Occasion" | "Makeup Lessons">("Bridal");

  const servicesData = {
    Bridal: [
      {
        icon: <FaCrown size={35} />,
        title: "Bridal Luxury Makeup",
        description:
          "Un maquillage de mariée élégant, lumineux et longue tenue pour un look inoubliable le jour J.",
      },
      {
        icon: <FaSpa size={35} />,
        title: "Premium Skin Prep",
        description:
          "Préparation de la peau avec soins haut de gamme pour un teint frais, éclatant et lisse.",
      },
      {
        icon: <FaHeart size={35} />,
        title: "Bridal Trial & Consultation",
        description:
          "Séance d’essai complète pour définir votre style, vos couleurs et votre vision beauté.",
      },
    ],
    "Special Occasion": [
      {
        icon: <FaStar size={35} />,
        title: "Glam Event Makeup",
        description:
          "Un maquillage sophistiqué et glamour pour soirées, cocktails, galas ou célébrations.",
      },
      {
        icon: <FaCamera size={35} />,
        title: "Photoshoot & HD Makeup",
        description:
          "Maquillage optimisé pour caméra, lumières et photos haute définition.",
      },
      {
        icon: <FaSpa size={35} />,
        title: "Express Glow Skin Prep",
        description:
          "Préparation de la peau rapide pour un glow instantané et un rendu impeccable toute la soirée.",
      },
    ],
    "Makeup Lessons": [
      {
        icon: <FaChalkboardTeacher size={35} />,
        title: "Cours Beauté Privé",
        description:
          "Apprenez les techniques adaptées à votre morphologie, votre style et vos produits.",
      },
      {
        icon: <FaStar size={35} />,
        title: "Technique Pro Niveau 1",
        description:
          "Maîtrisez les bases professionnelles : teint, correction, sourcils, harmonies de couleurs.",
      },
      {
        icon: <FaCrown size={35} />,
        title: "Signature Look Masterclass",
        description:
          "Créez votre look signature : élégant, naturel, glam ou sophistiqué avec méthodes pro.",
      },
    ],
  };

  return (
    <section
      id="services"
      className="relative  min-h-screen md:py-32 py-14 px-8 md:px-20 text-white overflow-hidden"
    >
      <div className="absolute  inset-0 bg-gradient-to-b from-rose-950/90 via-rose-950/85 to-rose-950/90 backdrop-blur-3xl" />

      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-rose-950/90 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative text-center mb-16"
      >
        <h2
          className="md:text-5xl text-3xl font-extrabold mb-6 bg-gradient-to-r 
          from-[#d4af37] via-[#fce7b0] to-[#fff7d1]
          bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,.3)]"
        >
          Nos Services
        </h2>
        <p className="text-gray-100 md:text-lg mt-4 md:w-6/12 mx-auto">
          Découvrez notre gamme de services pensés pour sublimer votre beauté
          avec élégance, luxe et raffinement.
        </p>
      </motion.div>

      <div className="relative flex justify-center mb-12">
        <div className="relative flex gap-8 border-b border-[#fcd96d40] w-fit px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4  font-semibold relative transition-colors
                ${
                  activeTab === tab
                    ? "text-[#fcd96d]"
                    : "text-gray-200 hover:text-gray-200"
                }`}
            >
              {tab}

              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[3px] bg-[#fcd96d] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{ width: "60%" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="relative grid md:grid-cols-3 gap-10"
        >
          {servicesData[activeTab].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-[#fcd96d30] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-[#fcd96d]">
                {service.icon}
              </div>
              <h3
                className="font-bold text-xl text-center mb-2 bg-gradient-to-r 
            from-[#d4af37] via-[#fce7b0] to-[#fff7d1]
            bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,.3)]"
              >
                {service.title}
              </h3>
              <p className="text-gray-200 text-center">{service.description}</p>

              <div className="flex justify-center">
                <button className="mt-8 bg-gradient-to-r from-[#D4AF37] to-[#fcd96d] text-black px-7 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
                  Réserver maintenant
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
