"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BsBrush,
  BsCalendarEvent,
  BsClock,
  BsEnvelopeAt,
  BsTelephone,
} from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

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

  const Icon = ({ name, size = 22, color = "#D4AF37" }) => {
    const props = { size, color };

    switch (name) {
      case "user":
        return <LuUserRound {...props} />;
      case "phone":
        return <BsTelephone {...props} />;
      case "email":
        return <BsEnvelopeAt {...props} />;
      case "brush":
        return <BsBrush {...props} />;
      case "map":
        return <FiMapPin {...props} />;
      case "calendar":
        return <BsCalendarEvent {...props} />;
      case "clock":
        return <BsClock {...props} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-6 bg-[#5a011a]">
      <motion.div
        className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0 flex justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="w-full  bg-[#f8e6d2] border-2 border-[#fddf83] rounded-3xl p-8 shadow-[0_0_35px_rgba(255,182,193,0.35)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mb-2 block"></span>
            <h2 className="text-2xl md:text-3xl text-center font-bold text-[#5a011a]">
              Reservation
            </h2>
            <span className="w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#c9a063] to-transparent mt-2 block"></span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3">
              <Icon name="user" />
              <input
                name="name"
                onChange={handleChange}
                placeholder="Nom"
                className="w-full bg-transparent text-[#4b0030] placeholder-[#4b0030]/60 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3">
              <Icon name="phone" />
              <input
                name="phone"
                onChange={handleChange}
                placeholder="Téléphone"
                className="w-full bg-transparent text-[#4b0030] placeholder-[#4b0030]/60 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3">
              <Icon name="email" />
              <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent text-[#4b0030] placeholder-[#4b0030]/60 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3">
              <Icon name="brush" />
              <select
                name="type_service"
                onChange={handleChange}
                className="w-full bg-transparent text-[#4b0030] focus:outline-none"
                defaultValue=""
              >
                <option value="Maquillage Mariée">Maquillage Mariée</option>
                <option value="Maquillage Soirée">Maquillage Soirée</option>
                <option value="Maquillage Naturel">Maquillage Naturel</option>
                <option value="Maquillage Jour">Maquillage Jour</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="flex items-center gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3 md:col-span-2">
              <Icon name="map" />
              <input
                name="adresse"
                onChange={handleChange}
                placeholder="Adresse"
                className="w-full bg-transparent text-[#4b0030] placeholder-[#4b0030]/60 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3">
              <Icon name="calendar" />
              <input
                name="date"
                type="date"
                onChange={handleChange}
                className="w-full bg-transparent text-[#4b0030] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3">
              <Icon name="clock" />
              <input
                name="hour"
                type="time"
                onChange={handleChange}
                className="w-full bg-transparent text-[#4b0030] focus:outline-none"
              />
            </div>

            <div className="flex items-start gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3 md:col-span-2">
              <textarea
                name="message"
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent text-[#4b0030] placeholder-[#4b0030]/60 focus:outline-none resize-none"
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 w-full py-3 rounded-2xl  text-white font-medium tracking-wide bg-gradient-to-r from-[#56001e] to-[#7f012d] shadow-[0_4px_18px_rgba(130,0,60,0.45)] border border-[#e8cfae]/60 transition-all duration-300 hover:scale-100"
          >
            {sending ? "Envoi..." : sent ? "Envoyé ✅" : "Prendre un RDV"}
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center md:items-start items-center text-[#fbe3ef]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 className="text-3xl font-serif font-bold mb-4">Contact</h3>
        <p className="text-lg md:text-start text-center  leading-relaxed mb-6">
          Je suis Makeup Artist spécialisée dans les mariages & événements,
          passionnée par la beauté, l’élégance et le style. Je serai ravie
          d’échanger avec vous pour sublimer votre moment.
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
          <a className="text-[#fbe3ef] hover:text-[#fddf83] text-2xl transition">
            <FaInstagram />
          </a>
          <a className="text-[#fbe3ef] hover:text-[#fddf83] text-2xl transition">
            <FaFacebookF />
          </a>
          <a className="text-[#fbe3ef] hover:text-[#fddf83] text-2xl transition">
            <FaTiktok />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
