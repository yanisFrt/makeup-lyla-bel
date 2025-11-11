"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Reservation() {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      name: "Sarah Ben Ali",
      phone: "+216 22 333 444",
      email: "sarah@gmail.com",
      service: "Maquillage soirée",
      address: "Paris",
      date: "15/11/2025",
      time: "18h00",
      details: "Maquillage léger avec retouche à domicile",
      status: "en attente",
    },
    {
      id: 2,
      name: "Nour Trabelsi",
      phone: "+216 20 555 111",
      email: "nour@example.com",
      service: "Mariage complet",
      address: "Lyon",
      date: "22/11/2025",
      time: "10h00",
      details: "Maquillage léger",
      status: "en attente",
    },
  ]);

  const handleAction = (id: number, action: "accepté" | "refusé") => {
    setReservations((prev) =>
      prev.map((res) => (res.id === id ? { ...res, status: action } : res))
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="md:flex hidden text-3xl font-bold text-[#f8e6d2] mb-4">
        Liste des Réservations
      </h1>

      {reservations.map((res, i) => (
        <motion.div
          key={res.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="border border-[#d4af37] rounded-2xl p-5 bg-[#5a011a]/20 shadow-[0_0_15px_rgba(255,192,203,0.3)] hover:shadow-[0_0_30px_rgba(255,192,203,0.5)] transition-all duration-300 text-[#f8e6d2] md:mt-0 mt-7"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <div>
              <p className="text-xl font-semibold mb-1">{res.name}</p>
              <p className="flex items-center gap-2 text-sm text-[#f8e6d2]/90">
                <FaPhone /> {res.phone}
              </p>
              <p className="flex items-center gap-2 text-sm text-[#f8e6d2]/90">
                <FaEnvelope /> {res.email}
              </p>
              <p className="flex items-center gap-2 text-sm text-[#f8e6d2]/90">
                <FaMapMarkerAlt /> {res.address}
              </p>
            </div>

            <div className="flex flex-col text-sm mt-3 md:mt-0">
              <p className="flex items-center gap-2">
                <FaCalendarAlt /> {res.date}
              </p>
              <p className="flex items-center gap-2">
                <FaClock /> {res.time}
              </p>
              <p>
                <span className="font-semibold">Service :</span> {res.service}
              </p>
              <p>
                <span className="font-semibold">Détails :</span> {res.details}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 border-t border-[#d4af37]/40 pt-3">
            <p className="text-sm">
              Statut :{" "}
              <span
                className={`font-semibold ${
                  res.status === "accepté"
                    ? "text-green-400"
                    : res.status === "refusé"
                    ? "text-red-400"
                    : "text-yellow-300"
                }`}
              >
                {res.status}
              </span>
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => handleAction(res.id, "accepté")}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#f8e6d2]  text-[#5a011a] font-semibold transition"
              >
                Accepter
              </button>
              <button
                onClick={() => handleAction(res.id, "refusé")}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#5a011a]/20  text-white transition border border-[#d4af37]/80"
              >
                Refuser
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
