"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer2() {
  return (
    <footer className="w-full bg-rose-950 text-white py-10 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-serif font-bold 
          bg-gradient-to-r from-[#d4af37] via-[#fce7b0] to-[#fff7d1]
          bg-clip-text text-transparent drop-shadow-md"
        >
          BY LYLA BEL
        </motion.h3>

        <div className="flex items-center gap-6 text-2xl">
          <motion.a
            href="https://www.instagram.com/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-[#fce7b0] hover:text-[#D4AF37] transition"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-[#fce7b0] hover:text-[#D4AF37] transition"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-[#fce7b0] hover:text-[#D4AF37] transition"
          >
            <FaTiktok />
          </motion.a>

          <motion.a
            href="mailto:contact@lylabel.com"
            whileHover={{ scale: 1.2 }}
            className="text-[#fce7b0] hover:text-[#D4AF37] transition"
          >
            <HiOutlineMail />
          </motion.a>
        </div>

        <div className="w-24 h-[1px] bg-[#D4AF37]/60" />

        <p className="text-sm text-[#fce7b0]/80">
          © {new Date().getFullYear()} By Lyla Bel — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
