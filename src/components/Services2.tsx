"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCrown, FaSpa, FaHeart } from "react-icons/fa";

export default function Services2() {
  const tabs = ["Bridal", "Special Occasion", "Makeup Lessons"];
  const [activeTab, setActiveTab] = useState("Bridal");

  const servicesData = {
    Bridal: [
      {
        icon: <FaCrown size={36} className="text-[#dcb172]" />,
        title: "Bridal Luxury Makeup",
        description:
          "Un maquillage de mariée élégant, lumineux et longue tenue pour un look inoubliable le jour J.",
        button: "Réserver maintenant",
      },
      {
        icon: <FaSpa size={36} className="text-[#dcb172]" />,
        title: "Premium Skin Prep",
        description:
          "Préparation de la peau pour un maquillage parfait et durable.",
        button: "Réserver maintenant",
      },
      {
        icon: <FaHeart size={36} className="text-[#dcb172]" />,
        title: "Bridal Trial & Consultation",
        description:
          "Essai maquillage et consultation personnalisée pour le grand jour.",
        button: "Réserver maintenant",
      },
    ],
    "Special Occasion": [],
    "Makeup Lessons": [],
  };

  return (
    <section id="services" className="min-h-screen py-16 px-4 sm:px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#3b1f28] tracking-wide mb-4 sm:mb-8">
          Nos Services
        </h2>
        <div className="mx-auto w-20 sm:w-28 h-1 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e3ca7d] to-[#ffe27b]" />
      </motion.div>

      <div className="flex justify-center mt-4 mb-6 sm:mb-8 overflow-x-auto">
        <div className="flex gap-6 sm:gap-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 sm:pb-4 text-base sm:text-lg font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "text-[#d4af37]"
                  : "text-[#5b3944]/80 hover:text-[#b88a44]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] rounded-full"
                  style={{
                    width: 48,
                    background:
                      "linear-gradient(90deg,#d4af37,#e3ca7d,#ffe27b)",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {servicesData[activeTab].map((service, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                translateY: -6,
                boxShadow: "0 14px 24px rgba(91,24,42,0.08)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-[#fffaf6] rounded-xl flex flex-col justify-between border border-[#ecd8b6] shadow-sm sm:shadow-md p-4 sm:p-6"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-center font-serif text-xl sm:text-2xl text-[#3b1f28] mb-2 sm:mb-4">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-center text-sm sm:text-base text-[#5e4650] mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                )}
                {service.button && (
                  <button className="bg-gradient-to-r from-[#cba6a6] via-[#b58185] to-[#c88c8f] text-white font-semibold py-2 px-6 sm:px-8 rounded-full shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                    {service.button}
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
