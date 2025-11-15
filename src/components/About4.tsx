"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutAndPrestationsSingle() {
  const services = [
    { title: "Maquillage Jour", image: "/logoM.png" },
    { title: "Maquillage Soirée", image: "/bridal2.png" },
    { title: "Maquillage Mariée", image: "/image1.png" },
    { title: "Maquillage Naturel", image: "/makeuparti.jpg" },
  ];

  return (
    <section
      id="about-prestations"
      className="relative lg:h-screen flex flex-col text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:flex-[0.3] flex flex-col items-center justify-center bg-[#f8e6d2] "
      >
        <div className="flex flex-col items-center mt-6 mb-4">
          <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mb-2"></span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5A002E] tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] relative">
            À propos
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/60 to-transparent opacity-20 rounded-md pointer-events-none"></span>
          </h2>
          <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mt-2"></span>
        </div>

        <p className="text-[#4b0030] w-3/4 leading-relaxed px-4 md:text-lg mb-6 font-light">
          Depuis toujours, je suis passionnée par l’art, l’esthétique et la
          transformation. Pour moi, le maquillage n’est pas seulement une mise
          en beauté, mais une expérience qui révèle l’élégance, la confiance et
          l’unicité de chaque femme.
        </p>
        <a
          href="/details"
          className="inline-block mb-6  relative group px-12 py-2.5 md:text-lg font-medium tracking-wide 
          rounded-2xl text-white bg-gradient-to-r from-[#56001e] to-[#7f012d]
          shadow-[0_4px_18px_rgba(130,0,60,0.45)]
          border border-[#e8cfae]/60
          transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_28px_rgba(130,0,60,0.55)] overflow-hidden"
        >
          <span className="relative z-10 ">En savoir plus</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700"></span>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full justify-center  flex bg-white lg:flex-[0.7] lg:mb-0 mb-6 flex-col items-center"
      >
        <div className="flex flex-col items-center my-4">
          <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mb-2"></span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#5A002E] drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] relative">
            Prestations
          </h2>
          <span className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mt-2"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-10/12 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div
                className="w-56 h-52 relative rounded-2xl overflow-hidden 
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
              <h3 className="text-lg font-semibold text-[#5A002E] mt-4">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <a
          href="/contact"
          className="inline-block  relative group md:px-12 px-6 py-3 md:text-lg font-medium tracking-wide 
          rounded-2xl text-white bg-gradient-to-r from-[#56001e] to-[#7f012d]
          shadow-[0_4px_18px_rgba(130,0,60,0.45)]
          border border-[#e8cfae]/60
          transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_28px_rgba(130,0,60,0.55)] overflow-hidden"
        >
          Nous Contacter pour une Réservation
        </a>
      </motion.div>
    </section>
  );
}
