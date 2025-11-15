"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Prestations2() {
  const services = [
    {
      title: "Maquillage Jour",
      image: "/logoM.png",
    },
    {
      title: "Maquillage Soirée",
      image: "/bridal2.png",
    },
    {
      title: "Maquillage Mariée",
      image: "/image1.png",
    },
    {
      title: "Maquillage Naturel",
      image: "/makeuparti.jpg",
    },
  ];

  return (
    <section
      id="prestations"
      className="relative min-h-screen bg-white
      px-8 md:px-24 py-20 flex flex-col items-center text-center"
    >
      <div className="flex flex-col items-center mb-14">
        <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mb-3"></span>

        <h2
          className="text-4xl md:text-5xl font-serif font-bold text-[#5A002E] tracking-wide
          drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] relative"
        >
          PRESTATIONS
          <span
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/60 
          to-transparent opacity-20 rounded-md pointer-events-none"
          ></span>
        </h2>

        <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mt-3"></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div
              className="w-64 h-64 relative rounded-2xl overflow-hidden 
              border-[3px] border-[#eac8d9] shadow-[0_0_15px_rgba(255,192,203,0.35)]
              hover:shadow-[0_0_30px_rgba(255,192,203,0.55)]
              transition-all duration-300"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-[#5A002E] mt-4">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="#contact"
        className="inline-block mt-10 relative group px-12 py-3 text-lg font-medium tracking-wide 
              rounded-2xl text-white bg-gradient-to-r from-[#56001e] to-[#7f012d]
              shadow-[0_4px_18px_rgba(130,0,60,0.45)]
              border border-[#e8cfae]/60
              transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_28px_rgba(130,0,60,0.55)] overflow-hidden"
      >
        Nous Contacter pour une Réservation
      </motion.a>
    </section>
  );
}
