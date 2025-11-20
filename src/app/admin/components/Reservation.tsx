"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  getReservations,
  updateReservationStatus,
} from "@/app/utils/reservationApi";

export default function Reservation() {
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPendingReservations = async () => {
    setLoading(true);
    const data = await getReservations("pending");
    setReservations(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPendingReservations();
  }, []);

  const handleAction = async (id: number, action: "accepted" | "declined") => {
    try {
      await updateReservationStatus(id, action);
      await fetchPendingReservations();
      setReservations((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error("Erreur action:", err);
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <h1 className="md:flex hidden text-3xl font-bold text-[#f8e6d2] mb-4">
        Liste des Réservations
      </h1>

      {loading ? (
        <p className="text-center text-[#d4af37] mt-6">Chargement...</p>
      ) : reservations.length === 0 ? (
        <p className="text-center text-gray-400 mt-6">
          Aucune réservation en attente.
        </p>
      ) : (
        reservations.map((res, i) => (
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
                <p className="text-xl font-semibold mb-1">{res.nom}</p>
                <p className="flex items-center gap-2 text-sm text-[#f8e6d2]/90">
                  <FaPhone /> {res.phone}
                </p>
                {res.email && (
                  <p className="flex items-center gap-2 text-sm text-[#f8e6d2]/90">
                    <FaEnvelope /> {res.email}
                  </p>
                )}
                <p className="flex items-center gap-2 text-sm text-[#f8e6d2]/90">
                  <FaMapMarkerAlt /> {res.adresse}
                </p>
              </div>

              <div className="flex flex-col text-sm mt-3 md:mt-0">
                <p className="flex items-center gap-2">
                  <FaCalendarAlt /> {res.date}
                </p>
                <p className="flex items-center gap-2">
                  <FaClock /> {res.hour}
                </p>
                <p>
                  <span className="font-semibold">Service :</span>{" "}
                  {res.type_service}
                </p>
                {res.other_info && (
                  <p>
                    <span className="font-semibold">Détails :</span>{" "}
                    {res.other_info}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 border-t border-[#d4af37]/40 pt-3">
              <p className="text-sm">
                Statut :{" "}
                <span className="font-semibold text-yellow-300">
                  En attente
                </span>
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleAction(res.id, "accepted")}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#f8e6d2] text-[#5a011a] font-semibold transition"
                >
                  Accepter
                </button>
                <button
                  onClick={() => handleAction(res.id, "declined")}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#5a011a]/20 text-white transition border border-[#d4af37]/80"
                >
                  Refuser
                </button>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}
