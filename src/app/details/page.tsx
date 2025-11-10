"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Details() {
  return (
    <section className="min-h-screen bg-[#f8f2ec] text-[#4b0030]  py-16 px-8 md:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <span className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mx-auto mb-3 block"></span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5A002E] tracking-wide drop-shadow">
          A propos de LYLA BEL
        </h1>
        <span className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mx-auto mt-3 block"></span>
      </motion.div>

      <div className="w-full md:flex items-center md:gap-10 md:space-y-0 space-y-5">
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative md:w-1/2 mt-8 md:mt-0"
        >
          <Image
            src="/bridal.png"
            alt="Makeup artist en action"
            width={480}
            height={580}
            className="rounded-2xl shadow-lg border border-[#e8cfae]/60"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <p className="leading-relaxed md:text-start text-center md:text-lg">
            Ma mission est de révéler la beauté naturelle de chaque femme, en
            sublimant ses traits avec élégance, précision et un style raffiné.
            Chaque prestation est une expérience personnalisée, pensée pour
            refléter votre personnalité, vos envies et l’instant que vous
            souhaitez rendre inoubliable.
          </p>
          <p className="leading-relaxed md:text-start text-center md:text-lg mt-3">
            Que ce soit pour un mariage, un shooting, un événement ou un
            maquillage glamour, je mets mon expertise au service de votre
            rayonnement.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-serif font-bold text-center text-[#5A002E] mb-8">
          Ma philosophie
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Élégance",
              text: "Un style chic, raffiné et intemporel.",
            },
            {
              title: "Personnalisation",
              text: "Chaque femme est unique, chaque maquillage aussi.",
            },
            {
              title: "Excellence",
              text: "Des produits professionnels et des techniques haut de gamme.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/70 rounded-2xl p-6 shadow-md border border-[#e8cfae]/60 text-center"
            >
              <h3 className="text-xl font-semibold text-[#7f012d] mb-3">
                {item.title}
              </h3>
              <p className="text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="text-center mt-14">
        <a
          href="/gallery"
          className="inline-block px-12 py-3 md:text-lg font-medium tracking-wide rounded-2xl text-white bg-gradient-to-r from-[#56001e] to-[#7f012d] shadow-[0_4px_18px_rgba(130,0,60,0.45)] border border-[#e8cfae]/60 transition-all duration-300 hover:scale-105"
        >
          Découvrir mes prestations
        </a>
      </div>
    </section>
  );
}
