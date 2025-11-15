"use client";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer4() {
  return (
    <footer className="bg-[#f8e6d2] py-12 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8"
      >
        <h3 className="font-serif text-3xl text-gray-800 tracking-wide">
          Makeup Artist
        </h3>

        <div className="flex gap-6 text-[#5a011a] text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4af37] transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4af37] transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4af37] transition duration-300"
          >
            <FaTiktok />
          </a>
        </div>

        <div className="w-24 h-[2px] rounded-full bg-gradient-to-r from-[#d4af37] via-[#e3ca7d] to-[#ffe27b]" />

        <p className="text-[#5e4650]/70 text-xs md:text-sm">
          © {new Date().getFullYear()} Makeup by LYLA BEL — Tous droits
          réservés.
        </p>
      </motion.div>
    </footer>
  );
}
