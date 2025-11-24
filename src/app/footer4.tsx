"use client";
import { FaInstagram, FaFacebookF, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Footer4() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#f8e6d2] pt-16 pb-8 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#5A002E] tracking-wide mb-4">
              LYLA BEL
            </h3>
            <p className="text-[#5e4650] text-sm leading-relaxed">
              Maquilleuse professionnelle spécialisée dans les mariages, événements et shooting photo. Révélez votre beauté naturelle avec élégance.
            </p>
            <div className="flex gap-4 text-[#5a011a] text-xl pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4af37] transition duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4af37] transition duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4af37] transition duration-300 hover:scale-110"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#5A002E] text-lg mb-4">Liens Rapides</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/#about-prestations" className="text-[#5e4650] hover:text-[#d4af37] transition text-sm">
                À propos
              </Link>
              <Link href="/#about-prestations" className="text-[#5e4650] hover:text-[#d4af37] transition text-sm">
                Services
              </Link>
              <Link href="/#gallery" className="text-[#5e4650] hover:text-[#d4af37] transition text-sm">
                Galerie
              </Link>
              <Link href="/contact" className="text-[#5e4650] hover:text-[#d4af37] transition text-sm">
                Contact
              </Link>
              <Link href="/gallery" className="text-[#5e4650] hover:text-[#d4af37] transition text-sm">
                Portfolio Complet
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#5A002E] text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:contact@lylabel.fr" className="flex items-center gap-3 text-[#5e4650] hover:text-[#d4af37] transition text-sm group">
                <FaEnvelope className="text-[#d4af37] group-hover:scale-110 transition" />
                <span>contact@lylabel.fr</span>
              </a>
              <a href="tel:+33612345678" className="flex items-center gap-3 text-[#5e4650] hover:text-[#d4af37] transition text-sm group">
                <FaPhone className="text-[#d4af37] group-hover:scale-110 transition" />
                <span>+33 6 12 34 56 78</span>
              </a>
              <p className="flex items-center gap-3 text-[#5e4650] text-sm">
                <FaMapMarkerAlt className="text-[#d4af37]" />
                <span>Paris, France</span>
              </p>
              <p className="text-xs text-[#5e4650]/70 pt-2">
                Réponse sous 24h • Disponible 7j/7
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#5A002E] text-lg mb-4">Newsletter</h4>
            <p className="text-[#5e4650] text-sm">
              Recevez nos actualités, conseils beauté et offres exclusives.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="w-full px-4 py-2.5 rounded-full border-2 border-[#eac8d9] focus:border-[#d4af37] focus:outline-none text-sm bg-white/50 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-gradient-to-r from-[#56001e] to-[#7f012d] text-white rounded-full font-medium text-sm hover:shadow-lg transition-all hover:scale-105"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#5e4650]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#5e4650]/70 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} LYLA BEL Makeup Artist • Tous droits réservés
            </p>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#fddf83] text-black rounded-full font-semibold text-sm hover:shadow-lg transition-all hover:scale-105"
            >
              Réserver Maintenant
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
