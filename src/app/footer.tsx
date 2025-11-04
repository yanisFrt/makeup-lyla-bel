import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative md:py-8 py-4 md:space-y-0 space-y-2 flex md:flex-row flex-col justify-between items-center bg-gradient-to-t from-rose-950/90 via-rose-950/85 to-pink-950/95 backdrop-blur-xl text-white px-8 md:px-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#fcd96d] to-[#D4AF37]" />

      <div className="relative z-10">
        <p>&copy; {new Date().getFullYear()} LYLA BEL. Tous droits réservés.</p>
      </div>

      <div className="relative z-10 flex space-x-4">
        <a
          href="https://instagram.com"
          target="_blank"
          className="hover:text-[#D4AF37] transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          className="hover:text-[#D4AF37] transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          className="hover:text-[#D4AF37] transition"
        >
          <FaTiktok size={20} />
        </a>
      </div>
    </footer>
  );
}
