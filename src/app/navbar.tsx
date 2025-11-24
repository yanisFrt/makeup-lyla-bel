"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "#about-prestations" },
    { label: "Services", href: "#about-prestations" },
    { label: "Galerie", href: "#gallery" },
  ];

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#cdb154] via-[#fce7b0] to-[#fde87c] bg-clip-text text-transparent drop-shadow-lg">
                LYLA BEL
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#5a011a] font-medium hover:text-[#d4af37] transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#fce7b0] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#56001e] to-[#7f012d] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Réserver
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-[#5a011a] p-2 hover:bg-[#f8e6d2] rounded-lg transition-colors"
              aria-label="Ouvrir le menu"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide Menu */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-[#f8e6d2] shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center p-6 border-b border-[#5a011a]/10">
                <h2 className="font-serif text-2xl font-bold bg-gradient-to-r from-[#cdb154] via-[#fce7b0] to-[#fde87c] bg-clip-text text-transparent">
                  LYLA BEL
                </h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#5a011a] p-2 hover:bg-[#5a011a]/10 rounded-lg transition-colors"
                  aria-label="Fermer le menu"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 text-[#5a011a] font-medium text-lg hover:bg-[#5a011a] hover:text-white rounded-lg transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-[#56001e] to-[#7f012d] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Réserver maintenant
                    </button>
                  </Link>
                </motion.div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
