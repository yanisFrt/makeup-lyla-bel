"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type_service: "",
    adresse: "",
    date: "",
    hour: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    console.log("Envoi form: ", formData);
  };

  const Icon = ({ name }) => {
    const base = "w-5 h-5 flex-none";
    switch (name) {
      case "user":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "phone":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.07.78 3.03a2 2 0 0 1-.45 2.11L8.91 11.09a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.96.4 1.98.66 3.03.78A2 2 0 0 1 22 16.92z"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "email":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8l8.5 6L20 8"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              stroke="#D4AF37"
              strokeWidth="1.2"
            />
          </svg>
        );
      case "brush":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 20l4-1 11-11 1-4-3 1L6 15z"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 8l4-4"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "map":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 20l-5-2V6l5 2 7-3 5 2v10l-5-2-7 3z"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "calendar":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              stroke="#D4AF37"
              strokeWidth="1.2"
            />
            <path
              d="M16 2v4M8 2v4M3 10h18"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "clock":
        return (
          <svg
            className={base}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" stroke="#D4AF37" strokeWidth="1.2" />
            <path
              d="M12 7v6l4 2"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row px-6 md:px-24 py-14 bg-gradient-to-b from-rose-950 via-rose-900 to-rose-950">
      <motion.div
        className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="w-full bg-black/20 border border-[#D4AF37] rounded-3xl p-8 shadow-[0_0_40px_rgba(212,175,55,0.35)] backdrop-blur-md"
        >
          <h2 className="text-3xl font-serif text-center font-bold mb-6 text-[#fce7b0]">
            Réservation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/** Name **/}
            <div className="flex items-center gap-3 bg-black/30 border border-[#D4AF37] rounded-xl px-4 py-3">
              <Icon name="user" />
              <input
                name="name"
                onChange={handleChange}
                placeholder="Nom"
                className="w-full bg-transparent text-[#fce7b0] placeholder-[#fce7b0]/60 focus:outline-none"
              />
            </div>
            {/** Phone **/}
            <div className="flex items-center gap-3 bg-black/30 border border-[#D4AF37] rounded-xl px-4 py-3">
              <Icon name="phone" />
              <input
                name="phone"
                onChange={handleChange}
                placeholder="Téléphone"
                className="w-full bg-transparent text-[#fce7b0] placeholder-[#fce7b0]/60 focus:outline-none"
              />
            </div>
            {/** Email **/}
            <div className="flex items-center gap-3 bg-black/30 border border-[#D4AF37] rounded-xl px-4 py-3">
              <Icon name="email" />
              <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent text-[#fce7b0] placeholder-[#fce7b0]/60 focus:outline-none"
              />
            </div>
            {/** Type Service **/}
            <div className="flex items-center gap-3 bg-black/30 border border-[#D4AF37] rounded-xl px-4 py-3">
              <Icon name="brush" />
              <input
                name="type_service"
                onChange={handleChange}
                placeholder="Type de service"
                className="w-full bg-transparent text-[#fce7b0] placeholder-[#fce7b0]/60 focus:outline-none"
              />
            </div>
            {/** Adresse **/}
            <div className="flex items-center gap-3 bg-black/30 border border-[#D4AF37] rounded-xl px-4 py-3 md:col-span-2">
              <Icon name="map" />
              <input
                name="adresse"
                onChange={handleChange}
                placeholder="Adresse"
                className="w-full bg-transparent text-[#fce7b0] placeholder-[#fce7b0]/60 focus:outline-none"
              />
            </div>
            {/** Date **/}
            <div className="flex items-center gap-3 bg-black/30 border border-[#D4AF37] rounded-xl px-4 py-3">
              <Icon name="calendar" />
              <input
                name="date"
                type="date"
                onChange={handleChange}
                className="w-full bg-transparent text-[#fce7b0] focus:outline-none"
              />
            </div>
            {/** Hour **/}
            <div className="flex items-center gap-3 bg-black/30 border border-[#D4AF37] rounded-xl px-4 py-3">
              <Icon name="clock" />
              <input
                name="hour"
                type="time"
                onChange={handleChange}
                className="w-full bg-transparent text-[#fce7b0] focus:outline-none"
              />
            </div>
            {/** Message **/}
            <div className="flex items-start gap-3 bg-black/30 border border-[#D4AF37] rounded-xl px-4 py-3 md:col-span-2">
              <textarea
                name="message"
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent text-[#fce7b0] placeholder-[#fce7b0]/60 focus:outline-none resize-none"
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-full md:w-auto md:px-16 py-3 bg-gradient-to-r from-[#D4AF37] to-[#fddf83] text-black font-semibold rounded-full shadow-xl hover:shadow-2xl transition"
          >
            {sending ? "Envoi..." : sent ? "Envoyé ✅" : "Pendre un RDV"}
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center text-[#f8e0d0]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 className="text-3xl font-serif font-bold mb-4">
          Contact pour plus d'information
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          Je suis Makeup Artist spécialisée dans les mariages et événements,
          passionnée par la beauté et le style. Mon objectif est de sublimer
          votre apparence avec élégance et professionnalisme.
        </p>
        <div className="mb-4">
          <span className="font-semibold">Email:</span> contact@makeupartist.com
        </div>
        <div className="mb-4">
          <span className="font-semibold">Téléphone:</span> +33 6 12 34 56 78
        </div>
        <div className="mb-4">
          <span className="font-semibold">Adresse:</span> Paris, France
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#D4AF37] hover:text-[#fddf83] text-2xl transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#D4AF37] hover:text-[#fddf83] text-2xl transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#D4AF37] hover:text-[#fddf83] text-2xl transition"
          >
            <FaTiktok />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
