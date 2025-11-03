"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="w-full py-2 px-20 flex justify-between items-center text-white fixed top-0 left-0 z-40"
    >
      {/* Left */}
      <div className="flex gap-6">
        {/* <a
          href="#"
          className="text-4xl font-extrabold leading-tight mb-6 bg-gradient-to-r 
            from-[#d4af37] via-[#fce7b0] to-[#fff7d1] 
            bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,.3)] italic"
        >
          Home
        </a> */}
        {/*  <a href="#" className="hover:text-rose-300 transition">
          À propos
        </a>
        <a href="#" className="hover:text-rose-300 transition">
          Contact
        </a> */}
      </div>

      {/* Logo */}
      <div className=" font-serif md:text-2xl bg-gradient-to-r from-[#cdb154] via-[#fce7b0] to-[#fde87c] bg-clip-text text-transparent drop-shadow-lg">
        LYLA BEL
      </div>

      {/* Right */}
      <div className="flex gap-6 items-center">
        {/* <a href="#" className="hover:text-rose-300 transition">
          Gallery
        </a>
        <a href="#" className="hover:text-rose-300 transition">
          Services
        </a>
        <button className="bg-white text-rose-900 px-4 py-2 rounded-md font-semibold hover:bg-rose-200 transition">
          Book Now
        </button> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
